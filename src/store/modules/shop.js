import Vue from 'vue'
import {UPDATE_GOODS,
  UPDATE_INFO,
  UPDATE_RATINGS,
  ADD_FOOD_COUNT,
  REDUCE_FOOD_COUNT,
  CLEAR_CART_FOODS
} from "../mutation_types";
import {reqGoods, reqInfo, reqRatings} from "../../api";

const state = {
  goods:[], //包含点餐信息的数组
  ratings:[], //包含点评信息的数组
  info:{}, //包含商铺信息的对象
  cartFoods:[] //包含添加购物车的食物
}

const mutations = {
  [UPDATE_GOODS] (state,{goods}) {
    state.goods = goods
  },

  [UPDATE_RATINGS] (state,{ratings}) {
    state.ratings = ratings
  },

  [UPDATE_INFO] (state,{info}) {
    state.info = info
  },

  [ADD_FOOD_COUNT] (state,food) {
    if (food.count) {
      food.count++
    } else {
      // food.count = 1
      Vue.set(food,'count',1)

      state.cartFoods.push(food)
    }
  },

  [REDUCE_FOOD_COUNT] (state,food) {
    if (food.count) {
      food.count--
    }

    if (food.count === 0) {
      const index = state.cartFoods.indexOf(food)
      state.cartFoods.splice(index,1)
    }
  },

  [CLEAR_CART_FOODS] (state) {
    state.cartFoods.forEach(food => food.count = 0)
    state.cartFoods = []
  }
}

const actions = {
  async getInfo ({commit}) {
    const result = await reqInfo()
    if (result.code === 0) {
      const info = result.data
      commit(UPDATE_INFO,{info})
    }
  },

  async getGoods ({commit},callback) {
    const result = await reqGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(UPDATE_GOODS,{goods})
      callback && callback()
    }
  },

  async getRatings ({commit},callBcak) {
    const result = await reqRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(UPDATE_RATINGS,{ratings})
      typeof callBcak === 'function' && callBcak()
    }
  },

  updateFoodCount ({commit},{food,isAdd}) {
    if (isAdd) {
      commit(ADD_FOOD_COUNT,food)
    } else {
      commit(REDUCE_FOOD_COUNT,food)
    }
  },

  clearCartFoods ({commit}) {
    commit(CLEAR_CART_FOODS)
  }

}

const getters = {

  totalFoodCount (state) {
    return state.cartFoods.reduce((pre,item) => pre + item.count ,0)
  },

  totalFoodPrice (state) {
    return state.cartFoods.reduce((pre,item) => pre + item.count * item.price ,0)
  },

  totalRatingCount (state) {
    return state.ratings.length
  },

  totalPraiseCount (state) {
    return state.ratings.reduce((pre,rating ) => pre + (rating.rateType === 0 ? 1 : 0)  ,0)
  }

}
export default {
  state,
  mutations,
  actions,
  getters
}
