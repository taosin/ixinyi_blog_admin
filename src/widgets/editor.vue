<template>
	<div id="w-editor" @mouseout="test">
	</div>
</template>
<script>
import wangEditor from 'wangeditor'
export default {
	name: 'index',
	props: ['value'],
	data () {
		return {
			currentValue: this.value,
			editor: {}
		}
	},
	mounted () {
		this.createEditor()
	},
	methods: {
		createEditor () {
			const E = wangEditor
			const editor = new E('#w-editor')
			editor.create()
			editor.txt.html(this.currentValue)
			this.editor = editor
		},
		test (event) {
			this.currentValue = this.editor.txt.html()
		}
	},
	watch: {
		value (val) {
			this.currentValue = val
		},
		'editor' (val) {
			this.currentValue = val.txt.html()
		}
	}
}
</script>

<style lang="less">
#w-editor{
}
</style>