<template>
	<div class="index-m">
		<div class="index-m-title index-m-div">
			<Input v-model="title" placeholder="标题" size="large"></Input>
		</div>
		<div class="index-m-tag-cate index-m-div">
			<div class="index-m-tag">
				<Input v-model="title" placeholder="标签" size="large"></Input>
			</div>
			<div class="index-m-cate">
				<Input v-model="title" placeholder="分类" size="large"></Input>
			</div>
		</div>
		<div class="index-m-toolbar index-m-div">
			<Tooltip content="插入图片">
				<span class="toolbar-btn">
					<Icon type="image"></Icon>
				</span>
			</Tooltip>
			<Tooltip content="预览">
				<span class="toolbar-btn">
					<Icon type="android-laptop"></Icon>
				</span>
			</Tooltip>
			<Button type="ghost" icon="ios-paperplane-outline" style="float:right">发布文章</Button>
		</div>
		<div class="index-m-textarea index-m-div">
			<textarea v-model="content" debounce="300"></textarea>
		</div>
	</div>
</template>
<script>
export default {
	name: 'index',
	components: {
	},
	data () {
		return {
			content: '请输入你想要输入的内容',
			title: ''
		}
	},
	mounted () {
	},
	watch: {
		content (val) {
		}
	}
}
</script>

<style lang="less">
.index-m{
	width: 80%;
	margin: 0 auto;
	overflow-y: auto;
	border: 1px solid #ddd;
	border-radius: 4px;
	position: absolute;
	left: 10%;
	top: 30px;
	bottom: 30px;

	.index-m-tag, .index-m-cate{
		width: 30%;
		float: left;
		margin-right: 10px;
	}
	.index-m-div{
		margin:10px 10px;
		height: 40px;	
		clear: both;
	}
	.index-m-textarea{
		textarea{
			width: 100%;
			min-height: 1000px;
			border:none;
			resize:none;
		}
		textarea:focus{
			outline: none;
		}
	}
	.index-m-toolbar{
		height: 60px;
		margin: 10px 0;
		border: 1px solid #dedede;
		border-left: none;
		border-right: none;
		padding: 10px;
		.toolbar-btn{
			font-size: 24px;
			cursor: pointer;
			margin: 5px;
		}
	}
}
</style>
