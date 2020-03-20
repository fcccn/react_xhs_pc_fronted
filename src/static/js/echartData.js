// 品牌对比
// 柱状图
import echarts from 'echarts'
export const barOption = {
    legend: {
        data: [],
        icon: 'circle',   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 15,  // 设置宽度
        itemHeight: 15, // 设置高度
        itemGap: 20 // 设置间距
    },
    calculable: true,
    tooltip: {                                      //提示框组件
        trigger: 'axis'                             //触发类型,'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。 'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
    },
    xAxis: [
        {
            type: 'category',
            data: []
        }
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: {
                lineStyle:{
                    type:'dashed'    //设置网格线类型 dotted：虚线   solid:实线
                }
            },
            axisLine:{ //y轴
                show:false
            }
        },
    ],
    series: [
        {
            name: '',
            type: 'bar',
            barWidth : 15,
            itemStyle: {    //柱状颜色和圆角
                color: '#396AF2'
            },
            data: []
        },
        {
            name: '',
            type: 'bar',
            barWidth : 15,
            itemStyle: {    //柱状颜色和圆角
                color: '#F5A20A'
            },
            data: []
        }
    ],
    grid: {
        x: 50,   //左侧与y轴的距离
        y: 35,   //top部与x轴的距离
        x2: 40,   //右侧与y轴的距离
        y2: 30    //bottom部与x轴的距离
    }
}

export const rightBarOption = {
    legend: {
        data: [],
        icon: 'circle',   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 15,  // 设置宽度
        itemHeight: 15, // 设置高度
        itemGap: 20 // 设置间距
    },
    calculable: true,
    tooltip: {                                      //提示框组件
        trigger: 'item'                             //触发类型,'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。 'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
    },
    xAxis: [
        {
            type: 'category',
            data: []
        }
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: {
                lineStyle:{
                    type:'dashed'    //设置网格线类型 dotted：虚线   solid:实线
                }
            },
            axisLine:{ //y轴
                show:false
            }
        },
    ],
    series: [
        {
            name: '',
            type: 'bar',
            barWidth : 15,
            itemStyle: {    //柱状颜色和圆角
                color: '#396AF2'
            },
            data: []
        },
        {
            name: '',
            type: 'bar',
            barWidth : 15,
            itemStyle: {    //柱状颜色和圆角
                color: '#F5A20A'
            },
            data: []
        }
    ],
    grid:{
        x: 50,   //左侧与y轴的距离
        y: 35,   //top部与x轴的距离
        x2: 40,   //右侧与y轴的距离
        y2: 30    //bottom部与x轴的距离
    }
}
// 达人粉丝数分布
export const fansBarOption = {
    legend: {
        data: [],
        icon: 'circle',   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 15,  // 设置宽度
        itemHeight: 15, // 设置高度
        itemGap: 20 // 设置间距
    },
    calculable: true,
    tooltip: {                                      //提示框组件
        trigger: 'item'                             //触发类型,'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。 'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
    },
    xAxis: [
        {
            type: 'category',
            data: []
        }
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: {
                lineStyle:{
                    type:'dashed'    //设置网格线类型 dotted：虚线   solid:实线
                }
            },
            axisLine:{ //y轴
                show:false
            }
        },
    ],
    series: [
        {
            name: '',
            type: 'bar',
            barWidth : 15,
            itemStyle: {    //柱状颜色和圆角
                color: '#396AF2'
            },
            data: []
        },
        {
            name: '',
            type: 'bar',
            barWidth : 15,
            itemStyle: {    //柱状颜色和圆角
                color: '#F5A20A'
            },
            data: []
        }
    ],
    grid: {
        x: 50,   //左侧与y轴的距离
        y: 35,   //top部与x轴的距离
        x2: 40,   //右侧与y轴的距离
        y2: 30    //bottom部与x轴的距离
    }
}
// 达人薯种分布
export const kolBarOption = {
    legend: {
        data: [],
        icon: 'circle',   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 15,  // 设置宽度
        itemHeight: 15, // 设置高度
        itemGap: 20 // 设置间距
    },
    calculable: true,
    tooltip: {                                      //提示框组件
        trigger: 'item'                             //触发类型,'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。 'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
    },
    xAxis: [
        {
            type: 'category',
            data: []
        }
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: {
                lineStyle:{
                    type:'dashed'    //设置网格线类型 dotted：虚线   solid:实线
                }
            },
            axisLine:{ //y轴
                show:false
            }
        },
    ],
    series: [
        {
            name: '',
            type: 'bar',
            barWidth : 15,
            itemStyle: {    //柱状颜色和圆角
                color: '#396AF2'
            },
            data: []
        },
        {
            name: '',
            type: 'bar',
            barWidth : 15,
            itemStyle: {    //柱状颜色和圆角
                color: '#F5A20A'
            },
            data: []
        }
    ],
    grid: {
        x: 50,   //左侧与y轴的距离
        y: 35,   //top部与x轴的距离
        x2: 40,   //右侧与y轴的距离
        y2: 30    //bottom部与x轴的距离
    }
}

// 折线图
// 达人数量趋势
export const lineKolOption = {
    color:['#396AF2', '#F5A20A'],
    legend: {
        data: [],
        icon: 'circle',   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 15,  // 设置宽度
        itemHeight: 15, // 设置高度
        itemGap: 20 // 设置间距
    },
    calculable: true,
    tooltip: {                                      //提示框组件
        trigger: 'axis'                             //触发类型,'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。 'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
    },
    xAxis: [
        {
            type: 'category',
            data: []
        }
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: {
                lineStyle:{
                    type:'dashed'    //设置网格线类型 dotted：虚线   solid:实线
                }
            },
            axisLine:{ //y轴
                show:false
            }
        },
    ],
    series: [
        {
            name: '',
            type: 'line',
            data: [],
            smooth: true,
            symbol: 'none',
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                        [
                            {
                                offset: 0, color: '#E9F0FE' // 0% 处的颜色
                            },
                            {
                                offset: 1, color: '#fff' // 100% 处的颜色
                            }
                        ]
                    )
                }
            }
        },
        {
            name: '',
            type: 'line',
            data: [],
            smooth: true,
            symbol: 'none',
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                        [
                            {
                                offset: 0, color: '#F5A20A' // 0% 处的颜色
                            },
                            {
                                offset: 1, color: '#fff' // 100% 处的颜色
                            }
                        ]
                    )
                }
            }
        }
    ],
    grid: {
        x: 50,   //左侧与y轴的距离
        y: 35,   //top部与x轴的距离
        x2: 40,   //右侧与y轴的距离
        y2: 30    //bottom部与x轴的距离
    }
}

// 笔记数量趋势
export const lineNoteOption = {
    color:['#396AF2', '#F5A20A'],
    legend: {
        data: [],
        icon: 'circle',   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 15,  // 设置宽度
        itemHeight: 15, // 设置高度
        itemGap: 20 // 设置间距
    },
    calculable: true,
    tooltip: {                                      //提示框组件
        trigger: 'axis'                             //触发类型,'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。 'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
    },
    xAxis: [
        {
            type: 'category',
            data: []
        }
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: {
                lineStyle:{
                    type:'dashed'    //设置网格线类型 dotted：虚线   solid:实线
                }
            },
            axisLine:{ //y轴
                show:false
            }
        },
    ],
    series: [
        {
            name: '',
            type: 'line',
            data: [],
            smooth: true,
            symbol: 'none',
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                        [
                            {
                                offset: 0, color: '#E9F0FE' // 0% 处的颜色
                            },
                            {
                                offset: 1, color: '#fff' // 100% 处的颜色
                            }
                        ]
                    )
                }
            }
        },
        {
            name: '',
            type: 'line',
            data: [],
            smooth: true,
            symbol: 'none',
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                        [
                            {
                                offset: 0, color: '#F5A20A' // 0% 处的颜色
                            },
                            {
                                offset: 1, color: '#fff' // 100% 处的颜色
                            }
                        ]
                    )
                }
            }
        }
    ],
    grid: {
        x: 50,   //左侧与y轴的距离
        y: 35,   //top部与x轴的距离
        x2: 40,   //右侧与y轴的距离
        y2: 30    //bottom部与x轴的距离
    }
}


// 效果分析
// 笔记互动趋势
export const lineResultNoteOption = {
    color:['#396AF2', '#F5A20A', '#F52C9B'],
    legend: {
        data: [],
        icon: 'circle',   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 15,  // 设置宽度
        itemHeight: 15, // 设置高度
        itemGap: 20 // 设置间距
    },
    calculable: true,
    tooltip: {                                      //提示框组件
        trigger: 'axis'                             //触发类型,'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。 'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
    },
    xAxis: [
        {
            type: 'category',
            data: []
        }
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: {
                lineStyle:{
                    type:'dashed'    //设置网格线类型 dotted：虚线   solid:实线
                }
            },
            axisLine:{ //y轴
                show:false
            }
        },
    ],
    series: [
        {
            name: '',
            type: 'line',
            data: [],
            smooth: true,
            symbol: 'none',
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                        [
                            {
                                offset: 0, color: '#E9F0FE' // 0% 处的颜色
                            },
                            {
                                offset: 1, color: '#fff' // 100% 处的颜色
                            }
                        ]
                    )
                }
            }
        },
        {
            name: '',
            type: 'line',
            data: [],
            smooth: true,
            symbol: 'none',
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                        [
                            {
                                offset: 0, color: '#F5A20A' // 0% 处的颜色
                            },
                            {
                                offset: 1, color: '#fff' // 100% 处的颜色
                            }
                        ]
                    )
                }
            }
        },
        {
            name: '',
            type: 'line',
            data: [],
            smooth: true,
            symbol: 'none',
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                        [
                            {
                                offset: 0, color: '#F52C9B' // 0% 处的颜色
                            },
                            {
                                offset: 1, color: '#fff' // 100% 处的颜色
                            }
                        ]
                    )
                }
            }
        }
    ],
    grid: {
        x: 50,   //左侧与y轴的距离
        y: 35,   //top部与x轴的距离
        x2: 40,   //右侧与y轴的距离
        y2: 30    //bottom部与x轴的距离
    }
}

// 笔记影响力趋势
export const lineInfluenceNoteOption = {
    color:['#396AF2', '#F5A20A', '#F52C9B'],
    legend: {
        data: [],
        icon: 'circle',   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 15,  // 设置宽度
        itemHeight: 15, // 设置高度
        itemGap: 20 // 设置间距
    },
    calculable: true,
    tooltip: {                                      //提示框组件
        trigger: 'axis'                             //触发类型,'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。 'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
    },
    xAxis: [
        {
            type: 'category',
            data: []
        }
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: {
                lineStyle:{
                    type:'dashed'    //设置网格线类型 dotted：虚线   solid:实线
                }
            },
            axisLine:{ //y轴
                show:false
            }
        },
    ],
    series: [
        {
            name: '',
            type: 'line',
            data: [],
            smooth: true,
            symbol: 'none',
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                        [
                            {
                                offset: 0, color: '#E9F0FE' // 0% 处的颜色
                            },
                            {
                                offset: 1, color: '#fff' // 100% 处的颜色
                            }
                        ]
                    )
                }
            }
        },
        {
            name: '',
            type: 'line',
            data: [],
            smooth: true,
            symbol: 'none',
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                        [
                            {
                                offset: 0, color: '#F5A20A' // 0% 处的颜色
                            },
                            {
                                offset: 1, color: '#fff' // 100% 处的颜色
                            }
                        ]
                    )
                }
            }
        },
        {
            name: '',
            type: 'line',
            data: [],
            smooth: true,
            symbol: 'none',
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                        [
                            {
                                offset: 0, color: '#F52C9B' // 0% 处的颜色
                            },
                            {
                                offset: 1, color: '#fff' // 100% 处的颜色
                            }
                        ]
                    )
                }
            }
        }
    ],
    grid: {
        x: 50,   //左侧与y轴的距离
        y: 35,   //top部与x轴的距离
        x2: 40,   //右侧与y轴的距离
        y2: 30    //bottom部与x轴的距离
    }
}

// 笔记评论Top10 柱状图
export const noteDiscussOption = {
    legend: {
        data: [],
        icon: 'circle',   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
        itemWidth: 15,  // 设置宽度
        itemHeight: 15, // 设置高度
        itemGap: 20 // 设置间距
    },
    calculable: true,
    tooltip: {                                      //提示框组件
        trigger: 'axis'                             //触发类型,'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。 'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
    },
    xAxis: [
        {
            type: 'category',
            data: []
        }
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: {
                lineStyle:{
                    type:'dashed'    //设置网格线类型 dotted：虚线   solid:实线
                }
            },
            axisLine:{ //y轴
                show:false
            }
        },
    ],
    series: [
        {
            name: '',
            type: 'bar',
            barWidth : 25,
            itemStyle: {    //柱状颜色和圆角
                color: '#396AF2'
            },
            data: []
        }
    ],
    grid: {
        x: 40,   //左侧与y轴的距离
        y: 35,   //top部与x轴的距离
        x2: 40,   //右侧与y轴的距离
        y2: 30    //bottom部与x轴的距离
    }
};

// 词图云
export const colors = ['#1aad19', '#FFBE00', '#F76260', '#FF8553', '#6E88BD', '#000000', '#2f908d']

export const worldCommentOption = {
    // 产生随机颜色值
    color: () => {
        // Random color
        return colors[parseInt(Math.random() * 7)]
    },
    series: [{
        height: 220,
        name: '词频数',
        type: 'wordCloud',
        size: ['80%', '80%'],
        textRotation: [0, 45, 90, -45],
        textPadding: 0,
        autoSize: {
            enable: true,
            minSize: 14
        },
        data: []
    }]
}
