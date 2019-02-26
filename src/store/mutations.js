/*
直接更新状态模块
 */
import {UPDATE_ADDRESS,
  UPDATE_CATEGORYS,
  UPDATE_SHOPS,
  SAVE_USER,
  RESET_USER,
  UPDATE_GOODS,
  UPDATE_INFO,
  UPDATE_RATINGS
}
  from './mutation_types'
export default {
  [UPDATE_ADDRESS] (state,address) {
    state.address = address
  },

  [UPDATE_CATEGORYS] (state,categorys) {
    state.categorys = categorys
  },

  [UPDATE_SHOPS] (state,shops) {
    state.shops = shops
  },

  [SAVE_USER] (state,user) {
    state.user = user
  },

  [RESET_USER] (state) {
    state.user = {}
  },

  [UPDATE_GOODS] (state,{goods}) {
    state.goods = goods
  },

  [UPDATE_RATINGS] (state,{ratings}) {
    state.ratings = ratings
  },

  [UPDATE_INFO] (state,{info}) {
    state.info = info
  },
}
