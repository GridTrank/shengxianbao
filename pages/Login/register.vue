<template>
	<view class="page_wrap">
		<view class="page_type mt40">
			<view class="txt">注册</view>
			<view class="sub_txt mt20">已有账号 ？<text class="change" @click="navTo('back')">返回登录</text> </view>
		</view>
		<view class="input_wrap">
			<u--form ref='form' :model="model" :rules="rules" >
				<u-form-item prop="phone">
					<view class="input_item">
						<u-input max placeholder='请输入手机号码' border='bottom' v-model="model.phone">
							<template slot="prefix">
								<text class="iconfont icon-shouji"></text>
							</template>
						</u-input>
					</view>
				</u-form-item>
				<u-form-item prop="code">
					<view class="input_item ">
						<u-input  placeholder='请输入验证码' border='bottom' v-model="model.code">
							<template slot="prefix">
								<text class="iconfont icon-yanzheng"></text>
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
				
				<u-form-item prop="password">
					<view class="input_item ">
						<u-input  placeholder='请输入密码' border='bottom' v-model="model.password">
							<template slot="prefix">
								<text class="iconfont icon-unlock-full"></text>
							</template>
						</u-input>
					</view>
				</u-form-item>
				
				<u-form-item prop="password_">
					<view class="input_item ">
						<u-input  placeholder='确认密码' border='bottom' v-model="model.password_">
							<template slot="prefix">
								<text class="iconfont icon-unlock-full"></text>
							</template>
						</u-input>
					</view>
				</u-form-item>
				<u-form-item >
					<view class="input_item ">
						<u-input  placeholder='邀请码(选填)' border='bottom' v-model="model.num">
							<template slot="prefix">
								<text class="iconfont icon-yaoqing"></text>
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
		<view class="btn" @click="submit">
			注册
		</view>
		<image class="logo" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/sxb%402x.png" mode="widthFix"></image>
	</view>
</template>

<script>
	import {checkStr} from '@/common/js/util'
	export default {
		data() {
			return {
				tips:'',
				model:{},
				rules:{
					phone:[
						{required:true,validator:this.phoneRule,trigger:'blur'}
					],
					password:[
						{required:true,validator:this.passWordRule,trigger:'blur'}
					],
					password_:[
						{required:true,validator:this.confirmPassWord,trigger:'blur'}
					],
					code:[
						{required:true,message:'请输入验证码',trigger:'blur'}
					]
				},
				isAgree:false
			};
		},
		methods:{
			phoneRule(rule,value,cb){
				if(!value || !checkStr(value, 'mobile')){
					cb(new Error('请输入正确的手机号码'))
				}
				cb()
			},
			passWordRule(rule,value,cb){
				if(!value || !checkStr(value, 'pwd')){
					cb(new Error('密码为8-16位，须包含数字、字母、符号'))
				}
				cb()
			},
			confirmPassWord(rule,value,cb){
				if(!value){
					cb(new Error('请再次输入密码'))
				}else if(value!==this.model.password){
					cb(new Error('两次密码不一致'))
				}
				cb()
			},
			changeType(){
				this.$emit('changeType','login')
			},
			codeChange(text) {
			  this.tips = text;
			},
			getCode() {
			    if (this.$refs.uCode.canGetCode) {
			        uni.$u.toast('验证码已发送');
			        this.$refs.uCode.start();
			    } else {
					uni.$u.toast('倒计时结束后再发送');
			    }
			},
			submit(){
				this.$refs.form.validate().then(res => {
					delete this.model.password_
					console.log(this.model)
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
		/deep/ .u-input__content__prefix-icon{
			margin-right: 40upx !important;
		}
		/deep/ .input_item{
			width: 100% !important;
		}
		/deep/ .u-form-item__body__right__message{
			margin:0 !important;
		}
		.input_item{
			.label{
				color: #333;
				font-size: 32upx;
			}
			.iconfont{
				color: #d1d1d1;
			}
			.get_code{
				color: #FD4D00;
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
