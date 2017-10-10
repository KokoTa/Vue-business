<template>
	<div class="logIn-warp">
		<div class="logIn-line">
			<label>用户名：</label>
			<input type="text" name="userName" placeholder="请输入用户名" v-model="userName" @input="userCheck">
			<span class="errorText">{{ userError }}</span>
		</div>
		<div class="logIn-line">
			<label>密码：</label>
			<input type="text" name="passWord" placeholder="请输入密码" v-model="passWord" @input="passCheck">
			<span  class="errorText">{{ passError }}</span>
		</div>
		<button @click="logInOK">登录</button>
	</div>
</template>

<script>
	export default {
		name: 'logIn',
		data () {
			return {
				userName: '',
				passWord: '',
				userError: '',
				passError: '',
				nameOK: false,
				passOK: false
			}
		},
		computed: {

		},
		methods: {
			userCheck () {
				this.nameOK = false;
				if(this.userName.trim().length == 0) {
					return this.userError = '用户名不可为空';
				}else if (/[!@#$%^&*\/\\\s]/g.test(this.userName)) {
					return this.userError = '不能包含符号!@#$%^&*\/\\和空字符';
				} else {
					return this.userError = '';
				}
				this.nameOK = true;
			},
			passCheck () {
				this.passOK = false;
				if(this.passWord.trim().length == 0) {
					return this.passError = '密码不可为空';
				} else if(!/^\w{4,12}$/.test(this.passWord)) {
					return this.passError = '密码只能为数字且范围在4-12位';
				} else {
					return this.passError = '';
				}
				this.passOK = true;
			},
			logInOK () {
				if(this.userError.length == 0 && this.passError.length == 0) {
					this.axios.get('/api/test')
						.then((data) => alert(data.data.status));
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.logIn-warp {
		margin-left: 1rem;
		.logIn-line {
			margin: 2rem 0;
			label {
				display: inline-block;
				width: 100px;
			}
			input {
				padding: 5px;
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

	.errorText {
		font-size: .8rem;
		color: red;
	}
</style>