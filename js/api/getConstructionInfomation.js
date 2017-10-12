/**
 * Created by liwanchong on 2016/12/22.
 */
var constructionContentData = '';
var timequantumContentData = '';
function  constructionInit() {
    $('#apiVersion').html('版本信息：V1.0.4');
    $('#ak').val(App.Config.construction.constructionAk);
    $('#constructionUsername').val(App.Config.construction.constructionUsername);
    $('#constructionPassword').val(App.Config.construction.constructionPassword);
    $('#constructionPageNum').val(App.Config.construction.constructionPageNum);
    $('#timequantumUsername').val(App.Config.construction.timequantumUsername);
    $('#timequantumPassword').val(App.Config.construction.timequantumPassword);
    $('#timequantumPageNum').val(App.Config.construction.timequantumPageNum);
    $("#startTime").val(App.Config.construction.timequantumStartTime);
    $("#endTime").val(App.Config.construction.timequantumEndTime);
    $.post(App.Config.construction.constructionUrl, {
        username: App.Config.construction.constructionUsername,
        password:App.Config.construction.constructionPassword,
        pageNum:App.Config.construction.constructionPageNum
    }, function (data) {
        constructionContentData =JSON.stringify(data, null, 4);
        $('#constructionContent').empty();
        $('#constructionContent').text(constructionContentData);
    });
    $.post(App.Config.construction.timequantumUrl, {
        username: App.Config.construction.timequantumUsername,
        password:App.Config.construction.timequantumPassword,
        startTime:App.Config.construction.timequantumStartTime,
        endTime:App.Config.construction.timequantumEndTime,
        pageNum:App.Config.construction.timequantumPageNum
    }, function (data) {
        timequantumContentData =JSON.stringify(data, null, 4);
        $('#timequantumContent').empty();
        $('#timequantumContent').text(timequantumContentData);
    });
}
$(function () {
    constructionInit();
});
function constructionRs() {
    var param = {
        username:  $('#constructionUsername').val(),
        password:  $('#constructionPassword').val(),
        pageNum:   $('#constructionPageNum').val()
    };
    $.post(App.Config.construction.constructionUrl, param, function (data) {
        $('#constructionContent').empty();
        $('#constructionContent').text(JSON.stringify(data, null, 4));
    });
}
function constructionResult() {
    $.post(App.Config.construction.timequantumUrl, {
        username:$('#timequantumUsername').val(),
        password:$('#timequantumPassword').val(),
        startTime:$("#startTime").val(),
        endTime:$("#endTime").val(),
        pageNum:   $('#timequantumPageNum').val()
    }, function (data) {
        $('#timequantumContent').empty();
        $('#timequantumContent').text(JSON.stringify(data, null, 4));
    });
}
function resetResult(type) {
    if(type === 0) {
        $('#constructionUsername').val(App.Config.construction.constructionUsername);
        $('#constructionPassword').val(App.Config.construction.constructionPassword);
        $('#constructionPageNum').val(App.Config.construction.constructionPageNum);
        $('#constructionContent').text(constructionContentData);
        return;
    }
    $('#timequantumUsername').val(App.Config.construction.timequantumUsername);
    $('#timequantumPassword').val(App.Config.construction.timequantumPassword);
    $('#timequantumPageNum').val(App.Config.construction.timequantumPageNum);
    $("#startTime").val(App.Config.construction.timequantumStartTime);
    $("#endTime").val(App.Config.construction.timequantumEndTime);
    $('#timequantumContent').text(timequantumContentData);
}