import React, {Component} from 'react'
import './index.scss'
import brand_login_icon from '../../static/images/brand_login_icon.png';
import { ChunZhiBigDataXhsBrandList } from '../../api/xhs_request'
import xcx from '../../static/images/xcx_chuzhi_icon.png';
import head from '../../static/images/brand_head_icon.png';
import { clearCookies } from '../../static/js/cookie-util'
import { Spin } from 'antd';
import BrandIndex from "../brandIndex/brandIndex";
import ResultIndex from '../resultIndex/resultIndex';
class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            brandArray: [],
            getIndex: 0,
            showLoad: false,
            getClickIndex: 0,
            chartHeadArray: ['品牌对比', '效果分析', '达人分析', '笔记分析'],
            barObject: {},
            lineObject: {}
        }
    }
    render() {
        return (
            <div className="index">
                {
                    this.state.showLoad?(
                        <div className="login-load">
                            <Spin />
                        </div>
                    ):null
                }
                <div className="index-header">
                    <div className="header">
                        <div className="header-left">
                            <div className="left-logo">
                                <img src={brand_login_icon} alt=""/>
                                <span>大数据人工智能种草利器</span>
                            </div>
                            <div className="line" />
                            <div className="left-tips">
                                <span>小红书品牌分析系统</span>
                                <img src={xcx} alt="" className="tips-xcx"/>
                                <img src={xcx} alt="" className="max-tips-xcx"/>
                            </div>
                        </div>
                        <div className="header-right">
                            <img src={head} alt="" className="right-head"/>
                            <div className="right-name">测试</div>
                            <div className="right-outLogin" onClick={this.outLogin.bind(this)}>退 出 登 录</div>
                        </div>
                    </div>
                </div>
                <div className="index-container">
                    <div className="container">
                        {
                            this.state.brandArray.map((item, index) => {
                                return <div className={`container-brand ${index === this.state.getIndex ? 'select' : null}`} key={index} onClick={this.clickBrand.bind(this, index)}>
                                    <div className="brand-child">
                                        <div className="child-header">
                                            <img src={item.image} className="head-img" alt=""/>
                                            <div className="head-info">
                                                <div className={`info-name  ${index === this.state.getIndex ? 'name-select' : null}`}>{item.nickname}</div>
                                                <div className="info-tips">品牌词笔记数: {item.keywords_notes}</div>
                                            </div>
                                        </div>
                                        <div className="data-text">数据统计日期</div>
                                        <div className="data">{item.analysis_date_s} ~ {item.analysis_date_e}</div>
                                        <div className="number">
                                            <div className="number-item">
                                                <p className="number-title">笔记数</p>
                                                <p className="number-text">{item.ndiscovery}</p>
                                            </div>
                                            <div className="number-item">
                                                <p className="number-title">点赞数</p>
                                                <p className="number-text">{item.liked}</p>
                                            </div>
                                            <div className="number-item">
                                                <p className="number-title">收藏数</p>
                                                <p className="number-text">{item.collected}</p>
                                            </div>
                                            <div className="number-item">
                                                <p className="number-title">笔记数</p>
                                                <p className="number-text">{item.fans}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className="container-chart">
                        <div className="chart-click">
                            {
                                this.state.chartHeadArray.map((itemClick, itemIndex) => {
                                    return <div className={`click-item ${itemIndex === this.state.getClickIndex ? 'clickSelect' : null}`} key={itemIndex} onClick={this.clickChart.bind(this, itemIndex)}>{itemClick}</div>
                                })
                            }
                        </div>
                        {this.showMain()}
                    </div>
                </div>
            </div>
        )
    }
    _ChunZhiBigDataXhsBrandList() {
        this.setState({
            showLoad: true
        })
        ChunZhiBigDataXhsBrandList().then((res) => {
            let data = res.data;
            if (data.error === 0) {
                this.setState({
                    brandArray: data.result,
                    showLoad: false
                })
            }
        }).catch((err) => {
            console.log(err)
            this.setState({
                showLoad: false
            })
        })
    }
    showMain() {
        console.log('111' + this.state.getClickIndex)
        switch (this.state.getClickIndex) {
            case 0:
                return <BrandIndex />
            case 1:
                return <ResultIndex />
            case 2:
                return <div>待完成 {this.state.getClickIndex}</div>
            case 3:
                return <div>待完成 {this.state.getClickIndex}</div>
            default:
                break;
        }
    }
    clickChart(index) {
        this.setState({
            getClickIndex: index
        })
        this.showMain()
    }
    outLogin() {
        clearCookies()
        this.props.history.replace('/login')
    }
    clickBrand(index) {
        this.setState({
            getIndex: index
        })
    }
    componentDidMount() {
        this._ChunZhiBigDataXhsBrandList()
    }
}
export default Index;
