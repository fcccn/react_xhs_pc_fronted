import React, {Component} from 'react'
import './index.scss'
import brand_login_icon from '../../static/images/brand_login_icon.png';
import xcx from '../../static/images/xcx_chuzhi_icon.png';
import head from '../../static/images/brand_head_icon.png';
class Index extends Component{
    render() {
        return (
            <div className="index">
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
                            <div className="right-name">X二姐</div>
                            <div className="right-outLogin">退 出 登 录</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Index;
