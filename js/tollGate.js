/**
 * Created by liwanchong on 2017/3/9.
 */


var tollGate = angular.module("tollGate", ['dataService', 'nvd3', 'angular-popups','navApp']);
tollGate.controller("tollGateController", ['$scope', 'dsEdit', '$location', '$anchorScroll', function (
  $scope, dsEdit, $location, $anchorScroll) {
    $scope.locFlag = 'onlineUseFlag';
    $scope.param = {
        name: '福建'
    };
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
    $scope.lastClickNode = 0;
    $scope.provincePid = 1;
    $scope.provinceArr = province;
    $scope.captureArr = ['A','B','C','F','G','H','J','L','N','Q','S','T','X','Y','Z'];
    $scope.printNotice = "";
    $scope.nowProvince = '北京';
    $scope.tollGateOnMapArr= [];
    $scope.showTollGateName = [];
    $scope.resultPageNum = 0;
    $scope.resultPageTotal = 1;
    $scope.endStationStyle = {
        'border-bottom':'none'
    };
    $scope.noSearchResult = {
        display: 'none',
    };
    $scope.paging = {
        display: 'none',
    };
    $scope.chooseTollGate = {
        display: 'none'
    };
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
    $scope.linksArr = [];
    $scope.colorArr = ['rgba(20,120,255,0.8)', 'rgba(20,120,255,0.3)', 'rgba(20,120,255,0.3)'];
    $scope.exChangeInput = function(){
        var tmp = $scope.startTollGate;
        var tmpPid = $scope.startPid;
        $scope.startTollGate = $scope.endTollGate;
        $scope.startPid = $scope.endPid;
        $scope.endTollGate = tmp;
        $scope.endPid = tmpPid;
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
    //搜索div失去焦点时清空预览项
    $scope.emptyTollGate = function(){
        $scope.tollGateArr = [];
        $scope.paging = {
            display: 'none',
        };
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
        $scope.createPop(data,index);
        $scope.geojson.features.push(source);
        map.getSource(id).setData($scope.geojson);
    };
    $scope.emptyInput = function (arg) {
        if (arg === 'startStation') {
            $scope.startTollGate = '';
            $scope.startPid = '';
            $scope.PreSearchStartTollGate();
        } else {
            $scope.endTollGate = '';
            $scope.endPid = '';
            $scope.PreSearchEndTollGate();
        }
        $scope.clearLines(); // 清空地图上的数据
        $scope.tollGateArr.length = 0;
        $scope.clearTollGateIcon();
    };
    // 获取省 并定位
    $scope.locationProvince = function (data) {
        $scope.provincePid = data.id;
        $scope.nowProvince = data.name;
        map.flyTo({center:[ data.point.x, data.point.y]});
        $scope.startTollGate = '';
        $scope.startPid = '';
        $scope.endTollGate = '';
        $scope.endPid = '';
    };
    // 生成弹出框
    $scope.createPop = function (data,index) {
        var div = window.document.createElement('div');
        div.style.textAlign = 'center';
        if(index===0){
            div.innerHTML =
                '<div class="feePopDeep">'+data.fee +'元</div>' +
                '<div class="tipPopDeep"></div>';
        }else{
            div.innerHTML =
                '<div class="feePop">'+data.fee +'元</div>' +
                '<div class="tipPop"></div>';
        }
        var popup = new mapboxgl.Popup({closeOnClick: false})
          .setLngLat(data.pointGeoJson.coordinates)
          .setDOMContent(div)
          .addTo(map);
        $scope.popuArr.push(popup);
    };
    //起点图标
    $scope.createStartTollIcon = function (data){
        var div = window.document.createElement('div');
        div.setAttribute('class','popStartIcon');
        div.innerHTML = '起';
        var Toll = new mapboxgl.Popup({closeOnClick: false})
            .setLngLat(data[0].geoJson.coordinates[0])
            .setDOMContent(div)
            .addTo(map);
        $scope.popuArr.push(Toll);
    };
    //终点图标
    $scope.createEndTollIcon = function (data) {
        var div = window.document.createElement('div');
        div.setAttribute('class','popEndIcon');
        div.innerHTML = '终';
        var lastIndex = data[0].geoJson.coordinates.length - 1; //获取最后一个点的坐标
        var Toll = new mapboxgl.Popup({closeOnClick: false})
            .setLngLat(data[0].geoJson.coordinates[lastIndex])
            .setDOMContent(div)
            .addTo(map);
        $scope.popuArr.push(Toll);
    };
    // 收费站地图散点
    $scope.createTollGateIcon = function (data) {
        $scope.clearTollGateIcon();
        for (var i = 0; i < data.length; i++) {
            var div = window.document.createElement('div');
            div.setAttribute('class','popTollGateIcon');
            div.innerHTML = i+1;
            var loc = data[i].geoJson.coordinates;
            $scope.tollGateOnMapArr[i] = new mapboxgl.Popup({closeOnClick: true})
                .setLngLat(loc)
                .setDOMContent(div)
                .addTo(map);
        }
    };

    // 清空地图上的收费站
    $scope.clearTollGateIcon = function () {
        for (var i = 0; i < $scope.tollGateOnMapArr.length; i++) {
            $scope.tollGateOnMapArr[i].remove();
        }
        $scope.tollGateOnMapArr.length = 0;
    };

    // 高亮选中的收费站
    $scope.showHeightLightTollGate = function (index) {
        var div = window.document.createElement('div');
        div.setAttribute('class', 'popTollGateIconHeightLight');
        div.innerHTML = index+1;
        var loc = $scope.tollGateArr[index].geoJson.coordinates;
        // $scope.tollGateOnMapArr[index].setDOMContent(div);
        $scope.HeightLightTollGate = new mapboxgl.Popup()
            .setLngLat(loc)
            .setDOMContent(div)
            .addTo(map);

        map.flyTo({
            center: loc,
            zoom: 15,
            speed: 1.5,
        });
    };

    // 取消收费站高亮
    $scope.showNormalTollGate = function () {
       if($scope.HeightLightTollGate){
           $scope.HeightLightTollGate.remove();
       }
    };
    // 联想搜索起点
    $scope.PreSearchStartTollGate = function (e) {
        var startUrl = '';
        if(e === 'change'){
            $scope.startPid = '';
        }
        if ($scope.endPid) {
            startUrl = 'tollgate/tollnames/sec/' + $scope.endPid + '/2'
        } else {
            startUrl = 'tollgate/tollnames/' + $scope.provincePid + '/1';
        }
        dsEdit.getProduct(startUrl, { name: $scope.startTollGate }).then(function (data) {
            $scope.startFlag = true;
            $scope.endFlag = false;
            $scope.isReadySearchFlag = false;
            $scope.printNotice = "";
            $scope.tollGateArr = data;
            if($scope.tollGateArr.length === 0){
                $scope.noSearchResult = {
                    display: 'block',
                };
                $scope.endStationStyle = {
                    'border-bottom':'1px solid #d0e4ff'
                };
                $scope.printNotice = "无搜索结果，请重新输入";
            }else {
                $scope.searchResult = {
                    display:'block'
                };
                $scope.endStationStyle = {
                    'border-bottom':'1px solid #d0e4ff'
                };
                $scope.noSearchResult = {
                    display: 'none',
                    height: 30 + 'px',
                    'line-height': 30 + 'px',
                    'background-color': '#ffffff'
                };
            }
        });
    };
    // 联想搜索终点
    $scope.PreSearchEndTollGate = function (e) {
        var endUrl = '';
        if(e ===  'change'){
            $scope.endPid = '';
        }
        if ($scope.startPid) {
            endUrl = 'tollgate/tollnames/sec/' + $scope.startPid + '/1';
        } else {
            endUrl = 'tollgate/tollnames/' + $scope.provincePid + '/2';
        }
        dsEdit.getProduct(endUrl, { name: $scope.endTollGate }).then(function (data) {
            $scope.startFlag = false;
            $scope.endFlag = true;
            $scope.isReadySearchFlag = false;
            $scope.printNotice = "";
            $scope.tollGateArr = data;
            if($scope.tollGateArr.length === 0){
                 $scope.noSearchResult = {
                display: 'block',
                height: 30 + 'px',
                'line-height': 30 + 'px',
                'background-color': '#ffffff'
                };
                $scope.endStationStyle = {
                    'border-bottom':'1px solid #d0e4ff'
                };
                $scope.printNotice = "无搜索结果，请重新输入";
            }else {
                $scope.endStationStyle = {
                    'border-bottom':'1px solid #d0e4ff'
                };
                $scope.searchResult = {
                    display:'block'
                };
                $scope.noSearchResult = {
                display: 'none',
                 height: 30 + 'px',
                'line-height': 30 + 'px',
                'background-color': '#ffffff'
                };
            }
        });
    };
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
        // 判断当前搜索结果是起点收费站还是终点收费站
        if($scope.isSearchStartTollGate){
            $scope.searchStartTollGate($scope.tmpTollGate);
        }else{
            $scope.searchEndTollGate($scope.tmpTollGate);
        }
    };
    // 搜索起点
    $scope.searchStartTollGate = function (param) {
        var bounds = [];
        var startUrl = '';
        if(param){
            var parameter = {
                name: param,
                pageCnt: $scope.resultPageNum,
                pages: 10,
            };
        }else{
            var parameter = {
                name: $scope.startTollGate,
                pageCnt: $scope.resultPageNum,
                pages: 10,
            };
            $scope.tmpTollGate = $scope.startTollGate;
        }
        if ($scope.endPid) {
            startUrl = 'tollgate/tollnames/sec/' + $scope.endPid + '/2'
        } else {
            startUrl = 'tollgate/tollnames/' + $scope.provincePid + '/1';
        }
        dsEdit.getProduct(startUrl, parameter).then(function (data) {
            $scope.startFlag = true;
            $scope.endFlag = false;
            $scope.isReadySearchFlag = true;
            $scope.isSearchStartTollGate = true;
            $scope.tollGateArr = data;
            $scope.createTollGateIcon(data);
            for(var i = 0; i < data.length; i++){
                var point = turf.point(data[i].geoJson.coordinates);
                bounds.push(point);
            }
            if($scope.tollGateArr.length === 0){
                $scope.chooseTollGate = {
                    display: 'none',
                };
                $scope.noSearchResult = {
                    display: 'block',
                };
                $scope.endStationStyle = {
                    'border-bottom':'1px solid #d0e4ff'
                };
                $scope.printNotice = "无搜索结果，请重新输入";
                $scope.paging = {
                    display: 'none',
                };
            }else {
                $scope.resultPageTotal = Math.ceil(data[0].totalCnt/10);
                $scope.searchResult = {
                    display:'block'
                };
                $scope.endStationStyle = {
                    'border-bottom':'1px solid #d0e4ff'
                };
                $scope.noSearchResult = {
                    display: 'none',
                    height: 30 + 'px',
                    'line-height': 30 + 'px',
                    'background-color': '#ffffff'
                };
                $scope.paging = {
                    display: 'block',
                };
            }
            if(bounds.length > 0){
                var features = turf.featureCollection(bounds);
                var bbox = turf.bbox(features);
                var v2 = new mapboxgl.LngLatBounds([bbox[0], bbox[1]], [bbox[2], bbox[3]]);
                map.fitBounds(v2, { maxZoom: 15 });
            }
        });
    };
    $scope.searchEndTollGate = function (param) {
        var bounds = [];
        var endUrl = '';
        if(param){
            var parameter = {
                name: param,
                pageCnt: $scope.resultPageNum,
                pages: 10,
            };
        }else{
            var parameter = {
                name: $scope.endTollGate,
                pageCnt: $scope.resultPageNum,
                pages: 10,
            };
            $scope.tmpTollGate = $scope.endTollGate;
        }
        if ($scope.startPid) {
            endUrl = 'tollgate/tollnames/sec/' + $scope.startPid + '/1';
        } else {
            endUrl = 'tollgate/tollnames/' + $scope.provincePid + '/2';
        }
        dsEdit.getProduct(endUrl, parameter).then(function (data) {
            $scope.startFlag = false;
            $scope.endFlag = true;
            $scope.isReadySearchFlag = true;
            $scope.isSearchStartTollGate = false;
            $scope.tollGateArr = data;
            $scope.createTollGateIcon(data);
            for(var i = 0; i < data.length; i++){
                var point = turf.point(data[i].geoJson.coordinates);
                bounds.push(point);
            }
            if($scope.tollGateArr.length === 0){
                $scope.chooseEndTollGate = false;
                $scope.chooseTollGate = {
                    display: 'none',
                };
                $scope.noSearchResult = {
                    display: 'block',
                    height: 30 + 'px',
                    'line-height': 30 + 'px',
                    'background-color': '#ffffff'
                };
                $scope.endStationStyle = {
                    'border-bottom':'1px solid #d0e4ff'
                };
                $scope.printNotice = "无搜索结果，请重新输入";
                $scope.paging = {
                    display: 'none',
                };
            }else {
                $scope.resultPageTotal = Math.ceil(data[0].totalCnt/10);
                $scope.endStationStyle = {
                    'border-bottom':'1px solid #d0e4ff'
                };
                $scope.searchResult = {
                    display:'block'
                };
                $scope.noSearchResult = {
                    display: 'none',
                    height: 30 + 'px',
                    'line-height': 30 + 'px',
                    'background-color': '#ffffff'
                };
                $scope.paging = {
                    display: 'block',
                };
            }
            if(bounds.length > 0){
                var features = turf.featureCollection(bounds);
                var bbox = turf.bbox(features);
                var v2 = new mapboxgl.LngLatBounds([bbox[0], bbox[1]], [bbox[2], bbox[3]]);
                map.fitBounds(v2, { maxZoom: 15 });
            }
        });
    };
    // 获取起点和终点的关键字
    $scope.getKeywordFromPreSearch = function (data) {
     if ($scope.startFlag) {
         $scope.startTollGate = data.name;
         $scope.startFlag = false;
         $scope.startPid = data.pid;
         $scope.tollGateArr.length = 0;
         $scope.endStationStyle = {
             'border-bottom':'none'
         };
     }
     if ($scope.endFlag) {
         $scope.endTollGate = data.name;
         $scope.endFlag = false;
         $scope.endPid = data.pid;
         $scope.tollGateArr.length = 0;
         $scope.endStationStyle = {
             'border-bottom':'none'
         };
     }
    };
    // 获取起点和终点Pid
    $scope.getPidFromSearch = function (data,index) {
        if ($scope.startFlag) {
            $scope.startTollGate = data.name;
            $scope.startPid = data.pid;
        }
        if ($scope.endFlag) {
            $scope.endTollGate = data.name;
            $scope.endPid = data.pid;
        }
        $scope.showNormalTollGate();
        $scope.lastClickNode = index; //记录当前点击的节点,并高亮
        $scope.showHeightLightTollGate(index);
    };

    // 获取路径
    $scope.getLinksFromStartToEnd = function () {
        var bounds = {
            type: 'FeatureCollection',
            features: [],
        };
        $scope.clearLines();
        $scope.showNormalTollGate();
        $scope.resultPageNum = 0;
        $scope.chooseStartTollGate = false;
        $scope.chooseTollGate = {
            display: 'none',
        };
        if($scope.startTollGate !== '' && $scope.endTollGate ===''){
            $scope.searchStartTollGate();
            $scope.chooseEndTollGate = false;
            $scope.chooseTollGate = {
                display: 'none',
            };
        } else if($scope.startTollGate === '' && $scope.endTollGate !== ''){
            $scope.searchEndTollGate();
            $scope.chooseEndTollGate = false;
            $scope.chooseTollGate = {
                display: 'none',
            };
        } else if($scope.startTollGate !== '' && $scope.endTollGate !==''){
            if($scope.startPid === '' && $scope.endPid ===''){
                $scope.chooseStartTollGate = true;
                $scope.chooseEndTollGate = true;
                $scope.searchStartTollGate();
                if($scope.tollGateArr.length > 0 ){
                    $scope.chooseTollGate = {
                        display: 'block',
                    };
                    $scope.printNotice = '请选择正确的起点';
                }
            }else if($scope.startPid === '' && $scope.endPid !==''){
                $scope.searchStartTollGate();
            }else if($scope.endPid === ''){
                $scope.searchEndTollGate();
                if($scope.chooseEndTollGate && $scope.tollGateArr.length > 0){
                    $scope.printNotice = '请选择正确的终点';
                }
            }else{
                $scope.clearTollGateIcon();
                $scope.paging = {
                    display: 'none',
                };
                $scope.searchResult = {
                    display:'none'
                };
                $scope.chooseEndTollGate = false;
                $scope.chooseTollGate = {
                    display: 'none',
                };
                dsEdit.getProduct('tollgate/path/'+$scope.startPid+'/'+$scope.endPid).then(function (data) {
                    // map.flyTo({center: data[0].pointGeoJson.coordinates});
                    if(data.length === 0){
                        $scope.noSearchResult = {
                            display: 'block',
                        };
                        $scope.printNotice = '无搜索结果，请重新输入';
                    }else {
                        $scope.linksArr = data;
                        $scope.createStartTollIcon(data);
                        $scope.createEndTollIcon(data);
                        for (var i = 0, len = data.length; i < len ;i++) {
                            if(map.getSource('route'+i)) {
                                $scope.addLines(data[i], 'route'+i,i);
                            } else {
                                var obj = $scope.originLayer;
                                obj.id = 'route' + i;
                                obj.paint['line-color'] = $scope.colorArr[i];
                                var source = {
                                    "type": "geojson",
                                    "data": {
                                        "type": "Feature",
                                        "properties": {},
                                        "geometry": data[i].geoJson
                                    }
                                };
                                $scope.createPop(data[i],i);
                                $scope.originLayer.source = source;
                                map.addLayer($scope.originLayer);
                            }
                            var  pointFeature = turf.lineString(data[i].geoJson.coordinates);
                            bounds.features.push(pointFeature);
                        }
                        var bbox = turf.bbox(bounds);
                        var v2 = new mapboxgl.LngLatBounds([bbox[0], bbox[1]], [bbox[2], bbox[3]]);
                        map.fitBounds(v2,{padding: 50} );
                    }
                });
            }
        }
    };
    $scope.goCapture = function (data){
        var local = 'capture'+data;
        $location.hash(local);
        $anchorScroll();
    };
    $scope.GoSearch = function (e) {
        if(e.keyCode === 13){
            $scope.getLinksFromStartToEnd();
        }
    };
    $scope.changeZoom = function (arg) {
        var nowZoom = map.getZoom();
        if(arg === 'add'){
            map.setZoom(nowZoom+1);
        }else{
            map.setZoom(nowZoom-1);
        }
    };
    map.on('click','TollNode_Layer',function (e) {
            $scope.tollGateLocation = [];
            console.log(e);
            $scope.TollGateName = e.features[0].properties.name;
            var div = window.document.createElement('div');
            div.innerHTML =
                '<div class="feePopDeep">收费站名称：'+$scope.TollGateName+'</div>' +
                '<div class="tipPopDeep"></div>';
        $scope.tollGateLocation.push(e.lngLat.lng);
        $scope.tollGateLocation.push(e.lngLat.lat);
              console.log($scope.tollGateLocation);

        $scope.showTollGateName =  new mapboxgl.Popup()
                .setLngLat($scope.tollGateLocation)
                .setDOMContent(div)
                .addTo(map);
    });
}]);
