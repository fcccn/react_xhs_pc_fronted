import React, {Component} from 'react'
import './resultIndex.scss'
import { XhsEchartsGuide, XhsEchartsLine } from '../../api/xhs_request'
import store from '../../store';
// import { figureChange } from '../../static/js/global'
import Chart from '../chart/chart'
import {lineResultNoteOption} from '../../static/js/echartData'
class ResultIndex extends Component{
    constructor(props) {
        super(props);
        store.subscribe(this.storeChange)
        this.state = {
            dataResultObj: {},
            lineDataRelationObj: {}
        }
        this._XhsEchartsGuide(props.keyword)
        this._XhsEchartsLine(props.keyword)
    }
    render() {
        return (
            <div className="chart-list">
                <div className="list-chart">
                    <div className="double-head">达人数量趋势</div>
                    <div className="number-list">
                        <div className="number">
                            <p className="number-name">{this.state.dataResultObj.kols_fans_counts}</p>
                            <p className="number-tips">达人粉丝总量</p>
                        </div>
                        <div className="number">
                            <p className="number-name">{this.state.dataResultObj.kols_counts}</p>
                            <p className="number-tips">达人数</p>
                        </div>
                        <div className="number">
                            <p className="number-name">{this.state.dataResultObj.notes_counts}</p>
                            <p className="number-tips">笔记数</p>
                        </div>
                        <div className="number">
                            <p className="number-name">{this.state.dataResultObj.notes_video_counts}</p>
                            <p className="number-tips">视频数</p>
                        </div>
                        <div className="number">
                            <p className="number-name">{this.state.dataResultObj.notes_image_counts}</p>
                            <p className="number-tips">图文数</p>
                        </div>
                        <div className="number">
                            <p className="number-name">{this.state.dataResultObj.notes_likes_counts}</p>
                            <p className="number-tips">点赞数</p>
                        </div>
                        <div className="number">
                            <p className="number-name">{this.state.dataResultObj.notes_collects_counts}</p>
                            <p className="number-tips">收藏数</p>
                        </div>
                        <div className="number">
                            <p className="number-name">{this.state.dataResultObj.notes_comments_counts}</p>
                            <p className="number-tips">评论数</p>
                        </div>
                    </div>
                </div>
                <div className="list-chart">
                    <div className="double-head">笔记互动量趋势</div>
                    <div className="double-chart">
                        <Chart barOption={lineResultNoteOption} id={'lineResultNote'}/>
                    </div>
                </div>
                <div className="list-double">
                    <div className="double-left double">
                        <div className="double-head">效果数据概览</div>
                        <div className="double-chart">
                            测试1
                        </div>
                    </div>
                    <div className="double-right double">
                        <div className="double-head">效果数据概览</div>
                        <div className="double-chart">
                            测试2
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    storeChange(){
        console.log(store.getState())
    }
    _XhsEchartsGuide (keyword) {
        XhsEchartsGuide({'keyword': keyword}).then((res) => {
            let data = res.data
            if (data.error === 0) {
                this.setState({
                    dataResultObj: data.result[0]
                })
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    _XhsEchartsLine(keyword) {
        XhsEchartsLine({'keyword': keyword}).then((res) => {
            let data = res.data
            let dataObj = {}
            this.setState({
                lineDataRelationObj: {}
            })
            if (data.error === 0) {
                dataObj = data.result
                // let y_vales = []
                // dataObj.y_vales.forEach((item) => {
                //     y_vales.push(this.groupSplit(item))
                // })
                // console.log(y_vales)
                let groupedYNameArray = this.group(dataObj.y_names, 3)
                let groupedValueArray = this.group(dataObj.y_vales, 3)
                let newArray = dataObj.x_names
                this.setState({
                    lineDataRelationObj: {
                        x_names: newArray,
                        y_names: groupedYNameArray[1],
                        y_vales: groupedValueArray[1]
                    }
                })
                console.log(this.state.lineDataRelationObj)
                // 笔记互动量趋势
                lineResultNoteOption.legend.data = this.state.lineDataRelationObj.y_names
                lineResultNoteOption.xAxis[0].data = this.state.lineDataRelationObj.x_names
                lineResultNoteOption.series[0].name = this.state.lineDataRelationObj.y_names[0]
                lineResultNoteOption.series[1].name = this.state.lineDataRelationObj.y_names[1]
                lineResultNoteOption.series[2].name = this.state.lineDataRelationObj.y_names[2]
                lineResultNoteOption.series[0].data = this.state.lineDataRelationObj.y_vales[0]
                lineResultNoteOption.series[1].data = this.state.lineDataRelationObj.y_vales[1]
                lineResultNoteOption.series[2].data = this.state.lineDataRelationObj.y_vales[2]
                console.log(lineResultNoteOption)
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    // 数组每隔几个取一个
    // groupSplit(array) {
    //     let newArray = []
    //     for(let i = 0; i < array.length; i++) {
    //         if (i === 0 || i % 4 === 0) {
    //             newArray.push(array[i])
    //         }
    //     }
    //     return newArray
    // }
    // 分隔数组
    group(array, subGroupLength) {
        let index = 0;
        let newArray = [];
        while(index < array.length) {
            newArray.push(array.slice(index, index += subGroupLength));
        }
        return newArray;
    }
    componentDidMount() {
        this.props.onRef(this)
    }
}
export default ResultIndex
