/**
 * Created by liwanchong on 2016/12/16.
 */
var App = {};
App.dev={
    //host:'123.207.83.126:8088'
   host:'192.168.15.41:9999'
};

// web app全局配置信息
App.Config = {
    serviceUrl: 'http://fs.navinfo.com/smapapi',
    sceneryUrl:'http://' + App.dev.host + '/smapapi',
    appRoot:'http://localhost:63342/SMAP',
    //appRoot: 'http://fs.navinfo.com/smap',
    //appRoot:'http://' + App.dev.host ,
    mapboxToken:'pk.eyJ1IjoiZmFuZ2xhbmsiLCJhIjoiY2lpcjc1YzQxMDA5NHZra3NpaDAyODB4eSJ9.z6uZHccXvtyVqA5zmalfGg',
    //checkServiceUrl:'http://' + App.dev.host + '/smapapi/sync/user/',
    checkServiceUrl:'http://fs.navinfo.com/smapapi/sync/user/',
    platelimit: 'type=6&parm=0', //限行限号初始化数据为其他限行方式
    daily:{//日产品更新服务URL
        username:"SMap",
        password:"A502475242fetch147ycdf58",
        queryUrl:"http://fs.navinfo.com/smapapi/data/query",
        downloadUrl:"http://fs.navinfo.com/smapapi/data/download"
    },
    tollcost:{//收费信息服务URL
        ak:"HeHQ4X-sxhhsRyHiSaORnQ",
        tollcostUrl:"http://fs.navinfo.com/smapapi/tollgate/cost",
        feedbackUrl:"http://fs.navinfo.com/smapapi/tollgate/feedback",
    },
    construction:{//施工道路服务URL
        constructionAk:"E505645785fetch087ycde71",
        constructionUsername:"DIDI_CON_INC_TEST",
        constructionPassword:"E505645785fetch087ycde71",
        constructionPageNum:1,
        constructionUrl:"http://fs.navinfo.com/smapapi/construction.json",
        timequantumUsername:'DIDI_CON_INC_TEST',
        timequantumPassword:'E505645785fetch087ycde71',
        timequantumStartTime:"2017-05-21+20%3A04%3A50",
        timequantumEndTime:"2017-05-23+20%3A04%3A50",
        timequantumPageNum:1,
        timequantumUrl:"http://fs.navinfo.com/smapapi/construction/timequantum.json"
    },
    limit:{//限行限号服务URL
        ak:"E485214565fetch087qwde70",
        platelimitUrl:"http://fs.navinfo.com/smapapi/platelimit.json"
    }
};
App.Temp = {
    //accessToken: 'HeHQ4X-sxhhsRyHiSaORnQ'
};
App.Util = {
    getFullUrl: function (url) {
        return App.Config.sceneryUrl + '/' + url + '?ak=' + (App.Temp.accessToken || '');
    },
    //获取当前token
    getToken:function () {
        return sessionStorage.getItem('token');
    },
    deleteToken:function () {
        sessionStorage.removeItem('token');
    },
    //检查当前token是否可用
    checkToken: function () {
        var isCorrect = false;
        $.ajax({
            url:App.Config.checkServiceUrl + "tokenCheck",
            async:false,
            type:'post',
            data:{
                token: sessionStorage.getItem('token')
            },
            success:function (data, status) {
                if (200 == JSON.parse(data).code) {
                    isCorrect = true;
                }
            }
        });
        return isCorrect;
    },
    //存储url
    setUrl:function (window) {
        sessionStorage.setItem('p_url',window.location.href);
    },
    //跳转到登录页面
    toLogin:function (window) {
        App.Util.setUrl(window);
        window.location.href=App.Config.appRoot+'/pages/login.html';
    },
    //弹出重新登录框
    sout:function (window) {
        App.Util.setUrl(window);
        new LoginMsg(App.Config.appRoot+'/pages/login.html').show();
    }
};

(function(w){
    function LoginMsg(url){
        this.url=url||"";
        this.body = document.querySelector("body");
        this.div = document.createElement("div");
        this.div1 = document.createElement("div");
        this.p = document.createElement("p");
        this.a = document.createElement("a");
        this.div.style.cssText="position: fixed;z-index: 99999;background-color: rgba(0, 0, 0, 0.3);width: 100%;height: 100%;left: 0;top: 0;"
        this.div1.style.cssText="width: 296px;height: 153px;margin: 19.45rem auto auto auto;background-color: white;overflow: hidden;border-radius: 5px;";
        this.p.style.cssText="text-align: center;margin: 30px auto 28px auto;";
        this.a.style.cssText="background-color: #337ab7;display: block;width: 184px;height:50px;line-height: 50px;text-align: center;margin: 0 auto;border-radius: 5px;text-decoration: none;color: white;";
        this.p.innerHTML="登陆超时!";
        this.a.innerHTML="请重新登陆";
        this.a.setAttribute("href",url);
        this.div1.appendChild(this.p);
        this.div1.appendChild(this.a);
        this.div.appendChild(this.div1);
        this.body.appendChild(this.div);
    }
    LoginMsg.prototype.hide=function(){
        this.div.style.display="none";
    }
    LoginMsg.prototype.show=function(){
        this.div.style.display="block";
    }
    w.LoginMsg=LoginMsg;
}(window));

