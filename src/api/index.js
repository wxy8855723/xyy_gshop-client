/*
包含n个请求函数的模块
 */
import ajax from './ajax'
const BASE = '/api'
//请求地理位置的请求
export const reqAddress = (longitude,latitude) => ajax(BASE + `position/${latitude},${longitude}`,{longitude,latitude})

//请求商品列表的请求
export const reqCatgorys = () => ajax(BASE + '/index_category')

//请求商家列表的请求
export const reqShops = (longitude,latitude) => ajax(BASE + '/shops',{longitude,latitude})
