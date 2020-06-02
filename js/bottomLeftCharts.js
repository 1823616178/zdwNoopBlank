function getBottomLeftcharts() {
    var line_chart = document.getElementById('noop_bottom_left_chart')
    var instancel = echarts.init(line_chart)
    let option = {
        title: {
            show:false,
            text: '交易金额统计',
            textStyle: {
                color: '#0099ff'
            }
        },
        legend: {
            show: false,
            textStyle: {
                color: '#0099ff'
            }
        },
        tooltip: {},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#206d7e'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#34a8af'
                }
            },
            boundaryGap: false,
            data: ['12月', '01月', '02月', '03月', '04月', '05月']
        },
        yAxis: {
            type: 'value',
            name: '(单位：万元)',
            nameGap: 25,
            nameTextStyle: {
                color: '#34a8af'
            },
            axisLabel: {
                textStyle: {
                    fontSize: 9,
                    color: '#34a8af'
                }
            },
            axisLine: {show: false},
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#0e2a44'
                }
            },
            axisTick: {show: false}
        },
        series: [{
            data: [820, 1132, 901, 1634, 1290, 1330],
            type: 'line',
            itemStyle: {
                normal: {
                    color: "#2bfaff",
                    lineStyle: {
                        color: "#02707e"
                    }
                }
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#23c1c5'},
                        {offset: 1, color: '#214a94'}
                    ]
                )
            }
        }]
    };
    instancel.setOption(option)

}