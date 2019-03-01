import Vue from 'vue'
import VueLazyload  from 'vue-lazyload'
import {Button} from 'mint-ui'
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import Star from './components/Star/Star.vue'
import CartControl from './components/CartControl/CartControl.vue'
import Split from './components/Split/Split.vue'

import store from './store'
import './mock/mockServer'
import './fliter'
import loading from  './common/image/loading.gif'

Vue.use(VueLazyload,{
  loading
})

Vue.component('Header',Header)
Vue.component('Star',Star)
Vue.component('CartControl',CartControl)
Vue.component('Split',Split)
Vue.component(Button.name,Button)



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
