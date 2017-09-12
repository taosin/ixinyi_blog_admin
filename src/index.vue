<template>
	<div class="ixinyi-index">
		<div class="ixinyi-top">
			<span class="ixinyi-top-left">后台管理系统</span>
			<div class="ixinyi-top-right">
				<span>admin</span>
				<a href="">登出</a>
			</div>
		</div>
		<div class="ixinyi-left">
			<Menu :theme="theme" :active-name="currentName" width="200px">
				<MenuGroup :title="menu.title" v-for="(menu, index) in menus">
					<MenuItem :name="ch.key" v-for="(ch, cindex) in menu.children">
						<Icon type="document-text"></Icon>
						{{ch.name}}
					</MenuItem>
				</MenuGroup>
			</Menu>
		</div>
		<div class="ixinyi-right">
			<div class="ixinyi-breadcrumb">
				<Breadcrumb separator="<b style='color:#888'>/</b>">
					<BreadcrumbItem href="/">首页</BreadcrumbItem>
					<BreadcrumbItem href="/home/breadcrumb">Components</BreadcrumbItem>
					<BreadcrumbItem>Breadcrumb</BreadcrumbItem>
				</Breadcrumb>
			</div>
			<div class="ixinyi-views">
				<router-view>
				</router-view>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'index',
		data () {
			return {
				theme: 'light',
				menus: [
				{ title: '内容管理',
				children: [
				{
					name: '文章管理',
					key: 'articles'
				},
				{
					name: '评论管理',
					key: 'comments'
				}
				]},
				{ title: '统计分析',
				children: [
				{
					name: '用户留存',
					key: 'users'
				},
				{
					name: '流失用户',
					key: 'usersmiss'
				}
				]}
				],
				currentName: 'articles'
			}
		}
	}
</script>

<style lang="less" scoped>
	.ixinyi-index{
		position: absolute;
		top:0;
		left: 0;
		bottom: 0;
		right: 0;
		.ixinyi-top{
			position: relative;
			border-bottom: 1px solid #ddd;
			top: 0;
			left: 0;
			right: 0;
			height: 60px;
			padding: 20px;
			.ixinyi-top-left{
				font-size: 18px;
				font-weight: bold;
			}
			.ixinyi-top-right{
				float: right;
				margin-right: 30px;
				font-size: 16px;
			}
		}
		.ixinyi-left{
			position: absolute;
			border-right: 1px solid #ddd;
			top: 60px;
			left: 0;
			bottom: 0;
			width: 200px;
		}
		.ixinyi-right{
			position: absolute;
			// border: 1px dashed red;
			top: 60px;
			left: 200px;
			bottom: 0;
			right: 0;
			background: #eee;
			.ixinyi-breadcrumb{
				width: 100%;
				padding: 15px;
			}
			.ixinyi-views{
				position: absolute;
				top: 50px;
				left: 10px;
				right: 10px;
				bottom: 10px;
				border: 1px solid #dedede;
				background: #fff;
				// border-radius: 4px;
				padding: 10px;
			}
		}
	}
</style>
