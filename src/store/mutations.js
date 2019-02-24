/*
直接更新状态模块
 */
import {UPDATE_ADDRESS,UPDATE_CATEGORYS,UPDATE_SHOPS} from './mutation_types'
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
}
