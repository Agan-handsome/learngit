import { actionTypes } from './index'

const defaultState = {
    adsList: [],
    goodsList: [],
    cultureList: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SET_ADS_LIST:
            return {
                ...state,
                adsList: action.data
            }
        case actionTypes.SET_GOODS_LIST:
            return {
                ...state,
                goodsList: action.data
            }
        case actionTypes.SET_CULTURE_LIST:
            return {
                ...state,
                cultureList: action.data
            }
        default:
            return state
    }
}


