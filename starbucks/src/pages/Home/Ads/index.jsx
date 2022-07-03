import React, { useEffect } from 'react'
import { AdsWrapper } from './style'
import { Link } from 'react-router-dom'
import Swiper from 'swiper'


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
 
  return (
    <AdsWrapper>
      <div className="btn-ads swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <Link to="/home">
              {<img src={ads[0].img} />}
            </Link>
          </div>
          <div className="swiper-slide">
            <Link to="/home">
              {<img src={ads[1].img} />}
            </Link>
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
