import axios from "axios";

export const baseUrl = 'https://www.fastmock.site/mock/e7acf40b32f914332046f70956593675/starbucks'

const axiosInstance = axios.create({
    baseURL: baseUrl
})

axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, '网络错误');
    }
)

export { axiosInstance }