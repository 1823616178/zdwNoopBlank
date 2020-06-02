function getBottomRightCharts() {
    var line_chart = document.getElementById('noop_bottom_ritht_chart')
    var instancel = echarts.init(line_chart)
    let option = {
        title: {
            text: '总报价(本年)',
            textStyle: {
                color: '#0099ff'
            }
        },
        tooltip: {
            show: false
        },
        legend: {
            show: false
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            show: false,
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            show: false,
            data: ['2020']
        },
        series: [
            {
                name: '报价量',
                type: 'bar',
                barWidth: 40,
                label: {
                    show: true,
                    position: 'insideBottomLeft',
                    fontSize: 15,
                    color: '#04ba19',
                    formatter: '{a}({c})'
                },
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 0,
                    [
                        {offset: 0, color: '#069e6c'},
                        {offset: 1, color: '#07a8a8'}
                    ]
                ),
                data: [820]
            },
            {
                name: '',
                type: 'bar',
                barWidth: 30,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 1, 0,
                    [
                        {offset: 0, color: '#069e6c'},
                        {offset: 1, color: '#04ba19'}
                    ]
                ),
                data: [820]
            },
            {
                name: '成交量',
                type: 'bar',
                barWidth: 40,
                label: {
                    show: true,
                    position: 'insideBottomLeft',
                    fontSize: 15,
                    color: '#6996f3',
                    formatter: '{a}({c})'
                },
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 0,
                    [
                        {offset: 0, color: '#069e6c'},
                        {offset: 1, color: '#07a8a8'}
                    ]
                ),
                data: [725]
            },
            {
                name: '',
                type: 'bar',
                barWidth: 30,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 1, 0,
                    [
                        {offset: 0, color: '#1c459a'},
                        {offset: 1, color: '#6996f3'}
                    ]
                ),
                data: [725]
            }
        ]
    };
    instancel.setOption(option)

}