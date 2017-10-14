var statistic = angular.module("statistic", ['dataService', 'nvd3', 'angular-popups', 'navApp']);

statistic.controller("statisticController", ['$scope', 'dsEdit', '$location', "$http", function ($scope, dsEdit, $location, $http) {
    //初始化表格数据
    $scope.poiData = [];
    $scope.roadData = [];
    $scope.dayProduceData = [];
    $scope.captionDetail = [];
    $scope.poiCap = [];
    $scope.roadCap = [];
    $scope.convListId = '';
    $scope.runtimeId = '';
    $scope.thirdParam = '';
    $scope.oneParam = '';

    //饼图参数配置
    $scope.options= {
        chart: {
            type: "pieChart",
            height: 200,
            showLabels: true,
            showLegend: false,
            duration: 500,
            labelThreshold: 0.01,
            x: function (d) {
                return d.key;
            },
            y: function (d) {
                return d.y;
            },
            labelSunbeamLayout: true,
                legend: {
                 margin: {
                    top:-10,
                    right:0,
                    bottom: 0,
                    left: 0
                },
            },
            color:['#FFA657','#FFD0A1','#6CBD6C']
        }
    }
    $scope.chartPoitop = [];
    $scope.chartPoibot = [] ;
    $scope.chartRoadtop = [];
    $scope.chartRoadbot = [] ;
    $scope.data1 = [
        {
            key: "25%",
            y: 8
        },
        {
            key: "30%",
            y: 3
        },

        {
            key: "12%",
            y: 9
        }

    ];

    //初始化数据
    $http.post('http://192.168.15.41:9999/smapapi/collect/smapquerystat?parm={"type":"S_ALL_LIST"}').then(function (data) {
        var static = data.data;
        $scope.dayProduceData = static;
        $scope.convListId = static[0].conv_list_id;

        // $http.post('http://192.168.15.41:9999/smapapi/collect/smapquerystat?parm={"type":"S_FULL_STAT","conv_list_id":' + $scope.convListId + '}').then(function (data) {
        //     $('.hoverStyle li').eq(0).addClass('selected');
        //     var val = data.data;
        //     $scope.poiData = val.poi;
        //     $scope.roadData = val.road;
        // });
        $http.post('testS1.json').then(function (data) {
            $('.hoverStyle li').eq(0).addClass('selected');
            var val = data.data;
            $scope.poiData = val.poi;
            $scope.roadData = val.road;
            var addCount = parseInt(val.poi.poi_add);
            var updateCount = parseInt(val.poi.poi_update);
            var delCount = parseInt(val.poi.poi_del) ;
            var sum = addCount + updateCount + delCount;
            var addPer = (addCount / sum * 100) ;
            var updatePer = (updateCount / sum * 100) ;
            var delPer = (delCount / sum * 100);
            var roadAdd = parseInt(val.road.road_add);
            var roadupdate = parseInt(val.road.road_update);
            var roaddel = parseInt(val.road.road_del) ;
            var sumRoad = roadAdd + roadupdate + roaddel ;
            var roadAddper = (roadAdd / sumRoad * 100) ;
            var roadUpdateper = (roadupdate / sumRoad * 100) ;
            var roadDelper = (roaddel / sumRoad * 100) ;
            $scope.chartPoitop = [
                {
                    key: addPer.toFixed(2)+'%' ,
                    y: addCount
                },
                {
                    key: updatePer.toFixed(2)+'%',
                    y: updateCount
                },
                {
                    key: delPer.toFixed(2)+'%' ,
                    y: delCount
                }
            ];
            $scope.chartRoadtop = [
                {
                    key: roadAddper.toFixed(2)+'%' ,
                    y: roadAdd
                },
                {
                    key: roadUpdateper.toFixed(2)+'%',
                    y: roadupdate
                },
                {
                    key: roadDelper.toFixed(2)+'%' ,
                    y: roaddel
                }
            ];
        })
    }).then(function () {
        $http.post('http://192.168.15.41:9999/smapapi/collect/smapquerystat?parm={"type":"S_ONE_LIST","conv_list_id":' + $scope.convListId + '}').then(function (data) {
            var caption = data.data;
            $scope.captionDetail = caption;
            $scope.runtimeId = caption[0].runtime_id;
            $scope.oneParam = JSON.stringify({
                type: "S_ONE_STAT",
                runtimeid: $scope.runtimeId
            });
            $http.post('http://192.168.15.41:9999/smapapi/collect/smapquerystat?parm='+$scope.oneParam).then(function (data) {
                var oneState = data.data;
                $scope.poiCap = oneState.poi;
                $scope.roadCap = oneState.road;
            });
        });
    });

    //点击日出品列表
    $scope.showStaticInfo = function (item, index) {
        $('.hoverStyle li').eq(index).addClass('selected').siblings().removeClass('selected');
        console.log(item.conv_list_id);
        $http.post('http://192.168.15.41:9999/smapapi/collect/smapquerystat?parm={"type":"S_FULL_STAT","conv_list_id":' + item.conv_list_id + '}').then(function (data) {
            var val = data.data;
            $scope.poiData = val.poi;
            $scope.roadData = val.road;
            console.log(val);
        }).then(function () {
            $http.post('http://192.168.15.41:9999/smapapi/collect/smapquerystat?parm={"type":"S_ONE_LIST","conv_list_id":' + item.conv_list_id + '}').then(function (data) {
                var dataList = data.data;
                $scope.captionDetail = dataList;
                if(dataList[0]) {                     //存在无省份的情况，无runtime_id
                    var runId = dataList[0].runtime_id;
                    $scope.oneParam = JSON.stringify({
                        type: "S_ONE_STAT",
                        runtimeid: runId
                    });
                    $http.post('http://192.168.15.41:9999/smapapi/collect/smapquerystat?parm=' + $scope.oneParam).then(function (data) {
                        var oneState = data.data;
                        $scope.poiCap = oneState.poi;
                        $scope.roadCap = oneState.road;
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
        $http.post('http://192.168.15.41:9999/smapapi/collect/smapquerystat?parm=' + $scope.thirdParam).then(function (data) {
            var oneState = data.data;
            $scope.poiCap = oneState.poi;
            $scope.roadCap = oneState.road;
        });
    }


}]);