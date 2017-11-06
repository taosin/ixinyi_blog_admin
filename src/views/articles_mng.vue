<!-- 文章管理 -->
<template>
	<div class="index articles-mng">
		<div class="index-header">
			<Button type="info" @click="onAdd">发布文章</Button>
		</div>
		<div class="index-main">
			<Table border :columns="columns7" :data="data6"></Table>
		</div>
		<div class="index-pagination">
			<Page :total="100" show-elevator show-total show-sizer></Page>
		</div>
	</div>
</template>

<script>
export default {
	name: 'articles_mng',
	data () {
		return {
			columns7: [
			{
				title: '标题',
				key: 'name',
				render: (h, params) => {
					return h('div', [
						h('Icon', {
							props: {
								type: 'person'
							}
						}),
						h('strong', params.row.name)
						])
				}
			},
			{
				title: '状态',
				key: 'age'
			},
			{
				title: '评论数量',
				key: 'address'
			},
			{
				title: '发布bk时间',
				key: 'address'
			},
			{
				title: '更新时间',
				key: 'address'
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
									this.remove(params.index)
								}
							}
						}, '删除')
						])
				}
			}
			],
			data6: [
			{
				name: '王小明',
				age: 18,
				address: '北京市朝阳区芍药居'
			},
			{
				name: '张小刚',
				age: 25,
				address: '北京市海淀区西二旗'
			},
			{
				name: '李小红',
				age: 30,
				address: '上海市浦东新区世纪大道'
			},
			{
				name: '周小伟',
				age: 26,
				address: '深圳市南山区深南大道'
			}
			]
		}
	},
	methods: {
		onAdd () {
			this.$router.push('/articles/add')
		}
	}
}
</script>

<style lang="less">
.index-header{
	padding: 10px 0;
}
.index-pagination{
	padding: 10px 0;
	float: right;
}

</style>

