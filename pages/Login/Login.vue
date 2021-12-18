<template>
	<view class="page_wrap">
		
		<view class="page_type mt40">
			<view class="txt">登录</view>
			<view class="sub_txt mt20"> 没有账号 ？<text class="change" @click="navTo('./register')">注册账号</text> </view>
		</view>
		<view class="input_wrap">
			<u--form ref='form' :model="model" :rules="rules" >
				<u-form-item prop="account">
					<view class="input_item">
						<view class="label">账号</view>
						<u-input class="mt10" placeholder='请输入账号' border='bottom' v-model="model.account"></u-input>
					</view>
				</u-form-item>
				<u-form-item prop="password">
					<view class="input_item mt40">
						<view class="label">密码</view>
						<u-input type='password' class="mt10" placeholder='请输入密码' border='bottom' v-model="model.password">
							<template slot="suffix">
								<text class="forget" @click="navTo('./find')">忘记密码？</text>
							</template>
						</u-input>
					</view>
				</u-form-item>
			</u--form>
		</view>
		<view class="agreement row">
			<image 
			@click="agreeHandle" 
			:src="isAgree?
			'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quanzhong%402x.png':
			'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quan1%402x.png'" 
			mode="widthFix">
			</image>
			<text>已阅读并同意<text class="link">《升鲜宝使用协议》</text></text>
		</view>
		
		<view class="btn" @click="login">
			登录
		</view>
		<image class="logo" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/sxb%402x.png" mode="widthFix"></image>
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
				}
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
			}
		}
	}
</script>

<style scoped lang="scss">
.page_wrap{
	background-color: #fff;
	min-height: calc( 100vh - 74px );
	padding: 30upx;
	.page_type{
		.txt{
			color: #333;
			font-size: 48upx;
			font-weight: bold;
			position: relative;
			&::after{
				content: "";
				display: block;
				position: absolute;
				bottom: 0;
				width: 92upx;
				height: 10upx;
				background: linear-gradient(136deg, #F87523 0%, #FD1D20 100%);
			}
		}
		.sub_txt{
			font-size: 24upx;
			color: #666;
			.change{
				color: $base-color;
			}
		}
	}
	.input_wrap{
		margin-top: 100upx;
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
			}
			.forget{
				color: $base-color;
				font-size: 28upx;
			}
		}
	}
	.agreement{
		margin-top: 100upx;
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
		font-weight: bold;
		border-radius: 50upx;
		background: linear-gradient(136deg, #F87523 0%, #FD1D20 100%);
		margin-top: 28upx;
	}
	.logo{
		width: 344upx;
		margin: auto;
		display: block;
		margin-top: 60upx;
	}
}
</style>
