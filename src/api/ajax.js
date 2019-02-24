/*
用来发送ajax请求的模块
 */
import axios from 'axios'

export default function (url,data={},method='GET') {
  return new Promise( (resolve, reject) => {
    let promise
    if (method === 'GET') {
      promise = axios.get(url,{params:data})
    } else {
      promise = axios.get(url,data)
    }

    promise.then( (response) => {
        resolve(response.data)
    }).catch( error => {
        alert(error.message)
    })
  })
}
