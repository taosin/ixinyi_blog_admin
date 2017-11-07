<template>
	<div class="home">
		<h2>Dashboard</h2>
		<hr>
		<div class="item-btns">
				<Button type="info" @click="gotoUrl('/articles/list')">文章列表</Button>
				<Button type="info">评论列表</Button>
				<Button type="info">信息按钮</Button>
				<Button type="info">信息按钮</Button>
		</div>
		<div class="main-list">
			<div class="list todo-list">
				<div class="home-title">
					待办事项
				</div>
			</div>
			<div class="list article-list">
				<div class="home-title">
					文章数量
				</div>
			</div>
			<div class="list user-list">
				<div class="home-title">
					访客数量
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'index',
		methods: {
			gotoUrl (url) {
				this.$router.push(url)
			}
		}
	}
</script>

<style lang="less">
.home{
	.item-btns{
		margin: 10px 0;
	}
	.main-list{
		border: 1px solid #ddd;
		padding: 10px;
		border-radius: 4px;
		overflow: hidden;
		.list{
			border: 1px solid #888;
			width: 32%;
			float: left;
			padding: 10px;
		}
		.article-list{
			margin: 0 2%;
		}
	}
}
</style>

