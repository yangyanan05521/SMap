var script = document.getElementsByTagName("script");
var currentScriptPath = script[script.length-1].src;
var navApp = angular.module('navApp',[]);
navApp.directive('navBar',function () {
   return {
       restrict: 'EA',
       templateUrl: currentScriptPath.replace('nav.js','nav.html'),
       scope:{
           relativeHash: '=',
           loc: '=',
       },
       controller:function ($scope) {
           $scope.isLogin = App.Util.checkToken();
           $scope.loginTitle = $scope.isLogin ? '退出登录' : '登录';
           $scope.loc = {
               indexpageFlag: $scope.loc === 'indexpageFlag',
               productFlag: $scope.loc === 'productFlag',
               developFlag: $scope.loc === 'developFlag',
               warehouseFlag: $scope.loc === 'warehouseFlag',
               onlineUseFlag: $scope.loc === 'onlineUseFlag',
               loginFlag: $scope.loc === 'loginFlag',
               sceneryFlag:$scope.loc === 'sceneryFlag'
           };
           $scope.navMap = [
               {
                   title: '首页',
               },
               {
                   title: '服务产品',
                   children: [
                       {
                       title: '收费信息服务',
                       },
                       {
                       title: '道路施工服务',
                       },
                       {
                       title: '限行限号服务',
                       }
                   ]
               },
               {
                   title: '开发中心',
                   children: [
                       {
                           title: '服务接口',
                       },
                   ]
               },
               {
                   title: '产品仓库',
                   children: [
                       {
                           title: '产品介绍',
                       },
                       {
                           title: '产品下载',
                       },
                   ]
               },
               {
                   title: '在线体验',
                   children: [
                       {
                           title: '收费信息查询',
                       },
                       {
                           title: '施工数据展示',
                       },
                       {
                           title: '限行数据查询',
                       },
                       {
                           title: '景区专题地图',
                       }
                   ]
               },
               {
                   title: $scope.loginTitle,

               }
           ];
           $scope.turnToPage = function (param) {
                var toDownloadPage = param.search(/productWarehouse/);
                if( toDownloadPage > -1){ // 跳转下载页面
                    if(App.Util.checkToken()){
                        if($scope.relativeHash){
                            param = $scope.relativeHash + param;
                        }
                    }else {
                        App.Util.sout(window);
                    }
                }else{
                    if($scope.relativeHash === 'pages/' && param === '../index.html'){
                        param = 'index.html';
                    }else if(param === 'login.html' && $scope.isLogin){//判断是登录还是退出登录
                        if($scope.relativeHash){
                            switch ($scope.relativeHash){
                                case 'pages/': param = 'index.html';break;
                                case '../':    param = $scope.relativeHash + '../index.html';break;
                            }
                        }else {
                            param = '../index.html';
                        }
                        App.Util.deleteToken();
                        $scope.isLogin = App.Util.checkToken();
                    }else if($scope.relativeHash){
                        param = $scope.relativeHash + param;
                    }
                }
               window.location.href = param;
           };
           $scope.navbarbg = {
               background: $scope.relativeHash === 'pages/' ? 'none' : '#25396e',
           }
       }
   }
});