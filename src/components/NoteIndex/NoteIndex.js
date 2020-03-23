import React, {Component} from 'react'
import {
    XhsEchartsClouds,
    XhsEchartsColumn,
    XhsEchartsGuide,
    XhsEchartsLine,
    XhsEchartsPie,
    XhsNotesList
} from "../../api/xhs_request";
import '../KolIndex/KolIndex.scss'
import Chart from "../Chart/Chart";
import 'regenerator-runtime/runtime';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import {lineNoteNumberOption, PieNoteTypeOption, worldCommentOption, PieNoteCommitOption, worldNoteCommentOption, noteTalkOption,} from "../../static/js/echartData";
class NoteIndex extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dataResultObj: {},
            lineKolNumber: {},
            kolFansArray: [
                {text: '点赞最多', apiName: '-liked_count'},
                {text: '收藏最多', apiName: '-collected_count'},
                {text: '评论最多', apiName: '-comments_count'},
                {text: '发布时间', apiName: '-pubtime'}
            ],
            kolHeaderArray: ['基本信息', '粉丝数', '点赞数', '收藏数'],
            kolListObj: {
                page_index: 1,
                page_size: 10,
                order_by: '-liked_count',
                is_cooperate: ''
            },
            kolIndex: 0,
            total: 1,
            current: 2,
            kolListArray: []
        }
        this._XhsEchartsGuide(props.keyword)
        this._XhsEchartsLine(props.keyword)
        this._XhsEchartsPie(props.keyword)
        this._XhsEchartsClouds(props.keyword)
        this._XhsEchartsColumn(props.keyword)
        this._XhsNotesList(props.keyword)
    }
    render() {
        return (
            <div className="chart-list">
                <div className="list-chart">
                    <div className="double-head">笔记数据</div>
                    <div className="number-list">
                        <div className="number">
                            <p className="number-name">{this.state.dataResultObj.notes_counts}</p>
                            <p className="number-tips">笔记数</p>
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
                    <div className="double-head">笔记数趋势</div>
                    <div className="double-chart">
                        <Chart barOption={lineNoteNumberOption} id={'lineNoteNumber'}/>
                    </div>
                </div>
                <div className="list-double">
                    <div className="double-charts">
                        <div className="double-head">笔记类型</div>
                        <div className="double-chart">
                            <Chart barOption={PieNoteTypeOption} id={'pieNoteType'} height={'340px'}/>
                        </div>
                    </div>
                    <div className="double-word">
                        <div className="double-head">达人合作类型</div>
                        <div className="double-chart">
                            <Chart barOption={worldCommentOption} id={'worldComment'} height={'340px'}/>
                        </div>
                    </div>
                </div>
                <div className="list-double">
                    <div className="double-charts">
                        <div className="double-head">笔记评论情感</div>
                        <div className="double-chart">
                            <Chart barOption={PieNoteCommitOption} id={'PieNoteCommit'} height={'340px'}/>
                        </div>
                    </div>
                    <div className="double-word">
                        <div className="double-head">笔记内容词云</div>
                        <div className="double-chart">
                            <Chart barOption={worldNoteCommentOption} id={'worldNoteComment'} height={'340px'}/>
                        </div>
                    </div>
                </div>
                <div className="list-double">
                    <div className="list-chart">
                        <div className="double-head">笔记话题分布</div>
                        <div className="double-chart">
                            <Chart barOption={noteTalkOption} id={'noteTalk'}/>
                        </div>
                    </div>
                </div>
                <div className="table-info">
                    <div className="info-title">达人列表</div>
                    <div className="kol-container">
                        {
                            this.state.kolFansArray.map((item, index) => {
                                return <div className={`container-btn ${index === this.state.kolIndex ? 'select' : null}`} key={index} onClick={this.clickKol.bind(this, index, item.apiName)}>{item.text}</div>
                            })
                        }
                    </div>
                    <div className="list-table">
                        <div className="table-header">
                            {
                                this.state.kolHeaderArray.map((itemHeader, indexHeader) => {
                                    return <div className='header-details' key={indexHeader}>
                                        <div className="details">
                                            {itemHeader}
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                        <div className="list">
                            {
                                this.state.kolListArray.map((kolList, kolListIndex) => {
                                    return <div className="list-item" key={kolListIndex}>
                                        <div className="item-user item-info">
                                            <img src={kolList.image} alt='' className='user_img'/>
                                            <div className="user-data">
                                                <div className="data-name">{kolList.title}</div>
                                                <div className="data-nickName">{kolList.user_nickname}</div>
                                            </div>
                                        </div>
                                        <div className="item-user item-common">
                                            <div className="item-center">
                                                {kolList.liked_count}
                                            </div>
                                        </div>
                                        <div className="item-user item-common">
                                            <div className="item-center">
                                                {kolList.collected_count}
                                            </div>
                                        </div>
                                        <div className="item-user item-common">
                                            <div className="item-center">
                                                {kolList.comments_count}
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                            <div className="list-pagination">
                                <Pagination defaultCurrent={this.state.kolListArray.page_index} defaultPageSize={this.state.kolListArray.page_size} total={this.state.total} onChange={this.onChange.bind(this)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    onChange(page) {
        let kolListObj = this.state.kolListObj
        kolListObj.page_index = page
        this.setState({
            kolListObj
        })
        this._XhsNotesList(this.state.kolListObj.keyword)
    }
    _XhsNotesList(keyword) {
        let kolListObj = this.state.kolListObj
        kolListObj.keyword = keyword
        this.setState({
            kolListObj: kolListObj
        })
        XhsNotesList(this.state.kolListObj).then((res) => {
            let data = res.data
            if (data.error === 0) {
                this.setState({
                    kolListArray: data.result,
                    total: data.total_count
                })
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    clickKol(index, apiName) {
        this.setState({
            kolIndex: index
        })
        let kolListObj = this.state.kolListObj
        kolListObj.order_by = apiName
        this.setState({
            kolListObj
        })
        this._XhsNotesList(this.state.kolListObj.keyword)
    }
    _XhsEchartsColumn(keyword) {
        XhsEchartsColumn({'keyword': keyword}).then((res) => {
            let data = res.data
            if (data.error === 0) {
                let noteTopicsObj = data.result[0].note_topics
                // 达人粉丝数分布
                let desc_x_names = this.group(noteTopicsObj.x_names, 10)
                let desc_y_vales = this.group(noteTopicsObj.y_vales[0], 10)
                noteTalkOption.legend.data = noteTopicsObj.y_names
                noteTalkOption.xAxis[0].data = desc_x_names[0]
                noteTalkOption.series[0].name = noteTopicsObj.y_names[0]
                noteTalkOption.series[0].data = desc_y_vales[0]
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    group(array, subGroupLength) {
        let index = 0;
        let newArray = [];
        while(index < array.length) {
            newArray.push(array.slice(index, index += subGroupLength));
        }
        return newArray;
    }
    _XhsEchartsClouds(keyword) {
        XhsEchartsClouds({'keyword': keyword}).then((res) => {
            let data = res.data
            if (data.error === 0) {
                // 笔记评论词云
                let noteCommentsObj = data.result[0].note_comments_keywords
                let worldComment = noteCommentsObj.x_names.map((item, index) => {
                    return {
                        name: item,
                        value: noteCommentsObj.y_vales[0][index]
                    }
                })
                worldCommentOption.series[0].data = worldComment
                // 笔记内容词云
                let worldNoteCommentObj = data.result[0].note_desc_keywords
                let worldNoteComment = worldNoteCommentObj.x_names.map((item, index) => {
                    return {
                        name: item,
                        value: worldNoteCommentObj.y_vales[0][index]
                    }
                })
                worldNoteCommentOption.series[0].data = worldNoteComment
            }
        }).catch((err) => {
            console.log(err)
        })
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
            if (data.error === 0) {
                this.setState({
                    lineKolNumber: data.result
                })
                let y_vales = this.state.lineKolNumber.y_vales.slice(0, 1)
                let y_names = this.state.lineKolNumber.y_names.slice(0, 1)
                lineNoteNumberOption.legend.data = y_names
                lineNoteNumberOption.xAxis[0].data = this.state.lineKolNumber.x_names
                lineNoteNumberOption.series[0].name = y_names[0]
                lineNoteNumberOption.series[0].data = y_vales[0]
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    _XhsEchartsPie(keyword) {
        XhsEchartsPie({'keyword': keyword}).then((res) => {
            let data = res.data
            if (data.error === 0) {
                // 笔记类型
                let pieNoteCooperateObj = data.result[0].note_type
                let pieNoteCooperate = pieNoteCooperateObj.y_vales[0].map((item, index) => {
                    return {
                        name: pieNoteCooperateObj.x_names[index],
                        value: item
                    }
                })
                PieNoteTypeOption.legend.data = pieNoteCooperateObj.x_names
                PieNoteTypeOption.series[0].data = pieNoteCooperate
                //  笔记评论情感
                let pieNoteCommitObj = data.result[0].note_sentiment_array
                let pieNoteCommit = pieNoteCommitObj.y_vales[0].map((item, index) => {
                    return {
                        name: pieNoteCommitObj.x_names[index],
                        value: item
                    }
                })
                PieNoteCommitOption.legend.data = pieNoteCommitObj.x_names
                PieNoteCommitOption.series[0].data = pieNoteCommit
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    componentDidMount() {
        this.props.onRef(this)
    }
}
export default NoteIndex
