<template>
	<view class="page_wrap">
		<view class="input_wrap">
			<u--form ref='form' :model="model" :rules="rules" >
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
						</u-input>
					</view>
				</u-form-item>
				</u-form-item>
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
	
		<view class="btn" @click="submit">
			注册
		</view>
		<view class="btn code" @click="navTo('./Login')">
			已有账号，去登录
		</view>
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
			agreeHandle(){
				this.isAgree=!this.isAgree
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
	margin-top: 30upx;
	.input_wrap{
		padding: 30upx;
		background-color: #fff;
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
				margin-right: 80upx;
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
