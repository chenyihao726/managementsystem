<template>
	<div class="login-title">
		<Select v-model="area">
			<Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
		</Select>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				cityList: [{
					value: '西部地区',
					label: '西部地区'
				}, ],
				area: '西部地区'
			}
		}
	}
</script>

<style>
	.login-title {
		color: #333;
		margin-bottom: 40px;
		font-weight: 500;
		font-size: 22px;
		text-align: center;
		letter-spacing: 4px;
	}
	.login-title .ivu-select-selection{
		border: none;
		box-shadow: none;
	}
	.login-title .ivu-select-single .ivu-select-selection .ivu-select-selected-value{
		font-size: 16px;
	}
</style>
