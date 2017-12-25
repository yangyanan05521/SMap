var map = new mapboxgl.Map({
    container: 'map',
    style: constructionLayer,
    zoom: 11,
    center: [116.38402, 39.96261],
    maxZoom: 17,
    minZoom: 5,
    pitch: 0
});


map.on('load', function () {
    var data = [{
        name: '成都',
        value: 58,
        info: '大庆路因修地铁拥堵1',
        time:'20171201时段12:00——18：00'
    }, {
        name: '大同',
        value: 58,
        info: '大庆路因修地铁拥堵2',
        time:'20171201时段12:00——18：00'
    }, {
        name: '西安',
        value: 61,
        info: '大庆路因修地铁拥堵3',
        time:''
    }, {
        name: '扬州',
        value: 64,
        info: '大庆路因修地铁拥堵4',
        time:''
    }, {
        name: '重庆',
        value: 66,
        info: '大庆路因修地铁拥堵5',
        time:''
    }, {
        name: '宝鸡',
        value: 72,
        info: '大庆路因修地铁拥堵6',
        time:''
    }, {
        name: '北京',
        value: 79,
        info: '大庆路因修地铁拥堵7',
        time:'20171201时段12:00——18：00'
    }];
    var geoCoordMap = {
        '海门': [121.15, 31.89],
        '鄂尔多斯': [109.781327, 39.608266],
        '招远': [120.38, 37.35],
        '舟山': [122.207216, 29.985295],
        '齐齐哈尔': [123.97, 47.33],
        '盐城': [120.13, 33.38],
        '赤峰': [118.87, 42.28],
        '青岛': [120.33, 36.07],
        '乳山': [121.52, 36.89],
        '金昌': [102.188043, 38.520089],
        '泉州': [118.58, 24.93],
        '莱西': [120.53, 36.86],
        '日照': [119.46, 35.42],
        '胶南': [119.97, 35.88],
        '南通': [121.05, 32.08],
        '拉萨': [91.11, 29.97],
        '云浮': [112.02, 22.93],
        '梅州': [116.1, 24.55],
        '文登': [122.05, 37.2],
        '上海': [121.48, 31.22],
        '攀枝花': [101.718637, 26.582347],
        '威海': [122.1, 37.5],
        '承德': [117.93, 40.97],
        '厦门': [118.1, 24.46],
        '汕尾': [115.375279, 22.786211],
        '潮州': [116.63, 23.68],
        '丹东': [124.37, 40.13],
        '太仓': [121.1, 31.45],
        '曲靖': [103.79, 25.51],
        '烟台': [121.39, 37.52],
        '福州': [119.3, 26.08],
        '瓦房店': [121.979603, 39.627114],
        '即墨': [120.45, 36.38],
        '抚顺': [123.97, 41.97],
        '玉溪': [102.52, 24.35],
        '张家口': [114.87, 40.82],
        '阳泉': [113.57, 37.85],
        '莱州': [119.942327, 37.177017],
        '湖州': [120.1, 30.86],
        '汕头': [116.69, 23.39],
        '昆山': [120.95, 31.39],
        '宁波': [121.56, 29.86],
        '湛江': [110.359377, 21.270708],
        '揭阳': [116.35, 23.55],
        '荣成': [122.41, 37.16],
        '连云港': [119.16, 34.59],
        '葫芦岛': [120.836932, 40.711052],
        '常熟': [120.74, 31.64],
        '东莞': [113.75, 23.04],
        '河源': [114.68, 23.73],
        '淮安': [119.15, 33.5],
        '泰州': [119.9, 32.49],
        '南宁': [108.33, 22.84],
        '营口': [122.18, 40.65],
        '惠州': [114.4, 23.09],
        '江阴': [120.26, 31.91],
        '蓬莱': [120.75, 37.8],
        '韶关': [113.62, 24.84],
        '嘉峪关': [98.289152, 39.77313],
        '广州': [113.23, 23.16],
        '延安': [109.47, 36.6],
        '太原': [112.53, 37.87],
        '清远': [113.01, 23.7],
        '中山': [113.38, 22.52],
        '昆明': [102.73, 25.04],
        '寿光': [118.73, 36.86],
        '盘锦': [122.070714, 41.119997],
        '长治': [113.08, 36.18],
        '深圳': [114.07, 22.62],
        '珠海': [113.52, 22.3],
        '宿迁': [118.3, 33.96],
        '咸阳': [108.72, 34.36],
        '铜川': [109.11, 35.09],
        '平度': [119.97, 36.77],
        '佛山': [113.11, 23.05],
        '海口': [110.35, 20.02],
        '江门': [113.06, 22.61],
        '章丘': [117.53, 36.72],
        '肇庆': [112.44, 23.05],
        '大连': [121.62, 38.92],
        '临汾': [111.5, 36.08],
        '吴江': [120.63, 31.16],
        '石嘴山': [106.39, 39.04],
        '沈阳': [123.38, 41.8],
        '苏州': [120.62, 31.32],
        '茂名': [110.88, 21.68],
        '嘉兴': [120.76, 30.77],
        '长春': [125.35, 43.88],
        '胶州': [120.03336, 36.264622],
        '银川': [106.27, 38.47],
        '张家港': [120.555821, 31.875428],
        '三门峡': [111.19, 34.76],
        '锦州': [121.15, 41.13],
        '南昌': [115.89, 28.68],
        '柳州': [109.4, 24.33],
        '三亚': [109.511909, 18.252847],
        '自贡': [104.778442, 29.33903],
        '吉林': [126.57, 43.87],
        '阳江': [111.95, 21.85],
        '泸州': [105.39, 28.91],
        '西宁': [101.74, 36.56],
        '宜宾': [104.56, 29.77],
        '呼和浩特': [111.65, 40.82],
        '成都': [104.06, 30.67],
        '大同': [113.3, 40.12],
        '镇江': [119.44, 32.2],
        '桂林': [110.28, 25.29],
        '张家界': [110.479191, 29.117096],
        '宜兴': [119.82, 31.36],
        '北海': [109.12, 21.49],
        '西安': [108.95, 34.27],
        '金坛': [119.56, 31.74],
        '东营': [118.49, 37.46],
        '牡丹江': [129.58, 44.6],
        '遵义': [106.9, 27.7],
        '绍兴': [120.58, 30.01],
        '扬州': [119.42, 32.39],
        '常州': [119.95, 31.79],
        '潍坊': [119.1, 36.62],
        '重庆': [106.54, 29.59],
        '台州': [121.420757, 28.656386],
        '南京': [118.78, 32.04],
        '滨州': [118.03, 37.36],
        '贵阳': [106.71, 26.57],
        '无锡': [120.29, 31.59],
        '本溪': [123.73, 41.3],
        '克拉玛依': [84.77, 45.59],
        '渭南': [109.5, 34.52],
        '马鞍山': [118.48, 31.56],
        '宝鸡': [107.15, 34.38],
        '焦作': [113.21, 35.24],
        '句容': [119.16, 31.95],
        '北京': [116.38402, 39.96261],
        '徐州': [117.2, 34.26],
        '衡水': [115.72, 37.72],
        '包头': [110, 40.58],
        '绵阳': [104.73, 31.48],
        '乌鲁木齐': [87.68, 43.77],
        '枣庄': [117.57, 34.86],
        '杭州': [120.19, 30.26],
        '淄博': [118.05, 36.78],
        '鞍山': [122.85, 41.12],
        '溧阳': [119.48, 31.43],
        '库尔勒': [86.06, 41.68],
        '安阳': [114.35, 36.1],
        '开封': [114.35, 34.79],
        '济南': [117, 36.65],
        '德阳': [104.37, 31.13],
        '温州': [120.65, 28.01],
        '九江': [115.97, 29.71],
        '邯郸': [114.47, 36.6],
        '临安': [119.72, 30.23],
        '兰州': [103.73, 36.03],
        '沧州': [116.83, 38.33],
        '临沂': [118.35, 35.05],
        '南充': [106.110698, 30.837793],
        '天津': [117.2, 39.13],
        '富阳': [119.95, 30.07],
        '泰安': [117.13, 36.18],
        '诸暨': [120.23, 29.71],
        '郑州': [113.65, 34.76],
        '哈尔滨': [126.63, 45.75],
        '聊城': [115.97, 36.45],
        '芜湖': [118.38, 31.33]


    };


    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                  //  name: data[i].name,
                    value: geoCoord,       //必须有value的值表示坐标
                    info: data[i].info,
                    time: data[i].time

                });
            }
        }
        return res;
    };

    option = {

        // title: {
        //     text: '全国主要城市空气质量',
        //     subtext: 'data from PM25.in',
        //     sublink: 'http://www.pm25.in',
        //     left: 'center',
        //     textStyle: {
        //         color: '#fff'
        //     }
        // },
        // tooltip: {
        //     trigger: 'item',
        //     show: true,
        //     position:'top',
        //     backgroundColor:'rgba(0,0,0,0.3)',
        //     padding: [5, 10],
        //     textStyle:{
        //         fontFamily:'Microsoft YaHei',
        //         lineHeight:56,
        //         fontSize:12
        //
        //     },
        //     formatter: function (params) {
        //         console.log(params);
        //         return '显示的->信息<br/>施工原因：'+params.data.info;
        //
        //     }
        // },
        tooltip:{
            trigger: 'item',             //series.tooltips仅在设置了option.tooltip.trigger:'item'时有效
            show: false                  //设置show：false是为了不让其他series没有设置tooltips的元素显示
        },
        GLMap: {
            roam: true

        },
        series: [
            //     {
            //     name: 'pm2.5',
            //     type: 'scatter',
            //     coordinateSystem: 'GLMap',
            //      data: convertData(data),
            //     symbolSize: function (val) {
            //         return val[2] / 10;
            //     },
            //     label: {
            //         normal: {
            //             formatter: '{b}',
            //             position: 'right',
            //             show: false
            //         },
            //         emphasis: {
            //             show: true
            //         }
            //     },
            //     itemStyle: {
            //         normal: {
            //             color: '#ddb926'
            //         }
            //     }
            // },
            {
                name: '城市主要道路',
                type: 'effectScatter',
                coordinateSystem: 'GLMap',
                data: convertData(data),
                //        data:[
                //            [116.38402, 39.96261],
                //            [117.2, 39.13],
                //            [119.95, 30.07],
                //            [117.13, 36.18],
                //            [120.23, 29.71],
                //            [113.65, 34.76],
                //            [126.63, 45.75],
                //            [115.97, 36.45],
                //            [118.38, 31.33]
                //
                //        ],
                symbolSize: 15,
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'fill'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'top',
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ff7633',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                zlevel: 1,
                tooltip: {
                    trigger: 'item',
                    show: true,
                    position: 'top',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    padding: [5, 10],
                    textStyle: {
                        fontFamily: 'Microsoft YaHei',
                        lineHeight: 56,
                        fontSize: 12
                    },
                    formatter: function (params) {
                        // console.log(params);
                        return '施工时间：'+ params.data.time +'<br/>施工原因：' + params.data.info;

                    }
                }
            },
            {
                name: '其他道路',
                type: 'effectScatter',
                coordinateSystem: 'GLMap',
                tooltips: {
                    show: false
                },
                data: [
                    [114.35, 36.1],
                    [114.35, 34.79],
                    [117, 36.65]
                ],
                symbolSize: 15,
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                // label: {
                //     normal: {
                //         formatter: '{b}',
                //         position: 'right',
                //         show: false
                //     }
                // },
                itemStyle: {
                    normal: {
                        color: '#ffee33',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                zlevel: 1
            },
            {
                type: 'lines',
                coordinateSystem: 'GLMap',
                polyline: true,
                data: [
                    [[116.3979148865, 39.9023620985], [116.4125061035, 39.9028888489], [116.4241790771, 39.9055225397], [116.4229774475, 39.9200718569]],
                    [[116.3811779022, 39.9314589847], [116.4039230347, 39.9260618538], [116.4207458496, 39.907]]

                ],
                // large: true,
                tooltips: {
                    show: false
                },
                largeThreshold: 100,
                // effect: {
                //     show: true,
                //     period: 6,
                //     trailLength: 0.4,
                //     symbolSize: 10,
                //     // color: '#ffee33',
                //     symbol:'roundRect'  //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                // },
                // lineStyle: {
                //     normal: {
                //         color: '#fa4e5d',
                //         width: 0,
                //         curveness: 0.2
                //     }
                // },
                effect: {
                    show: true,
                    period: 3,
                    trailLength: 0.1,
                    opacity: 0.5,
                    symbolSize: 10,
                },
                lineStyle: {
                    normal: {
                        color: '#00F8FF',
                        width: 2,
                        //  curveness: 0.2  设置两个端点之前的线段的曲折程度,当多个点连成线段时，即polyline: true时无效
                    }
                },
            }
        ]

    };
    optionLine = {
        tooltip:{
            trigger: 'item',             //series.tooltips仅在设置了option.tooltip.trigger:'item'时有效
            show: false                  //设置show：false是为了不让其他series没有设置tooltips的元素显示
        },
        GLMap: {
            roam: true
        },
        series: [
            {
                type: 'lines',
                coordinateSystem: 'GLMap',
                polyline: true,
                data: [
                    [
                    [109.2041015625, 32.3057060139],
                    [110.4345703125, 34.2345123624],
                    [110.2807617188, 35.4248679193],
                    [109.7973632813, 37.3526928037],
                    [108.7646484375, 36.7564903295],
                    [108.5009765625, 35.7465122599],
                    [109.2041015625, 32.3057060139]
                    ]

                ],
                tooltips: {
                    show: false
                },
                largeThreshold: 100,
                effect: {
                    show: true,
                    period: 3,
                    trailLength: 0.1,
                    opacity: 0.5,
                    symbolSize: 10,
                },
                lineStyle: {
                    normal: {
                        color: '#936D92',
                        width: 5,
                        //  curveness: 0.2  设置两个端点之前的线段的曲折程度,当多个点连成线段时，即polyline: true时无效
                    }
                },
            }
        ]

    };

    var echartslayer = new EchartsLayer(map);
    echartslayer.chart.setOption(option);

    //根据地图级别控制在不同级别显示不同的线数据
    map.on('zoomend',function(){
        console.log('------'+map.getZoom()+'--------');
        if(map.getZoom() < 8) {
            echartslayer.chart.setOption(optionLine);
        }
    })


})

angular.module("construction", ["navApp"]).controller("constructionController", ["$scope", "$location", '$timeout', "$anchorScroll", function ($scope, $location, $timeout, $anchorScroll) {
    $scope.locFlag = 'onlineUseFlag';
    $scope.provinceArr = province;
    $scope.curCity = '北京市';
    $scope.cityPanel = false;
    $scope.exImage = 'close';
    $scope.cityLists = [
        {name: "北京市", point: [116.40717, 39.90469]},
        {name: "杭州市", point: [120.19, 30.26]},
        {name: "河北省", point: [114.46979, 38.03599]}
    ];
    //选择城市
    $scope.toCitycenter = function (point, name) {
        map.flyTo({
            center: point,
            zoom: 11,
            speed: 1.5
        });
        $scope.curCity = name;
    }
    //隐藏显示城市列表
    $scope.foldList = function (param) {
        $scope.cityPanel = !$scope.cityPanel;
        if (param === 'open') {
            $('.cityDis').css('background-image', 'url(../img/onlineMap/icon_arrow_normal.png)');
            $scope.exImage = 'close';
        } else {
            $('.cityDis').css('background-image', 'url(../img/onlineMap/icon_arrow_active.png)');
            $scope.exImage = 'open';
        }
    }

    //定义线图层
    $scope.originLayer = {
        "id": "road",
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
            "line-color": "rgba(20,120,255,0.8)",
            "line-width": 10
        }
    };
    $scope.addLines = function (data, id) {
        $scope.geojson = {
            "type": "FeatureCollection",
            "features": []
        };
        var source = {
            "type": "Feature",
            "geometry": data,
            propertires: {
                id: 'test'
            }
        };
        $scope.geojson.features.push(source);
        map.getSource(id).setData($scope.geojson);
    };
    $scope.heightLightRoad = function (data) {
        var bounds = {
            type: 'FeatureCollection',
            features: [],
        };
        if (map.getSource('road')) {
            $scope.addLines(data, 'road');
        } else {
            var obj = $scope.originLayer;
            obj.id = 'road';
            obj.paint['line-color'] = 'red';

            var source = {
                "type": "geojson",
                "data": {
                    "type": "Feature",
                    "properties": {},
                    "geometry": data,
                }
            };
            $scope.originLayer.source = source;
            map.addLayer($scope.originLayer);
        }
        var pointFeature = turf.lineString(data.coordinates);
        bounds.features.push(pointFeature);
        var bbox = turf.bbox(bounds);
        var v2 = new mapboxgl.LngLatBounds([bbox[0], bbox[1]], [bbox[2], bbox[3]]);
        map.fitBounds(v2, {padding: 50});
    };


    //设置popup的位置参数
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
    //定义popup
    var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
        offset: popupOffsets
    });
    //添加popup显示内容
    $scope.popConstructionInfomation = function (data, geo) {
        var loc = [];
        var div = window.document.createElement('div');
        var description = decodeURI(data.features[0].properties.construction_desc);
        var date = decodeURIComponent(data.features[0].properties.construction_time);
        var time = date.replace(/\+/g, '');
        loc.push(geo.coordinates[0][0]);
        loc.push(geo.coordinates[0][1]);
        console.log(loc);
        div.innerHTML =
            '<div class="feePopDeep">施工道路：<br/>施工长度：<br/>施工时间：' + time + ' <br/>施工原因：' + description + '</div>'
            + '<div  class="tipPopDeep"></div>';
        popup.setLngLat(loc)
            .setDOMContent(div)
            .addTo(map);
    };

    var open = 1;                       //显示or隐藏状态变量
    var preId = '';                     //记录上一次点击的唯一标识
    //点击施工道路点图层事件
    map.on('click', 'construction_Layer', function (e) {
        //console.log(e);
        var geo = JSON.parse(e.features[0].properties.geometroy);
        var linkId = e.features[0].properties.link_pid;
        if (preId == linkId) {
            if (open == 1) {
                //  $scope.heightLightRoad(geo);
                $scope.popConstructionInfomation(e, geo);
                open = 0;
            } else {
                map.getCanvas().style.cursor = '';
                popup.remove();
                open = 1;
            }
        } else {
            preId = linkId;
            $scope.popConstructionInfomation(e, geo);
            open = 0;
        }
    })
    //改变地图级别
    $scope.changeZoom = function (arg) {
        var nowZoom = map.getZoom();
        if (arg === 'add') {
            map.setZoom(nowZoom + 1);
        } else {
            map.setZoom(nowZoom - 1);
        }
    };
}]);
