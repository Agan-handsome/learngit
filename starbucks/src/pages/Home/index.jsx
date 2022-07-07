import React, { useState, useEffect } from 'react'
import { Wrapper } from './style'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import Ads from './Ads'
import Card from './Card'
import Club from './Club'
import Goods from './Goods'
import Culture from './Culture'
import { func } from 'prop-types'

const Home = (props) => {
  const { ads, goods, culture } = props
  const { getAdsListDispatch, getGoodsListDispatch, getCultureListDispatch } = props
  useEffect(() => {
    getAdsListDispatch()
    getGoodsListDispatch()
    getCultureListDispatch()
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

const mapStateToProps = (state) => {
  return ({
    ads: state.home.adsList,
    goods: state.home.goodsList,
    culture: state.home.cultureList
  })
}
const mapDispatchToProps = (dispatch) => {
  return {
    getAdsListDispatch() {
      dispatch(actionCreator.getAdsList())
    },
    getGoodsListDispatch() {
      dispatch(actionCreator.getGoodsList())
    },
    getCultureListDispatch() {
      dispatch(actionCreator.getCultureList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)