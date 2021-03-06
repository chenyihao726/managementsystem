import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import axios from 'axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

Vue.use(iView)

new Vue({
  el: '#app', 
  router,
	store,
  components: { App },
  template: '<App/>'
})
