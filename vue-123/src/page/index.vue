<template>
  <div class="index">
  	<el-button type="info" size="small" class="index_btn" @click="$router.push('/content')">登录</el-button>
    <h1 class="title">选择恐惧症的福音！教你认清MVC，MVP和MVVM</h1>
    <ul>
    	<li v-for="item in lists">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
	export default{
		// state:驱动应用的数据源
		data() {
			return {
				lists: []
			}
		},
		created() {
			// 组件创建完后获取数据，这个就是vue生命周期的创建完成周期
			this.get_data();
		},
		// actions:响应在view上的用户输入导致的状态变化
		methods: {
			get_data: function (params) {
				if (!params) params = {}
				// 我们这里用全局绑定的$api,方法来获取数据
				this.$api.get('topics',params,r=>{
					this.lists = r.data;
					console.log(r.data);
				})
			}
		}
	}
</script>
<style lang="scss">
	@import './../style/scss/index'
</style>
