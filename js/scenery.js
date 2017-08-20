var map = new mapboxgl.Map({
    container: 'map',
    style:scenery,
    zoom: 10,
    center: [ 108.94704, 34.25943 ],
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

angular.module("scenery",['dataService', 'nvd3', 'angular-popups','navApp']).controller("sceneryController",["$scope","$location","dsEdit","$anchorScroll","$http",function (
    $scope,$location,dsEdit,$anchorScroll,$http) {
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
    $scope.nextScenery='大唐芙蓉园';
    $scope.visible='true';
    $scope.selectScenery="选择景区";
    $scope.searchParameter = {};
    $scope.linksArr = [];
    $scope.specialList=['餐饮','住宿','购物','停车场','卫生间','交通','公共服务','出入口'];
    $scope.sceondList1=['中餐厅','异域风味','地方美食','快餐','糕点','酒吧','冷饮店','咖啡/茶'];
    $scope.colorArr = ['rgba(20,120,255,0.8)', 'rgba(20,120,255,0.3)', 'rgba(20,120,255,0.3)'];
    $scope.sceneryList=[];
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
                    "coordinates":[]
                }
            }
        },
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "rgba(20,120,255,0.8)",
            "line-width": 8
        }
    };

    $scope.toggleSearch={
        display:"none",
        height:"0px"
    };


   //点击显示二级菜单
    var selected=$scope.selected;
    $scope.show=function(index){
        console.log(index);
        $scope.selected=index;

    }
    //选择景区
    $scope.toSelected=function(str){
          $scope.visible = !$scope.visible;

          $scope.changeImg={
             "background-image":"../img/onlineMap/arrow_active.png"
          }
    }

    // 获取并定位
    $scope.locationProvince = function (str) {
        if(str=='nowScenery'){
            $scope.selectScenery ='大雁塔';
            map.flyTo({center:[ 108.9642,34.21826],zoom:16});
            $scope.visible = !$scope.visible;
            $scope.getLinksFromStartToEnd();
        }else{
            $scope.selectScenery ='大唐芙蓉园';
            $scope.visible = !$scope.visible;
            map.flyTo({center:[ 108.97386,34.21252],zoom:16});
        }
    };


    // 清空
    $scope.clearLines = function () {
        var geojson = {
            "type": "FeatureCollection",
            "features": []
        };
        for (var i = 0, len = $scope.popuArr.length; i < len; i++) {
            if (map.getSource('route'+i)) {
                map.getSource('route'+i).setData(geojson);
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

    // 收费站地图散点
    $scope.createTollGateIcon = function (data) {
        $scope.clearTollGateIcon();
        for (var i = 0; i < data.length; i++) {
            var div = window.document.createElement('div');
            div.setAttribute('class','popTollGateIcon');
            div.innerHTML = i+1;
            var loc = data[i].geoJson.coordinates;
            $scope.tollGateOnMapArr[i] = new mapboxgl.Popup()
                .setLngLat(loc)
                .setDOMContent(div)
                .addTo(map);
        }
    };

    //起点图标
    $scope.createStartTollIcon = function (data){
       // console.log(data.data[0].geoJson);
        var div = window.document.createElement('div');
        div.setAttribute('class','popStartIcon');
        div.innerHTML = '1';
        var Toll = new mapboxgl.Popup({closeButton:false,closeOnClick:false})
            .setLngLat(data.data[0].pointGeoJson.coordinates)
            .setDOMContent(div)
            .addTo(map);
        $scope.popuArr.push(Toll);
    };



    //连线
    // 获取路径
    $scope.getLinksFromStartToEnd = function () {
        var bounds = {
            type: 'FeatureCollection',
            features: [],
        };
        $scope.clearLines();

        $http.post('test1.json').then(function (data) {
            // console.log(data.data[0]);
            // map.flyTo({center: data[0].pointGeoJson.coordinates});
          //  console.log(data.data.length);

            $scope.sceneryList=data.data[0];
            $scope.linksArr = data;
            $scope.createStartTollIcon(data);

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
                    map.addLayer($scope.originLayer);
                }
                var pointFeature = turf.lineString(data.data[i].geoJson.coordinates);
              //  console.log(data.data[i].geoJson.coordinates);
                bounds.features.push(pointFeature);
            }
            var bbox = turf.bbox(bounds);
            var v2 = new mapboxgl.LngLatBounds([bbox[0], bbox[1]], [bbox[2], bbox[3]]);
            map.fitBounds(v2, {padding: 50});

        })};

    $scope.getLinksFromStartToEnd = function () {
        var bounds = {
            type: 'FeatureCollection',
            features: [],
        };
        $scope.clearLines();

        $http.post('test1.json').then(function (data) {
            // console.log(data.data[0]);
            // map.flyTo({center: data[0].pointGeoJson.coordinates});
            //  console.log(data.data.length);

            $scope.linksArr = data;
            $scope.createStartTollIcon(data);

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
                    map.addLayer($scope.originLayer);
                }
                var pointFeature = turf.lineString(data.data[i].geoJson.coordinates);
                //  console.log(data.data[i].geoJson.coordinates);
                bounds.features.push(pointFeature);
            }
            var bbox = turf.bbox(bounds);
            var v2 = new mapboxgl.LngLatBounds([bbox[0], bbox[1]], [bbox[2], bbox[3]]);
            map.fitBounds(v2, {padding: 50});

        })};

    //获取景区列表
    $scope.getList= function () {


        $http.post('test2Pop.json').then(function (data) {
           //  console.log(data.data);
            $scope.sceneryList=data.data;

        })};


    //点击查询
   $scope.item=0;
   $scope.searchScenery=function(){
       if($scope.item==0){
           $scope.item=1;
       }else{
           $scope.item=0;
       }
       map.flyTo({center:[ 108.9642,34.21826],zoom:16});
       $scope.getLinksFromStartToEnd();
       $scope.getList();




   }






}]);

