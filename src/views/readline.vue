<!-- 阅读轨迹 -->
<template>
	<div class="index articles-mng">
		<h2>每天读的，值得分享的，都记录下来</h2>
		<div class="index-main">
			<Table border :columns="columns" :data="dataList"></Table>
		</div>
		<div class="index-pagination">
			<Page :total="total" show-total :page-size="limit" @on-change="changePage"></Page>
		</div>
	</div>
</template>

<script>
export default {
	name: 'articles_mng',
	data () {
		return {
			columns: [
			{
				title: '标题',
				key: 'title'
			},
			{
				title: '阅读时间',
				key: 'createdAt'
			},
			{
				title: 'url',
				key: 'url',
				render: (h, params) => {
					return h('a', {
							props: {
								type: 'primary',
								size: 'small'
							},
							style: {
								marginRight: '5px'
							},
							on: {
								click: () => {
									window.open(params.row.url)
								}
							}
						}, '查看')
				}
			},
			{
				title: '操作',
				key: 'action',
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
									this.remove(params.index)
								}
							}
						}, '删除')
						])
				}
			}
			],
			dataList: [],
			total: 0,
			limit: 20,
			start: 0
		}
	},
	mounted () {
		this.initData(0)
	},
	methods: {
		// 初始化数据
		initData (start) {
			const data = {}
			data.page = {
				start: start,
				limit: this.limit
			}
			data.sis = 22
			this.axios.get('/articles/readInfos', {
				params: data
			}).then((result) => {
				this.dataList = result.data.records
				this.total = result.data.total
			})
		},
		// 翻页
		changePage (currentPage) {
			let start = (currentPage - 1) * this.limit
			this.initData(start)
		},
		onAdd () {
			this.$router.push('/articles/add')
		},
		register () {
			const data = {}
			data.username = 'taoxin'
			data.password = '222222'
			this.axios.post('/user/signUp', data).then((result) => {
				// debugger
			})
		},
		login () {
			const data = {}
			data.username = 'taoxin'
			data.password = '222222'
			this.axios.post('/user/logIn', data).then((result) => {
				// debugger
			})
		}
	}
}
</script>

<style lang="less" scoped>
.index-header{
	padding: 10px 0;
}
.index-pagination{
	padding: 10px 0;
	float: right;
}
h2{
	margin: 10px 5px;
}
</style>
