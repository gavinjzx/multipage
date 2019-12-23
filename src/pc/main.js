/*
 * @Author: 邹中兴
 * @Date: 2019-12-20 14:16:07
 * @LastEditors  : 邹中兴
 * @LastEditTime : 2019-12-23 10:15:21
 * @Description: mobile端入口页
 */
import Vue from 'vue'
import App from './index.vue'
import router from '../router'
import store from '../store'
import axios from 'axios'
import 'mint-ui/lib/style.css'
import { Message, } from "element-ui"

Vue.config.productionTip = false

Vue.prototype.$axios = axios;
Vue.prototype.$message = Message;
Vue.prototype.$axios = axios;


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
