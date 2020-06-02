$(function () {
    getTopLeftCharts()
    getCenterMap()
    getTopRightCharts()
    bottomCenterCharts()
    getBottomLeftcharts()
    getBottomRightCharts()
    resize()
})

function resize() {
    window.onresize = function () {
        adjustWindowZoom()
    };

    if (document.createEvent) {
        var event = document.createEvent("HTMLEvents");
        event.initEvent("resize", true, true);
        window.dispatchEvent(event);
    } else if (document.createEventObject) {
        window.fireEvent("onresize");
    }
}

function adjustWindowZoom() {
    $('.contain')[0].style.zoom = window.innerWidth / 1920
    $('body').height('1080px')
    $(function () {
        setInterval('$("#date_number").html(getTime())', 1000)
    })

}
