import React from 'react'
import { ClubWrapper } from './style'

export default function Club() {
  return (
    <ClubWrapper>
      <div className="wrapper">
        <div>
          <h2 className='wrapper-mobile'>星享俱乐部</h2>
          <p className="light wrapper-mobile">
            开启您的星享之旅，星星越多、会员等级越高、好礼越丰富。
            <a className='button link' href="">了解更多</a>
          </p>
          <p className="flex flex-wrap wrapper-mobile">
            <a className="button unlogged">注册</a>
            <a href="" className="button secondary unlogged-in-element">登录</a>
          </p>
        </div>
      </div>
    </ClubWrapper>
  )
}
