import Vue from 'vue'
import Router from 'vue-router'
import index from '@/index'
import home from '@/views/home'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'index',
		component: index,
		children: [{
			path: '/',
			name: 'home',
			component: home
		}]
	}]
})
