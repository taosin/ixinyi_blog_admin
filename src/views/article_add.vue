<template>
	<div class="index-m">
		<div class="index-m-title index-m-div">
			<Input v-model="title" placeholder="Enter title..." size="large"></Input>
		</div>
		<div class="index-m-tag-cate index-m-div">
			<div class="index-m-tag">
				<Input v-model="tag" placeholder="Enter tag..." size="large"></Input>
			</div>
		</div>
		<div style="margin:10px 10px;">
			<Input v-model="desc" placeholder="Enter describe..." size="large" type="textarea" autosize="true"></Input>
		</div>
		<div class="index-m-toolbar index-m-div">
			<Tooltip content="插入图片" placement="top-start">
				<Upload action="//jsonplaceholder.typicode.com/posts/" :show-upload-list="false">
					<span class="toolbar-btn">
						<Icon type="image"></Icon>
					</span>
				</Upload>
			</Tooltip>
			<Tooltip content="预览" placement="top-start">
				<span class="toolbar-btn">
					<Icon type="android-laptop"></Icon>
				</span>
			</Tooltip>
			<Button type="ghost" icon="ios-paperplane-outline" style="float:right" @click="addArticle" :loading="isLoading">发布文章</Button>
		</div>
		<div class="index-m-textarea index-m-div">
			<textarea v-model="content" debounce="300" placeholder="Enter content..."></textarea>
		</div>
	</div>
</template> 
<script>
const marked = require('markdown-js')
export default {
	components: {
	},
	data () {
		return {
			content: '',
			title: '',
			tag: '',
			desc: '',
			isLoading: false
		}
	},
	mounted () {
	},
	watch: {
		content (val) {
		}
	},
	methods: {
		addArticle () {
			if (!this.content) {
				this.$Message.warning('总要写点儿什么吧？')
				return
			}
			if (!this.title) {
				this.$Message.warning('标题呢？')
				return
			}
			if (!this.desc) {
				this.$Message.warning('写点儿描述吧？')
				return
			}
			if (!this.tag) {
				this.$Message.warning('标签呢？')
				return
			}
			const data = {}
			data.title = this.title
			data.tag = this.tag
			data.desc = this.desc
			data.content = marked.makeHtml(this.content)
			this.isLoading = true
			this.handlerSaveArticle(data)
		},

		// 保存文章
		handlerSaveArticle (data) {
			const url = '/articles/list'
			this.axios.post('/article', data).then((result) => {
				this.$Message.success('文章发布成功!')
				this.isLoading = false
				this.$router.push(url)
			})
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
		clear: both;
		height: 40px;
	}
	.index-m-textarea{
		textarea{
			width: 100%;
			min-height: 1000px;
			border:none;
			resize:none;
			font-size: 14px;
			padding: 10px;
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
