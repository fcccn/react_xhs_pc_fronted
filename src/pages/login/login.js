import React, {Component} from 'react'
import './login.scss'
import brand_login_icon from '../../static/images/brand_login_icon.png';
import { ChunZhiUserPhoneLogin, ChunZhiUserSmsCodeCreate } from '../../api/xhs_request'
import { message, Spin } from 'antd';
import { setCookies } from '../../static/js/cookie-util'
class Login extends Component{
    constructor(props) {
        super(props)
        this.state = {
            phone: '',
            code: '',
            smsNote: '获取验证码',
            count: 60,
            smsDisable: false,
            interval: {},
            showLoad: false
        }
    }
    render(){
        return (
            <div className="login">
                {
                    this.state.showLoad?(
                        <div className="login-load">
                            <Spin />
                        </div>
                    ):null
                }
                <div className="login-container">
                    <div className="login_head">
                        <img src={brand_login_icon} alt="logo"/>
                        <p className="head-title mgt-5">大数据人工智能种草利器</p>
                    </div>
                    <div className="login-content">
                        <div className="content-title">手机登录</div>
                        <div className="content-tips">手机号码</div>
                        <input placeholder="请输入手机号码" value={this.state.phone} onChange={this.changePhone.bind(this)}/>
                        <div className="content-line"/>
                        <div className="content-tips">短信验证码</div>
                        <div className="content-info">
                            <input placeholder="请输入短信验证码" onChange={this.changeCode.bind(this)}/>
                            <div className="info-btn" onClick={this.getCode.bind(this)}>{this.state.smsNote}</div>
                        </div>
                        <div className="content-line"/>
                        <div className="content-submit" onClick={this._ChunZhiUserPhoneLogin.bind(this)}>登录</div>
                    </div>
                </div>
            </div>
        )
    }
    _ChunZhiUserPhoneLogin() {
        if (this.state.phone.length !== 11) {
            message.error('请输入正确的手机号码')
            return
        }
        if (this.state.code === '') {
            message.error('请填写验证码')
            return
        }
        let loginObject = {
            role: 'brand'
        }
        this.setState({
            showLoad: true
        })
        loginObject.phone = this.state.phone
        loginObject.code = this.state.code
        let xkKocObj = {xhs_token: ''}
        ChunZhiUserPhoneLogin(loginObject).then((res) => {
            this.setState({
                showLoad: false
            })
            let data = res.data
            if (data.error === 0) {
                let results = res.data.result
                let result = results[0]
                console.dir(result)
                xkKocObj.xhs_token = result.token
                setCookies(xkKocObj)
                this.props.history.replace('/')
            }
        }).catch((err) => {
            this.setState({
                showLoad: false
            });
            console.log(err)
        })
    }
    changePhone (e) {
        e.persist()
        this.setState({
            phone: e.target.value
        })
    }
    changeCode (e) {
        e.persist()
        this.setState({
            code: e.target.value
        })
    }
    getCode() {
        if (this.state.smsDisable) {
            return false
        }
        if (this.state.phone.length !== 11) {
            message.error('请输入正确的手机号码')
            return false
        }
        if (this.state.phone.length === 11) {
            let that = this
            that.state.interval = setInterval(() => {
                that.state.count = this.state.count - 1
                that.setState({
                    smsDisable: true
                })
                that.setState({
                    smsNote:  that.state.count + 's'
                })
                if (that.state.count < 0) {
                    that.initSmsCode()
                }
            }, 1000)
            ChunZhiUserSmsCodeCreate({phone: this.state.phone}).then((res) => {
                console.dir(res)
                let data = res.data
                if (data.error !== 0) {
                    this.initSmsCode()
                }
            }).catch((err) => {
                console.dir(err)
                this.initSmsCode()
            })
        }
    }
    initSmsCode () {
        this.setState({
            smsDisable: false
        })
        clearInterval(this.state.interval)
        this.setState({
            smsNote: '获取验证码'
        })
        this.setState({
            count: 60
        })
    }
}
export default Login;
