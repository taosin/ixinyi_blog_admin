import Vue from 'vue'
import Router from 'vue-router'
import index from '@/index'
import home from '@/views/home'
import articlesList from '@/views/articles_mng'
import articleAdd from '@/views/article_add'
import readline from '@/views/readline'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'index',
		component: index,
		children: [{
			path: '/',
			name: '首页',
			component: home
		},
		{
			path: '/articles/list',
			name: '文章管理|文章列表',
			component: articlesList
		},
		{
			path: 'articles/readline',
			name: '文章管理|阅读轨迹',
			component: readline
		}]
	},
	{
		path: '/articles/add',
		name: '文章管理|发布文章',
		component: articleAdd
	}]
})
