import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
//导入mintui插件
import MintUI from 'mint-ui'
//导入mintui的样式
import 'mint-ui/lib/style.css'
//导入轮播图的组件
import { Swipe, SwipeItem } from 'mint-ui';
//注册为Vue插件
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//注册为Vue的插件
Vue.use(MintUI)

axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.prototype.axios = axios;



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
