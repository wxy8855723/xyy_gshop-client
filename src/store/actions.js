/*
间接更新状态模块
 */
import
{UPDATE_ADDRESS,
  UPDATE_CATEGORYS,
  UPDATE_SHOPS,
  SAVE_USER,
  RESET_USER,
  UPDATE_INFO,
  UPDATE_RATINGS,
  UPDATE_GOODS
} from './mutation_types'

import {
  reqAddress,
  reqCatgorys,
  reqShops,
  getUser,
  logOut,
  reqGoods,
  reqInfo,
  reqRatings
} from '../api'
export default {


  async getAddress ({commit,state}) {
    const {longitude,latitude} = state
    const result = await reqAddress(longitude,latitude)
    if (result.code === 0)  commit(UPDATE_ADDRESS,result.data)
  },

  async getCategorys ({commit}) {
    const result = await reqCatgorys()
    if (result.code === 0) commit(UPDATE_CATEGORYS,result.data)
  },

  async getShops ({commit,state}) {
    const {longitude,latitude} = state
    const result = await reqShops(longitude,latitude)
    if (result.code === 0) commit(UPDATE_SHOPS,result.data)
  },

  saveUser ({commit},user) {
    commit(SAVE_USER,user)
  },

  async getUser ({commit}) {
    const result = await getUser()
    if (result.code === 0) {
      const user = result.data
      commit(SAVE_USER,user)
    }
  },

  async logOut ({commit}) {
    const result = await logOut()
    if (result.code === 0) commit(RESET_USER)
  },

  async getInfo ({commit}) {
    const result = await reqInfo()
    if (result.code === 0) {
      const info = result.data
      commit(UPDATE_INFO,{info})
    }
  },

  async getGoods ({commit}) {
    const result = await reqGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(UPDATE_GOODS,{goods})
    }
  },

  async getRatings ({commit}) {
    const result = await reqRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(UPDATE_RATINGS,{ratings})
    }
  }

}
