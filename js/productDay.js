/**
 * Created by liwanchong on 2017/3/9.
 */


var tollGate = angular.module("tollGate", ['dataService', 'nvd3', 'angular-popups','navApp']);
tollGate.controller("tollGateController", ['$scope', 'dsEdit', '$location', '$anchorScroll',"$http", function (
  $scope, dsEdit, $location, $anchorScroll, $http) {
    $scope.locFlag = 'productDayFlag';
    $scope.lightTime = '';
    $scope.provinceArr = province;
    $scope.captureArr = ['A','B','C','F','G','H','J','L','N','Q','S','T','X','Y','Z'];
    $scope.provincePid = 25;
    $scope.nowProvince = '青海';
    $scope.resultPageNum = 0;
    $scope.resultPageTotal = 1;
    $scope.perCount = 10;
    $scope.paging = {
        display: 'block',
    };
    $scope.endTime = '20171012';
    // 初始化地图
    var map = new mapboxgl.Map({
        container : 'map',
        style : productDay,
        zoom : 12,
        center : [ 102.436663, 35.854505],
        maxZoom : 17,
        minZoom : 5,
        pitch: 0,
        transformRequest: function (url, resourceType) {
            if(url.startsWith('http://fastmap.navinfo.com/smapapi/data/increlink')) {
                return {
                    url: url.replace('{province}',  $scope.provincePid).replace('{end_time}', $scope.endTime),
                }
            }
            if(url.startsWith('http://fastmap.navinfo.com/smapapi/data/increpoi')) {
                return {
                    url: url.replace('{province}',  $scope.provincePid).replace('{end_time}', $scope.endTime),
                }
            }
        }
    });
    map.loadImage('../img/iconPOI.png', function(error, image) {
        if (error) throw error;
        map.addImage('cat', image);
    });
    // map.on('load', function (data) {
    //     map.loadImage('../img/iconPOI.png', function(error, image) {
    //         if (error) throw error;
    //         map.addImage('cat', image);
    //     });
    // });
    $scope.goCapture = function (data){
        var local = 'capture'+data;
        $location.hash(local);
        $anchorScroll();
    };
    $scope.timeArr= [],

      // 获取省 并定位
    $scope.locationProvince = function (data) {
        $scope.provincePid = data.id;
        $scope.nowProvince = data.name;
        //恢复默认值
        $scope.resultPageNum = 0;
        map.flyTo({center:[ data.point.x, data.point.y]});
        $scope.getTimeList();
    };
    $scope.getTimeList = function () {
        var resultPageNum = $scope.resultPageNum + 1;
        $http.post('http://fastmap.navinfo.com/smapapi/data/increlist?ak=Navinfo1!&pages='+
          resultPageNum+'&percount='+$scope.perCount+'&province='+$scope.provincePid).then(function (data) {
                $scope.timeArr = data.data.data.timelist;
                $scope.resultPageTotal = Math.ceil(data.data.data.count/$scope.perCount);
        })
        // dsEdit.getProduct('data/increlist', param).then(function (data) {
        //     $scope.timeArr = data.timeList;
        //     $scope.resultPageTotal = Math.ceil(data.count/$scope.perCount);
        // });
    };
    $scope.changeZoom = function (arg) {
        var nowZoom = map.getZoom();
        if(arg === 'add'){
            map.setZoom(nowZoom+1);
        }else{
            map.setZoom(nowZoom-1);
        }
    };
    $scope.showChoosedCity = function (arg){
        if(arg==='nowCity'){
            $scope.nowCity = {
                display:'none'
            };
            $scope.choosedCity = {
                display:'block'
            };
            $scope.cityList= {
                display:'block'
            }
        }else{
            $scope.nowCity = {
                display:'block'
            };
            $scope.choosedCity ={
                display:'none'
            };
            $scope.cityList= {
                display:'none'
            };
        }
    };
    // 分页
    $scope.turnToPage = function (page) {
        switch (page){
            case 1:
                ($scope.resultPageNum < $scope.resultPageTotal) ?
                  ++$scope.resultPageNum : $scope.resultPageNum ;
                break;
            case -1:
                ($scope.resultPageNum > 0) ?
                  --$scope.resultPageNum : $scope.resultPageNum ;
                break;
            default: $scope.resultPageNum = 0;
        }
        $scope.getTimeList();
    };

    //  获取默认的时间值
    $scope.getTimeList();
    $scope.getTimeFromProvince = function (time, index) {
        $scope.lightTime = time.end_time;
        $scope.endTime = time.end_time.split("-").join("");
        if(map.getSource('increLink')) {
            map.removeSource('increLink');
        }
        if (map.getSource('increPoi')) {
            map.removeSource('increPoi');
        }
        map.addSource('increLink', productDay.sources["increLink"]);
        map.addSource('increPoi', productDay.sources["increPoi"]);
    };
}]);
