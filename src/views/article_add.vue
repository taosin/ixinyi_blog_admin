<template>
	<div>
		<div id="div3">
			
		</div>
	</div>
</template>

<script>
import wangEditor from 'wangeditor'
export default {
	name: 'index',
	mounted () {
		var E = wangEditor
		var editor2 = new E('#div3')
		editor2.create()
	}
}
</script>

<style lang="less">
</style>
