import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
export default class Admin extends Component {
    constructor(props){
        super(props);
        // 方法一，有bug!!!
        // const token = (this.props.location && this.props.location.state && this.props.location.state.token) || '';
        const token = (this.props.location && this.props.location.query && this.props.location.query.token) || '';
        if(token){
            document.cookie = `token=${token};max-age=60`;//一年为60*60*24*365,max-age:设置多久后过期
        }
    }
    // 封装获取token的方法
    getcookie = (keys) => {
        let arr = document.cookie.split(";");
    　　for(let i=0; i<arr.length; i++){
            let carr=arr[i].split("=");
    　　　　if(carr[0].trim() === keys){
    　　　　    return carr[i];
    　　　　}
    　　}
    　　return false;
    }
    render() {
        const token = this.getcookie('token');
        console.log('isToken',token,this.props);
        if(!token){
            return <Redirect to='/login' />;
        }
        return (
            <div>
                管理主页
            </div>
        )
    }
}
