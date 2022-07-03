import React, { useState, useEffect } from 'react'
import { Wrapper } from './style'
import { getAds } from '@/api/request'
import { getGoods } from '@/api/request'
import { getCulture } from '@/api/request'

import Ads from './Ads'
import Card from './Card'
import Club from './Club'
import Goods from './Goods'
import Culture from './Culture'
import { func } from 'prop-types'

const Home = () => {
  const [ ads, setAds ] = useState([{img: ''},{img: ''}])
  const [ goods, setGoods ] = useState([])
  const [ culture, setCulture ] = useState([])

  // console.log(culture, '-------------------')

  useEffect(() => {
    (async () => {
      let { data: adsData } = await getAds()
      let { data: goodsData } = await getGoods()
      let { data: cultureData } = await getCulture()

      setAds(adsData.ad)
      setGoods(goodsData.goods)
      setCulture(cultureData.culture)
    })()
  }, [])

  return (
    <Wrapper>
      <Ads ads={ads}/>
      <Card />
      <Club />
      <Goods goods={goods} />
      <Culture culture={culture} />
    </Wrapper>
  )
}

export default Home