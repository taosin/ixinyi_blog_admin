/*
* @Author: iMocco
* @Date:   2017-10-26 22:31:14
* @Last Modified by:   iMocco
* @Last Modified time: 2017-10-26 23:08:15
*/
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// 导入封装的回调函数
import {
	gbs
} from './settings.js'

Vue.axios.defaults.baseURL = gbs.host
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
	// Vue.prototype.$Loading.start()
	console.info(config)
	return config
}, function (error) {
	return Promise.reject(error)
})

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
	if (response.status === 200) {
		// Vue.prototype.$Loading.finish()
		return response.data
	} else {
		// Vue.prototype.$Loading.error()
	}
}, function (error) {
	return Promise.reject(error)
})
