import { axiosInstance } from "./config"

export const getAdsRequest = () => 
    axiosInstance.get('/ad')

export const getGoodsRequest = () => 
    axiosInstance.get('/goods')

export const getCardRequest = () => 
    axiosInstance.get('/card')

export const getCultureRequest = () => 
    axiosInstance.get('/culture')