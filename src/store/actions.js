/*
间接更新状态模块
 */
import {UPDATE_ADDRESS,UPDATE_CATEGORYS,UPDATE_SHOPS} from './mutation_types'

import {reqAddress,reqCatgorys,reqShops} from '../api'
export default {


  async getAddress ({commit,state}) {
    const {longitude,latitude} = state
    const result = await reqAddress(longitude,latitude)
    if (result.code === 0) {
      commit(UPDATE_ADDRESS,result.data)
    }
  },

  async getCategorys ({commit}) {
    const result = await reqCatgorys()
    if (result.code === 0) {
      commit(UPDATE_CATEGORYS,result.data)
    }
  },

  async getShops ({commit,state}) {
    const {longitude,latitude} = state
    const result = await reqShops(longitude,latitude)
    if (result.code === 0) {
      commit(UPDATE_SHOPS,result.data)
    }
  }

}
