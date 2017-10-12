var map = new mapboxgl.Map({
    container: 'map',
    style: trafficLimitedLayer,
    zoom: 10,
    center: [116.38402, 39.96261],
    maxZoom: 17,
    minZoom: 5,
    repaint: true,
    pitch: 0
});

angular.module("trafficLimited", ["dataService", "navApp"])
    .controller("trafficLimitedController", ["$scope", "$location", "dsEdit", "$timeout", "$http", "$anchorScroll", function ($scope, $location, dsEdit, $timeout, $http, $anchorScroll) {
        $scope.locFlag = 'onlineUseFlag';
        $scope.provinceArr = province;
        $scope.nowProvince = '北京市';
        $scope.searchWord = '';
        $scope.captureArr = ['A', 'B', 'C', 'F', 'G', 'H', 'J', 'L', 'N', 'Q', 'S', 'T', 'X', 'Y', 'Z'];
        $scope.searchParameter = {};
        $scope.colorArr = ['rgba(255,114,86,0.8)', 'rgba(255,11486,0.3)', 'rgba(20,120,255,0.3)'];
        $scope.initArea = '';
        $scope.initPrinciple = '';
        $scope.initCar = '';
        $scope.noSearchResult = {
            display: 'none'
        }
        $scope.resultStyle = {
            display: 'none'
        }
        $scope.lineLayer = {
            "id": 'line_Limited_Layer',
            "type": 'line',
            "source": "platelimit",
            'source-layer': 'platelimit_line',
            "minzoom": 5,
            "maxzoom": 17.1,
            "layout": {
                "line-join": "round",
                "visibility": "visible",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#FF0000",
                "line-width": {
                    "stops": [[6, 1.5], [20, 10]],
                    "base": 1.2
                },

            },

        };
        $scope.polygonLayer = {
            "id": 'polygon_Limited_Layer',
            "type": 'fill',
            "source": "platelimit",
            'source-layer': 'platelimit_polygon',
            "minzoom": 5,
            "maxzoom": 17.1,
            'layout': {
                /*'background-color': '#00FF00'*/
            },
            'paint': {
                'fill-color': '#FF0000',
                'fill-opacity': 0.2,
                /* 'fill-outline-color': '#ffff00',
                 'fill-antialias': true,*/
            }

        };

        $scope.limitKind = [
            {
                label: 'number',
                kind: 'No.',
                isLimit: false,
            }, {
                label: 'field',
                kind: '外地车辆',
                isLimit: false,
            }, {
                label: 'carKind',
                kind: '车型',
                isLimit: false,
                children: [
                    {
                        kind: '客车',
                        label: 'bus',
                        flag: false,
                    },
                    {
                        kind: '卡车',
                        label: 'truck',
                        flag: false,
                    },
                ],
                childrenIsOpen: false,

            }, {
                label: 'energy',
                kind: '能源',
                isLimit: false,
                children: [
                    {
                        kind: '燃油',
                        label: 'gasoline',
                        flag: false,
                    },
                    {
                        kind: '纯电',
                        label: 'electric',
                        flag: false,
                    },
                    {
                        kind: '油电',
                        label: 'both',
                        flag: false,
                    },
                ],
                childrenIsOpen: false,
            }, {
                label: 'card',
                kind: '车牌',
                isLimit: false,
                children: [
                    {
                        kind: '蓝牌',
                        label: 'blue',
                        flag: false,
                    },
                    {
                        kind: '黄牌',
                        label: 'yellow',
                        flag: false,
                    },
                    /*  {
                          kind: '黑牌',
                          label: 'black',
                          flag: false,
                      },
                      {
                          kind: '白牌',
                          label: 'white',
                          flag: false,
                      },
                      {
                          kind: '绿牌',
                          label: 'green',
                          flag: false,
                      },*/
                ],
                childrenIsOpen: false,
            }, {
                label: 'other',
                kind: '其他',
                isLimit: true,
            },
        ];
        $scope.showChoosedCity = function (arg) {
            if (arg === 'nowCity') {
                $scope.nowCity = {
                    display: 'none'
                };
                $scope.choosedCity = {
                    display: 'block'
                };
                $scope.cityList = {
                    display: 'block'
                }
                $('.limitToday').hide();
                $scope.limitDayList = {
                    display: 'none'
                }

            } else {
                $scope.nowCity = {
                    display: 'block'
                };
                $scope.choosedCity = {
                    display: 'none'
                };
                $scope.cityList = {
                    display: 'none'
                };
                $('.limitToday').show();
            }
        };
        $scope.changeCondition = function (index) {
            if ($scope.limitKind[index].children) { // 有子元素时 函数功能为展开折叠子元素
                $scope.limitKind[index].childrenIsOpen = !$scope.limitKind[index].childrenIsOpen;
            } else { // 无子元素时 函数功能为选择筛选条件
                $scope.limitKind[index].isLimit = !$scope.limitKind[index].isLimit;
                $scope.contactParameter();
            }
        };
        $scope.changeDetailKind = function (data) {
            for (var i = 0; i < $scope.limitKind.length; i++) {
                if ($scope.limitKind[i].children) {
                    for (var j = 0; j < $scope.limitKind[i].children.length; j++) {
                        if ($scope.limitKind[i].children[j].kind === data) {
                            $scope.limitKind[i].children[j].flag = !$scope.limitKind[i].children[j].flag;
                        }
                    }
                    //判断是否有子元素被选中
                    var childrenIsSelectFlag = 0;
                    for (var k = 0; k < $scope.limitKind[i].children.length; k++) {
                        if ($scope.limitKind[i].children[k].flag) {
                            childrenIsSelectFlag = Number($scope.limitKind[i].children[k].flag);
                        }
                    }
                    if (childrenIsSelectFlag === 0) {
                        $scope.limitKind[i].isLimit = false;
                    } else {
                        $scope.limitKind[i].isLimit = true;

                    }
                }
            }
            $scope.contactParameter();
        };
        $scope.getSearchParameter = function () {
            var parameter = {
                type: [],
                parm: [],
            };
            var tmp1;
            var tmp2;
            var tmp;
            for (var i = 0; i < $scope.limitKind.length; i++) {
                if ($scope.limitKind[i].isLimit) {
                    parameter.type.push(i + 1);
                    if (!$scope.limitKind[i].children) {
                        parameter.parm.push(0);
                    }
                }
                if ($scope.limitKind[i].children) {
                    for (var j = 0; j < $scope.limitKind[i].children.length; j++) {
                        if ($scope.limitKind[i].children[j].flag) {
                            tmp1 = i + 1;
                            tmp2 = j + 1;
                            tmp = tmp1 + '-' + tmp2;
                            parameter.parm.push(tmp);
                        }
                    }
                }
            }
            return parameter;

        };
        $scope.contactParameter = function () {
            var tmpParam = $scope.getSearchParameter();
            if (tmpParam.type.length === 0) {
                App.Config.platelimit = 'type=0&parm=0';
            } else {
                App.Config.platelimit = 'type=' + tmpParam.type + '&parm=' + tmpParam.parm;
            }
            map.style.sourceCaches.platelimit._source.tiles[0] = 'http://fastmap.navinfo.com/smap_p/plateres/web/condition/' +
                '{z}/{x}/{y}?' + App.Config.platelimit;
            map.removeLayer('polygon_Limited_Layer');
            map.removeLayer('line_Limited_Layer');
            $timeout(function () {
                map.addLayer($scope.polygonLayer);
                map.addLayer($scope.lineLayer);
            }, 0);

        };
        $scope.locationProvince = function (data) {
            //此处注释掉是因为其他限制使用其他省份数据
            /* $scope.provincePid = data.id;
             $scope.nowProvince = data.name;
             map.flyTo({center:[ data.point.x, data.point.y]});*/
        };
        $scope.goCapture = function (data) {
            var local = 'capture' + data;
            $location.hash(local);
            $anchorScroll();
        };
        /*    map.on('click','polygon_Limited_Layer',function (e) {
                for(var i = 0; i < e.features.length; i++){
                    var group_id = decodeURIComponent(e.features[i].properties.group_id);
                    var description = decodeURIComponent(e.features[i].properties.platelimit_desc);
                     // console.log(group_id);
                    console.log('%c No.'+i ,"color:orange;font-weight:bold",description);
                }
            });
            map.on('click','line_Limited_Layer',function (e) {
                for(var i = 0; i < e.features.length; i++){
                    var group_id = decodeURIComponent(e.features[i].properties.group_id);
                    var description = decodeURIComponent(e.features[i].properties.platelimit_desc);
                     // console.log(group_id);
                    console.log('%c No.'+i ,"color:green;font-weight:bold",description);
                }
            });

            map.on('click','polygon_Limited_Layer',function (e) {
                var description = '';
                for(var i = 0; i < e.features.length; i++){
                    var group_id = decodeURIComponent(e.features[i].properties.group_id);
                   description += decodeURIComponent(e.features[i].properties.platelimit_desc);
                    // console.log(group_id);
                    console.log('%c No.'+i ,"color:orange;font-weight:bold",description);
                }
                var loc = [];
                var div = window.document.createElement('div');
                /!*  console.log(data.features[0].properties.construction_time);*!/
                div.innerHTML = '<div style="text-align: center">'+ description+'</div>';
                new mapboxgl.Popup()
                    .setLngLat([e.lngLat.lng,e.lngLat.lat])
                    .setDOMContent(div)
                    .addTo(map);
            });
            map.on('click','line_Limited_Layer',function (e) {
                   var description = decodeURIComponent(e.features[0].properties.platelimit_desc);
                    // console.log(group_id);
                var div = window.document.createElement('div');
                /!*  console.log(data.features[0].properties.construction_time);*!/
                div.innerHTML = '<div style="text-align: center">'+ description+'</div>';
                new mapboxgl.Popup()
                    .setLngLat([e.lngLat.lng,e.lngLat.lat])
                    .setDOMContent(div)
                    .addTo(map);
            });*/

        $scope.changeZoom = function (arg) {
            var nowZoom = map.getZoom();
            if (arg === 'add') {
                map.setZoom(nowZoom + 1);
            } else {
                map.setZoom(nowZoom - 1);
            }
        };

        //定义线图层
        $scope.originLayer = {
            "id": "route",
            "type": "line",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": []
                    }
                }
            },
            "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(255,114,86)",
                "line-width": 3
            }
        };

        //定义面图层
        $scope.polygonNewLayer = {
            "id": "plate",
            "type": "fill",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": []
                    }
                }
            },
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(255, 116, 116, .3)",
                'fill-outline-color': '#ff7474'
            }
        };


        //数据默认第一条定位
        $scope.firstLocation = function (firstNo) {
            $http.post('http://fastmap.navinfo.com/smap_p/plateres/web/cond/td/geo?no=' + firstNo).then(function (data) {
                $('.resultList ul').eq(0).attr('class','ulActive').siblings('ul').attr('class','ulNormal');
                var geoArr = [];
                var val = data.data.data;
                for (var i = 0, len = val.platelimit.length; i < len; i++) {
                    geoArr.push(val.platelimit[i].coordinates);
                }

                var bounds = {
                    type: 'FeatureCollection',
                    features: [],
                };

                if (val.platelimit[0].type === "LineString") {
                    for (var i = 0, len = geoArr.length; i < len; i++) {
                        var source = {
                            "type": "Feature",
                            "geometry": {
                                "type": "LineString",
                                "coordinates": geoArr[i]
                            },
                        };
                        var pointFeature = turf.lineString(geoArr[i]);
                        bounds.features.push(source);
                    }
                    var obj = $scope.originLayer;
                    obj.paint['line-color'] = '#ff7474';
                    $scope.originLayer.source.data = bounds;
                    if (!map.getSource('plate') && !map.getSource('route')) {
                        map.addLayer($scope.originLayer);
                    } else if (map.getSource('route') && map.getSource('route')._data.features.length !== 0) {
                        $scope.clearLines();
                        map.getSource('route').setData(bounds);
                    } else if (map.getSource('plate') && map.getSource('plate')._data.features.length !== 0) {
                        $scope.clearPolygon();
                        if(!map.getSource('route')){
                            map.addLayer($scope.originLayer);
                        }else{
                            map.getSource('route').setData(bounds);
                        }
                    } else {
                        $scope.clearLines();
                        $scope.clearPolygon();
                        map.getSource('route').setData(bounds);
                    }
                    var bbox = turf.bbox(bounds);
                    var v2 = new mapboxgl.LngLatBounds([bbox[0], bbox[1]], [bbox[2], bbox[3]]);
                    map.fitBounds(v2, {padding: 180});
                } else {

                    for (var i = 0, len = geoArr.length; i < len; i++) {
                        var source = {
                            "type": "Feature",
                            "geometry": {
                                "type": "Polygon",
                                "coordinates": geoArr[i]
                            },
                        };
                        var pointFeature = turf.lineString(geoArr[i]);
                        bounds.features.push(source);
                    }
                    var obj = $scope.polygonNewLayer;
                    obj.paint['fill-color'] = "rgba(255, 116, 116, .5)";
                    $scope.polygonNewLayer.source.data = bounds;
                    if (!map.getSource('plate') && !map.getSource('route')) {
                        map.addLayer($scope.polygonNewLayer);
                    } else if (map.getSource('route') && map.getSource('route')._data.features.length !== 0) {
                        $scope.clearLines();
                        if(!map.getSource('plate')){
                            map.addLayer($scope.polygonNewLayer);
                        }else{
                            map.getSource('plate').setData(bounds);
                        }
                    } else if (map.getSource('plate') && map.getSource('plate')._data.features.length !== 0) {
                        $scope.clearPolygon();
                        map.getSource('plate').setData(bounds);
                    } else {
                        $scope.clearLines();
                        $scope.clearPolygon();
                        map.getSource('plate').setData(bounds);
                    }
                    var bbox = turf.bbox(bounds);
                    var v2 = new mapboxgl.LngLatBounds([bbox[0], bbox[1]], [bbox[2], bbox[3]]);
                    map.fitBounds(v2, {padding: 180});
                }
            })
        }
        var pageParm = 1;
        //分类搜索
        $scope.searchList = [];
        $scope.typeParam = '1';
        $scope.sumCount = '';
        $scope.searchByClass = function (str) {
            pageParm = 1;
            $scope.typeParam = str;
            $scope.resultStyle = {
                display: 'block'
            }
            $('.testLimited li a').removeClass('selected');
            $(event.target).addClass('selected');
            if($scope.searchWord != '') {
                $http.post('http://fastmap.navinfo.com/smap_p/plateres/web/cond/geo/count?type=' + str + '&cond=' + $scope.searchWord).then(function (data) {
                    $scope.sumCount = data.data.data.count;
                    if ($scope.sumCount == 0) {
                        $scope.resultStyle = {
                            display: 'none'
                        }
                        $scope.noSearchResult = {
                            display: 'block'
                        }
                    } else if ($scope.sumCount > 20) {
                        $scope.noSearchResult = {
                            display: 'none'
                        }
                        $scope.resultStyle = {
                            display: 'block'
                        }
                        $('#content .resultList .MoreChange').css({'cursor': 'pointer', color: '#1478ff'});
                        $('.MoreChange').html('<span class="activeBorder">查看全部搜索结果[&nbsp;共' + $scope.sumCount + '条&nbsp;]</span>');
                    } else if ($scope.sumCount > 0 && $scope.sumCount <= 20) {
                        $scope.noSearchResult = {
                            display: 'none'
                        }
                        $scope.resultStyle = {
                            display: 'block'
                        }
                        $('#content .resultList .MoreChange').css({'cursor': 'default', color: "#6d788a"});
                        $('.MoreChange').html('已显示全部结果');

                    }
                })
                $http.post('http://fastmap.navinfo.com/smap_p/plateres/web/cond/geo?pageNum=1&pageSize=20&type=' + str + '&cond=' + $scope.searchWord).then(function (data) {
                    $scope.searchList = [];
                    var val = data.data.data;
                    for (var i = 0; i < val.platelimit.length; i++) {
                        $scope.searchList.push(val.platelimit[i]);
                    }
                    if ($scope.searchList[0]) {
                        var firstNo = $scope.searchList[0].no;
                        $scope.firstLocation(firstNo);
                    }

                })
            }else{
                $scope.resultStyle = {
                    display: 'none'
                }
            }
        }

        //  分页查看更多
        $scope.loadData = function () {
            pageParm = pageParm + 1;
            // console.log(pageParm);
            var mostPage = Math.ceil($scope.sumCount / 20);
            // console.log(mostPage);
            if (pageParm > mostPage) {
                return;
            }
            if ($scope.sumCount / 20 > 2) {
                if (pageParm == mostPage) {
                    $('.MoreChange').html('已显示全部结果');
                    $('#content .resultList .MoreChange').css({'cursor': 'default', color: "#6d788a"});
                } else {
                    $('.MoreChange').html('<span class="activeBorder">查看更多</span>');
                }
            } else {
                $('.MoreChange').html('已显示全部结果');
                $('#content .resultList .MoreChange').css({'cursor': 'default', color: "#6d788a"});
            }

            $http.post('http://fastmap.navinfo.com/smap_p/plateres/web/cond/geo?pageNum=' + pageParm + '&pageSize=20&type=' + $scope.typeParam + '&cond=' + $scope.searchWord).then(function (data) {
                var val = data.data.data;
                for (var j = 0; j < val.platelimit.length; j++) {
                    $scope.searchList.push(val.platelimit[j]);
                }
            })

        }

        $scope.clearInput = function () {
            $scope.searchWord = '';
            $('#keywordSearch').focus();
            $scope.noSearchResult = {
                display: 'none'
            }
            $scope.resultStyle = {
                display: 'none'
            }
            if (map.getSource('route') && map.getSource('route')._data.features.length !== 0) {
                $scope.clearLines();
            } else  {
                $scope.clearPolygon();
            }
        };

        //点击搜索事件
        $scope.searchInfo = function () {
            $http.post('http://fastmap.navinfo.com/smap_p/plateres/web/cond/geo/count?type=' + $scope.typeParam + '&cond=' + $scope.searchWord).then(function (data) {
                var sumCount = data.data.data;
                if(!sumCount){
                    $scope.resultStyle = {
                        display: 'none'
                    }
                    return;
                }
                $scope.resultStyle = {
                    display: 'block'
                }
                if (sumCount.count == 0) {
                    $scope.resultStyle = {
                        display: 'none'
                    }
                    $scope.noSearchResult = {
                        display: 'block'
                    }
                } else if (sumCount.count > 20) {
                    $scope.noSearchResult = {
                        display: 'none'
                    }
                    $scope.resultStyle = {
                        display: 'block'
                    }
                    $('.MoreChange').html('<span class="activeBorder">查看全部搜索结果[&nbsp;共' + $scope.sumCount + '条&nbsp;]</span>');
                    $('#content .resultList .MoreChange').css('cursor', 'pointer');
                } else if (sumCount.count > 0 && sumCount.count <= 20) {
                    $scope.noSearchResult = {
                        display: 'none'
                    }
                    $scope.resultStyle = {
                        display: 'block'
                    }
                    $('#content .resultList .MoreChange').css({'cursor': 'default', color: "#6d788a"});
                    $('.MoreChange').html('已显示全部结果');
                }

            })
            $http.post('http://fastmap.navinfo.com/smap_p/plateres/web/cond/geo?pageNum=1&pageSize=20&type=' + $scope.typeParam + '&cond=' + $scope.searchWord).then(function (data) {
                $scope.searchList = [];
                var val = data.data.data;
                if(!val){
                    return;
                }
                for (var i = 0; i < val.platelimit.length; i++) {
                    $scope.searchList.push(val.platelimit[i]);
                }
                if ($scope.searchList[0]) {
                    var firstNo = $scope.searchList[0].no;
                    $scope.firstLocation(firstNo);
                }
            })

        }

        $scope.GoSearch = function (event) {
            var e = window.event || event;
            if (e.keyCode === 13) {
                $scope.searchInfo();
            }
        };

        //点击今日限行，默认显示一条
        $scope.toTodayLimit = function () {
            var status = $('.limitDaySec').css('display');
            if (status == 'block') {
                $scope.limitDayList = {
                    display: 'none'
                }
                $scope.changColor = {
                    color: '#6d788a'
                }
            } else {
                $scope.limitDayList = {
                    display: 'block'
                }
                $scope.changColor = {
                    color: '#ff7474'
                }
            }
            $http.post('http://fastmap.navinfo.com/smap_p/plateres/web/cond/td/desc').then(function (data) {
                var val = data.data.data;
                $scope.initArea = val.platelimit[0].platelimit_area;
                $scope.initPrinciple = val.platelimit[0].principle;
                $scope.initCar = val.platelimit[0].pl_condition;
                $scope.firstLocation(val.platelimit[0].no);
            })

        }

        //页面一加载默认显示第一条
        $scope.toFirstLimit = function () {
            $scope.changColor = {
                color: '#ff7474'
            }
            $http.post('http://fastmap.navinfo.com/smap_p/plateres/web/cond/td/desc').then(function (data) {
                var val = data.data.data;
                $scope.initArea = val.platelimit[0].platelimit_area;
                $scope.initPrinciple = val.platelimit[0].principle;
                $scope.initCar = val.platelimit[0].pl_condition;
                $scope.firstLocation(val.platelimit[0].no);
            })
        }
        $scope.toFirstLimit();

        //关闭今日限行列表
        $scope.closeList = function () {
            $('.limitTodayLists').hide();
            $('#container').css("width", "100%");
            $('.testLimited').show();
        }


        //查看更多，加载今日限行列表
        $scope.limitList = [];
        $scope.moreInfo = function () {
            $('.limitTodayLists').show();
            $('#container').css("width", "88.1%");
            $('.testLimited').hide();
            $scope.resultStyle = {
                display: 'none'
            }
            $scope.noSearchResult = {
                display: 'none'
            }
            $scope.limitDayList = {
                display: 'none'
            }
            $scope.changColor = {
                color: '#6d788a'
            }
            $http.post('http://fastmap.navinfo.com/smap_p/plateres/web/cond/td/desc').then(function (data) {
                var val = data.data.data;
                for (var i = 0; i < val.platelimit.length; i++) {
                    $scope.limitList.push(val.platelimit[i]);
                }
            })
        }
        $scope.mapLocation = function (arg,index) {
            var param = arg.no;
            var lineCol = [];
            $http.post('http://fastmap.navinfo.com/smap_p/plateres/web/cond/td/geo?no=' + param).then(function (data) {
                var val = data.data.data;
                for (var i = 0, len = val.platelimit.length; i < len; i++) {
                    lineCol.push(val.platelimit[i].coordinates);
                }
                if (val.platelimit[0].type == "LineString") {
                    if (!map.getSource('plate') && !map.getSource('route')) {
                        $scope.addlines(lineCol);
                    } else if (map.getSource('route') && map.getSource('route')._data.features.length !== 0) {
                        $scope.clearLines();
                        $scope.addlines(lineCol);
                    } else if (map.getSource('plate') && map.getSource('plate')._data.features.length !== 0) {
                        $scope.clearPolygon();
                        $scope.addlines(lineCol);
                    } else {
                        $scope.clearLines();
                        $scope.clearPolygon();
                        $scope.addlines(lineCol);
                    }
                } else {
                    if (!map.getSource('plate') && !map.getSource('route')) {
                        $scope.addPolygon(lineCol);
                    } else if (map.getSource('route') && map.getSource('route')._data.features.length !== 0) {
                        $scope.clearLines();
                        $scope.addPolygon(lineCol);
                    } else if (map.getSource('plate') && map.getSource('plate')._data.features.length !== 0) {
                        $scope.clearPolygon();
                        $scope.addPolygon(lineCol);
                    } else {
                        $scope.clearLines();
                        $scope.clearPolygon();
                        $scope.addPolygon(lineCol);
                    }

                }
            })

            $('.resultList ul').eq(index).attr('class','ulActive').siblings('ul').attr('class','ulNormal');
            $('.limitTodayLists .limitList').eq(index).addClass('todayActive').siblings('ul').removeClass('todayActive');

        }

        //清除地图上的线（id为route）
        $scope.clearLines = function () {
            var bounds = {
                type: 'FeatureCollection',
                features: [],
            };
            map.getSource('route').setData(bounds);
        };

        //清除地图上的面（id为plate）
        $scope.clearPolygon = function () {
            var bounds = {
                type: 'FeatureCollection',
                features: [],
            };
            map.getSource('plate').setData(bounds);
        };

        //划线函数
        $scope.addlines = function (lineArr) {
            var bounds = {
                type: 'FeatureCollection',
                features: [],
            };

            for (var i = 0, len = lineArr.length; i < len; i++) {
                var source = {
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": lineArr[i]
                    },
                };
                var pointFeature = turf.lineString(lineArr[i]);
                bounds.features.push(source);
            }
            var bbox = turf.bbox(bounds);
            var v2 = new mapboxgl.LngLatBounds([bbox[0], bbox[1]], [bbox[2], bbox[3]]);
            map.fitBounds(v2, {padding: 180});
            var obj = $scope.originLayer;
            obj.paint['line-color'] = '#ff7474';
            if (!map.getSource('route')) {
                $scope.originLayer.source.data = bounds;
                map.addLayer($scope.originLayer);
            } else {
                map.getSource('route').setData(bounds);
            }
        }

        //划面函数
        $scope.addPolygon = function (lineArr) {
            var bounds = {
                type: 'FeatureCollection',
                features: [],
            };
            var source = {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": lineArr[0]
                },
            };
            bounds.features.push(source);
            var bbox = turf.bbox(bounds);
            var v2 = new mapboxgl.LngLatBounds([bbox[0], bbox[1]], [bbox[2], bbox[3]]);
            map.fitBounds(v2, {padding: 180});
            var obj = $scope.polygonNewLayer;
            obj.paint['fill-color'] = "rgba(255, 116, 116, .5)";
            if (!map.getSource('plate')) {
                $scope.polygonNewLayer.source.data = bounds;
                map.addLayer($scope.polygonNewLayer);
            } else {
                map.getSource('plate').setData(bounds);
            }

        }


    }]);

