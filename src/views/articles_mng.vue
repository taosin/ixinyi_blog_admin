<!-- 文章管理 -->
<template>
	<div class="index articles-mng">
		<div class="index-header">
			<Button type="info" @click="onAdd">发布文章</Button>
		</div>
		<div class="index-main">
			<Table border :columns="columns" :data="dataList"></Table>
		</div>
		<div class="index-pagination">
			<Page :total="total" show-elevator show-total show-sizer></Page>
		</div>
	</div>
</template>

<script>
export default {
	name: 'articles_mng',
	data() {
		return {
			columns: [
				{
					title: '标题',
					key: 'title'
				},
				{
					title: '状态',
					key: 'state'
				},
				{
					title: '评论数量',
					key: 'recomment'
				},
				{
					title: '发布时间',
					key: 'createdAt'
				},
				{
					title: '更新时间',
					key: 'createdAt'
				},
				{
					title: '操作',
					key: 'action',
					width: 150,
					align: 'center',
					render: (h, params) => {
						return h('div', [
							h('Button', {
								props: {
									type: 'primary',
									size: 'small'
								},
								style: {
									marginRight: '5px'
								},
								on: {
									click: () => {
										this.show(params.index)
									}
								}
							}, '查看'),
							h('Button', {
								props: {
									type: 'error',
									size: 'small'
								},
								on: {
									click: () => {
										this.remove(params)
									}
								}
							}, '删除')
						])
					}
				}
			],
			dataList: [],
			start: 0,
			limit: 20,
			total: 0
		}
	},
	mounted() {
		this.initData(0)
	},
	methods: {
		onAdd() {
			this.$router.push('/articles/add')
		},
		// 初始化数据
		initData(start) {
			const data = {}
			data.page = {
				start: start,
				limit: this.limit
			}
			this.axios.get('/articles', {
				params: data
			}).then((result) => {
				this.dataList = result.data.records
				this.total = result.data.total
			})
		},
		show(index) {
		},
		remove(data) {
			const id = data.row.objectId
			this.axios.delete('/article/' + id).then((result) => {
				debugger
			})
		}
	}
}
</script>

<style lang="less">
.index-header {
  padding: 10px 0;
}
.index-pagination {
  padding: 10px 0;
  float: right;
}
</style>

