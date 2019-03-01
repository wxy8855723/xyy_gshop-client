/*
包含n个请求函数的模块
 */
import ajax from './ajax'
const BASE = '/api'
//请求地理位置的请求
// const BASE = ''

export const reqAddress = (longitude,latitude) => ajax(BASE + `position/${latitude},${longitude}`,{longitude,latitude})

//请求商品列表的请求
export const reqCatgorys = () => ajax(BASE + '/index_category')

//请求商家列表的请求
export const reqShops = (longitude,latitude) => ajax(BASE + '/shops',{longitude,latitude})

// [6、用户名密码登陆](#6用户名密码登陆)
export const reqPwdLogin = ({name,pwd,captcha}) => ajax(BASE + '/login_pwd',{name,pwd,captcha},'POST')

// [7、发送短信验证码](#7发送短信验证码)
export const reqSendCode = (phone) => ajax(BASE + '/sendcode',{phone})

// [8、手机号验证码登陆](#8手机号验证码登陆)
export const reqSmsLogin = (phone,code) => ajax(BASE + '/login_sms',{phone,code},'POST')

//9、根据会话获取用户信息
export const getUser = () => ajax(BASE + '/userinfo')

//10、用户登出
export const logOut = () => ajax(BASE + '/logout')

//请求商铺信息请求
export const reqInfo = () => ajax('/info')

//请求评价信息请求
export const reqRatings = () => ajax('/ratings')

//请求点餐信息的请求
export const reqGoods = () => ajax('/goods')
