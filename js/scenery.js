var map = new mapboxgl.Map({
    container: 'map',
    style: scenery,
    zoom: 8,
    center: [108.94704, 34.25943],
    maxZoom: 17,
    minZoom: 3,
    repaint: true,
    pitch: 0
});

angular.module("scenery", ['dataService', 'nvd3', 'angular-popups', 'navApp'])
    .controller("sceneryController", ["$scope", "$location", "dsEdit", "$anchorScroll", "$http", "$timeout", "$sce",
        function ($scope, $location, dsEdit, $anchorScroll, $http, $timeout, $sce) {
            $scope.locFlag = 'sceneryFlag';
            $scope.keywordsArr = [];
            $scope.popuArr = [];
            $scope.colorArr = ['rgba(255,114,86,0.8)', 'rgba(255,11486,0.3)', 'rgba(20,120,255,0.3)'];
            $scope.sceneryList = [];
            $scope.tipsList = [];
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
            $scope.morePic = '';
            $scope.isRoute = [];
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
                $('.travelTips').hide();
                //清楚地图上的路线及点
                $scope.clearLines();
                $scope.clearMarksight();

                //清除地图上的景区poi名称
                allPoipop.remove();
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
                    'text-size': 12,
                    "text-offset":[0,-0.3],
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
                    'text-size': 12,
                    "text-offset":[0,-0.3],
                    // 'text-font' : ['Arial Unicode MS Regular']
                },
                'paint': {
                    'text-color': "#fff"
                }
            };
            //添加沿途景点图层
            var marksightLayer = {
                "id": "marksightId",
                "type": "symbol",
                'layout': {
                    'icon-image': 'POI_red',
                    'icon-size': 0.6
                }
            };

            //联想关键词input
            $scope.relativeWords = function () {
                if ($scope.searchWord != '') {
                    $scope.resultList = {
                        display: "none"
                    }
                    $('.searchResult').hide();
                    $('.introduce').hide();
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
                $scope.searchScenery();
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
                                for (var i = 0;i<$scope.sceneryList.length;i++) {
                                    $scope.sceneryList[i].audio_id = $sce.trustAsResourceUrl($scope.sceneryList[i].audio_id);
                                }
                                $('.searchResult').show();
                                locationMap(data);
                            } else {
                                var dataPart = data.slice(0, 3);
                                $scope.sceneryList = dataPart;
                                for (var i = 0;i<$scope.sceneryList.length;i++) {
                                    $scope.sceneryList[i].audio_id = $sce.trustAsResourceUrl($scope.sceneryList[i].audio_id);
                                }
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
                    popupClick.remove();
                    allPoipop.remove();
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

                map.getCanvas().style.cursor = 'pointer';
                map.flyTo({
                    center: e.features[0].geometry.coordinates,
                    zoom: 16,
                    speed: 1.5
                });
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
                    $scope.pidSight = data[0].poi_pid;
                    arrImg = data[0].url;
                    if($sce.trustAsResourceUrl(data[0].audio_id[0]) == undefined ){
                        $scope.deAudio = '';
                        $('.speakUp').css('display','none');
                    }else{
                        $scope.deAudio = $sce.trustAsResourceUrl(data[0].audio_id[0]);
                        $('.speakUp').css('display','inline-block');
                    }
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

                //判断是否显示攻略按钮
                dsEdit.getProduct("scenic/search/getroute?pid="+poiId).then(function (data) {
                    $scope.isRoute = data;
                })

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
                if($scope.resultNum != 1){
                    if (index == 0) {
                        $('.borderLine').show();
                        $('.borderLine').eq(index).hide();
                    } else {
                        $('.borderLine').show();
                        $('.borderLine').eq(index).hide();
                        $('.borderLine').eq(index - 1).hide();
                    }
                }

                var backImage = $('#speak-' + index).css('backgroundImage');
                if (backImage.indexOf('blue_active') > -1) {
                    $('#speak-' + index).css('backgroundImage', 'url(../img/scenery/icon_white_active.gif)')
                } else {
                    $('#speak-' + index).css('backgroundImage', 'url(../img/scenery/icon_white_normal.png)');
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
                var backImage = $('#speak-'+index).css('backgroundImage') ;
                if(backImage.indexOf('white_active')>-1){
                    $('#speak-'+index).css('backgroundImage','url(../img/scenery/icon_blue_active.gif)')
                }else{
                    $('#speak-'+index).css('backgroundImage','url(../img/scenery/icon_blue_normal.png)');
                }

                if($scope.resultNum == 1){
                    $('.borderLine').hide();
                }
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
                        for (var i = 0;i<$scope.sceneryList.length;i++) {
                            $scope.sceneryList[i].audio_id = $sce.trustAsResourceUrl($scope.sceneryList[i].audio_id);
                        }
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
                    if($scope.morePic == 1){
                        $('.btn_left').hide();
                        $('.btn_right').hide();
                    }
                    if($scope.morePic > 1){
                        $('.btn_left').hide();
                        $('.btn_right').show();
                    }
                    index = 0;
                }

            }

            $scope.goImg = function (parm) {
                index = parm;
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
                    $('.btn_right').show();
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
                    $('.btn_left').show();
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

            //语音播放或暂停
            $scope.playOrPaused = function(event, index){
                var e = window.event || event;
                if (e.stopPropagation) {
                    e.stopPropagation();
                } else {
                    e.cancelBubble = true;
                }
                var audio = document.getElementById('audio-' + index);
                if(audio.paused){
                    audio.play();
                    $('#speak-'+index).css('backgroundImage','url(../img/scenery/icon_white_active.gif)');
                }else{
                    audio.pause();
                    $('#speak-'+index).css('backgroundImage','url(../img/scenery/icon_white_normal.png)');
                }

                audio.addEventListener('ended', function () {
                    console.log('--over--');
                    var stopIcon =$('#speak-'+index).css('backgroundImage');
                    if(stopIcon.indexOf('blue') > -1 ){
                        $('#speak-'+index).css('backgroundImage','url(../img/scenery/icon_blue_normal.png)');
                    }else{
                        $('#speak-'+index).css('backgroundImage','url(../img/scenery/icon_white_normal.png)');
                    }
                });
            }
            $scope.playOrPauseDetail = function() {
                var audioDe = document.getElementById('audioDe');
                if(audioDe.paused){
                    audioDe.play();
                    $('#speakDe').css('backgroundImage','url(../img/scenery/icon_blue_active.gif)');
                }else{
                    audioDe.pause();
                    $('#speakDe').css('backgroundImage','url(../img/scenery/icon_blue_normal.png)');
                }


                audioDe.addEventListener('ended', function () {
                    console.log('--over--');
                    var stopIcon =$('#speakDe').css('backgroundImage');
                    if(stopIcon.indexOf('blue') > -1 ){
                        $('#speakDe').css('backgroundImage','url(../img/scenery/icon_blue_normal.png)');
                    }else{
                        $('#speakDe').css('backgroundImage','url(../img/scenery/icon_white_normal.png)');
                    }
                }, false);

            };

            //点击所有poi景点图层
            var allPoipop = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false,
                offset: popupOffsets
            });

            //click事件
            map.on('click','poiNew_layer',function (e) {
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
                if($('.travelTips').css('display') == 'none') {
                    var pid = e.features[0].properties.pid;
                    detailsDis(pid);
                    $('.backBtn').hide();
                    $scope.searchWord = $scope.TollGateName;
                }
            });
            map.on('click','poiNew_layer4A',function (e) {
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
                if($('.travelTips').css('display') == 'none') {
                    var pid = e.features[0].properties.pid;
                    detailsDis(pid);
                    $('.backBtn').hide();
                    $scope.searchWord = $scope.TollGateName;
                }
            });
            map.on('click','poiNew_layerAll',function (e) {
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

                if($('.travelTips').css('display') == 'none'){
                    var pid = e.features[0].properties.pid ;
                    detailsDis(pid);
                    $('.backBtn').hide();
                    $scope.searchWord = $scope.TollGateName ;
                }

            });

            //定义旅游路线图层
            $scope.tipLineLayer = {
                "id": "tipsLayerId",
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
                    "line-color": "#ff7474",
                    "line-width": 3
                }
            };

            $scope.colsightArr = [];

            //从详情跳转到对应旅游路线
            $scope.enterTips = function(pid){
                $('.introduce').hide();
                $('.travelTips').show();
                dsEdit.getProduct("scenic/search/getroute?pid="+pid).then(function (data){
                    $scope.tipsList = data;
                    for (var i = 0;i<$scope.tipsList.length;i++) {
                        $scope.tipsList[i].audio_id = $sce.trustAsResourceUrl($scope.tipsList[i].audio_id);
                    }
                    var poisArr = [];
                    for(var i=0;i<data.length;i++) {
                        var obj = data[i].pois;                                       //键值对,根据oPid的顺序处理pois的值
                        poisArr.push(data[i].oPid.split('|').map(function (val) {    //oPid正确的顺序遍历数组
                            if (obj[val]) {
                                return {val: obj[val],pid: val};
                            } else {
                                return null;
                            }
                        }).filter(function (val) {                               //过滤掉数组中val不存在的数据
                            return !!val;
                        }))
                    }
                    $scope.colsightArr = poisArr;                                //途径景点ng-repeat数组

                    //默认地图定位第一条数据
                    var lineAry = [];
                    lineAry = data[0].geometry.coordinates;
                    var lineType = data[0].geometry.type;
                    drawTipLine(lineAry,lineType);

                    //点击攻略暂时清除地图上的搜索出来的点
                    $scope.clearSearchsight();
                    popupClick.remove();

                }).then(function(){
                    //选中样式
                    $('#container .travelTips .tipList li').eq(0).addClass('liActive').siblings().removeClass('liActive');
                    $('#container .travelTips .tipList .tipSight .everySight').removeClass('sightBorder');
                    $('#container .travelTips .tipList li').eq(0).find('.everySight').addClass('sightBorder');
                    $('#container .travelTips .tipTitle').removeClass('tipTitleActive');
                    $('#container .travelTips .tipTitle').eq(0).addClass('tipTitleActive');
                })

            }

            //勾勒路线函数
            var drawTipLine = function(lineCol,type){
                var bounds = {
                    type: 'FeatureCollection',
                    features: [],
                };
               if(type === 'MultiLineString') {                                //多线，分为多个feature,循环多个数组，填充多条线
                   for (var i = 0, len = lineCol.length; i < len; i++) {
                       var source = {
                           "type": "Feature",
                           "geometry": {
                               "type": "LineString",
                               "coordinates": lineCol[i]
                           },
                       };
                       var pointFeature = turf.lineString(lineCol[i]);
                       bounds.features.push(source);
                   }
               }else{                                                           //单线
                   var source = {
                       "type": "Feature",
                       "geometry": {
                           "type": "LineString",
                           "coordinates": lineCol
                       }
                   };
                   var pointFeature = turf.lineString(lineCol);
                   bounds.features.push(source);
               }
                var bbox = turf.bbox(bounds);
                var v2 = new mapboxgl.LngLatBounds([bbox[0], bbox[1]], [bbox[2], bbox[3]]);
                map.fitBounds(v2, {padding: 100});
                if (!map.getSource('tipsLayerId')) {
                    $scope.tipLineLayer.source.data = bounds;
                    map.addLayer($scope.tipLineLayer);
                } else {
                    map.getSource('tipsLayerId').setData(bounds);
                }
            }
            //清除地图上的线（id为route）
            $scope.clearLines = function () {
                if (map.getSource('tipsLayerId')) {
                    var bounds = {
                        type: 'FeatureCollection',
                        features: [],
                    };
                    map.getSource('tipsLayerId').setData(bounds);
                }
            };
            //清除地图上的沿途景区点
            $scope.clearMarksight = function(){
                if(map.getSource('marksightId')) {
                    var bounds = {
                        type: 'FeatureCollection',
                        features: [],
                    };
                    map.getSource('marksightId').setData(bounds);
                }
            }

            //点击攻略暂时清除地图上的搜索出来的点
            $scope.clearSearchsight = function(){
                    var bounds = {
                        type: 'FeatureCollection',
                        features: [],
                    };
                    map.getSource('mysouce').setData(bounds);
            }

            //标记旅游路线
            $scope.markRoute = function(geo,index){
                var geoArr = geo.coordinates;
                var geotype = geo.type;
                drawTipLine(geoArr,geotype);
                //选中样式
                $('#container .travelTips .tipList li').eq(index).addClass('liActive').siblings().removeClass('liActive');
                $('#container .travelTips .tipList .tipSight .everySight').removeClass('sightBorder');
                $('#container .travelTips .tipList li').eq(index).find('.everySight').addClass('sightBorder');
                $('#container .travelTips .tipTitle').removeClass('tipTitleActive');
                $('#container .travelTips .tipTitle').eq(index).addClass('tipTitleActive');

                //语音图标改变
                $('.tipList .tipTitle .speakUp').css('backgroundImage','url(../img/scenery/icon_blue_normal.png)');
                var backImage = $('#speakTip-' + index).css('backgroundImage');
                if(backImage.indexOf('active')>-1){
                    $('#speakTip-'+index).css('backgroundImage','url(../img/scenery/icon_white_active.gif)')
                } else{
                    $('#speakTip-'+index).css('backgroundImage','url(../img/scenery/icon_white_normal.png)');
                }
            }

            //定义切换变量
            var open = 1;
            var preVal = '';
            //标记途径景点
            $scope.markSight = function(pidTip,event) {
                var e = window.event || event;
                if (e.stopPropagation) {
                    e.stopPropagation();
                } else {
                    e.cancelBubble = true;
                }

                dsEdit.getProduct("scenic/search/poidetail", {
                    parm: JSON.stringify({
                        poi_pid: pidTip
                    })
                }).then(function (data) {
                        var sightLocation = data[0].geometry.coordinates;
                        var source = {
                            "type": "geojson",
                            "data":{
                                "type":"Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates":sightLocation
                                }
                            }
                        };
                    if(preVal === ''){                                     //点击第一次preVal为空
                        preVal = pidTip;
                        marksightLayer.source = source;
                        map.addLayer(marksightLayer);
                    }else{
                        if(preVal === pidTip){
                            if(open === 1){                                //当前的pid与上一次的pid相同且显示
                                if (!map.getSource('marksightId')) {
                                    marksightLayer.source = source;
                                    map.addLayer(marksightLayer);
                                } else {
                                    map.getSource('marksightId').setData({
                                        "type": "FeatureCollection",
                                        "features": [{
                                            "type": "Feature",
                                            "geometry": {
                                                "type": "Point",
                                                "coordinates": sightLocation
                                            }
                                        }]
                                    })
                                }
                                open = 0 ;
                            }else{                                       //当前的pid与上一次的pid相同且隐藏
                                $scope.clearMarksight();
                                open = 1;
                            }
                        }else{
                            preVal = pidTip;                             //当前的pid与上一次的pid不同，将当前的赋予preVal
                            if (!map.getSource('marksightId')) {
                                marksightLayer.source = source;
                                map.addLayer(marksightLayer);
                            } else {
                                map.getSource('marksightId').setData({
                                    "type": "FeatureCollection",
                                    "features": [{
                                        "type": "Feature",
                                        "geometry": {
                                            "type": "Point",
                                            "coordinates": sightLocation
                                        }
                                    }]
                                })
                            }
                            open=0;
                        }
                    }
                })
            }

            //播放或暂停路线语音
            $scope.playOrPauseTip = function(event,index){
                var e = window.event || event;
                if (e.stopPropagation) {
                    e.stopPropagation();
                } else {
                    e.cancelBubble = true;
                }
                var audioTip = document.getElementById('audioTip-'+index);
                if(audioTip.paused){
                    audioTip.play();
                    $('#speakTip-'+index).css('backgroundImage','url(../img/scenery/icon_white_active.gif)');
                }else{
                    audioTip.pause();
                    $('#speakTip-'+index).css('backgroundImage','url(../img/scenery/icon_white_normal.png)');
                }

                audioTip.addEventListener('ended', function () {
                    console.log('--over--');
                    var stopIcon =$('#speakTip-'+index).css('backgroundImage');
                    if(stopIcon.indexOf('blue') > -1 ){
                        $('#speakTip-'+index).css('backgroundImage','url(../img/scenery/icon_blue_normal.png)');
                    }else{
                        $('#speakTip-'+index).css('backgroundImage','url(../img/scenery/icon_white_normal.png)');
                    }
                }, false);

            }

            //攻略返回到详情
            $scope.backtoDetail = function () {
                $('.introduce').show();
                $('.travelTips').hide();
                $scope.clearLines();
                $scope.clearMarksight();

            }
            //mouseenter,mouseleave控制语音图标
            $scope.changeVideo = function (index) {
                //让当前li分割线消失
                $('.borderBotLine').eq(index).hide();
                //改变语音图标
                var backImage = $('#speakTip-' + index).css('backgroundImage');
                if (backImage.indexOf('active') > -1) {
                    $('#speakTip-' + index).css('backgroundImage', 'url(../img/scenery/icon_white_active.gif)')
                } else {
                    $('#speakTip-' + index).css('backgroundImage', 'url(../img/scenery/icon_white_normal.png)');
                }
            }

            //mouseleave list
            $scope.recoverVideo = function (index) {
                if(index != ($scope.tipsList.length-1) ){
                    $('.borderBotLine').eq(index).show();
                }
                var backImage = $('#speakTip-'+index).css('backgroundImage') ;
                if(backImage.indexOf('white_active')>-1){
                    $('#speakTip-'+index).css('backgroundImage','url(../img/scenery/icon_blue_active.gif)')
                } else{
                    $('#speakTip-'+index).css('backgroundImage','url(../img/scenery/icon_blue_normal.png)');
                }
                var backColor = $('#container .travelTips .tipList li').eq(index).css('backgroundColor');

                if(backColor =='rgba(20, 120, 255, 0.8)'){
                    if(backImage.indexOf('active')>-1){
                        $('#speakTip-'+index).css('backgroundImage','url(../img/scenery/icon_white_active.gif)')
                    } else{
                        $('#speakTip-'+index).css('backgroundImage','url(../img/scenery/icon_white_normal.png)');
                    }
                }
            }


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
    } else if (maxWidth == 0) {
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

