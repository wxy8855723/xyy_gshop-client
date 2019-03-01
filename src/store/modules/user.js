import {RESET_USER, SAVE_USER} from "../mutation_types";
import {getUser, logOut} from "../../api";

const state = {
  user:{}, //当前用户信息

}

const mutations = {
  [SAVE_USER] (state,user) {
    state.user = user
  },

  [RESET_USER] (state) {
    state.user = {}
  },
}

const actions = {
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

}

const getters = {


}
export default {
  state,
  mutations,
  actions,
  getters
}
