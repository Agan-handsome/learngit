import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FooterWrapper } from './style'
import classnames from 'classnames'

export default function Footer() {
    const { pathname } = useLocation()

  return (
    <FooterWrapper>
        <Link to="/home" className={classnames({active:pathname == '/home' || pathname == '/'})}>
            <i className="iconfont icon-zhuye"></i>
            <span>主页</span>
        </Link>
        <Link to="/store" className={classnames({active:pathname == '/store'})}>
            <i className="iconfont icon-mendian"></i>
            <span>门店</span>
        </Link>
        <Link to="/account" className={classnames({active:pathname == '/account'})}>
            <i className="iconfont icon-zhanghu"></i>  
            <span>我的账户</span>
        </Link>
        <Link to="/menu" className={classnames({active:pathname == '/menu'})}>
            <i className="iconfont icon-kafei"></i>
            <span>菜单</span>
        </Link>
        <Link to="/more" className={classnames({active:pathname == '/more'})}>
            <i className="iconfont icon-gengduo"></i>
            <span>更多</span>
        </Link>
    </FooterWrapper>
  )
}
