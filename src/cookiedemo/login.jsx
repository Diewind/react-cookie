import React, { Component } from 'react'
import {Link} from 'react-router-dom'
 class Login extends Component {
    constructor(props){
        super(props);
    }
    // 方法一：this.props.history.push跳页面参数还在
    // gotoIndex = () => {
    //     this.props.history.push('/',{token:"12345678"})   
    // }
    // 方法二：不会有bug，写为回调函数是为了请求接口方便
    gotoIndex = () => ({pathname:'/',query:{token:'12345678'}});
    render() {
        return (
            <div>
                <Link to={this.gotoIndex}>登录</Link>
                {/* 方法一 */}
                {/* <button onClick={this.gotoIndex}>登录</button> */}
            </div>
        )
    }
}

export default Login;