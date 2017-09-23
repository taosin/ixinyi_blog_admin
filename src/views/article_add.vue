<template>
	<div class="index">
		<markdown v-model="content"></markdown>
	</div>
</template>
<script>
import markdown from '../widgets/markdown/markdown.vue'
export default {
	name: 'index',
	components: {
		markdown
	},
	data () {
		return {
			content: '请输入你想要输入的内容'
		}
	},
	mounted () {
	},
	watch: {
		content (val) {
			debugger
		}
	}
}
</script>

<style lang="less">
.index{
}
</style>
