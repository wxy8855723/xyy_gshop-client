import {UPDATE_ADDRESS, UPDATE_CATEGORYS, UPDATE_SHOPS} from "../mutation_types";
import {reqAddress, reqCatgorys, reqShops} from "../../api";

const state = {
  latitude: 40.10038, // 纬度
  longitude: 116.36867, // 经度
  address:{}, //当前位置信息对象
  categorys:[], // 分类列表
  shops:[], //商铺列表
}

const mutations = {
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

const actions = {
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

}

const getters = {


}
export default {
  state,
  mutations,
  actions,
  getters
}
