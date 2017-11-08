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
    $scope.curCity = '北京市';
    $scope.cityLists = [
        {name: "北京市", point: [116.40717,39.90469] },
        {name: "杭州市", point: [120.19,30.26] },
        {name: "河北省", point: [114.46979,38.03599] }
    ];
    $scope.toCitycenter = function (point,name) {
        map.flyTo({
            center: point,
            zoom: 11,
            speed: 1.5
        });
        $scope.curCity = name;
    }
    $scope.foldList = function () {
       var status = $('.selectedCity').css('display');
       if(status == 'none'){
           $('.selectedCity').css('display','block');
           $('.cityDis').css('background-image','url(../img/onlineMap/icon_arrow_active.png)');
       }else{
           $('.selectedCity').css('display','none');
           $('.cityDis').css('background-image','url(../img/onlineMap/icon_arrow_normal.png)');
       }
    }

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
            "line-width": 10
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
    var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
        offset: popupOffsets
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
        console.log(loc);
        div.innerHTML =
            '<div class="feePopDeep">施工道路：<br/>施工长度：<br/>施工时间：'+time+' <br/>施工原因：'+description+'</div>'
            +'<div  class="tipPopDeep"></div>';
        popup.setLngLat(loc)
            .setDOMContent(div)
            .addTo(map);
    };

    var open = 1;
    var preId = '';
    map.on('click','construction_Layer',function (e) {
        //console.log(e);
        var geo = JSON.parse(e.features[0].properties.geometroy);
        var linkId = e.features[0].properties.link_pid;
        if(preId == linkId){
            if(open == 1){
                //  $scope.heightLightRoad(geo);
                $scope.popConstructionInfomation(e,geo);
                open = 0;
            }else{
                map.getCanvas().style.cursor = '';
                popup.remove();
                open = 1;
            }
        }else{
            preId = linkId;
            $scope.popConstructionInfomation(e,geo);
            open = 0;
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
