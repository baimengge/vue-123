<template>
	<div>
		<h1>{{message}}</h1>
		<div v-text="myMessage"></div>
	</div>
</template>
<script>
	export default {
		props: {
			message: null,
			myMessage: null
		},// 父到子传参
		data (){ // 基础数据
			return {

			}
		}
	}
</script>