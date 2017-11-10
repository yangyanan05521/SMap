var map = new mapboxgl.Map({
    container: 'map',
    style: trafficLimitedLayer,
    zoom: 10,
    center: [ 116.38402, 39.96261 ],
    maxZoom: 17,
    minZoom: 5,
    repaint: true,
    pitch: 0
});
angular.module("dailyProduction",["navApp"]).controller("dailyProductionController",["$scope","$location","$timeout","$anchorScroll",function (
    $scope,$location,$timeout,$anchorScroll) {
    $scope.locFlag = 'onlineUseFlag';
    $scope.provinceArr = province;
    $scope.nowProvince = '北京';
    $scope.captureArr = ['A','B','C','F','G','H','J','L','N','Q','S','T','X','Y','Z'];
    $scope.searchParameter = {};
    $scope.lineLayer = {
        "id": 'line_Limited_Layer',
        "type": 'line',
        "source" : "platelimit",
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
        "source" : "platelimit",
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

    $scope.contactParameter = function () {
        var tmpParam = $scope.getSearchParameter();
        if(tmpParam.type.length === 0){
            App.Config.platelimit ='type=0&parm=0';
        }else{
            App.Config.platelimit = 'type=' +tmpParam.type + '&parm=' + tmpParam.parm;
        }
        map.style.sourceCaches.platelimit._source.tiles[0] = 'http://fastmap.navinfo.com/smap_p/plateres/web/condition/' +
            '{z}/{x}/{y}?' + App.Config.platelimit;
        map.removeLayer('polygon_Limited_Layer');
        map.removeLayer('line_Limited_Layer');
        $timeout(function () {
            map.addLayer($scope.polygonLayer);
            map.addLayer($scope.lineLayer);
        },0);
    };

    $scope.locationProvince = function (data) {
        //此处注释掉是因为其他限制使用其他省份数据
        /* $scope.provincePid = data.id;
         $scope.nowProvince = data.name;
         map.flyTo({center:[ data.point.x, data.point.y]});*/
    };
    $scope.goCapture = function (data){
        var local = 'capture'+data;
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

}]);

