// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入iview
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)
import config from './config'
Vue.use(config)

window.Vue = Vue
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router: router,
	render: h => h(App)
})
