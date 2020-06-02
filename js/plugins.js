function getTopLeftCharts() {
    var line_chart = document.getElementById('noop_line_chart')
    var instancel = echarts.init(line_chart)
    let option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}'
        },
        legend: {
            textStyle: {
                color: "#0099ff",
            },
            left: 'left',
            data: [
                {
                    name: "2的指数",
                }
            ]
        },
        xAxis: {
            type: 'category',
            name: 'x',
            lineStyle: {
                color: "#0099ff"
            },
            splitLine: {show: false},
            axisLabel: {
                show: false,

            },
            data: ['一', '二', '三', '四', '五', '六', '七', '八', '九']
        },

        yAxis: {
            type: 'log',
            name: 'y',
            minorTick: {
                show: false
            },
            minorSplitLine: {
                show: false
            }
        },
        series: [
            {
                name: '3的指数',
                type: 'line',
                data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669],
                lineStyle: {
                    color: '#0099ff'
                }
            },
            {
                name: '2的指数',
                type: 'line',
                data: [1, 2, 4, 8, 16, 32, 64, 128, 256],
                lineStyle: {
                    color: '#0099ff'
                }
            },
        ]
    };

    instancel.setOption(option)

}

function getCenterMap() {
    let Map = document.getElementById('centerId')
    var instancel = echarts.init(Map)

    option = {
        legend: {
            show: false,
            backgroundColor: '#0099ff'
        },
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 0.2,
            formatter: function (params) {
                var value = (params.value + '').split('.');
                value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
                return params.seriesName + '<br/>' + params.name + ': ' + value;
            }
        },
        visualMap: {
            left: 'right',
            min: 900,
            max: 200,
            top: 'bottom',
            text: ['高', '低'],           // 文本，默认为数值文本
            calculable: true,
            show: false
        },
        series: [
            {
                type: 'map',
                mapType: 'china',
                roam: false,
                label: {
                    show: false,
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true,
                    }
                },
                data: [
                    {name: '北京', value: Math.round(Math.random() * 1000)},
                    {name: '天津', value: Math.round(Math.random() * 1000)},
                    {name: '上海', value: Math.round(Math.random() * 1000)},
                    {name: '重庆', value: Math.round(Math.random() * 1000)},
                    {name: '河北', value: Math.round(Math.random() * 1000)},
                    {name: '河南', value: Math.round(Math.random() * 1000)},
                    {name: '云南', value: Math.round(Math.random() * 1000)},
                    {name: '辽宁', value: Math.round(Math.random() * 1000)},
                    {name: '黑龙江', value: Math.round(Math.random() * 1000)},
                    {name: '湖南', value: Math.round(Math.random() * 1000)},
                    {name: '安徽', value: Math.round(Math.random() * 1000)},
                    {name: '山东', value: Math.round(Math.random() * 1000)},
                    {name: '新疆', value: Math.round(Math.random() * 1000)},
                    {name: '江苏', value: Math.round(Math.random() * 1000)},
                    {name: '浙江', value: Math.round(Math.random() * 1000)},
                    {name: '江西', value: Math.round(Math.random() * 1000)},
                    {name: '湖北', value: Math.round(Math.random() * 1000)},
                    {name: '广西', value: Math.round(Math.random() * 1000)},
                    {name: '甘肃', value: Math.round(Math.random() * 1000)},
                    {name: '山西', value: Math.round(Math.random() * 1000)},
                    {name: '内蒙古', value: Math.round(Math.random() * 1000)},
                    {name: '陕西', value: Math.round(Math.random() * 1000)},
                    {name: '吉林', value: Math.round(Math.random() * 1000)},
                    {name: '福建', value: Math.round(Math.random() * 1000)},
                    {name: '贵州', value: Math.round(Math.random() * 1000)},
                    {name: '广东', value: Math.round(Math.random() * 1000)},
                    {name: '青海', value: Math.round(Math.random() * 1000)},
                    {name: '西藏', value: Math.round(Math.random() * 1000)},
                    {name: '四川', value: Math.round(Math.random() * 1000)},
                    {name: '宁夏', value: Math.round(Math.random() * 1000)},
                    {name: '海南', value: Math.round(Math.random() * 1000)},
                    {name: '台湾', value: Math.round(Math.random() * 1000)},
                    {name: '香港', value: Math.round(Math.random() * 1000)},
                    {name: '澳门', value: Math.round(Math.random() * 1000)}
                ],

            }
        ],
    };
    instancel.setOption(option);


}
