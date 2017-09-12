<template>
	<div class="ixinyi-index">
		<div class="ixinyi-top">
			<!-- <span class="ixinyi-top-left">博客后台管理系统</span> -->
			<div class="ixinyi-top-right">
				<span>admin</span>
				<a href="">登出</a>
			</div>
		</div>
		<div class="ixinyi-left">
			<Menu :theme="theme" active-name="1" width="200px">
				<MenuGroup title="内容管理">
					<MenuItem name="1">
						<Icon type="document-text"></Icon>
						文章管理
					</MenuItem>
					<MenuItem name="2">
						<Icon type="chatbubbles"></Icon>
						评论管理
					</MenuItem>
				</MenuGroup>
				<MenuGroup title="统计分析">
					<MenuItem name="3">
						<Icon type="heart"></Icon>
						用户留存
					</MenuItem>
					<MenuItem name="4">
						<Icon type="heart-broken"></Icon>
						流失用户
					</MenuItem>
				</MenuGroup>
			</Menu>
		</div>
		<div class="ixinyi-right">
			<div class="ixinyi-breadcrumb">
				<Breadcrumb separator="<b style='color:#888'>/</b>">
					<BreadcrumbItem href="/">Home</BreadcrumbItem>
					<BreadcrumbItem href="/components/breadcrumb">Components</BreadcrumbItem>
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
				theme: 'light'
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
			.ixinyi-breadcrumb{
				width: 100%;
				padding: 10px;
			}
			.ixinyi-views{
				position: absolute;
				top: 50px;
				left: 10px;
				right: 10px;
				bottom: 10px;
				background: #dedede;
				border-radius: 4px;
				padding: 10px;
			}
		}
	}
</style>
