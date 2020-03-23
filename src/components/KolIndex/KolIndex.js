import React, {Component} from 'react'
import './KolIndex.scss'
import Chart from '../Chart/Chart'
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import {lineKolNumberOption, kolFansOption, kolLevelOption, PieNoteCooperateOption} from "../../static/js/echartData";
import { XhsEchartsLine, XhsEchartsColumn, XhsEchartsPie, XhsKolList } from '../../api/xhs_request'
class KolIndex extends Component{
    constructor(props) {
        super(props);
        this.state = {
            lineKolNumber: {},
            kolFansArray: [
                {text: '粉丝最多', apiName: '-fans'},
                {text: '点赞最多', apiName: '-liked'},
                {text: '收藏最多', apiName: '-collected'}
            ],
            kolIndex: 0,
            kolHeaderArray: ['基本信息', '粉丝数', '点赞数', '收藏数'],
            kolListObj: {
                page_index: 1,
                page_size: 10,
                order_by: '-fans',
                keyword: ''
            },
            total: 1,
            current: 2,
            kolListArray: []
        }
        this._XhsEchartsLine(props.keyword)
        this._XhsEchartsColumn(props.keyword)
        this._XhsEchartsPie(props.keyword)
        this._XhsKolList(props.keyword)
    }
    render() {
        return (
            <div className="chart-list">
                <div className="list-chart">
                    <div className="double-head">达人数量走势</div>
                    <div className="double-chart">
                        <Chart barOption={lineKolNumberOption} id={'lineKolNumber'}/>
                    </div>
                </div>
                <div className="list-double">
                    <div className="double-charts">
                        <div className="double-head">笔记内容Top10</div>
                        <div className="double-chart">
                            <Chart barOption={kolFansOption} id={'kolFans'} />
                        </div>
                    </div>
                    <div className="double-word">
                        <div className="double-head">达人合作类型</div>
                        <div className="double-chart">
                            <Chart barOption={PieNoteCooperateOption} id={'pieNoteCooperate'}/>
                        </div>
                    </div>
                </div>
                <div className="list-chart">
                    <div className="double-head">达人薯种分布</div>
                    <div className="double-chart">
                        <Chart barOption={kolLevelOption} id={'kolLevel'}/>
                    </div>
                </div>
                <div className="table-info">
                    <div className="info-title">达人列表Top10</div>
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
                                this.state.kolListArray.map((itemList, indexList) => {
                                    return <div className="list-item" key={indexList} onClick={this.clickXhs.bind(this, itemList.url)}>
                                        <div className="item-user item-info">
                                            <img src={itemList.image} alt='' className='user_img'/>
                                            <div className="user-data">
                                                <div className="data-name">{itemList.nickname}</div>
                                                <div className="data-nickName">{itemList.level_name}</div>
                                            </div>
                                        </div>
                                        <div className="item-user item-common">
                                            <div className="item-center">
                                                {itemList.fans}
                                            </div>
                                        </div>
                                        <div className="item-user item-common">
                                            <div className="item-center">
                                                {itemList.liked}
                                            </div>
                                        </div>
                                        <div className="item-user item-common">
                                            <div className="item-center">
                                                {itemList.collected}
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
        this._XhsKolList(this.state.kolListObj.keyword)
    }
    clickXhs(xhsUrl) {
        window.open(xhsUrl, '_blank')
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
        this._XhsKolList(this.state.kolListObj.keyword)
    }
    _XhsKolList(keyword) {
        let kolListObj = this.state.kolListObj
        kolListObj.keyword = keyword
        this.setState({
            kolListObj: kolListObj
        })
        XhsKolList(this.state.kolListObj).then((res) => {
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
    _XhsEchartsColumn(keyword) {
        let kolFansObj = {}
        let kolLevelObj = {}
        XhsEchartsColumn({'keyword': keyword}).then((res) => {
            let data = res.data
            if (data.error === 0) {
                kolFansObj = data.result[0].kols_fans
                kolLevelObj = data.result[0].kols_level
                // 达人粉丝数分布
                kolFansOption.legend.data = kolFansObj.y_names
                kolFansOption.xAxis[0].data = kolFansObj.x_names
                kolFansOption.series[0].name = kolFansObj.y_names[0]
                kolFansOption.series[0].data = kolFansObj.y_vales[0]
                // 达人薯种分布
                kolLevelOption.legend.data = kolLevelObj.y_names
                kolLevelOption.xAxis[0].data = kolLevelObj.x_names
                kolLevelOption.series[0].name = kolLevelObj.y_names[0]
                kolLevelOption.series[0].data = kolLevelObj.y_vales[0]
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    _XhsEchartsPie(keyword) {
        let pieNoteCooperateObj = {}
        let pieNoteCooperate
        XhsEchartsPie({'keyword': keyword}).then((res) => {
            let data = res.data
            if (data.error === 0) {
                pieNoteCooperateObj = data.result[0].note_cooperate
                pieNoteCooperate = pieNoteCooperateObj.y_vales[0].map((item, index) => {
                    return {
                        name: pieNoteCooperateObj.x_names[index],
                        value: item
                    }
                })
                PieNoteCooperateOption.legend.data = pieNoteCooperateObj.x_names
                PieNoteCooperateOption.series[0].data = pieNoteCooperate
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
