var statistic = angular.module("statistic", ['dataService', 'nvd3', 'angular-popups', 'navApp']);

statistic.controller("statisticController", ['$scope', 'dsEdit', '$location', "$http", function ($scope, dsEdit, $location, $http) {
    //初始化表格数据
    $scope.poiData = [];
    $scope.roadData = [];
    $scope.sumPoi = [] ;
    $scope.sumRoad = [];
    $scope.dayProduceData = [];
    $scope.captionDetail = [];
    $scope.poiCap = [];
    $scope.roadCap = [];
    $scope.convListId = '';
    $scope.runtimeId = '';
    $scope.thirdParam = '';
    $scope.oneParam = '';

    //饼图参数配置
    $scope.options = {
        chart: {
            type: "pieChart",
            height: 240,
            showLabels: true,
            showLegend: false,
            duration: 500,
            labelThreshold: 0.01,
            donut:true,
            donutRatio:0.3,
            x: function (d) {
                return d.key;
            },
            y: function (d) {
                return d.y;
            },
            labelSunbeamLayout: false,
            legend: {
                margin: {
                    top: -10,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
            },
            color: ['#36aeea', '#67ba2f', '#ffae45']
        }
    }
    $scope.chartPoitop = [];
    $scope.chartPoibot = [];
    $scope.chartRoadtop = [];
    $scope.chartRoadbot = [];
    var requestUrl = 'http://fastmap.navinfo.com/smap/collect/smapquerystat';

    //初始化数据
    $http.post(requestUrl+'?parm={"type":"S_ALLDB_STAT"}').then(function (data) {
        var val = data.data;
        if (val.poi.poi_add == '') {
            val.poi.poi_add = 0;
        }
        if (val.poi.poi_update == '') {
            val.poi.poi_update = 0;
        }
        if (val.poi.poi_del == '') {
            val.poi.poi_del = 0;
        }
        if (val.road.road_add == '') {
            val.road.road_add = 0;
        }
        if (val.road.road_update == '') {
            val.road.road_update = 0;
        }
        if (val.road.road_del == '') {
            val.road.road_del = 0;
        }
        $scope.sumPoi = val.poi;
        $scope.sumRoad = val.road;
      //  console.log(val);
    })
    $http.post(requestUrl+'?parm={"type":"S_ALL_LIST"}').then(function (data) {
        var static = data.data;
        console.log(static);
        $scope.dayProduceData = static;
        $scope.convListId = static[0].conv_list_id;
        //根据conv_list_id读取总数据
        $http.post(requestUrl+'?parm={"type":"S_FULL_STAT","conv_list_id":' + $scope.convListId + '}').then(function (data) {
            $('.hoverStyle li').eq(0).addClass('selected');
            var val = data.data;
            $scope.poiData = val.poi;
            $scope.roadData = val.road;
            if (val.poi.poi_add == '') {
                val.poi.poi_add = 0;
            }
            if (val.poi.poi_update == '') {
                val.poi.poi_update = 0;
            }
            if (val.poi.poi_del == '') {
                val.poi.poi_del = 0;
            }
            if (val.road.road_add == '') {
                val.road.road_add = 0;
            }
            if (val.road.road_update == '') {
                val.road.road_update = 0;
            }
            if (val.road.road_del == '') {
                val.road.road_del = 0;
            }

            //获取poi饼图数据
            var addCount = parseFloat(val.poi.poi_add);
            var updateCount = parseFloat(val.poi.poi_update);
            var delCount = parseFloat(val.poi.poi_del);
            $scope.pieData(addCount, updateCount, delCount, 'poiTop');
            //获取road饼图数据
            var roadAdd = parseFloat(val.road.road_add);
            var roadupdate = parseFloat(val.road.road_update);
            var roaddel = parseFloat(val.road.road_del);
            $scope.pieData(roadAdd, roadupdate, roaddel, 'roadTop');

        })
    }).then(function () {
        $http.post(requestUrl+'?parm={"type":"S_ONE_LIST","conv_list_id":' + $scope.convListId + '}').then(function (data) {
            var caption = data.data;
            $scope.captionDetail = caption;
            $scope.runtimeId = caption[0].runtime_id;
            $scope.oneParam = JSON.stringify({
                type: "S_ONE_STAT",
                runtimeid: $scope.runtimeId
            });
            $http.post(requestUrl+'?parm=' + $scope.oneParam).then(function (data) {
                $('.hoverStylePro li').eq(0).addClass('selected');
                var oneState = data.data;
                $scope.poiCap = oneState.poi;
                $scope.roadCap = oneState.road;

                if (oneState.poi.poi_add == '') {
                    oneState.poi.poi_add = 0;
                }
                if (oneState.poi.poi_update == '') {
                    oneState.poi.poi_update = 0;
                }
                if (oneState.poi.poi_del == '') {
                    oneState.poi.poi_del = 0;
                }
                if (oneState.road.road_add == '') {
                    oneState.road.road_add = 0;
                }
                if (oneState.road.road_update == '') {
                    oneState.road.road_update = 0;
                }
                if (oneState.road.road_del == '') {
                    oneState.road.road_del = 0;
                }

                //获取poi饼图数据
                var addCount = parseFloat(oneState.poi.poi_add);
                var updateCount = parseFloat(oneState.poi.poi_update);
                var delCount = parseFloat(oneState.poi.poi_del);
                $scope.pieData(addCount, updateCount, delCount, 'poiBot');
                //获取road饼图数据
                var roadAdd = parseFloat(oneState.road.road_add);
                var roadupdate = parseFloat(oneState.road.road_update);
                var roaddel = parseFloat(oneState.road.road_del);
                $scope.pieData(roadAdd, roadupdate, roaddel, 'roadBot');
            });
        });
    });

    //点击日出品列表
    $scope.showStaticInfo = function (item, index) {
        $('.hoverStyle li').eq(index).addClass('selected').siblings().removeClass('selected');
        $http.post(requestUrl+'?parm={"type":"S_FULL_STAT","conv_list_id":' + item.conv_list_id + '}').then(function (data) {
            var val = data.data;
            $scope.poiData = val.poi;
            $scope.roadData = val.road;
            if (val.poi.poi_add == '') {
                val.poi.poi_add = 0;
            }
            if (val.poi.poi_update == '') {
                val.poi.poi_update = 0;
            }
            if (val.poi.poi_del == '') {
                val.poi.poi_del = 0;
            }
            if (val.road.road_add == '') {
                val.road.road_add = 0;
            }
            if (val.road.road_update == '') {
                val.road.road_update = 0;
            }
            if (val.road.road_del == '') {
                val.road.road_del = 0;
            }

            //获取poi饼图数据
            var addCount = parseFloat(val.poi.poi_add);
            var updateCount = parseFloat(val.poi.poi_update);
            var delCount = parseFloat(val.poi.poi_del);
            $scope.pieData(addCount, updateCount, delCount, 'poiTop');
            //获取road饼图数据
            var roadAdd = parseFloat(val.road.road_add);
            var roadupdate = parseFloat(val.road.road_update);
            var roaddel = parseFloat(val.road.road_del);
            $scope.pieData(roadAdd, roadupdate, roaddel, 'roadTop');

        }).then(function () {
            $http.post(requestUrl+'?parm={"type":"S_ONE_LIST","conv_list_id":' + item.conv_list_id + '}').then(function (data) {
                var dataList = data.data;
                $scope.captionDetail = dataList;
                if (dataList[0]) {                     //存在无省份的情况，无runtime_id
                    var runId = dataList[0].runtime_id;
                    $scope.oneParam = JSON.stringify({
                        type: "S_ONE_STAT",
                        runtimeid: runId
                    });
                    $http.post(requestUrl+'?parm=' + $scope.oneParam).then(function (data) {
                        $('.hoverStylePro li').eq(0).addClass('selected');
                        var oneState = data.data;
                        $scope.poiCap = oneState.poi;
                        $scope.roadCap = oneState.road;
                        if (oneState.poi.poi_add == '') {
                            oneState.poi.poi_add = 0;
                        }
                        if (oneState.poi.poi_update == '') {
                            oneState.poi.poi_update = 0;
                        }
                        if (oneState.poi.poi_del == '') {
                            oneState.poi.poi_del = 0;
                        }
                        if (oneState.road.road_add == '') {
                            oneState.road.road_add = 0;
                        }
                        if (oneState.road.road_update == '') {
                            oneState.road.road_update = 0;
                        }
                        if (oneState.road.road_del == '') {
                            oneState.road.road_del = 0;
                        }

                        //获取poi饼图数据
                        var addCount = parseFloat(oneState.poi.poi_add);
                        var updateCount = parseFloat(oneState.poi.poi_update);
                        var delCount = parseFloat(oneState.poi.poi_del);
                        $scope.pieData(addCount, updateCount, delCount, 'poiBot');
                        //获取road饼图数据
                        var roadAdd = parseFloat(oneState.road.road_add);
                        var roadupdate = parseFloat(oneState.road.road_update);
                        var roaddel = parseFloat(oneState.road.road_del);
                        $scope.pieData(roadAdd, roadupdate, roaddel, 'roadBot');
                    });
                }
            });
        });
    }

    //点击省份列表
    $scope.showProInfo = function (item, index) {
        $('.hoverStylePro li').eq(index).addClass('selected').siblings().removeClass('selected');
        $scope.thirdParam = JSON.stringify({
            type: "S_ONE_STAT",
            runtimeid: item.runtime_id
        });
        $http.post(requestUrl+'?parm=' + $scope.thirdParam).then(function (data) {
            var oneState = data.data;
            $scope.poiCap = oneState.poi;
            $scope.roadCap = oneState.road;
            if (oneState.poi.poi_add == '') {
                oneState.poi.poi_add = 0;
            }
            if (oneState.poi.poi_update == '') {
                oneState.poi.poi_update = 0;
            }
            if (oneState.poi.poi_del == '') {
                oneState.poi.poi_del = 0;
            }
            if (oneState.road.road_add == '') {
                oneState.road.road_add = 0;
            }
            if (oneState.road.road_update == '') {
                oneState.road.road_update = 0;
            }
            if (oneState.road.road_del == '') {
                oneState.road.road_del = 0;
            }

            //获取poi饼图数据
            var addCount = parseFloat(oneState.poi.poi_add);
            var updateCount = parseFloat(oneState.poi.poi_update);
            var delCount = parseFloat(oneState.poi.poi_del);
            $scope.pieData(addCount, updateCount, delCount, 'poiBot');
            //获取road饼图数据
            var roadAdd = parseFloat(oneState.road.road_add);
            var roadupdate = parseFloat(oneState.road.road_update);
            var roaddel = parseFloat(oneState.road.road_del);
            $scope.pieData(roadAdd, roadupdate, roaddel, 'roadBot');
        });
    }

    //饼图poi数据
    $scope.pieData = function (addCount, updateCount, delCount, param) {
        var sum = addCount + updateCount + delCount;
        var addPer = (addCount / sum * 100);
        var updatePer = (updateCount / sum * 100);
        var delPer = (delCount / sum * 100);
        if (param === 'poiTop') {
            $scope.chartPoitop = [
                {
                    key: addPer.toFixed(2) + '%',
                    y: addCount
                },
                {
                    key: updatePer.toFixed(2) + '%',
                    y: updateCount
                },
                {
                    key: delPer.toFixed(2) + '%',
                    y: delCount
                }
            ];
        } else if (param === 'roadTop') {
            $scope.chartRoadtop = [
                {
                    key: addPer.toFixed(2) + '%',
                    y: addCount
                },
                {
                    key: updatePer.toFixed(2) + '%',
                    y: updateCount
                },
                {
                    key: delPer.toFixed(2) + '%',
                    y: delCount
                }
            ];
        } else if (param === 'poiBot') {
            $scope.chartPoibot = [
                {
                    key: addPer.toFixed(2) + '%',
                    y: addCount
                },
                {
                    key: updatePer.toFixed(2) + '%',
                    y: updateCount
                },
                {
                    key: delPer.toFixed(2) + '%',
                    y: delCount
                }
            ];
        } else {
            $scope.chartRoadbot = [
                {
                    key: addPer.toFixed(2) + '%',
                    y: addCount
                },
                {
                    key: updatePer.toFixed(2) + '%',
                    y: updateCount
                },
                {
                    key: delPer.toFixed(2) + '%',
                    y: delCount
                }
            ];
        }
    }


}]);
