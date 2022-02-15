<template>
	<view class="page_wrap">
		<view class="input_wrap">
			<u-form ref='form' :model="model" :rules="rules">
				<u-form-item >
					<view class="input_item ">
						<u-input class="mt10" disabled placeholder='请输入当前账号' border='bottom' v-model="accountName">
							<template slot="prefix">
								<text class="label">账号</text>
							</template>
						</u-input>
					</view>
				</u-form-item>
				<u-form-item prop="mobile">
					<view class="input_item ">
						<u-input class="mt10" placeholder='请输入手机号码' border='bottom' v-model="model.mobile">
							<template slot="prefix">
								<text class="label">手机号</text>
							</template>
						</u-input>
					</view>
				</u-form-item>

				<u-form-item prop="smsCode">
					<view class="input_item ">
						<u-input class="mt10" placeholder='请输入验证码' border='bottom' v-model="model.smsCode">
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


				<u-form-item prop="payPasword">
					<view class="input_item ">
						<u-input class="mt10" placeholder='请输入支付密码' border='none' v-model="model.payPasword">
							<template slot="prefix">
								<text class="label">支付密码</text>
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
				<text>我已阅读并同意以下条款<text class="link">《好运来服务协议及隐私政策》》</text></text>
			</view>
		</view>

		<view class="btn" @click="submit">
			保存
		</view>
		<view class="btn code" @click="navTo('/pagesC/Service/Service')">
			联系客服
		</view>
	</view>
</template>

<script>
	import {
		payPwd
	} from '@/common/js/util'
	export default {
		data() {
			return {
				accountName:'',
				model:{
					payPasword: '',
					mobile: '',
					smsCode: '',
				},
				rules: {
					payPasword: [{
							required: true,
							message: '请输入支付密码',
							trigger: 'blur'
						},
						{
							validator: (rule, value, callback) => {
								return payPwd(value, 'pwd');
							},
							message: '密码为6位数',
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
				tips: '',
				isAgree: false
			};
		},
		onReady() {
			this.$refs.form.setRules(this.rules);
		},
		onLoad() {
			this.getUserInfo()
		},
		methods:{
			// 获取个人信息
			getUserInfo(){
				this.$http('api/myOneslft/getMyInfo','','post').then(res=>{
					this.accountName=res.customerName
				}) 
			},
			agreeHandle(){
				this.isAgree=!this.isAgree
			},
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
			    if (this.$refs.uCode.canGetCode) {
			        this.$http('api/customer/getSmsCode', {
			        	mobile: this.model.mobile
			        }, 'post').then(res => {
						this.$refs.uCode.start();
			        })
			        
			    } else {
					uni.$u.toast('倒计时结束后再发送');
				}
			},
			submit() {
				this.$refs.form.validate().then(res => {
					this.$http('api/myOneslft/updatePayPasword', this.model, 'post').then(res => {
						uni.showToast({
							title: '修改成功',
							icon: 'none'
						})
						setTimeout(() => {
							this.navTo('back')
						}, 2000)
					})
				}).catch(errors => {

				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.page_wrap {
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
