/**
 * Created by liwanchong on 2016/12/22.
 */
var specData = "nimif-g";
var dailyListContentData = '';
var dailyparam2Data = "MIFG_17SUM_D_BJ_CSV_0317_10";
var dailyContentData = '';
var fileName = "MIFG_CSV_17Q3_AH_D_3_0914.csv";

function initList() {
    $("#username").val(App.Config.daily.username);
    $("#spec").val(specData);
    $("#Password1").val(App.Config.daily.password);
    $('#loadUsername').val(App.Config.daily.username);
    $('#loadPassword').val(App.Config.daily.password);
    $('#loadFileName').val(fileName);
    $('#apiVersion').html('版本信息：V1.0.2');

    $.post(App.Config.daily.queryUrl, {
        username:App.Config.daily.username,
        password:App.Config.daily.password,
        spec:specData
    }, function (data) {
        dailyListContentData = JSON.stringify(data, null, 4);
        $('#dailyListContent').val(dailyListContentData);
    });
}
function dailyListResult() {
    $.post(App.Config.daily.queryUrl, {
        username: $('#username').val(),
        spec: $('#spec').val(),
    }, function (data) {
        $('#dailyListContent').val(JSON.stringify(data, null, 4));
    });
}
function resetResult(type) {
    if( 0 === type) {
        $("#username").val(App.Config.daily.username);
        $("#spec").val(specData);
        $("#Password1").val(App.Config.daily.password);
        $('#dailyListContent').val(dailyListContentData);
        return;
    }
    $("#loadUsername").val(App.Config.daily.username);
    $('#loadPassword').val(App.Config.daily.password);
    $('#loadFileName').val(fileName);
    $('#dailyContent').val(dailyContentData);
}

function initDl() {
    $("#dailyparam1").val(App.Config.daily.username);
    $("#dailyparam2").val(dailyparam2Data);
    $.post(App.Config.daily.downloadUrl, {
        username:App.Config.daily.username,
        product_id:"MIFG_17SUM_D_BJ_CSV_0317_10"
    }, function (data) {
        dailyContentData = JSON.stringify(data, null, 4);
        $('#dailyContent').val(dailyContentData);
    });
}
$(function () {
    initList();
  //  initDl();
});


function dailyResult() {
    /*$.post(App.Util.getFullUrl('data/download'), param, function (data) {*/
    $.post(App.Config.daily.downloadUrl, {
        username: $('#loadUsername').val(),
        password: $('#loadPassword').val(),
        file_name: $('#loadFileName').val(),
    }, function (data) {
        $('#dailyContent').val(JSON.stringify(data, null, 4));
    });
}

