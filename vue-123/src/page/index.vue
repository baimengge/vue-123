<template>
  <div class="index">
    <h1 class="title">选择恐惧症的福音！教你认清MVC，MVP和MVVM</h1>
    <ul>
    	<li v-for="item in lists">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
	export default{
		data() {
			return {
				lists: []
			}
		},
		created() {
			// 组件创建完后获取数据，这个就是vue生命周期的创建完成周期
			this.get_data();
		},
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
