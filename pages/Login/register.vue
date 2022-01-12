<template>
	<view class="page_wrap">
		<view class="input_wrap">
			<u-form ref='form' :model="model" :rules="rules">
				<u-form-item prop="accountName">
					<view class="input_item">
						<u-input placeholder='请输入账号' border='bottom' v-model="model.accountName">
							<template slot="prefix">
								<text class="label">账号</text>
							</template>
						</u-input>
					</view>
				</u-form-item>
				<u-form-item prop="accountPasword">
					<view class="input_item ">
						<u-input type='password' placeholder='请输入密码' border='bottom' v-model="model.accountPasword">
							<template slot="prefix">
								<text class="label">密码</text>
							</template>
						</u-input>
					</view>
				</u-form-item>
				<u-form-item prop="mobile">
					<view class="input_item">
						<u-input max placeholder='请输入手机号' border='bottom' v-model="model.mobile">
							<template slot="prefix">
								<text class="label">手机号</text>
							</template>
						</u-input>
					</view>
				</u-form-item>
				<u-form-item prop="smsCode">
					<view class="input_item ">
						<u-input placeholder='请输入验证码' border='none' v-model="model.smsCode">
							<template slot="prefix">
								<text class="label">验证码</text>
							</template>
							<template slot="suffix">
								<u-code ref="uCode" @change="codeChange" seconds="60" changeText="X秒重新获取"></u-code>
								<view class="get_code" @tap="getCode">
									{{tips}}
								</view>
							</template>
						</u-input>
					</view>
				</u-form-item>
			</u-form>
			<view class="agreement row">
				<image @click="agreeHandle" :src="isAgree?
				'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quanzhong%402x.png':
				'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quan1%402x.png'" mode="widthFix">
				</image>
				<text>我已阅读并同意以下条款<text class="link">《好运邻里服务协议及隐私政策》》</text></text>
			</view>
		</view>

		<view class="btn" @click="submit">
			注册
		</view>
		<view class="btn code" @click="navTo('./Login')">
			已有账号，去登录
		</view>
	</view>
</template>

<script>
	import {
		checkStr
	} from '@/common/js/util'
	export default {
		data() {
			return {
				tips: '',
				model: {
					accountPasword: '',
					accountName: '',
					sourceType: 1,
					mobile: '',
					smsCode: '',
				},
				rules: {
					accountName: [{
						required: true,
						message: '请输入账号',
						trigger: 'blur'
					}],
					accountPasword: [{
							required: true,
							message: '请输入密码',
							trigger: 'blur'
						},
						{
							validator: (rule, value, callback) => {
								return checkStr(value, 'pwd');
							},
							message: '密码为8-16位，须包含数字、字母、符号',
							trigger: ['change', 'blur'],
						}
					],
					mobile: [{
							required: true,
							message: '请输入手机号',
							trigger: ['change', 'blur'],
						},
						{
							validator: (rule, value, callback) => {
								return this.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							trigger: ['change', 'blur'],
						}

					],
					smsCode: [{
						required: true,
						message: '请输入验证码',
						trigger: 'blur'
					}],

				},
				isAgree: false
			};
		},
		onReady() {
			this.$refs.form.setRules(this.rules);
		},
		methods: {
			agreeHandle() {
				this.isAgree = !this.isAgree
			},

			submit() {
				if (!this.isAgree) {
					uni.showToast({
						title: '请先阅读并同意服务协议与隐私政策',
						icon: 'none'
					})
				}
				this.$refs.form.validate().then(res => {
					this.$http('api/customer/register', this.model, 'post').then(res => {
						uni.showToast({
							title: '注册成功，跳转认证',
							icon: 'none'
						})
						setTimeout(() => {
							this.navTo('/pagesA/Clientele/index')
						}, 2000)
						
					})
				}).catch(errors => {

				})
			},
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				this.$http('api/customer/getSmsCode', {
					mobile: this.model.mobile
				}, 'post').then(res => {

				})

			},
		}

	}
</script>

<style scoped lang="scss">
	.page_wrap {
		margin-top: 30upx;

		.input_wrap {
			padding: 30upx;
			background-color: #fff;

			/deep/ .u-input {
				padding: 12upx 0 !important;
			}

			/deep/ .u-input__content__prefix-icon {
				margin-right: 40upx !important;
			}

			/deep/ .input_item {
				width: 100% !important;
			}

			/deep/ .u-form-item__body__right__message {
				margin: 0 !important;
			}

			.input_item {
				.label {
					color: #333;
					font-size: 32upx;
					width: 150upx;
					text-align: left;
					display: block;
				}

				.iconfont {
					color: #d1d1d1;
				}

				.get_code {
					color: #FD4D00;
					font-size: 28upx;
				}
			}
		}

		.agreement {
			margin-top: 100upx;

			image {
				width: 34upx;
				margin-right: 10upx;
			}

			color: #666;
			font-size: 24upx;

			.link {
				color: $base-color;
			}
		}

		.btn {
			height: 100upx;
			line-height: 100upx;
			text-align: center;
			color: #fff;
			font-size: 36upx;
			border-radius: 50upx;
			background: linear-gradient(136deg, #F87523 0%, #FD1D20 100%);
			margin: auto;
			margin-top: 50upx;
			width: 90%;

		}

		.code {
			color: #F87523;
			background: #fff;
			border: 2upx solid #F87523
		}

	}
</style>
