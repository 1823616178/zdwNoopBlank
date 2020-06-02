function getTopRightCharts() {
    var line_chart = document.getElementById('noop_top_right_chart')
    var instancel = echarts.init(line_chart)
    let option = {
        title: {
            text: '询价单统计',
            textStyle: {
                color: '#0099ff'
            }
        },
        legend: {
            textStyle: {
                color: '#0099ff'
            }
        },
        tooltip: {},
        dataset: {
            source: [
                ['product', '已报价', '未报价', '已取消'],
                ['12月', 688, 385, 93],
                ['01月', 583, 373, 55],
                ['02月', 686, 265, 82],
                ['03月', 679, 353, 69],
                ['04月', 602, 353, 39],
                ['05月', 652, 153, 79]
            ]
        },
        xAxis: {
            type: 'category',
            axisLabel: {
                textStyle: {
                    color: '#65c6e7'
                }
            }
        },
        yAxis: {
            type: 'value',
            name: '单位：单',
            nameGap: 5,
            nameTextStyle: {
                color: '#65c6e7'
            },
            axisLabel: {
                textStyle: {
                    fontSize: 9,
                    color: '#65c6e7'
                }
            },
            splitLine: {
                show: false
            }
        },
        series: [
            {
                type: 'bar', color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#069e6c'},
                        {offset: 1, color: '#07a8a8'}
                    ]
                )
            },
            {
                type: 'bar', color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#304bd3'},
                        {offset: 1, color: '#088ed3'}
                    ]
                )
            },
            {
                type: 'bar', color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#d46535'},
                        {offset: 1, color: '#da6d75'}
                    ]
                )
            }
        ]
    };
    instancel.setOption(option)

}
