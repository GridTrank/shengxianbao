<template>
	<view class="page_wrap">
		<view class="input_wrap mt20">
			<u--form ref='form' :model="model" :rules="rules" >
				<u-form-item prop="account">
					<view class="input_item">
						<u-input max placeholder='请输入子账号名称' border='bottom' v-model="model.account">
							<template slot="prefix">
								<text class=" f28-c333">子账号 <text class="xing">*</text> </text>
							</template>
						</u-input>
					</view>
				</u-form-item>
				<u-form-item prop="name">
					<view class="input_item ">
						<u-input  placeholder='请输入联系人' border='bottom' v-model="model.name">
							<template slot="prefix">
								<text class=" f28-c333">联系人 <text class="xing">*</text></text>
							</template>
						</u-input>
					</view>
				</u-form-item>
				<u-form-item prop="phone">
					<view class="input_item ">
						<u-input  placeholder='请输入手机' border='bottom' v-model="model.phone">
							<template slot="prefix">
								<text class=" f28-c333">手机 <text class="xing">*</text></text>
							</template>
						</u-input>
					</view>
				</u-form-item>
				<u-form-item prop="password">
					<view class="input_item ">
						<u-input  placeholder='请输入密码' border='bottom' v-model="model.password">
							<template slot="prefix">
								<text class=" f28-c333">密码 <text class="xing">*</text></text>
							</template>
						</u-input>
					</view>
				</u-form-item>

				<u-form-item >
					<view class="input_item row jc_sb status">
						<text>账号状态</text>
						<u-switch activeColor="#FF6C00" size="16" v-model="isDefault" @change="changeDefault"></u-switch>
					</view>
				</u-form-item>
			</u--form>
		</view>
		<view class="power">
			<view class="title">子账号权限</view>
			<view class="row jc_sb">
				<text class="f28-c333">显示商品价格</text>
				<u-switch activeColor="#FF6C00" size="16" v-model="isDefault" @change="changeDefault"></u-switch>
			</view>
		</view>
		<view :class="['btn',(model.account && model.name && model.phone && model.password) && 'can']" @click="submit">
			<text>{{(model.account && model.name && model.phone && model.password)?'保存':'取消'}}</text>
		</view>
	</view>
</template>

<script>
	import {checkStr} from '@/common/js/util'
	export default {
		data() {
			return {
				tips:'',
				canClick:false,
				model:{},
				isDefault:true,
				rules:{
					account:[
						{required:true,message:'请输入子账户名称',trigger:'blur'}
					],
					phone:[
						{required:true,validator:this.phoneRule,trigger:'blur'}
					],
					password:[
						{required:true,validator:this.passWordRule,trigger:'blur'}
					],
					name:[
						{required:true,message:'请输入联系人姓名',trigger:'blur'}
					]
				},
				isAgree:false
			};
		},
		watch:{
			
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
			changeDefault(e){
				this.isDefault=e
			},
			submit(){
				this.$refs.form.validate().then(res => {
					console.log(this.model)
				}).catch(errors => {
					
				})
			}
		}
		
	}
</script>

<style scoped lang="scss">
.page_wrap{
	
	.input_wrap{
		background-color: #fff;
		padding:0 30upx;
		/deep/ .u-input{
			padding: 20upx 0 !important;
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
			.xing{
				color: $base-color;
			}
		}
		.status{
			height: 88upx;
		}
	}
	.power{
		.title{
			padding: 20upx;
			color: #666;
			font-size: 28upx;
		}
		.row{
			background-color: #fff;
			padding: 30upx;
		}
		
	}

	.btn{
		position: fixed;
		width: 100%;
		bottom: 0;
		left: 0;
		background-color: #fff;
		padding: 20upx 0upx;
		text{
			height: 90upx;
			line-height: 90upx;
			background-color: #D5d5d5;
			border-radius: 49upx;
			text-align: center;
			color: #fff;
			font-size: 32upx;
			font-weight: bold;
			display: block;
			width: 93%;
			margin: auto;
		}
	}
	.can{
		text{
			background: linear-gradient(136deg, #F87523 0%, #FD1D20 100%);
		}
	}

}
</style>
