<template>
	<div id="login">
		<div class="login-container">
			<section class="login-weaper">
				<div class="login-left">
					<div class="login-time">
						2019-06-21 18:49:00
					</div>
					<img src="../../../static/loginLogo.png" class="img">
					<dl>
						<dt>运营实验室</dt>
						<dd>v 2.0.0</dd>
					</dl>
				</div>
				<div class="login-right">
					<div class="login-main">
						<areaSelect></areaSelect>
						<accountLogin></accountLogin>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
	import areaSelect from './Area'
	import accountLogin from './AccountLogin'
	
	export default {
		name: 'Login',
		data() {
			return {
				
			}
		},
		components: {
			areaSelect,
			accountLogin
		},
		methods: {
			
		}
	}
</script>

<style>
	.login-container {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 100%;
		margin: 0 auto;
		background: url(../../../static/loginBg.jpg) 0 bottom repeat-x #049ec4;
		-webkit-animation: animate-cloud 20s linear infinite;
		animation: animate-cloud 20s linear infinite;
	}
	.login-weaper{
		margin: 0 auto;
		width: 1000px;
		-webkit-box-shadow: -4px 5px 10px rgba(0,0,0,.4);
		box-shadow: -4px 5px 10px rgba(0,0,0,.4);
	}
	.login-left {
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		background-color: #409eff;
		color: #fff;
		float: left;
		width: 50%;
		position: relative;
	}
	.login-right {
		border-left: none;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		color: #fff;
		background-color: #fff;
		width: 50%;
		float: left;
	}
	.login-right, 
	.login-left {
		position: relative;
		min-height: 500px;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}
	
	/* 左侧内容 */
	.login-time {
		position: absolute;
		left: 25px;
		top: 25px;
		width: 100%;
		color: #fff;
		opacity: .9;
		font-size: 18px;
		overflow: hidden;
	}
	.login-left dl{
		margin-top: 60px;
		text-align: center;
		color: #fff;
		letter-spacing: 2px;
	}
	.login-left dt{
		font-size: 26px;
	}
	
	
	/* 右侧内容 */
	.login-main {
		margin: 0 auto;
		width: 65%;
	}
	
	.login-main .ivu-input{
		height: 40px;
	}
	
	.login-main .ivu-form .ivu-form-item-label{
		padding: 14px 12px 13px 0;
	}
	
	.login-main .ivu-form-item-required .ivu-form-item-label:before{
		display: none;
	}
	
	

	@keyframes animate-cloud {
		0% {
			background-position: 600px 100%
		}

		to {
			background-position: 0 100%
		}
	}

	@-moz-keyframes animate-cloud {
		0% {
			background-position: 600px 100%
		}

		to {
			background-position: 0 100%
		}
	}

	@-ms-keyframes animate-cloud {
		0% {
			background-position: 600px 100%
		}

		to {
			background-position: 0 100%
		}
	}

	@-webkit-keyframes animate-cloud {
		0% {
			background-position: 600px 100%
		}

		to {
			background-position: 0 100%
		}
	}
</style>
