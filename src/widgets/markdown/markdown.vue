<template>
	<div class="v-markdown">
		<div class="left-edit">
			<textarea v-model="val" debounce="300"></textarea>
		</div>
	</div>
</template>
<script>
const marked = require('markdown-js')
export default{
	props: ['value'],
	data () {
		return {
			val: this.value || '',
			vals: ''
		}
	},
	watch: {
		val (val) {
			const self = this
			self.vals = marked.makeHtml(val)
		}
	}
}
</script>
<style lang="less">
.v-markdown{
	width: 100%;
	height: 100%;
	.left-edit{
		background: #ddd;
		textarea{
			width: 100%;
			height: 100%;
			border:none;
			resize:none;
		}
		textarea:focus{
			outline: none;
		}
	}
}
</style>