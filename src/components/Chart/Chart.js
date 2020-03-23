import React, {Component} from 'react'
import echarts from 'echarts'
class Chart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            defaultHeight: '234px'
        }
    }
    render() {
        return (
            <div className='chart' id={this.props.id} style={{height: this.props.height?this.props.height:this.state.defaultHeight}}/>
        )
    }
    init() {
        let chart = echarts.init(document.getElementById(this.props.id))
        chart.showLoading({
            text: 'loading',
            color: '#396AF2',
            textColor: '#396AF2',
            maskColor: 'rgba(255, 255, 255, 0.2)'
        })
        setTimeout(() => {
            chart.hideLoading()
            chart.setOption(this.props.barOption)
        }, 200)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.init()
    }
}
export default Chart;
