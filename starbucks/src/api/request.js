import axios from 'axios'

export const getAds = () => 
    axios.get('https://www.fastmock.site/mock/e7acf40b32f914332046f70956593675/starbucks/ad')

export const getGoods = () => 
    axios.get('https://www.fastmock.site/mock/e7acf40b32f914332046f70956593675/starbucks/goods')

export const getCard = () => 
    axios.get('https://www.fastmock.site/mock/e7acf40b32f914332046f70956593675/starbucks/card')

export const getCulture = () => 
    axios.get('https://www.fastmock.site/mock/e7acf40b32f914332046f70956593675/starbucks/culture')