function getTopRightCharts() {
    var line_chart = document.getElementById('noop_top_right_chart')
    var instancel = echarts.init(line_chart)
    let option = {
        title: {
            show:false,
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
                    color: '#65c6e7'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#65c6e7'
                }
            },
            data: ['12月', '01月', '02月', '03月', '04月', '05月']
        },
        yAxis: {
            type: 'value',
            name: '(单位：单)',
            nameGap: 25,
            nameTextStyle: {
                color: '#65c6e7'
            },
            axisLabel: {
                textStyle: {
                    fontSize: 9,
                    color: '#65c6e7'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#65c6e7'
                }
            },
            splitLine: {
                show: false
            }
        },
        series: [
            {
                name:'已报价',type: 'bar', color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#069e6c'},
                        {offset: 1, color: '#07a8a8'}
                    ]
                ),
                data:[688,583,686,679,602,652]
            },
            {
                name:'未报价',type: 'bar', color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#304bd3'},
                        {offset: 1, color: '#088ed3'}
                    ]
                ),
                data:[385,373,265,353,353,153]
            },
            {
                name:'已取消',type: 'bar', color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#d46535'},
                        {offset: 1, color: '#da6d75'}
                    ]
                ),
                data:[93, 55, 82, 69, 39, 79]
            }
        ]
    };
    instancel.setOption(option)

}