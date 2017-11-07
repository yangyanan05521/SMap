var map = new mapboxgl.Map({
    container: 'map',
    style: constructionLayer,
    zoom: 11,
    center: [ 116.38402, 39.96261 ],
    maxZoom: 17,
    minZoom: 5,
    pitch: 0
});

angular.module("construction",["navApp"]).controller("constructionController",["$scope","$location",'$timeout',"$anchorScroll",function (
    $scope,$location,$timeout,$anchorScroll) {
    $scope.locFlag = 'onlineUseFlag';
    $scope.provinceArr = province;
    $scope.nowProvince = '天津';
    $scope.captureArr = ['A','B','C','F','G','H','J','L','N','Q','S','T','X','Y','Z'];

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
            "line-width": 20
        }
    };
    $scope.addLines = function (data,id) {
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
        if(map.getSource('road')){
            $scope.addLines(data,'road');
        }else{
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
        var  pointFeature = turf.lineString(data.coordinates);
        bounds.features.push(pointFeature);
        var bbox = turf.bbox(bounds);
        var v2 = new mapboxgl.LngLatBounds([bbox[0], bbox[1]], [bbox[2], bbox[3]]);
        map.fitBounds(v2,{padding: 50} );
    };

    var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });
    $scope.popConstructionInfomation = function(data,geo){
        var loc = [];
        var div = window.document.createElement('div');
    //    div.style.cssText='background-color: rgba(0,0,0,0.5);color:#FFFFFF;padding:0px;margin:0px';
        var description = decodeURI(data.features[0].properties.construction_desc);
      /*  console.log(data.features[0].properties.construction_time);*/
        var date = decodeURIComponent(data.features[0].properties.construction_time);
        var time = date.replace(/\+/g, '');
        loc.push(geo.coordinates[0][0]);
        loc.push(geo.coordinates[0][1]);
        div.innerHTML =
            '<div class="feePopDeep">'+time+description+'</div>'
            +'<div  class="tipPopDeep"></div>';
        popup.setLngLat(loc)
            .setDOMContent(div)
            .addTo(map);
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
    var open = 1;
    map.on('click','construction_Layer',function (e) {
      /*  console.log(e);*/
        var geo = JSON.parse(e.features[0].properties.geometroy);
        // console.log(e.features[0].properties.geometroy);
        if(open == 1){
          //  $scope.heightLightRoad(geo);
            $scope.popConstructionInfomation(e,geo);
            open = 0;
        }else{
            map.getCanvas().style.cursor = '';
            popup.remove();
            open = 1;

        }


    })
    $scope.changeZoom = function (arg) {
        var nowZoom = map.getZoom();
        if (arg === 'add') {
            map.setZoom(nowZoom + 1);
        } else {
            map.setZoom(nowZoom - 1);
        }
    };
}]);
