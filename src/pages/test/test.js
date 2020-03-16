import React, {Component} from 'react'
import test_left from '../../static/images/test-left.png';
import test_right from '../../static/images/test-right.png';
import { BoYanTest } from '../../api/xhs_request'
import './test.scss'
import { Spin } from 'antd';
import 'antd/dist/antd.css';
class Test extends Component{
    constructor(props) {
        super(props)
        this.state = {
            menuItemArray: [],
            getIndex: 0,
            chooseArray: [],
            containerArray: [],
            showLoad: false
        }
    }
    render() {
        return (
            // 博彦测试页面
            <div className="test">
                {/*loading 加载*/}
                {
                    this.state.showLoad?(
                        <div className="login-load">
                            <Spin />
                        </div>
                    ):null
                }
                <div className="test-container">
                    {/*页面测试头部*/}
                    <header>
                        <div className="test-header">
                            <img src={test_left} alt="" />
                            <div className="header-center">
                                <p className="center-title">618同行们都用了视频</p>
                                <p className="center-tips">官方数据：大盘数据发布视频成交转化率提升20%</p>
                            </div>
                            <img src={test_right} alt="" />
                        </div>
                    </header>
                    {/*页面测试主体部分*/}
                    <section>
                        <div className="test-menu">
                            <div className="menu-list">
                                {
                                    this.state.menuItemArray.map((item,index)=>{
                                        return <div className={`menu ${index===this.state.getIndex ? 'select':null}`} key={index} onClick={this.clickMenu.bind(this, index)}>{item.item_name}</div>
                                    })
                                }
                            </div>
                            <div className="menu-introduce">
                                {
                                    this.state.chooseArray.map((chooseArrayItem, chooseArrayIndex)=>{
                                        return <div className="introduce" key={chooseArrayIndex} >
                                                <img src={chooseArrayItem.item_pic} alt=""/>
                                                <div className="introduce-text">
                                                    <div className="introduce-title">{chooseArrayItem.item_title}</div>
                                                    <div className="introduce-teacher">讲师：{chooseArrayItem.item_desc}</div>
                                                    <div className="introduce-details">{chooseArrayItem.item_desc2}</div>
                                                    <button className="introduce-btn" onClick={this.clickLook.bind(this, chooseArrayItem.item_url)}>观看回放>></button>
                                                </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
    loadData () {
        this.setState({
            showLoad: true
        })
        BoYanTest().then((res) => {
            this.setState({
                showLoad: false
            })
            let data = res.data
            this.setState({
                menuItemArray: data.list
            })
            this.setState({
                containerArray: []
            })
            data.list.forEach((item) => {
                this.state.containerArray.push(item.items2)
            })
            this.setState({
                chooseArray: this.state.containerArray[0]
            })
        })
    }
    clickMenu (index) {
        this.setState({
            getIndex: index
        })
        this.setState({
            chooseArray: this.state.containerArray[index]
        })
    }
    clickLook (url) {
        window.open(url, '_blank')
    }
    componentDidMount() {
        this.loadData()
    }
}
export default Test;
