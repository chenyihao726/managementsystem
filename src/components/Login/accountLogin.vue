<template>
	<Form ref="formData" class="login-form" :model="formData" :rules="rules" :label-width="80">
		<FormItem label="账号" prop="user">
			<Input type="text" v-model="formData.user" clearable placeholder="Username"></Input>
		</FormItem>
		<FormItem label="密码" prop="password">
			<Input type="password" v-model="formData.password" clearable placeholder="Password"></Input>
		</FormItem>
		<div class="login-code">
			<FormItem label="验证码" prop="user">
				<Input type="text" v-model="formData.password" clearable placeholder="Password"></Input>
			</FormItem>
			<div class="login-code-img">
				<img src="https://pigx.pig4cloud.com/code?randomStr=46741561347593551">
			</div>
		</div>
		<FormItem>
			<Button type="primary" :loading="btnsClick.login" icon="logo-octocat" @click="handleSubmit('formData')" long>
				<span v-if="!btnsClick.login">登录</span>
				<span v-else>Loading...</span>
			</Button>
		</FormItem>
	</Form>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
					user: '',
					password: ''
				},
				rules: {
					user: [{
						required: true,
						message: '请填写用户名',
						trigger: 'blur'
					}],
					password: [{
							required: true,
							message: '请填写密码',
							trigger: 'blur'
						},
						{
							type: 'string',
							min: 6,
							message: '密码长度不能小于6位',
							trigger: 'blur'
						}
					]
				},
				btnsClick: {
					login: false
				}
			}
		},
		methods: {
			handleSubmit(name) {
				this.$refs[name].validate((valid) => {
					if (valid) {
						this.btnsClick.login = true;
						setTimeout(() => {
							this.successRules();
							this.btnsClick.login = false;
						}, 5000);
					} else {
						this.$Message.error('请填写正确的信息!');
					}
				})
			},
			successRules() {
				alert('111')
			}
		}
	}
</script>

<style>
	.login-code{
		display: flex;
	}
	.login-code .ivu-form-item {
		width: calc(100% - 110px);
		margin-right: 10px;
	}
</style>
