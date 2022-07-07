import React, { useEffect } from 'react'
import { AdsWrapper } from './style'
import { Link } from 'react-router-dom'
import Swiper from 'swiper'
import { render } from 'react-dom'


export default function Ads({ads}) {
  // console.log(ads, '+++++++')
  // const { ad } = ads
  // let swiper = null

  useEffect(() => {
    new Swiper('.btn-ads', {
        loop: true,
        autoplay: {
            delay: 3000
        }
    })
}, [])
  
  // 有点小bug
  const nextImg = () => { 
   new Swiper('.swiper-container', {
    loopPreventsSlide: false,//默认true，阻止
    navigation: {
      nextEl: '.right-arrow',
    },
   })
  }
  const render1 = () => {
    let items = ads.slice(0, 1)
      return items.map(item => {
        return (
          <Link 
            to='/home'
            key={item.id}
          >
            <img src={item.img} />
          </Link>
        )
      }) 
  }
  const render2 = () => {
    let items = ads.slice(1)
    return items.map(item => {
      return (
        <Link 
            to='/home'
            key={item.id}
          >
            <img src={item.img} />
          </Link>
      )
    })
  }

  return (
    <AdsWrapper>
      <div className="btn-ads swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            {render1()}
          </div>
          <div className="swiper-slide">
            {render2()}
          </div>
        </div>
        <div className="right-arrow">
          <button className='slick-next slick-arrow' onClick={nextImg}>
            Next
          </button>
        </div>
      </div>
    </AdsWrapper>
  )
}
