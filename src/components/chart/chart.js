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
        setTimeout(() => {
            chart.setOption(this.props.barOption)
        }, 200)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.init()
    }
}
export default Chart;
