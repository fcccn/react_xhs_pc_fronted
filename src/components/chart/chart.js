import React, {Component} from 'react'
// import { barOption } from '../../static/js/echartData'
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
        chart.on('click', function (param) {
            console.log(param)
        })
        chart.setOption(this.props.barOption)
    }
    componentDidMount() {
        this.init()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.init()
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.barObject !== nextProps.barObject) {
            // barOption.legend.data = nextProps.barObject.brand_data_column.y_names
            // barOption.xAxis[0].data = nextProps.barObject.brand_data_column.x_names
            // barOption.series[0].name = nextProps.barObject.brand_data_column.y_names[0]
            // barOption.series[1].name = nextProps.barObject.brand_data_column.y_names[1]
            // barOption.series[0].data = nextProps.barObject.brand_data_column.y_vales[0]
            // barOption.series[1].data = nextProps.barObject.brand_data_column.y_vales[1]
        }
    }
}
export default Chart;
