import Mock from 'mockjs'
import data from './data.json'   //webpack打包时会转换为js对象

Mock.mock('/goods',{code:0,data:data.goods})

Mock.mock('/info',{code:0,data:data.info})

Mock.mock('/ratings',{code:0,data:data.ratings})

console.log('mockServer')
