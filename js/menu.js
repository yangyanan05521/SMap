/**
 * Created by liwanchong on 2016/12/23.
 */
function showMenu(type, num) {

    switch (type) {
        case 'produceService':
            $('#serviceInterfaceNav').css('display', 'block');
            $('.menuDataServiceGrid').css('display', 'block');
            $('.menuDataServiceGrid').css('background-color', '#60c5ff');
            $('#service').css('background-color', '#1478ff');

            break;
        case 'produceWares' :
            $('#produceHouseNav').css('display', 'block');
            $('.menuWaresGrid').css('display', 'block');
            $('.menuWaresGrid').css('background-color', '#60c5ff');
            $('#produce').css('background-color', '#1478ff');
            break;
        case 'onlineUse' :
            $('#onlineUse').css('display', 'block');
            $('#solution').css('background-color', '#1478ff');
            $('#solutionBottom').css('background-color', '#60c5ff');
            break;
    }

}
function showSonMenu() {
    $('#produceHouseNavOfSon').css('display', 'block');
}
function hideSonMenu() {
    $('#produceHouseNavOfSon').css('display', 'none');
}
function hideMenu(type) {
    switch (type) {
        case 'produceService':
            $('#serviceInterfaceNav').css('display', 'none');
            $('.menuDataServiceGrid').css('display', 'none');
            $('#service').css('background-color', 'transparent');
            break;
        case 'produceWares' :
            $("#produceHouseNav").css('display', 'none');
            $('#produceHouseNavOfSon').css('display', 'none');
            $('.menuWaresGrid').css('display', 'none');
            $('#produce').css('background-color', 'transparent');
            break;
        case 'onlineUse' :
            $('#onlineUse').css('display', 'none');
            $('#solution').css('background-color', 'transparent');
            $('#solutionBottom').css('background-color', 'transparent');
            break;
    }

}
function showOnlineUse(){
    $('#onlineUse').css('display','block');
}
function hideOnlineUse() {
    $('#onlineUse').css('display','none');
}
function hideIndexMenu() {
    $('#serviceInterfaceNav').css('display', 'none');
    $('.menuDataServiceGrid').css('display', 'none');
    $('#service').css('background-color', 'transparent');
    window.location = 'pages/productService.html';
}
function hideWaresMenu() {
    $('#serviceInterfaceNav').css('display', 'none');
    $('.menuDataServiceGrid').css('display', 'none');
    $('#service').css('background-color', 'transparent');
    window.location = 'productService.html';
}
function hideServiceMenu() {
    $('#serviceInterfaceNav').css('display', 'none');
    $('.menuDataServiceGrid').css('display', 'none');
    $('#service').css('background-color', 'transparent');
    window.location = 'productService.html';
}
function directToDescription(type) {
    $("#produceHouseNav").css('display', 'none');
    if(type === 0) {
        window.location = 'pages/productDescription.html';
    } else {
        window.location = 'productDescription.html';
    }
}
function goOnlineUse(){
    $('#serviceInterfaceNav').css('display', 'none');
    $('.menuDataServiceGrid').css('display', 'none');
    $('#service').css('background-color', 'transparent');
    window.location = '../pages/tollGate.html';
}