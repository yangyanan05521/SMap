angular.module('dataService', [], function ($httpProvider) {
    // Use x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    /**
     * The workhorse; converts an object to x-www-form-urlencoded serialization.
     * @param {Object} obj
     * @return {String}
     */
    var param = function (obj) {
        var query = '';
        var name,
            value,
            fullSubName,
            subName,
            subValue,
            innerObj,
            i;
        for (name in obj) {
            if (obj.hasOwnProperty(name)) {
                value = obj[name];
                if (value instanceof Array) {
                    for (i = 0; i < value.length; ++i) {
                        subValue = value[i];
                        fullSubName = name + '[' + i + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                } else if (value instanceof Object) {
                    for (subName in value) {
                        if (value.hasOwnProperty(subName)) {
                            subValue = value[subName];
                            fullSubName = name + '[' + subName + ']';
                            innerObj = {};
                            innerObj[fullSubName] = subValue;
                            query += param(innerObj) + '&';
                        }
                    }
                } else if (value !== undefined && value !== null) {
                    query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
                }
            }
        }
        return query.length ? query.substr(0, query.length - 1) : query;
    };
    // Override $http service's default transformRequest
    $httpProvider.defaults.transformRequest = [function (data) {
        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];
    // Add interceptors
    $httpProvider.interceptors.push(function ($q) {
        return {
            // optional method
            request: function (config) {
                // do something with config
                return config;
            },
            // optional method
            requestError: function (rejection) {
                // do something on error
                // if (canRecover(rejection)) {
                //     return responseOrNewPromise
                // }
                return $q.reject(rejection);
            },
            // optional method
            response: function (response) {
                // do something with response
                return response;
            },
            // optional method
            responseError: function (rejection) {
                // do something on error
                console.warn('服务请求出错:' + rejection.config.url);
                return $q.reject(rejection);
            }
        };
    });
}).service('ajax', ['$http', function ($http) {
    this.get = function (url, param) {
        var fullUrl = App.serviceUrl;
        return $http.get(fullUrl, {
            params: param
        });
    };
    this.post = function (url ,param) {
        // var fullUrl;
        // if (isSpec == 'spec') {
        //     fullUrl = App.Util.getSpecUrl(url);
        // } else {
        //     fullUrl = App.Util.getFullUrl(url);
        // }
        // return $http.post(fullUrl, param);
        return $http.post(App.Util.getFullUrl(url), param);
    };
    this.getLocalJson = function (url) {
        return $http.get(url, {});
    };
    this.tokenExpired = function (defer) {
        swal({
            title: 'Token已失效，请重新登陆！',
            type: 'error',
            animation: 'slide-from-top',
            closeOnConfirm: true,
            confirmButtonText: '重新登陆'
        }, function () {
           console.log("test");
        });
        defer.reject(null);
    };
    this.error = function (defer, rejection) {
        swal('啊哦，服务程序开小差了，请稍后再试！', rejection, 'error');
        defer.reject(rejection);
    };
}]).service('dsOutput', [function () {
    this.output = [];
    this.push = function (data) {
        this.output.unshift(data);
    };
    this.pushAll = function (dataArray) {
        if (dataArray) {
            for (var i = 0; i < dataArray.length; i++) {
                this.output.unshift(dataArray[i]);
            }
        }
    };
    this.pop = function () {
        return this.output.pop();
    };
    this.clear = function () {
        this.output.length = 0;
    };
}]);
