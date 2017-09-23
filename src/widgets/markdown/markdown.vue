<template>
	<div class="v-markdown">
		<div class="left-edit">
			<textarea v-model="val" debounce="300"></textarea>
		</div>
		<div class="right-view">
			<div class="marked">{{val | marked}}</div>
		</div>
	</div>
</template>
<script>
import {marked} from './marked.js'
export default{
	props: ['value'],
	data () {
		return {
			val: this.value || ''
		}
	}
}
</script>