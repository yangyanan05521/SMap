angular.module('dataService').service('dsEdit', ['$http', '$q', 'ajax', 'dsOutput', function ($http, $q, ajax, dsOutput) {

    /**
     * 根据pid获取要素详细属性
     * @param url     要素PID
     * @param param     要素PID
     * @param alertError   是否弹出错误信息
     */
    this.getProduct = function (url,param, alertError) {
        var defer = $q.defer();
        if (alertError === undefined) {
            alertError = true;
        }
        ajax.post(url, param
        ).success(function (data) {
            if (data.errcode == 200 || data.code == 200) {
                defer.resolve(data.data);
            } else {
                defer.resolve(null);
            }
        }).error(function (rejection) {
            defer.reject(rejection);
        });
        return defer.promise;
    };
}]);
