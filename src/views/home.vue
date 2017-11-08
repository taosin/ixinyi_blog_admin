<template>
	<div class="home">
		<h2>Dashboard</h2>
		<hr>
		<div class="item-btns">
				<Button type="info" @click="gotoUrl('/articles/list')">文章列表</Button>
				<Button type="info">评论列表</Button>
				<Button type="info">信息按钮</Button>
				<Button type="info">信息按钮</Button>
		</div>
		<div class="main-list">
			<div class="list todo-list">
				<div class="home-title">
					<i class="ivu-icon ivu-icon-android-checkbox-outline"></i>
					待办事项
				</div>
				<div class="list-main">
					<ul>
						<li v-for="(n,index) in 19" :key="index">
							<Checkbox v-model="single">
								<span class="content">{{list}}</span>
							</Checkbox>
						</li>
					</ul>
				</div>
			</div>
			<div class="list recomment-list">
				<div class="home-title">
					<i class="ivu-icon ivu-icon-ios-chatbubble"></i>
					最新评论
				</div>
				<div class="list-main">
					<ul>
						<li>
							<span class="null">无数据记录</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="list user-list">
				<div class="home-title">
					<i class="ivu-icon ivu-icon-android-clipboard"></i>
					留言板
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			list: '今天下午要去学习新技术'
		}
	},
	methods: {
		gotoUrl(url) {
			this.$router.push(url)
		}
	},
	mounted() {
		// ddd
	}
}
</script>

<style lang="less">
.home {
  .item-btns {
    margin: 10px 0;
  }
  .main-list {
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 4px;
    overflow: hidden;
    .list {
      border: 1px solid #888;
      width: 32%;
      float: left;
      padding: 5px 5px 10px;
      border-radius: 3px;
      .home-title {
        border-bottom: 1px solid #888;
        padding: 5px 10px 5px;
        font-size: 16px;
        font-weight: bold;
      }
      .list-main {
        height: 300px;
        overflow: auto;
        ul {
          margin: 5px 5px;
          li {
            margin: 10px 0;
            font-size: 14px;
            font-weight: bold;
            .content {
              margin-left: 5px;
						}
						.null{
							color: #888;
							font-size: 15px;
						}
          }
        }
      }
    }
    .todo-list {
      width: 250px;
    }
    .recomment-list {
      margin: 0 1%;
    }
  }
}
</style>

