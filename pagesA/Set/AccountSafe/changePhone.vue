<template>
	<view class="page_wrap">
		
		<view class="input_wrap">
			<u--form ref='form' :model="model" :rules="rules" >
				<u-form-item prop="mobile">
					<view class="input_item ">
						<view class="label">当前手机号码</view>
						<u-input class="mt10" placeholder='请输入手机号码' border='bottom' v-model="model.mobile"></u-input>
					</view>
				</u-form-item>
				<u-form-item prop="password">
					<view class="input_item ">
						<view class="label">新手机</view>
						<u-input class="mt10" placeholder='请输入手机号码' border='bottom' v-model="model.password"></u-input>
					</view>
				</u-form-item>
				
				<u-form-item prop="code">
					<view class="input_item ">
						<view class="label">验证码</view>
						<u-input class="mt10" placeholder='请输入验证码' border='bottom' v-model="model.code">
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
			</u--form>
		</view>
		
		<view class="btn" @click="submit">
			确定
		</view>
	</view>
</template>

<script>
	import {checkStr} from '@/common/js/util'
	export default {
		data() {
			return {
				model:{},
				rules:{
					account:[
						{required:true,message:'请输入账号',trigger:'blur'}
					],
					mobile:[
						{required:true,validator:this.phoneRule,trigger:'blur'}
					],
					password:[
						{required:true,message:'请输入密码',trigger:'blur'}
					],
					newPassword:[
						{required:true,validator:this.passWordRule,trigger:'blur'}
					],
					code:[
						{required:true,message:'请输入验证码',trigger:'blur'}
					]
				},
				tips:'',
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
			codeChange(text) {
			  this.tips = text;
			},
			getCode() {
			    if (this.$refs.uCode.canGetCode) {
						this.$http('api/customer/getSmsCode',{mobild:this.model.mobile},(res)=>{
							// uni.$u.toast('验证码已发送');
							this.$refs.uCode.start();
						})
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
	.btn{
		height: 100upx;
		line-height: 100upx;
		text-align: center;
		color: #fff;
		font-size: 36upx;
		font-weight: bold;
		border-radius: 50upx;
		background: linear-gradient(136deg, #F87523 0%, #FD1D20 100%);
		margin-top: 100upx;
	}
	.logo{
		width: 344upx;
		margin: auto;
		display: block;
		margin-top: 60upx;
	}
	
}
</style>
