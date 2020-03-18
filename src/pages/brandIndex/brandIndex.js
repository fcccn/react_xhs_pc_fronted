import React, {Component} from 'react'
import Chart from '../../components/chart/chart'
import './brandIndex.scss'
import {barOption, fansBarOption, kolBarOption, lineKolOption, rightBarOption, lineNoteOption} from "../../static/js/echartData";
import {XhsEchartsColumnMultiple, XhsEchartsLineMultiple} from "../../api/xhs_request";
class BrandIndex extends Component{
    constructor(props) {
        super(props);
        this.state = {
            barObject: {},
            lineObject: {}
        }
    }
    render() {
        return (
            <div className="chart-list">
                <div className="list-double">
                    <div className="double-left double">
                        <div className="double-head">效果数据概览</div>
                        <div className="double-chart">
                            <Chart barOption={barOption} id={'barLeft'}/>
                        </div>
                    </div>
                    <div className="double-right double">
                        <div className="double-head">效果数据概览</div>
                        <div className="double-chart">
                            <Chart barOption={rightBarOption} id={'barRight'}/>
                        </div>
                    </div>
                </div>
                <div className="list-chart">
                    <div className="double-head">达人数量趋势</div>
                    <div className="double-chart">
                        <Chart barOption={lineKolOption} id={'lineKol'}/>
                    </div>
                </div>
                <div className="list-chart">
                    <div className="double-head">笔记数量趋势</div>
                    <div className="double-chart">
                        <Chart barOption={lineNoteOption} id={'lineNote'}/>
                    </div>
                </div>
                <div className="list-chart">
                    <div className="double-head">达人粉丝数分布</div>
                    <div className="double-chart">
                        <Chart barOption={fansBarOption} id={'barFans'}/>
                    </div>
                </div>
                <div className="list-chart">
                    <div className="double-head">达人薯种分布</div>
                    <div className="double-chart">
                        <Chart barOption={kolBarOption} id={'barKol'}/>
                    </div>
                </div>
            </div>
        )
    }
    _XhsEchartsColumnMultiple() {
        XhsEchartsColumnMultiple().then((res) => {
            let data = res.data
            if (data.error === 0) {
                this.setState({
                    barObject: data.result[0]
                })
                // brand_data_column 柱状图 1
                barOption.legend.data = this.state.barObject.brand_data_column.y_names
                barOption.xAxis[0].data = this.state.barObject.brand_data_column.x_names
                barOption.series[0].name = this.state.barObject.brand_data_column.y_names[0]
                barOption.series[1].name = this.state.barObject.brand_data_column.y_names[1]
                barOption.series[0].data = this.state.barObject.brand_data_column.y_vales[0]
                barOption.series[1].data = this.state.barObject.brand_data_column.y_vales[1]

                // brand_data_column 柱状图 2
                rightBarOption.legend.data = this.state.barObject.brand_data_column1.y_names
                rightBarOption.xAxis[0].data = this.state.barObject.brand_data_column1.x_names
                rightBarOption.series[0].name = this.state.barObject.brand_data_column1.y_names[0]
                rightBarOption.series[1].name = this.state.barObject.brand_data_column1.y_names[1]
                rightBarOption.series[0].data = this.state.barObject.brand_data_column1.y_vales[0]
                rightBarOption.series[1].data = this.state.barObject.brand_data_column1.y_vales[1]

                // kols_fans_column
                fansBarOption.legend.data = this.state.barObject.kols_fans_column.y_names
                fansBarOption.xAxis[0].data = this.state.barObject.kols_fans_column.x_names
                fansBarOption.series[0].name = this.state.barObject.kols_fans_column.y_names[0]
                fansBarOption.series[1].name = this.state.barObject.kols_fans_column.y_names[1]
                fansBarOption.series[0].data = this.state.barObject.kols_fans_column.y_vales[0]
                fansBarOption.series[1].data = this.state.barObject.kols_fans_column.y_vales[1]

                // kols_level_column
                kolBarOption.legend.data = this.state.barObject.kols_level_column.y_names
                kolBarOption.xAxis[0].data = this.state.barObject.kols_level_column.x_names
                kolBarOption.series[0].name = this.state.barObject.kols_level_column.y_names[0]
                kolBarOption.series[1].name = this.state.barObject.kols_level_column.y_names[1]
                kolBarOption.series[0].data = this.state.barObject.kols_level_column.y_vales[0]
                kolBarOption.series[1].data = this.state.barObject.kols_level_column.y_vales[1]
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    _XhsEchartsLineMultiple() {
        XhsEchartsLineMultiple().then((res) => {
            let data = res.data
            if (data.error === 0) {
                this.setState({
                    lineObject: data.result[0]
                })
                //  kols_line
                lineKolOption.legend.data = this.state.lineObject.kols_line.y_names
                lineKolOption.xAxis[0].data = this.state.lineObject.kols_line.x_names
                lineKolOption.series[0].name = this.state.lineObject.kols_line.y_names[0]
                lineKolOption.series[1].name = this.state.lineObject.kols_line.y_names[1]
                lineKolOption.series[0].data = this.state.lineObject.kols_line.y_vales[0]
                lineKolOption.series[1].data = this.state.lineObject.kols_line.y_vales[1]

                // notes_line
                lineNoteOption.legend.data = this.state.lineObject.notes_line.y_names
                lineNoteOption.xAxis[0].data = this.state.lineObject.notes_line.x_names
                lineNoteOption.series[0].name = this.state.lineObject.notes_line.y_names[0]
                lineNoteOption.series[1].name = this.state.lineObject.notes_line.y_names[1]
                lineNoteOption.series[0].data = this.state.lineObject.notes_line.y_vales[0]
                lineNoteOption.series[1].data = this.state.lineObject.notes_line.y_vales[1]
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    componentWillMount() {
        this._XhsEchartsLineMultiple()
        this._XhsEchartsColumnMultiple()
    }
}
export default BrandIndex
