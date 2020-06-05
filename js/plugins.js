function getTopLeftCharts() {
    var line_chart = document.getElementById('noop_line_chart')
    var instancel = echarts.init(line_chart)
    let option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}'
        },
        legend: {

            left: 'right',
            data: [
                {
                    name: "销售量",
                    textStyle: {
                        color: '#ab90df'
                    },
                },
                {
                    name: "采购量",
                    textStyle: {
                        color: '#feab67'
                    },
                }
            ]
        },
        xAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#34a8af'
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
            name: '(单位：单)',
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
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#34a8af'
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#0e2a44'
                }
            }
        },
        series: [
            {
                name: '销售量',
                type: 'line',
                data: [1, 3, 9, 27, 81, 247, 741, 900, 1000],
                lineStyle: {
                    color: '#ab90df'
                },
                itemStyle: {
                    color: '#ab90df'
                }
            },
            {
                name: '采购量',
                type: 'line',
                data: [1, 2, 4, 8, 16, 32, 64, 128, 256],
                lineStyle: {
                    color: '#feab67'
                },
                itemStyle: {
                    color: '#feab67'
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
                return params.name + ': ' + value;
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
                    {name: '澳门', value: Math.round(Math.random() * 1000)},
                    {name: '南海诸岛', value: Math.round(Math.random() * 1000)}
                ],

            }
        ],
    };
    instancel.setOption(option);


}
