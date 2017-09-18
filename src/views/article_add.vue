<template>
	<div class="index">
		<editor v-model="content"></editor>
		<button id="btn1">获取html</button>
	</div>
</template>
<script>
import editor from '../widgets/editor.vue'
export default {
	name: 'index',
	components: {
		editor
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
