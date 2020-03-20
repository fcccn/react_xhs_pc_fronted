import React, {Component} from 'react'
import './resultIndex.scss'
import { XhsEchartsGuide, XhsEchartsLine, XhsEchartsClouds } from '../../api/xhs_request'
import store from '../../store';
// import { figureChange } from '../../static/js/global'
import Chart from '../chart/chart'
import { lineResultNoteOption, lineInfluenceNoteOption, noteDiscussOption, worldCommentOption, noteTitleOption, worldTitleOption } from '../../static/js/echartData'
class ResultIndex extends Component{
    constructor(props) {
        super(props);
        store.subscribe(this.storeChange)
        this.state = {
            dataResultObj: {}
        }
        this._XhsEchartsGuide(props.keyword)
        this._XhsEchartsLine(props.keyword)
        this._XhsEchartsClouds(props.keyword)
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
                <div className="list-chart">
                    <div className="double-head">笔记影响力趋势</div>
                    <div className="double-chart">
                        <Chart barOption={lineInfluenceNoteOption} id={'lineInfluenceNote'}/>
                    </div>
                </div>
                <div className="list-double">
                    <div className="double-charts">
                        <div className="double-head">笔记评论Top10</div>
                        <div className="double-chart">
                            <Chart barOption={noteDiscussOption} id={'noteDiscuss'} height={'340px'}/>
                        </div>
                    </div>
                    <div className="double-word">
                        <div className="double-head">笔记标题词云</div>
                        <div className="double-chart">
                            <Chart barOption={worldCommentOption} id={'worldComment'} height={'340px'}/>
                        </div>
                    </div>
                </div>
                <div className="list-double">
                    <div className="double-charts">
                        <div className="double-head">笔记标题Top10</div>
                        <div className="double-chart">
                            <Chart barOption={noteTitleOption} id={'noteTitle'} height={'340px'}/>
                        </div>
                    </div>
                    <div className="double-word">
                        <div className="double-head">笔记内容词云</div>
                        <div className="double-chart">
                            <Chart barOption={worldTitleOption} id={'worldTitle'} height={'340px'}/>
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
        let dataObj = {}
        let lineDataRelationObj = {}
        let lineInfluenceNoteObj = {}
        XhsEchartsLine({'keyword': keyword}).then((res) => {
            let data = res.data
            if (data.error === 0) {
                dataObj = data.result
                let groupedYNameArray = this.group(dataObj.y_names, 3)
                let groupedValueArray = this.group(dataObj.y_vales, 3)
                lineDataRelationObj.x_names = dataObj.x_names
                lineDataRelationObj.y_names = groupedYNameArray[1]
                lineDataRelationObj.y_vales = groupedValueArray[1]
                // 笔记互动量趋势
                lineResultNoteOption.legend.data = lineDataRelationObj.y_names
                lineResultNoteOption.xAxis[0].data = lineDataRelationObj.x_names
                lineResultNoteOption.series[0].name = lineDataRelationObj.y_names[0]
                lineResultNoteOption.series[1].name = lineDataRelationObj.y_names[1]
                lineResultNoteOption.series[2].name = lineDataRelationObj.y_names[2]
                lineResultNoteOption.series[0].data = lineDataRelationObj.y_vales[0]
                lineResultNoteOption.series[1].data = lineDataRelationObj.y_vales[1]
                lineResultNoteOption.series[2].data = lineDataRelationObj.y_vales[2]
                // 笔记影响力趋势
                lineInfluenceNoteObj.x_names = dataObj.x_names
                lineInfluenceNoteObj.y_names = groupedYNameArray[0]
                lineInfluenceNoteObj.y_vales = groupedValueArray[0]
                lineInfluenceNoteOption.legend.data = lineInfluenceNoteObj.y_names
                lineInfluenceNoteOption.xAxis[0].data = lineInfluenceNoteObj.x_names
                lineInfluenceNoteOption.series[0].name = lineInfluenceNoteObj.y_names[0]
                lineInfluenceNoteOption.series[1].name = lineInfluenceNoteObj.y_names[1]
                lineInfluenceNoteOption.series[2].name = lineInfluenceNoteObj.y_names[2]
                lineInfluenceNoteOption.series[0].data = lineInfluenceNoteObj.y_vales[0]
                lineInfluenceNoteOption.series[1].data = lineInfluenceNoteObj.y_vales[1]
                lineInfluenceNoteOption.series[2].data = lineInfluenceNoteObj.y_vales[2]
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    _XhsEchartsClouds(keyword) {
        XhsEchartsClouds({'keyword': keyword}).then((res) => {
            let data = res.data
            let noteCommentsObj = {}
            let worldComment = []
            let noteTitleObj = {}
            let worldTitle = []
            if (data.error === 0) {
                // 笔记评论Top10
                noteCommentsObj = data.result[0].note_comments_keywords
                let x_names = this.group(noteCommentsObj.x_names, 10)
                let y_vales = this.group(noteCommentsObj.y_vales[0], 10)
                noteDiscussOption.legend.data = noteCommentsObj.y_names
                noteDiscussOption.xAxis[0].data = x_names[0]
                noteDiscussOption.series[0].name = noteCommentsObj.y_names
                noteDiscussOption.series[0].data = y_vales[0]
                // 笔记评论词云
                worldComment = x_names[0].map((item, index) => {
                    return {
                        name: item,
                        value: noteCommentsObj.y_vales[0][index]
                    }
                })
                worldCommentOption.series[0].data = worldComment

                // 笔记标题Top10
                noteTitleObj = data.result[0].note_title_keywords
                let title_x_names = this.group(noteTitleObj.x_names, 10)
                let title_y_vales = this.group(noteTitleObj.y_vales[0], 10)
                noteTitleOption.legend.data = noteTitleObj.y_names
                noteTitleOption.xAxis[0].data = title_x_names[0]
                noteTitleOption.series[0].name = noteTitleObj.y_names
                noteTitleOption.series[0].data = title_y_vales[0]
                console.log(noteTitleOption)
                // 笔记评论词云
                worldTitle = noteTitleObj.x_names.map((item, index) => {
                    return {
                        name: item,
                        value: noteTitleObj.y_vales[0][index]
                    }
                })
                console.log(worldTitle)
                worldTitleOption.series[0].data = worldTitle
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
