<template>
	<div class="sign-warp">
		<div class="sign-line">
			<label>用户名：</label>
			<input type="text" name="userName" placeholder="请输入用户名" v-model="userName">
			<span>{{ userError }}</span>
		</div>
		<div class="sign-line">
			<label>密码：</label>
			<input type="text" name="passWord" placeholder="请输入密码" v-model="passWord">
			<span>{{ passError }}</span>
		</div>
		<button>提交</button>
	</div>
</template>

<script>
	export default {
		name: 'signUp',
		data () {
			return {
				userName: '',
				passWord: ''
			}
		},
		computed: {
			userError () {

			},
			passError () {

			}
		},
		methods: {

		},
		created () {
			
		}
	}
</script>

<style lang="scss" scoped>
	.sign-warp {
		margin-left: 1rem;
		.sign-line {
			margin: 1rem 0;
			label {
				display: inline-block;
				width: 100px;
			}
			input {
				outline: none;
				padding: 3px;
			}
		}
		button {
			width: 80px;
			height: 30px;
			border: none;
			outline: none;
			background: black;
			color: white;
			cursor: pointer;
		}
	}
</style>