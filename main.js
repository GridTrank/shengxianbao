import Vue from 'vue'
import App from './App'

// vuex
import store from './store'

// 引入全局uView
import uView from '@/uni_modules/uview-ui'

Vue.prototype.$store = store
Vue.config.productionTip = false

App.mpType = 'app'
Vue.use(uView)

// #ifdef MP
// 引入uView对小程序分享的mixin封装
const mpShare = require('@/uni_modules/uview-ui/libs/mixin/mpShare.js')
Vue.mixin(mpShare)
// #endif

import filter from './common/filter/filter'
import mixin from './common/mixin/mixin'
Vue.mixin(mixin) 

import {
	msg,
	isLogin,
	debounce,
	throttle,
	prePage,
	date
} from '@/common/js/util'
Vue.prototype.$util = {
	msg,
	isLogin,
	debounce,
	throttle,
	prePage,
	date
}

import {request} from '@/common/js/request'
Vue.prototype.$http=request

import config from './config'
Vue.prototype.$config = config


const app = new Vue({
    store,
    ...App
})


app.$mount()
