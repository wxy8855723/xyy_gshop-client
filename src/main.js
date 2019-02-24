import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import Star from './components/Star/Star.vue'

import store from './store'

Vue.component('Header',Header)
Vue.component('Star',Star)

new Vue({
  el:'#app',
  // components:{
  //   App
  // },
  render: h => h(App),
  /*
  render ： function （creatElement） {
    return creatElement(App)
  }
   */
  router,
  store
})
