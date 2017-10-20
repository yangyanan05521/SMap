var map = new mapboxgl.Map({
    container: 'map',
    style: scenery,
    zoom: 8,
    center: [108.94704, 34.25943],
    maxZoom: 17,
    minZoom: 0,
    repaint: true,
    pitch: 0
});

angular.module("scenery", ['dataService', 'nvd3', 'angular-popups', 'navApp'])
    .controller("sceneryController", ["$scope", "$location", "dsEdit", "$anchorScroll", "$http", "$timeout",
        function ($scope, $location, dsEdit, $anchorScroll, $http, $timeout) {
            $scope.locFlag = 'sceneryFlag';
            $scope.keywordsArr = [];
            $scope.popuArr = [];
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
            $scope.deAddress = '';
            $scope.deImg = '';
            $scope.morePic = '';
            $scope.noSearchResult = {
                display: 'none'
            };
            $scope.relativeList = {
                display: 'none'
            };
            $scope.resultList = {
                display: 'none'
            }
            $scope.introDis = {
                display: 'none'
            }
            $scope.clearInput = function () {
                $('#keywordSearch').val('');
                $('#keywordSearch').focus();
                $scope.noSearchResult = {
                    display: 'none'
                }
                $scope.resultList = {
                    display: 'none'
                }
                $scope.relativeList = {
                    display: 'none'
                }
                $('.introduce').hide();
                $('.searchResult').hide();
            };

            //添加定位点图层
            $scope.testLayer = {
                "id": "pointSelected",
                "type": "symbol",
                'layout': {
                    'icon-image': '{icon}',
                    'icon-size': 1,
                    'text-justify': 'center',
                    'text-field': '{numMark}',
                    'text-size': 12
                    // 'text-font' : ['Arial Unicode MS Regular']
                },
                'paint': {
                    'text-color': "#fff"
                }
            };

            //添加高亮图层
            var lightHeightLayer = {
                "id": "lightHeightId",
                "type": "symbol",
                'layout': {
                    'icon-image': 'POI_blue',
                    'icon-size': 1,
                    'text-justify': 'center',
                    'text-field': '{numMark}',
                    'text-size': 12
                    // 'text-font' : ['Arial Unicode MS Regular']
                },
                'paint': {
                    'text-color': "#fff"
                }
            };

            //联想关键词input
            $scope.relativeWords = function () {
                if ($scope.searchWord != '') {
                    $scope.resultList = {
                        display: "none"
                    }
                    $('.searchResult').hide();
                    dsEdit.getProduct("scenic/search/realtime", {
                        parm: JSON.stringify({
                            str: $scope.searchWord
                        })
                    }).then(function (data) {
                        if (data) {
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

            var markerHeight = 10, markerRadius = 10, linearOffset = 5;
            var popupOffsets = {
                'top': [0, 0],
                'top-left': [0, 0],
                'top-right': [0, 0],
                'bottom': [0, -markerHeight],
                'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
                'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
                'left': [markerRadius, (markerHeight - markerRadius) * -1],
                'right': [-markerRadius, (markerHeight - markerRadius) * -1]
            };
            //hover显示名称
            var popupName = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false,
                offset: popupOffsets
            });

            //click显示名称
            var popupClick = new mapboxgl.Popup({
                offset: popupOffsets,
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

            //重置图层的source—data
            var resetMySourceData = function (sourceData) {
                map.getSource('mysouce').setData(sourceData);
            };

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
                                $scope.resultList = {
                                    display: 'none'
                                }
                            } else if (data.length <= 3 && data.length > 0) {
                                $scope.moreResultlist = {
                                    display: 'none'
                                }
                                $scope.sceneryList = data;
                                $('.searchResult').show();
                                locationMap(data);
                            } else {
                                var dataPart = data.slice(0, 3);
                                $scope.sceneryList = dataPart;
                                $scope.moreResultlist = {
                                    display: 'block'
                                }
                                $('.searchResult').show();
                                locationMap(dataPart);
                                $('.allResult').html('查看全部搜索结果');
                                $('.moreResult').css({'color': '#999', 'cursor': 'pointer'});
                                $('.searchResult').css('height', 'auto');
                            }
                        }

                    })
                    $scope.relativeList = {
                        display: 'none'
                    }
                } else {
                    $scope.noSearchResult = {
                        display: "block"
                    }
                    $scope.resultList = {
                        display: "none"
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
                map.fitBounds(b1, {maxZoom: 15, padding: 100});

            }

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

                    popupClick.remove();
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
                popupName.remove();
                var titleDes = window.document.createElement('div');
                titleDes.innerHTML = '<div class="feePopDeep">' + e.features[0].properties.sceneryName + '</div>' +
                    '<div class="tipPopDeep"></div>';

                map.getCanvas().style.cursor = 'pointer';
                map.flyTo({
                    center: e.features[0].geometry.coordinates,
                    zoom: 16,
                    speed: 1.5
                }, map.on('zoomend', function (data) {
                    for (var i = 0, len = data.queryRenderedFeatures.length; i < 5; i++) {   //循环次数待改
                        if (data.queryRenderedFeatures()[i].properties.id == pid) {
                            popupClick.setLngLat(data.queryRenderedFeatures()[i].geometry.coordinates)
                                .setDOMContent(titleDes)
                                .addTo(map);
                            break;
                        }
                    }
                }));
                var poiId = e.features[0].properties.poiId;
                detailsDis(poiId);

            })

            //click list
            $scope.lightLocation = function (index, item) {
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

                map.flyTo({
                    center: everPoint.geometry.coordinates,
                    zoom: 16,
                    speed: 1.5
                });
                var poiId = item.poi_pid;
                detailsDis(poiId);
                $('.backBtn').show();
            }

            var arrImg = [];
            //to details
            var detailsDis = function (poiId) {
                dsEdit.getProduct("scenic/search/poidetail", {
                    parm: JSON.stringify({
                        poi_pid: poiId
                    })
                }).then(function (data) {
                    $scope.deName = data[0].name;
                    $scope.deTime = data[0].open_hours;
                    $scope.sightClass = data[0].sight_class;
                    $scope.ticket = data[0].ticket_price;
                    $scope.visitTime = data[0].time_for_visits;
                    $scope.sightLevel = data[0].sight_level;
                    $scope.season = data[0].seasons;
                    $scope.sightTel = data[0].telephone;
                    $scope.deAddress = data[0].address;
                    $scope.arrImg = data[0].url;
                    $scope.morePic = data[0].url.length;
                    arrImg = data[0].url;
                    if (data[0].overview) {
                        moreContent(data[0].overview);
                    } else {
                        $('#detailIntro').html('');
                        $('#allCnt').html('');
                    }
                    if (data[0].url[0] == undefined) {
                        $("#bigPic").attr('src', '../img/scenery/tim.jpg');
                    } else {
                        $("#bigPic").attr('src', data[0].url[0]);
                    }

                })
                $('.introduce').show();
                $('.searchResult').hide();

            }


            //to search
            $scope.searchScenery = function () {
                popupClick.remove();
                $('.introduce').hide();
                $scope.relativeList = {
                    display: 'none'
                }

                if ($('#keywordSearch').val() == '') {
                    $scope.noSearchResult = {
                        display: 'block'
                    }
                    $scope.resultList = {
                        display: 'none'
                    }
                    $('.searchResult').hide();
                } else {
                    $scope.getLocationPopup();
                }


            }

            $scope.GoSearch = function (event) {
                var e = window.event || event;
                if (e.keyCode === 13) {
                    $('.introduce').hide();
                    $('.reltiveWords').hide();
                    popupClick.remove();
                    $scope.resultList = {
                        display: 'block'
                    }
                    $scope.relativeList = {
                        display: 'none'
                    }
                    $scope.getLocationPopup();
                }
                if (e.keyCode === 8) {
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
                        // prop.icon = prop['icon-active'];   高亮改变颜色换成覆盖一个高亮图标图层展示
                        $scope.geojson = {
                            "type": "FeatureCollection",
                            "features": []
                        };
                        var source = {
                            "type": "geojson",
                            "data": {
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": mySourceData.features[i].geometry.coordinates
                                },
                                "properties": {
                                    "numMark": index + 1
                                }
                            }
                        };
                        var sourceJ = {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": mySourceData.features[i].geometry.coordinates
                            },
                            "properties": {
                                "numMark": index + 1
                            }
                        };
                        if (!map.getSource('lightHeightId')) {
                            lightHeightLayer.source = source;
                            map.addLayer(lightHeightLayer);
                        } else {
                            $scope.geojson.features.push(sourceJ);
                            map.getSource('lightHeightId').setData($scope.geojson);
                        }

                    } else {
                        prop.icon = prop['icon-normal'];
                    }
                }
                resetMySourceData(mySourceData);

                var titleDes = window.document.createElement('div');
                //  titleDes.setAttribute('class', 'popTollGateIconHeightLight');
                var everPoint = mySourceData.features[index];
                titleDes.innerHTML = '<div class="feePopDeep">' + everPoint.properties.sceneryName + '</div>' +
                    '<div class="tipPopDeep"></div>';
                map.getCanvas().style.cursor = 'pointer';
                popupName.setLngLat(everPoint.geometry.coordinates)
                    .setDOMContent(titleDes)
                    .addTo(map);

                //让当前li的上下分割线消失
                if (index == 0) {
                    $('.borderLine').show();
                    $('.borderLine').eq(index).hide();
                } else {
                    $('.borderLine').show();
                    $('.borderLine').eq(index).hide();
                    $('.borderLine').eq(index - 1).hide();
                }
            }

            //mouseleave list
            $scope.removeMark = function (index) {
                popupName.remove(index);
                $('.borderLine').show();
                var geojson = {
                    "type": "FeatureCollection",
                    "features": []
                };
                if (map.getSource('lightHeightId')) {
                    map.getSource('lightHeightId').setData(geojson);
                }
                // map.removeLayer('lightHeightId');
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
                    $('.moreResult').css({'color': '#1478ff', 'cursor': 'default'});
                }

            }

            //scan big(more) picture
            var index = 0;
            $scope.scanPic = function (event) {
                if ($scope.morePic > 0) {
                    var e = window.event || event;
                    if (e.stopPropagation) {
                        e.stopPropagation();
                    } else {
                        e.cancelBubble = true;
                    }
                    $('.swiperPic').show();
                    var oImg = $('.centerBlock ul img');
                    $('.disPic>img')[0].src = arrImg[0];
                    $('.centerBlock ul img').eq(0).css('border', '4px solid #1478ff');
                    $('.btn_left').hide();
                    $('.btn_right').show();
                    index = 0;
                }

            }

            $scope.goImg = function (parm) {
                index = parm;
                console.log(parm);
                var oImg = $('.centerBlock ul img');
                $('.disPic>img')[0].src = oImg[parm].src;
                oImg.css('border', '4px solid rgba(37,57,110,0)');
                oImg.eq(parm).css('border', '4px solid #1478ff');
                if (parm == 0) {
                    $('.btn_left').hide();
                    $('.btn_right').show();
                } else if (parm == arrImg.length - 1) {
                    $('.btn_right').hide();
                    $('.btn_left').show();
                } else {
                    $('.btn_right').show();
                    $('.btn_left').show();
                }
            }

            $scope.goLeft = function () {
                var oImg = $('.centerBlock ul img');
                index--;
                $('.disPic>img')[0].src = arrImg[index];

                oImg.css('border', '4px solid rgba(37,57,110,0)');
                oImg.eq(index).css('border', '4px solid #1478ff');
                if (index == 0) {
                    $('.btn_left').hide();

                } else {
                    $('.btn_left').show();
                    $('.btn_right').show();
                }
                var num = 5 - index;
                if (index < num) {
                    $('.centerBlock ul').animate({
                        left: '0px'
                    }, 300);
                }
            }
            $scope.goRight = function () {
                var oImg = $('.centerBlock ul img');
                index++;
                oImg.css('border', '4px solid rgba(37,57,110,0)');
                oImg.eq(index).css('border', '4px solid #1478ff');
                if (index == arrImg.length - 1) {
                    $('.btn_right').hide();
                } else {
                    $('.btn_right').show();
                    $('.btn_left').show();
                }
                $('.disPic>img')[0].src = arrImg[index];

                if (index > 5) {
                    var num = (index - 5);
                    $('.centerBlock ul').animate({
                        left: -145 * num + 'px'
                    }, 300);
                }

            }

            $scope.closePic = function () {
                $('.swiperPic').hide();
                var oImg = $('.centerBlock ul img');
                oImg.css('border', '4px solid rgba(37,57,110,0)');

            }
            $(document).click(function (event) {
                var _con = $('.centerBlock');
                if (!_con.is(event.target) && _con.has(event.target).length === 0) {
                    $('.swiperPic').hide();
                    var oImg = $('.centerBlock ul img');
                    oImg.css('border', '4px solid rgba(37,57,110,0)');
                }
            });

            //to resultList
            $scope.toResultlist = function () {
                $('.introduce').hide();
                $('.searchResult').show();
                popupClick.remove();

            }

            //see moreContent
            var moreContent = function (str) {
                var len = 66;
                var content = document.getElementById('detailIntro');
                var aTag = document.getElementById('allCnt');
                var contentLen = str.length;
                if (contentLen > len) {
                    content.innerHTML = str.substring(0, len) + '...';
                    aTag.innerHTML = '[全文]';
                    aTag.style.color = '#1478FF';
                    aTag.href = "javascript:void(0)";
                    aTag.onclick = function () {
                        if (aTag.innerHTML.indexOf("全文") > 0) {
                            content.innerHTML = str;
                            aTag.innerHTML = "[收起]";
                        } else {
                            aTag.innerHTML = '[全文]';
                            content.innerHTML = str.substring(0, len) + '...';
                        }
                    }
                }
            }


            //测试景区特色路线
            $scope.lineLayer = {
                "id": 'line_Limited_Layer',
                "type": 'line',
                "source": "platelimit",
                'source-layer': 'route',
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
            $scope.searchClass = [
                '佛教文化游',
                '浪漫夜晚游',
                '人文景观游',
                '浪漫之旅路线',
                '文化之旅路线',
                '休闲之旅路线',
                '游览车路线',
            ]

            $scope.changeSearch = function (index) {
                $scope.focus = index;
                var param;
                if (index == 0) {
                    param = '2017061901'
                } else if (index == 1) {
                    param = '2017061902'
                } else if (index == 2) {
                    param = '2017061903'
                } else if (index == 3) {
                    param = '2017071301'
                } else if (index == 4) {
                    param = '2017071302'
                } else if (index == 5) {
                    param = '2017071303'
                } else {
                    param = '2017071304'
                }

                map.style.sourceCaches.platelimit._source.tiles[0] = 'http://192.168.15.41:9999/smapapi/scenic/pbf/singleRoute/{z}/{x}/{y}?routeId=' + param;

                map.removeLayer('line_Limited_Layer');
                $timeout(function () {
                    map.addLayer($scope.lineLayer);
                }, 0);
            }

            //添加高亮poi名称图层
            var lightTextLayer = {
                "id": "lightTextId",
                "type": "symbol",
                "layout": {
                    'icon-image': ' ',   //不设置icon图标，只为了改变text-color
                    "text-field": "{name}",
                    'text-size':12,
                    "text-offset":[0,1.5],
                    "text-justify": "center",
                    "visibility": "visible"
                },
                'paint': {
                    'text-color': "#AA9309"
                }

            };

            //点击所有poi景点图层
            var allPoipop = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false,
                offset: popupOffsets
            });
            //处理POINT(108.9636 34.2213)格式的数据
            var toPointArray = function(point){
                var start = point.indexOf('(');
                var blank = point.indexOf(' ');
                var end = point.indexOf(')');
                var lng = point.substring(start+1,blank);
                var lat = point.substring(blank+1,point.length-1);
                var coordinates = [];
                coordinates.push(lng);
                coordinates.push(lat);
                return coordinates ;
            }

            //针对不同地图显示级别在layer.js文件中定义了3个同源图层，此处根据针对这3个图层做重复的mouseover和click事件
            //mouseover事件
            map.on('mouseover','poiNew_layer',function (e) {
                $scope.TollGateName = e.features[0].properties.name;
                var pointLocation = toPointArray(e.features[0].properties.jGeometry);
                var source = {
                    "type": "geojson",
                    "data":{
                        "type":"Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":pointLocation
                        },
                        "properties": {
                            "name": $scope.TollGateName
                        }
                    }
                };
                if (!map.getSource('lightTextId')) {
                    lightTextLayer.source = source;
                    map.addLayer(lightTextLayer);
                }else {
                    map.getSource('lightTextId').setData({
                        "type": "FeatureCollection",
                        "features": [{
                            "type": "Feature",
                            "properties": {"name": $scope.TollGateName},
                            "geometry": {
                                "type": "Point",
                                "coordinates": pointLocation
                            }
                        }]
                    })
                }
            });
            map.on('mouseover','poiNew_layer4A',function (e) {
                $scope.TollGateName = e.features[0].properties.name;
                var pointLocation = toPointArray(e.features[0].properties.jGeometry);
                var source = {
                    "type": "geojson",
                    "data":{
                        "type":"Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":pointLocation
                        },
                        "properties": {
                            "name": $scope.TollGateName
                        }
                    }
                };
                if (!map.getSource('lightTextId')) {
                    lightTextLayer.source = source;
                    map.addLayer(lightTextLayer);
                }else {
                    map.getSource('lightTextId').setData({
                        "type": "FeatureCollection",
                        "features": [{
                            "type": "Feature",
                            "properties": {"name": $scope.TollGateName},
                            "geometry": {
                                "type": "Point",
                                "coordinates": pointLocation
                            }
                        }]
                    })
                }
            });
            map.on('mouseover','poiNew_layerAll',function (e) {
                $scope.TollGateName = e.features[0].properties.name;
                var pointLocation = toPointArray(e.features[0].properties.jGeometry);
                var source = {
                    "type": "geojson",
                    "data":{
                        "type":"Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":pointLocation
                        },
                        "properties": {
                            "name": $scope.TollGateName
                        }
                    }
                };
                console.log(pointLocation);
                if (!map.getSource('lightTextId')) {
                    lightTextLayer.source = source;
                    map.addLayer(lightTextLayer);
                }else {
                    map.getSource('lightTextId').setData({
                        "type": "FeatureCollection",
                        "features": [{
                            "type": "Feature",
                            "properties": {"name": $scope.TollGateName},
                            "geometry": {
                                "type": "Point",
                                "coordinates": pointLocation
                            }
                        }]
                    })
                }
            });
            //click事件
            map.on('click','poiNew_layer',function (e) {
                console.log(e);
                $scope.poiclickLoc = [];
                $scope.TollGateName = e.features[0].properties.name;
                var div = window.document.createElement('div');
                div.innerHTML =
                    '<div class="feePopDeep">'+$scope.TollGateName+'</div>' +
                    '<div class="tipPopDeep"></div>';
                $scope.poiclickLoc.push(e.lngLat.lng);
                $scope.poiclickLoc.push(e.lngLat.lat);
                allPoipop.setLngLat($scope.poiclickLoc)
                         .setDOMContent(div)
                         .addTo(map);
                var pid = e.features[0].properties.pid ;
                detailsDis(pid);
                $('.backBtn').hide();
                $scope.searchWord = $scope.TollGateName ;
            });
            map.on('click','poiNew_layer4A',function (e) {
                console.log(e);
                $scope.poiclickLoc = [];
                $scope.TollGateName = e.features[0].properties.name;
                var div = window.document.createElement('div');
                div.innerHTML =
                    '<div class="feePopDeep">'+$scope.TollGateName+'</div>' +
                    '<div class="tipPopDeep"></div>';
                $scope.poiclickLoc.push(e.lngLat.lng);
                $scope.poiclickLoc.push(e.lngLat.lat);
                allPoipop.setLngLat($scope.poiclickLoc)
                    .setDOMContent(div)
                    .addTo(map);
                var pid = e.features[0].properties.pid ;
                detailsDis(pid);
                $('.backBtn').hide();
                $scope.searchWord = $scope.TollGateName ;
            });
            map.on('click','poiNew_layerAll',function (e) {
                console.log(e);
                $scope.poiclickLoc = [];
                $scope.TollGateName = e.features[0].properties.name;
                var div = window.document.createElement('div');
                div.innerHTML =
                    '<div class="feePopDeep">'+$scope.TollGateName+'</div>' +
                    '<div class="tipPopDeep"></div>';
                $scope.poiclickLoc.push(e.lngLat.lng);
                $scope.poiclickLoc.push(e.lngLat.lat);
                allPoipop.setLngLat($scope.poiclickLoc)
                    .setDOMContent(div)
                    .addTo(map);
                var pid = e.features[0].properties.pid ;
                detailsDis(pid);
                $('.backBtn').hide();
                $scope.searchWord = $scope.TollGateName ;
            });

        }]);

//调节预览图片尺寸
function AutoResizeImage(maxWidth, maxHeight, objImg) {
    var img = new Image();
    img.src = objImg.src;
    var hRatio;
    var wRatio;
    var Ratio = 1;
    var w = img.width;
    var h = img.height;
    wRatio = maxWidth / w;
    hRatio = maxHeight / h;
    if (maxWidth == 0 && maxHeight == 0) {
        Ratio = 1;
    } else if (maxWidth == 0) {//
        if (hRatio < 1) Ratio = hRatio;
    } else if (maxHeight == 0) {
        if (wRatio < 1) Ratio = wRatio;
    } else if (wRatio < 1 || hRatio < 1) {
        Ratio = (wRatio <= hRatio ? wRatio : hRatio);
    }
    if (Ratio < 1) {
        w = w * Ratio;
        h = h * Ratio;
    }
    objImg.height = h;
    objImg.width = w;
}

