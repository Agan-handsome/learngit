import React, { useEffect } from 'react'
import { CardWrapper } from './style'
import { Link } from 'react-router-dom'

export default function Card() {

  return (
    <CardWrapper>
      <div className="wrapper fluid">
        <div className="grid columns-3 padded-2">
          <a id="home-left-campaign" href="https://starbucks.m.tmall.com/">
            <img width="100%" id='home-left-campaign-img' src="https://www-static.chinacdn.starbucks.com.cn/prod/images/pages/tmall-2020-06-29-zh.jpg"/>
          </a>
          <a id="home-middle-campaign" href="https://www.starbucks.com.cn/design-studio/">
            <img width="100%" id='home-middle-campaign-img' src="https://www-static.chinacdn.starbucks.com.cn/prod/images/pages/starbucks-design-studio-web-china.jpg"/>
          </a>
          <a id="home-right-campaign" href="https://www.starbucks.com.cn/about/careers/">
            <img width="100%" id='home-right-campaign-img' src="https://www-static.chinacdn.starbucks.com.cn/prod/images/pages/homepage-career-cn.jpg"/>
          </a>
        </div>
      </div>
    </CardWrapper>
  )
}
