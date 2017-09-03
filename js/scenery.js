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

angular.module("scenery", ['dataService', 'nvd3', 'angular-popups', 'navApp'])
       .controller("sceneryController", ["$scope", "$location", "dsEdit", "$anchorScroll", "$http",
       function ($scope, $location, dsEdit, $anchorScroll, $http) {
    $scope.locFlag = 'sceneryFlag';
    $scope.startTollGate = '';
    $scope.endTollGate = '';
    $scope.keywordsArr = [];
    $scope.popuArr = [];
    $scope.startFlag = false;
    $scope.endFlag = false;
    $scope.isReadySearchFlag = false;
    $scope.isSearchStartTollGate = true;
    $scope.chooseStartTollGate = false;
    $scope.chooseEndTollGate = false;
    $scope.visible = 'true';
    $scope.searchParameter = {};
    $scope.linksArr = [];
    $scope.colorArr = ['rgba(255,114,86,0.8)', 'rgba(255,11486,0.3)', 'rgba(20,120,255,0.3)'];
    $scope.sceneryList = [];
    $scope.resultNum = '';
    $scope.searchWord = '';
    $scope.deName = '';
    $scope.deTime = '';
    $scope.overview = '';
    $scope.sightClass = '';
    $scope.ticket = '';
    $scope.visitTime = '';
    $scope.sightLevel = '';
    $scope.season = '';
    $scope.sightTel = '';
    $scope.noSearchResult = {
        display: 'none'
    };
    $scope.relativeList = {
        display: 'none'
    };
    $scope.resultList = {
        display: 'none'
    }
    $scope.clearInput = function () {
        $('#keywordSearch').val('');
        $scope.noSearchResult = {
            display: 'none'
        }
    };

    //添加定位点图层
    $scope.testLayer = {
        "id": "pointSelected",
        "type": "symbol",
        'layout': {
            'icon-image': '{icon}',
            'icon-size': 1,
            'text-justify': 'center',
            'text-field': '{numMark}'
        },
        'paint': {
            'text-color': "#fff"
        }
    };
    //联想关键词input
    $scope.relativeWords = function () {
        //var reUrl = App.Config.sceneryUrl + "/scenic/search/realtime";
       // $http.post(reUrl,{parm: JSON.stringify({str: $scope.searchWord})}).then(function (data) {var res = data.data.data;})
        if ($scope.searchWord != '') {
            $scope.resultList = {
                display : "none"
            }

            dsEdit.getProduct("scenic/search/realtime", {
                parm: JSON.stringify({
                    str: $scope.searchWord
                })
            }).then(function (data) {
                if (data.length === 0) {
                    $scope.relativeList = {
                        display: "none"
                    }
                    $scope.noSearchResult = {
                        display: "block"
                    }
                } else {
                    $scope.relativeList = {
                        display: 'block'
                    };
                    $scope.noSearchResult = {
                        display: "none"
                    }
                    $scope.keywordsArr = data.slice(0, 10);
                }
            })
        } else {
            $scope.relativeList = {
                display: "none"
            }
            $scope.noSearchResult = {
                display: "none"
            }
        }
    }

    $scope.toSearch = function (data) {
        $scope.searchWord = data.name;
        $scope.relativeList = {
            display: "none"
        }
    }
    //hover显示名称
    var popupName = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    //click显示名称
    var popupClick = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    $scope.changeZoom = function (arg) {
        var nowZoom = map.getZoom();
        if (arg === 'add') {
            map.setZoom(nowZoom + 1);
        } else {
            map.setZoom(nowZoom - 1);
        }
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
        map.on('mouseenter', 'pointSelected', function (e) {
            //var index=e.features[0].properties.mark;
            //$('.searchResult li').eq(index).css({'background':'#4393ff','color':'#fff'}).siblings().css('background','#fff');
            var pid = e.features[0].properties.id;
            var prop;
            for (var i = 0; i < mySourceData.features.length; i++) {
                  prop = mySourceData.features[i].properties;
                  if (prop.id === pid) {
                      prop.icon = prop['icon-active'];
                  } else {
                           prop.icon = prop['icon-normal'];
                       }
            }
            resetMySourceData(mySourceData);
            var titleDes = window.document.createElement('div');
            titleDes.innerHTML = '<div class="feePopDeep">' + e.features[0].properties.sceneryName + '</div>' +
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

    $scope.getLocationPopup = function () {
        if ($scope.searchWord) {
            dsEdit.getProduct("scenic/search/searchall", {
                parm: JSON.stringify({
                    str: $scope.searchWord
                })
            }).then(function (data) {
                if (data) {
                    $scope.resultNum = data.length;
                    if (data.length === 0) {
                        $scope.noSearchResult = {
                            display: 'block'
                        }
                        $scope.relativeList = {
                            display: 'none'
                        }
                        $scope.moreResultlist = {
                            display: 'none'
                        }
                    } else if (data.length <= 3 && data.length > 0) {
                        $scope.moreResultlist = {
                            display: 'none'
                        }
                        $scope.sceneryList = data;
                        locationMap(data);
                    } else {
                        var dataPart = data.slice(0, 3);
                        $scope.sceneryList = dataPart;
                        $scope.moreResultlist = {
                            display: 'block'
                        }
                        locationMap(dataPart);
                    }
                }

            })
            $scope.relativeList = {
                display: 'none'
            }
        }else{
            $scope.noSearchResult = {
                display: "block"
            }
            $scope.resultList = {
                display : "none"
            }
        }
    };

    //to locate
    var locationMap = function (val) {
        var len = mySourceData.features.length;
        var pointArr = [];
        mySourceData.features.splice(0, len);
        for (var i = 0; i < val.length; i++) {
            mySourceData.features.push({
                "type": "Feature",
                "properties": {
                    id: 'my-point-' + i,
                    "sceneryName": val[i].name,
                    "icon": "POI_red",
                    'icon-normal': 'POI_red',
                    'icon-active': 'POI_blue',
                    "mark": i,             //if图片编号用参数，用于mousemove事件取
                    'numMark': i + 1,
                    'poiId': val[i].poi_pid
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": val[i].geometry.coordinates
                }
            });
            pointArr.push(val[i].geometry.coordinates);

        }
        resetMySourceData(mySourceData);
        var mush = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "MultiPoint",
                    "coordinates": pointArr
                }
            }]
        }
        var mbox = turf.bbox(mush);
        var b1 = new mapboxgl.LngLatBounds([mbox[0], mbox[1]], [mbox[2], mbox[3]]);
        map.fitBounds(b1, {padding: 280});

    }
    //click popUp
    map.on('click', 'pointSelected', function (e) {
        var pid = e.features[0].properties.id;
        var prop;
        for (var i = 0; i < mySourceData.features.length; i++) {
            prop = mySourceData.features[i].properties;
            if (prop.id === pid) {
                prop.icon = prop['icon-active'];
            } else {
                prop.icon = prop['icon-normal'];
            }
        }
        resetMySourceData(mySourceData);
        var titleDes = window.document.createElement('div');
        titleDes.innerHTML = '<div class="feePopDeep">' + e.features[0].properties.sceneryName + '</div>' +
            '<div class="tipPopDeep"></div>';
        $scope.siteLocation = [];
        $scope.siteLocation.push(e.lngLat.lng);
        $scope.siteLocation.push(e.lngLat.lat);

        map.getCanvas().style.cursor = 'pointer';
        popupClick.setLngLat($scope.siteLocation)
            .setDOMContent(titleDes)
            .addTo(map);

        var poiId = e.features[0].properties.poiId;
        detailsDis( poiId );


    })

    //click list
    $scope.lightLocation = function (index,item) {
        var listId = 'my-point-' + index;
        for (var i = 0; i < mySourceData.features.length; i++) {
            prop = mySourceData.features[i].properties;
            if (prop.id === listId) {
                prop.icon = prop['icon-active'];
            } else {
                prop.icon = prop['icon-normal'];
            }
        }
        resetMySourceData(mySourceData);
        var titleDes = window.document.createElement('div');
        var everPoint = mySourceData.features[index];
        titleDes.innerHTML = '<div class="feePopDeep">' + everPoint.properties.sceneryName + '</div>' +
            '<div class="tipPopDeep"></div>';
        map.getCanvas().style.cursor = 'pointer';
        popupClick.setLngLat(everPoint.geometry.coordinates)
            .setDOMContent(titleDes)
            .addTo(map);

        var poiId = item.poi_pid ;
        detailsDis( poiId );
    }

    //to details
     var detailsDis = function( poiId ) {
         dsEdit.getProduct("scenic/search/poidetail", {
             parm: JSON.stringify({
                 poi_pid: poiId
             })
         }).then(function (data) {
             $scope.deName = data[0].name;
             $scope.deTime = data[0].open_hours;
             $scope.overview = data[0].overview;
             $scope.sightClass = data[0].sight_class;
             $scope.ticket = data[0].ticket_price;
             $scope.visitTime = data[0].time_for_visits;
             $scope.sightLevel = data[0].sight_level;
             $scope.season = data[0].seasons;
             $scope.sightTel = data[0].telephone;
             moreContent(data[0].overview);
         })
         $('.introduce').show();
         $('.searchResult').hide();

     }


    //to search
    $scope.searchScenery = function () {
        $scope.resultList = {
            display: 'block'
        }
        $scope.getLocationPopup();
    }

    $scope.GoSearch = function (event) {
        var e = window.event || event ;
        if(e.keyCode == 13){
            $scope.resultList = {
                display: 'block'
            }
            $scope.getLocationPopup();
        }
        if(e.keyCode == 8){
            $scope.resultList = {
                display: 'none'
            }
        }
    };


    //mousemove list
    $scope.lightMark = function (index) {
        var listId = 'my-point-' + index;
        for (var i = 0; i < mySourceData.features.length; i++) {
            prop = mySourceData.features[i].properties;
            if (prop.id === listId) {
                prop.icon = prop['icon-active'];
            } else {
                prop.icon = prop['icon-normal'];
            }
        }
        resetMySourceData(mySourceData);

        var titleDes = window.document.createElement('div');
        var everPoint = mySourceData.features[index];
        titleDes.innerHTML = '<div class="feePopDeep">' + everPoint.properties.sceneryName + '</div>' +
            '<div class="tipPopDeep"></div>';
        map.getCanvas().style.cursor = 'pointer';
        popupName.setLngLat(everPoint.geometry.coordinates)
            .setDOMContent(titleDes)
            .addTo(map);

    }

    //mouseleave list
    $scope.removeMark = function (index) {
        popupName.remove(index);
    }


    //see more
    $scope.moreInfo = function () {
        var btnVal = $('.allResult').html();
        $('.allResult').html(btnVal);
        if (btnVal == '查看全部搜索结果') {
            dsEdit.getProduct("scenic/search/searchall", {
                parm: JSON.stringify({
                    str: $scope.searchWord
                })
            }).then(function (data) {
                $scope.sceneryList = data;
                locationMap(data);
            })
            $('.allResult').html('已展开全部搜索结果');
            $('.moreResult').css('color', '#1478ff');
        } else {
            $scope.getLocationPopup();
            $('.allResult').html('查看全部搜索结果');
            $('.moreResult').css('color', '#999');
        }

    }

    //scan big(more) picture
    $scope.arrImg = ["../img/scenery/slide1.jpg", "../img/scenery/slide2.jpg",
        "../img/scenery/slide3.jpg", "../img/scenery/slide4.jpg", "../img/scenery/slide5.jpg", '../img/scenery/slide6.jpg',
        "../img/scenery/slide7.jpg", "../img/scenery/slide8.jpg", "../img/scenery/slide9.jpg", '../img/scenery/slide10.jpg'];
    var arrImg = ["../img/scenery/slide1.jpg", "../img/scenery/slide2.jpg",
        "../img/scenery/slide3.jpg", "../img/scenery/slide4.jpg", "../img/scenery/slide5.jpg", '../img/scenery/slide6.jpg',
        "../img/scenery/slide7.jpg", "../img/scenery/slide8.jpg", "../img/scenery/slide9.jpg", '../img/scenery/slide10.jpg'];
    $scope.scanPic = function (event) {
        var e = window.event || event;
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
        $('.swiperPic').show();
        var oImg = $('.centerBlock>ul img');
        $('.disPic>img')[0].src = arrImg[0];

    }
    $scope.goImg = function (index) {
        var oImg = $('.centerBlock>ul img');
        $('.disPic>img')[0].src = oImg[index].src;
        oImg.css({'border': 'none', 'padding': '0px'});
        oImg.eq(index).css({'border': '4px solid #1478ff', 'box-sizing': 'border-box'});
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

    $scope.closePic = function () {
        $('.swiperPic').hide();
    }
    $(document).click(function (event) {
        var _con = $('.centerBlock');
        if (!_con.is(event.target) && _con.has(event.target).length === 0) {
            $('.swiperPic').hide();
        }
    });

    //to resultList
    $scope.toResultlist = function () {
        $('.introduce').hide();
        $('.searchResult').show();
        popupClick.remove();

    }

    //see moreContent
    var moreContent = function(str){
        var len = 72 ;
        var content = document.getElementById('detailIntro');
        var aTag = document.getElementById('allCnt');
        var contentLen = str.length;
        if(contentLen > len){
            content.innerHTML = str.substring(0,len)+'...';
            aTag.innerHTML = '[全文]';
            aTag.style.color = '#1478FF';
            aTag.href = "javascript:void(0)";
            aTag.onclick = function(){
                if(aTag.innerHTML.indexOf("全文")>0){
                    content.innerHTML = str;
                    aTag.innerHTML = "收起";
                }else{
                    aTag.innerHTML = '[全文]';
                    content.innerHTML = str.substring(0,len)+'...';
                }
            }
        }



    }



}]);

