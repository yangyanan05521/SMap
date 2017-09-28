/**
 * Created by liwanchong on 2016/12/21.
 */
$(function () {
    $('#apiPage').load('../pages/api/getConstructionInfomation.html');
});
var productServiceApp = angular.module('productServiceApp', ['navApp']);
productServiceApp.controller('selectedController',function ($scope,JumpConstant) {
    $scope.locFlag = 'developFlag';
    $scope.services = [
        {
            name: '入门指南',
            flag: false,
            type: 'summary'
        },
        {
            name: 'API参考手册-数据服务型',
            type: 'dataService',
            children: [
                {
                    name: '日产品更新',
                    type: 'Daily'
                }
            ]
        },
        {
            name: 'API参考手册-算法服务型',
            type: 'algorithmService',
            children: [
                {
                    name: '收费信息服务',
                    type: 'Tollcost'
                },
                {
                    name: '道路施工服务',
                    type: 'Construction'
                },
                {
                    name: '限行限号服务',
                    type: 'Limit'
                }
            ]
        },
        {
            name: '状态码说明',
            type: 'code',
            flag: false
        }
    ];
    $scope.jumps = [
        {
            name: '施工道路信息',
            id: 'apiName'
        },
        {
            name: 'API介绍',
            id: 'apiExplain'
        },
        {
            name: '最新施工信息',
            id: 'useCase'
          //  id: 'constructionNumber'
        },
        {
            name: '历史施工信息',
            id: 'instructions'
          //  id: 'timequantum'
        }
    ];
    $scope.dataServiceFlag = '';
    $scope.jumpFlag = '';
    $scope.arrowFlag = true;
    $scope.jumpHeight = {
        height: '120px'
    };
    $scope.changeDataApiPage = function (parentName,type, name) {
        $scope.arrowFlag = true;
        $scope.jumpFlag = '';
        $scope.jumps = JumpConstant[type];
        $scope.jumpHeight.height = 30 * $scope.jumps.length + 'px';
        $scope.dataServiceFlag = type;
        $('#apiType').text(parentName);
        $('#apiPage').empty();
        $('#showApiName').text(name);
        $('#apiPage').load('../pages/api/get' + type + 'Infomation.html');
    };
    $scope.showArrowDirect = function (service, num) {
        $scope.arrowFlag = false;
        $('#apiType').text(service.name);
        $('#showApiName').empty();
        $scope.jumpFlag = '';
        $scope.jumps = JumpConstant[service.type];
        if ($scope.jumps) {
            $scope.jumpHeight.height = 30 * $scope.jumps.length + 'px';
            if (service.type === 'summary') {
                $('#apiPage').load('../pages/api/summary.html');
            }
            if (service.type === 'code') {
                $('#apiPage').load('../pages/api/codeDescription.html');
            }
            if (service.type === 'Daily') {
                $('#apiPage').load('../pages/api/getDailyInfomation.html');
            }
            if (service.type === 'Tollcost') {
                $('#apiPage').load('../pages/api/getTollcostInfomation.html');
            }
            if (service.type === 'Construction') {
                $('#apiPage').load('../pages/api/getConstructionInfomation.html');
            }
            if (service.type === 'Limit') {
                $('#apiPage').load('../pages/api/getLimitInfomation.html');
            }
        } else {
            $scope.jumpHeight = 0;
        }
        $scope.services.forEach(function (item, index) {
            if (index === num) {
                item.flag = !item.flag;
            } else {
                item.flag = false;
            }
        });
    };
    $scope.jumpToDiv = function (id) {
        var innerHeight = window.innerHeight;
        if(innerHeight < 730){
            if(id === 'apiName'||id==='code'){
                window.scrollTo(0,0);
                $scope.highLightTeg();
            } else  if(id==='summaryExplain'||id==='summary'){
                window.location.hash = '#' + id;
                $scope.jumpFlag = id;
            }else{
                window.location.hash = '#' + id;
                $scope.jumpFlag = id;
                window.scrollTo(0,$('#' + id).position().top-40);
                $scope.highLightTeg();
            }
        }else{
            if(id === 'apiName'){
                window.scrollTo(0,0);
                $scope.highLightTeg();
            } else  if(id==='summaryExplain'||id==='summary'
                ||id==='code'||id==='codeExplain'){
                window.location.hash = '#' + id;
                $scope.jumpFlag = id;
            }else{
                window.location.hash = '#' + id;
                $scope.jumpFlag = id;
                window.scrollTo(0,$('#' + id).position().top-40);
                $scope.highLightTeg();

            }
        }


    };
    $scope.highLightTeg = function() {
        var indexList = document.getElementById('jumpDiv');
        var apiPage = document.getElementById('apiPage');
        var tegArr = [];
        var indexPosition = [];
        var scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        var bodyHeight = document.body.clientHeight;
        var j = 0;
        for (var i = 0; i < apiPage.children.length; i++) {
            if(apiPage.children[i].nodeName==='DIV'){
                tegArr[j] = apiPage.children[i].getAttribute('id');
                if(tegArr[j]){
                    indexPosition[j] = $('#' + tegArr[j]).position().top - 40;
                    j++
                }
            }
        }

        if(bodyHeight <= 1000){ //不满足滚动条件
            if(scrollHeight === 0){
                indexList
                    .children[0]
                    .children[0]
                    .setAttribute('class', 'jumpStyleActive');
                for (var j = 1; j < indexPosition.length; j++) { //全部使用normal样式
                    indexList
                        .children[j]
                        .children[0]
                        .setAttribute('class', 'jumpStyle');
                }
            }else {
                indexList
                    .children[indexPosition.length-1]
                    .children[0]
                    .setAttribute('class', 'jumpStyleActive');
                for (var j = 0; j < indexPosition.length - 1; j++) {   //前n-1个使用normal样式
                    indexList
                        .children[j]
                        .children[0]
                        .setAttribute('class', 'jumpStyle');
                }
            }
        }else{
            for (var i = 0; i < indexPosition.length; i++) {
                if (scrollHeight < indexPosition[0]) { //判断滚动高度小于第一个节点高度
                    indexList
                        .children[0]
                        .children[0]
                        .setAttribute('class', 'jumpStyleActive');
                    for (var j = 1; j < indexPosition.length; j++) { //从第二个开始使用normal样式
                        indexList
                            .children[j]
                            .children[0]
                            .setAttribute('class', 'jumpStyle');
                    }
                }
                if (i !== indexPosition.length - 1 && scrollHeight >= indexPosition[i]
                    && scrollHeight < indexPosition[i + 1]) { //滚动高度在 i到i+1之间
                    indexList
                        .children[i]
                        .children[0]
                        .setAttribute('class', 'jumpStyleActive');
                    for (var j = 0; j < indexPosition.length; j++) {
                        if (i !== j) {  //除当前节点外的其他节点全部使用normal样式
                            indexList
                                .children[j]
                                .children[0]
                                .setAttribute('class', 'jumpStyle');
                        }
                    }
                } else if (scrollHeight >= indexPosition[indexPosition.length - 1]) { //判断滚动高度是否大于最后一个节点高度
                    indexList
                        .children[indexPosition.length - 1]
                        .children[0]
                        .setAttribute('class', 'jumpStyleActive');
                    for (var j = 0; j < indexPosition.length - 1; j++) {   //前n-1个使用normal样式
                        indexList
                            .children[j]
                            .children[0]
                            .setAttribute('class', 'jumpStyle');
                    }
                }
            }

        }
    };
    angular.element(window.document).bind('scroll',$scope.highLightTeg);
});
