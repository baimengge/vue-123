<template lang="html">
  	<div class="login">
	    <el-tabs v-model="activeName" @tab-click="handleClick">
		    <el-tab-pane label="登录" name="first">
		    	<el-form :model="ruleForm2" ref="ruleForm2" label-width="80px" class="demo-ruleForm">
				  	<el-form-item label="用户名">
				    	<el-input type="name" ></el-input>
				  	</el-form-item>
				  	<el-form-item label="密码">
				    	<el-input type="password"></el-input>
				  	</el-form-item>
				</el-form>
		    </el-tab-pane>
		    <el-tab-pane label="注册" name="second">
		    	<my-component message="HELLO!" :my-message="this.message"></my-component>
		    </el-tab-pane>
  		</el-tabs>
  	</div>
</template>
<script>
import myComponent from './my-component.vue'
  export default {
  	props: { // 父到子传参

  	},
  	// 局部注册
  	components: {
  		myComponent
  	},
    data() { // 基础数据
      return {
        activeName: 'first',
        ruleForm2: {},
        message: '你猜'
      };
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
      }
    }
  };
</script>