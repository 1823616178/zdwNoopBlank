function bottomCenterCharts() {
    var line_chart = document.getElementById('noop_bottom_center_chart')
    var instancel = echarts.init(line_chart)

    let option = {
        title: {
            show: false,
            text: '共享工厂(本年)',
            left: 'center',
            top: 'top',
            textStyle: {
                color: '#0099ff'
            }
        },
        legend: {
            orient: 'vertical',
            left: -10,
            top: 'center',
            textStyle: {
                color: '#0099ff'
            },
            data: ['洽谈', '合作', '进行', '完成']
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}万元 ({d}%)'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        color:["#00cccd","#f29961","#a682e6","#407fff","#65c6e7"],
        series: [
            {
                name: '共享工厂(本年)',
                type: 'pie',
                radius: ['30%', '75%'],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                label: {
                    show: true,
                    fontSize: 15,
                    formatter: '{c}万元'
                },
                labelLine: {
                    show: true
                },
                data: [
                    {value: 335, name: '洽谈'},
                    {value: 310, name: '合作'},
                    {value: 234, name: '进行'},
                    {value: 435, name: '完成'}
                ]
            }
        ]
    };
    instancel.setOption(option)

}