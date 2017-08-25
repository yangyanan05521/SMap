var map = new mapboxgl.Map({
    container: 'map',
    style: scenery,
    zoom: 10,
    center: [108.94704, 34.25943],
    maxZoom: 17,
    minZoom: 5,
    repaint: true,
    pitch: 0
});

// var mySwiper = new Swiper('.swiper-container', {
//         nextButton: '.swiper-button-next',
//         prevButton: '.swiper-button-prev',
//         slidesPerView: 3,
//         speed:300
// })

angular.module("scenery", ['dataService', 'nvd3', 'angular-popups', 'navApp']).controller("sceneryController", ["$scope", "$location", "dsEdit", "$anchorScroll", "$http", function ($scope, $location, dsEdit, $anchorScroll, $http) {
    $scope.locFlag = 'sceneryFlag';
    $scope.startTollGate = '';
    $scope.endTollGate = '';
    $scope.tollGateArr = [];
    $scope.popuArr = [];
    $scope.startFlag = false;
    $scope.endFlag = false;
    $scope.isReadySearchFlag = false;
    $scope.isSearchStartTollGate = true;
    $scope.chooseStartTollGate = false;
    $scope.chooseEndTollGate = false;
    $scope.startPid = '';
    $scope.endPid = '';
    $scope.nowScenery = '大雁塔';
    $scope.nextScenery = '大唐芙蓉园';
    $scope.visible = 'true';
    $scope.selectScenery = "选择景区";
    $scope.searchParameter = {};
    $scope.linksArr = [];
    $scope.specialList = ['餐饮', '住宿', '购物', '停车场', '卫生间', '交通', '公共服务', '出入口'];
    $scope.sceondList1 = ['中餐厅', '异域风味', '地方美食', '快餐', '糕点', '酒吧', '冷饮店', '咖啡/茶'];
    $scope.colorArr = ['rgba(255,114,86,0.8)', 'rgba(255,11486,0.3)', 'rgba(20,120,255,0.3)'];
    $scope.sceneryList = [];

    //勾选范围图层
    $scope.originLayer = {
        "id": "route",
        "type": "line",
        "source": {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": []
                }
            }
        },
        "layout": {
            "line-join": "round",
            "line-cap": "round"

        },
        "paint": {
            "line-color": "rgba(255,114,86)",
            "line-width": 3,
        }
    };
    $scope.originLayerFill = {
        "id": "route",
        "type": "fill",
        "source": {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": []
                }
            }
        },
        "paint": {
            "fill-color": "rgba(255,114,86,0.3)",
        }
    };

    //添加定位点图层
    $scope.testLayer = {
        "id": "pointSelected",
        "type": "symbol",
        'layout':{
            'icon-image':'{icon}',
            'icon-size':2,
            'text-justify': 'center',
            'text-field':'{numMark}'
        },
        'paint':{
            'text-color':"#fff"
        }
    };


    $scope.toggleSearch = {
        display: "none",
        height: "0px"
    };


    //点击显示二级菜单
    var selected = $scope.selected;
    $scope.show = function (index) {
        // console.log(index);
        $scope.selected = index;

    }
    //选择景区
    $scope.toSelected = function (str) {
        $scope.visible = !$scope.visible;

        $scope.changeImg = {
            "background-image": "../img/onlineMap/arrow_active.png"
        }
    }

    // 获取并定位
    $scope.locationProvince = function (str) {
        if (str == 'nowScenery') {
            $scope.selectScenery = '大雁塔';
            map.flyTo({center: [108.9642, 34.21826], zoom: 16});
            $scope.visible = !$scope.visible;
            $scope.getLinksFromStartToEnd();
        } else {
            $scope.selectScenery = '大唐芙蓉园';
            $scope.visible = !$scope.visible;
            map.flyTo({center: [108.97386, 34.21252], zoom: 16});
        }
    };


    // 清空
    $scope.clearLines = function () {
        var geojson = {
            "type": "FeatureCollection",
            "features": []
        };
        for (var i = 0, len = $scope.popuArr.length; i < len; i++) {
            if (map.getSource('route' + i)) {
                map.getSource('route' + i).setData(geojson);
            }
            $scope.popuArr[i].remove();
        }
        $scope.popuArr.length = 0;
    };
    $scope.addLines = function (data, id, index) {
        $scope.geojson = {
            "type": "FeatureCollection",
            "features": []
        };
        var source = {
            "type": "Feature",
            "geometry": data.geoJson,
            propertires: {
                id: 'test'
            }
        };

        $scope.geojson.features.push(source);
        map.getSource(id).setData($scope.geojson);
    };


    //hover显示名称(气泡2)
    var popupName = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });


    // 勾选区域（服务）
    $scope.getLinksFromStartToEnd = function () {
        var bounds = {
            type: 'FeatureCollection',
            features: [],
        };
        $scope.clearLines();

        $http.post('test1.json').then(function (data) {
            $scope.linksArr = data;
            for (var i = 0, len = data.data.length; i < len; i++) {
                if (map.getSource('route' + i)) {
                    $scope.addLines(data.data[i], 'route' + i, i);
                } else {
                    var obj = $scope.originLayer;
                    obj.id = 'route' + i;
                    obj.paint['line-color'] = $scope.colorArr[i];
                    var source = {
                        "type": "geojson",
                        "data": {
                            "type": "Feature",
                            "properties": {},
                            "geometry": data.data[i].geoJson
                        }
                    };
                    $scope.originLayer.source = source;
                    $scope.originLayerFill.source = source;
                    map.addLayer($scope.originLayer);
                    map.addLayer($scope.originLayerFill);
                }
                var pointFeature = turf.lineString(data.data[i].geoJson.coordinates);
                //  console.log(data.data[i].geoJson.coordinates);
                bounds.features.push(pointFeature);
            }
            var bbox = turf.bbox(bounds);
            var v2 = new mapboxgl.LngLatBounds([bbox[0], bbox[1]], [bbox[2], bbox[3]]);
            map.fitBounds(v2, {padding: 50});
        })
    };

    var mySourceData = {
        type: 'FeatureCollection',
        features: []
    };

    var resetMySourceData = function (sourceData) {
        map.getSource('mysouce').setData(sourceData);
    };

    var addMyLayer = function () {
        map.addSource('mysouce', {
            type: 'geojson',
            data: mySourceData
        });
        $scope.testLayer.source = 'mysouce';
        map.addLayer($scope.testLayer);
        //  执行完map.addLayer以后才能添加事件
        map.on('mouseenter', 'pointSelected', function (e) {
            var pid = e.features[0].properties.id;
            var prop;
            for (var i = 0;i<mySourceData.features.length;i++) {
                prop = mySourceData.features[i].properties;
                if (prop.id === pid) {
                    prop.icon = prop['icon-active'];
                } else {
                    prop.icon = prop['icon-normal'];
                }
            }
            resetMySourceData(mySourceData);
            var titleDes = window.document.createElement('div');
            titleDes.innerHTML = '<div class="feePopDeep">'+e.features[0].properties.sceneryName+'</div>' +
                '<div class="tipPopDeep"></div>';
            map.getCanvas().style.cursor = 'pointer';

            $scope.siteLocation = [];
            $scope.siteLocation.push(e.lngLat.lng);
            $scope.siteLocation.push(e.lngLat.lat);

            popupName.setLngLat($scope.siteLocation)
                .setDOMContent(titleDes)
                .addTo(map);

        });

        map.on('mouseleave', 'pointSelected', function () {
            map.getCanvas().style.cursor = '';
            popupName.remove();
        });
    };

    addMyLayer();

    //展示气泡定位(服务)
    $scope.getLocationPopup = function () {
        $http.post('test2Pop.json').then(function (data) {
            var val = data.data.slice(0,3);
            $scope.sceneryList = val;
            locationMap(val);

        })
    };
    //根据数据地图定位
    var locationMap = function (val) {
        var len=mySourceData.features.length;
        mySourceData.features.splice(0,len);
        for (var i = 0; i < val.length; i++) {
            mySourceData.features.push({
                "type": "Feature",
                "properties": {
                    id: 'my-point-' + i,
                    "sceneryName": val[i].sceneryName,
                    "icon": "green",
                    'icon-normal': 'green',
                    'icon-active': 'red',
                    "mark": i,             //if图片编号用参数，用于mousemove事件取
                    'numMark':i+1
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": val[i].pointGeoJson.coordinates
                }
            });
        }
        resetMySourceData(mySourceData);

    }


    //点击查询
    $scope.item = 0;
    $scope.searchScenery = function () {
        if ($scope.item == 0) {
            $scope.item = 1;
        } else {
            $scope.item = 0;
        }
        //  map.flyTo({center:[ 108.9642,34.21826],zoom:16});
        $scope.getLinksFromStartToEnd();
        $scope.getLocationPopup();

    }
    //list click
    $scope.lightLocation=function (index) {
        var listId= 'my-point-'+ index;
        for (var i = 0;i<mySourceData.features.length;i++) {
            prop = mySourceData.features[i].properties;
            if (prop.id === listId) {
                prop.icon = prop['icon-active'];
            } else {
                prop.icon = prop['icon-normal'];
            }
        }
        resetMySourceData(mySourceData);

        var titleDes = window.document.createElement('div');
        var everPoint=mySourceData.features[index];
        titleDes.innerHTML = '<div class="feePopDeep">'+everPoint.properties.sceneryName+'</div>' +
            '<div class="tipPopDeep"></div>';
        map.getCanvas().style.cursor = 'pointer';
        popupName.setLngLat(everPoint.geometry.coordinates)
            .setDOMContent(titleDes)
            .addTo(map);

    }

    //see more
    $scope.moreInfo = function () {
        var btnVal = $('.moreResult').html();
        $('.moreResult').html(btnVal);
        if (btnVal == '查看全部') {
            $http.post('test2Pop.json').then(function (data) {
                $scope.sceneryList = data.data;
                locationMap(data.data);
            })
            $('.moreResult').html('收起');
        } else {
            $scope.getLocationPopup();
            $('.moreResult').html('查看全部');
        }

    }

    //scan big(more) picture
    $scope.arrImg = ["../img/scenery/slide1.jpg", "../img/scenery/slide2.jpg",
        "../img/scenery/slide3.jpg", "../img/scenery/slide4.jpg", "../img/scenery/slide5.jpg", '../img/scenery/slide6.jpg'];
    var arrImg=["../img/scenery/slide1.jpg", "../img/scenery/slide2.jpg",
        "../img/scenery/slide3.jpg", "../img/scenery/slide4.jpg", "../img/scenery/slide5.jpg", '../img/scenery/slide6.jpg'];
    $scope.scanPic = function () {
        $('.swiperPic').show();
        var oImg = $('.centerBlock>ul img');

         $('.disPic>img')[0].src = arrImg[0];


    }
   $scope.goImg = function (index) {
        var oImg = $('.centerBlock>ul img');
        $('.disPic>img')[0].src = oImg[index].src;
        oImg.css({'border':'none','padding':'0px'});
        oImg.eq(index).css('border','2px solid #000');
    }

    $scope.goLeft = function () {
        var oImg = $('.centerBlock>ul img');
        for (var i = 1; i < arrImg.length; i++) {
            var temp = arrImg[arrImg.length - 1];
            arrImg[arrImg.length - 1] = arrImg[arrImg.length - 1 - i];
            arrImg[arrImg.length - 1 - i] = temp;
        }
        for (var i = 0; i < arrImg.length; i++) {
            oImg[i].src = arrImg[i];
        }
        $('.disPic>img')[0].src = arrImg[0];

    }
    $scope.goRight = function () {
        var oImg = $('.centerBlock>ul img');
        for (var i = 0; i < arrImg.length - 1; i++) {
            var temp = arrImg[0];
            arrImg[0] = arrImg[i + 1];
            arrImg[i + 1] = temp;
        }
        for (var i = 0; i < arrImg.length; i++) {
            oImg[i].src = arrImg[i];
        }
        $('.disPic>img')[0].src = arrImg[0];
    }

    $scope.closePic=function(){
        $('.swiperPic').hide();
    }


}]);

