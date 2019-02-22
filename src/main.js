import Vue from 'vue'
import App from './App.vue'
import router from './router'

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
  router
})
