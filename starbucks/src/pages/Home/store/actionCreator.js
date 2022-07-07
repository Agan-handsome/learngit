import {
    getAdsRequest,
    getGoodsRequest,
    getCultureRequest
} from '@/api/request'
import { actionTypes } from './index'

const changeAdsList = (data) => ({
    type: actionTypes.SET_ADS_LIST,
    data
})
const changeGoodsList = (data) => ({
    type: actionTypes.SET_GOODS_LIST,
    data
})
const changeCultureList = (data) => ({
    type: actionTypes.SET_CULTURE_LIST,
    data
})

export const getAdsList = () => {
    return (dispatch) => {
        getAdsRequest().then(data => {
            dispatch(changeAdsList(data.ad))
        })
    }
}
export const getGoodsList = () => {
    return (dispatch) => {
        getGoodsRequest().then(data => {
            dispatch(changeGoodsList(data.goods))
        })
    }
}
export const getCultureList = () => {
    return (dispatch) => {
        getCultureRequest().then(data => {
            dispatch(changeCultureList(data.culture))
        })
    }
}