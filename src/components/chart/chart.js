import React, {Component} from 'react'
import echarts from 'echarts'
class Chart extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className='chart' id={this.props.id} style={{height: '234px'}}/>
        )
    }
    init() {
        let chart = echarts.init(document.getElementById(this.props.id))
        setTimeout(() => {
            chart.setOption(this.props.barOption, true)
        }, 200)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.init()


    }
}
export default Chart;
