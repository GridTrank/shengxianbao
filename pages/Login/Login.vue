<template>
	<view class="page_wrap">
		<view class="input_wrap">
			<u--form ref='form' :model="model" :rules="rules" >
				<template v-if="loginType=='account'">
					<u-form-item prop="account">
						<view class="input_item">
							<u-input  placeholder='请输入账号' border='bottom' v-model="model.account">
								<template slot="prefix">
									<text class="label" >账号</text>
								</template>
							</u-input>
						</view>
					</u-form-item>
					<u-form-item prop="password">
						<view class="input_item ">
							<u-input type='password' placeholder='请输入密码' border='none' v-model="model.password">
								<template slot="prefix">
									<text class="label" >密码</text>
								</template>
								<template slot="suffix">
									<text class="forget" @click="navTo('./find')">忘记密码？</text>
								</template>
							</u-input>
						</view>
					</u-form-item>
				</template>
				<template v-else>
					<u-form-item prop="phone">
						<view class="input_item">
							<u-input max placeholder='请输入手机号' border='bottom' v-model="model.mobile">
								<template slot="prefix">
									<text class="label" >手机号</text>
								</template>
							</u-input>
						</view>
					</u-form-item>
					<u-form-item prop="code">
						<view class="input_item ">
							<u-input  placeholder='请输入验证码' border='none' v-model="model.smsCode">
								<template slot="prefix">
									<text class="label">验证码</text>
								</template>
								<template slot="suffix">
									<u-code
										ref="uCode"
										@change="codeChange"
										seconds="60"
										changeText="X秒重新获取"
									></u-code>
									<view class="get_code" @tap="getCode">
										{{tips}}
									</view>
								</template>
							</u-input>
						</view>
					</u-form-item>
				</template>
				
			</u--form>
			
			<view class="agreement row">
				<image 
				@click="agreeHandle" 
				:src="isAgree?
				'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quanzhong%402x.png':
				'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quan1%402x.png'" 
				mode="widthFix">
				</image>
				<text>我已阅读并同意以下条款<text class="link">《好运来服务协议及隐私政策》》</text></text>
			</view>
		</view>
		
		
		<view class="btn" @click="login">
			登录
		</view>
		<view class="btn code" @click="changeLogin">
			{{loginType=='account'?'验证码登录':'账号登录'}}
		</view>
		<view class="btn code" @click="navTo('./register')">
			没有账号？去注册
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isAgree:false,
				model:{},
				rules:{
					account:[
						{required:true,message:'请输入账号',trigger:'blur'}
					],
					password:[
						{required:true,message:'请输入密码',trigger:'blur'}
					]
				},
				tips:'',
				loginType:'account'
			};
		},
	
		methods:{
			agreeHandle(){
				this.isAgree=!this.isAgree
			},
			login(){
				this.$refs.form.validate().then(res => {
					uni.$u.toast('校验通过')
				}).catch(errors => {
					
				})
			},
			changeLogin(){
				this.loginType=this.loginType=='account'?'phone':'account'
				console.log(this.loginType)
			},
			codeChange(text) {
			  this.tips = text;
			},
			getCode() {
                this.$http('customer/getSmsCode',{mobile:this.model.mobile},'post').then(res=>{
                    console.log(res)
                })
                return
			    if (this.$refs.uCode.canGetCode) {
			        uni.$u.toast('验证码已发送');
			        this.$refs.uCode.start();
			    } else {
					uni.$u.toast('倒计时结束后再发送');
			    }
			},
		}
	}
</script>

<style scoped lang="scss">
.page_wrap{
	margin-top: 30upx;
	.input_wrap{
		padding: 30upx;
		background-color: #fff;
		/deep/ .u-input{
			padding: 12upx 0 !important;
		}
		/deep/ .input_item{
			width: 100% !important;
		}
		/deep/ .u-form-item__body__right__message{
			margin:0 !important;		}
		.input_item{
			.label{
				color: #333;
				font-size: 32upx;
				margin-right: 80upx;
			}
			.forget{
				color: $base-color;
				font-size: 28upx;
			}
			.get_code{
				color: #FD4D00;
				font-size: 28upx;
			}
		}
	}
	.agreement{
		margin-top: 80upx;
		image{
			width: 34upx;
			margin-right: 10upx;
		}
		color: #666;
		font-size: 24upx;
		.link{
			color: $base-color;
		}
	}
	.btn{
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
	.code{
		color: #F87523;
		background: #fff;
		border:2upx solid #F87523
	}
	
}
</style>
