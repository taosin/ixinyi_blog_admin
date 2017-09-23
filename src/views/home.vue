<template>
	<div>
		<Button type="info" @click="gotoUrl('/articles/list')">文章列表</Button>
		<Button type="info">评论列表</Button>
		<Button type="info">信息按钮</Button>
		<Button type="info">信息按钮</Button>

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
</style>

