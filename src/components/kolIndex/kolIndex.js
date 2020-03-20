import React, {Component} from 'react'
import './kolIndex.scss'
import Chart from '../chart/chart'
import {lineKolNumberOption} from "../../static/js/echartData";
import { XhsEchartsLine } from '../../api/xhs_request'
class KolIndex extends Component{
    constructor(props) {
        super(props);
        this.state = {
            lineKolNumber: {}
        }
        this._XhsEchartsLine(props.keyword)
    }
    render() {
        return (
            <div className="chart-list">
                <div className="list-chart">
                    <div className="double-head">笔记互动量趋势</div>
                    <div className="double-chart">
                        <Chart barOption={lineKolNumberOption} id={'lineKolNumber'}/>
                    </div>
                </div>
            </div>
        )
    }
    _XhsEchartsLine(keyword) {
        XhsEchartsLine({'keyword': keyword}).then((res) => {
            let data = res.data
            if (data.error === 0) {
                this.setState({
                    lineKolNumber: data.result
                })
                let y_vales = this.state.lineKolNumber.y_vales.slice(1, 2)
                let y_names = this.state.lineKolNumber.y_names.slice(1, 2)
                lineKolNumberOption.legend.data = y_names
                lineKolNumberOption.xAxis[0].data = this.state.lineKolNumber.x_names
                lineKolNumberOption.series[0].name = y_names[0]
                lineKolNumberOption.series[0].data = y_vales[0]
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    componentDidMount() {
        this.props.onRef(this)
    }
}
export default KolIndex
