<template>
	<view class="page_wrap">
		<view class="input_wrap mt20">
			<u-form ref='form' :model="model" :rules="rules" >
				<u-form-item prop="accountName">
					<view class="input_item">
						<u-input max placeholder='请输入子账号名称' border='bottom' v-model="model.accountName">
							<template slot="prefix">
								<text class=" f28-c333">子账号 <text class="xing">*</text> </text>
							</template>
						</u-input>
					</view>
				</u-form-item>
				<u-form-item prop="accountTag">
					<view class="input_item ">
						<u-input  placeholder='请输入账号别名' border='bottom' v-model="model.accountTag">
							<template slot="prefix">
								<text class=" f28-c333">账号别名 <text class="xing">*</text></text>
							</template>
						</u-input>
					</view>
				</u-form-item>
				<u-form-item prop="mobile">
					<view class="input_item ">
						<u-input  placeholder='请输入手机' border='bottom' v-model="model.mobile">
							<template slot="prefix">
								<text class=" f28-c333">手机 <text class="xing">*</text></text>
							</template>
						</u-input>
					</view>
				</u-form-item>
				<u-form-item prop="accountPasword">
					<view class="input_item ">
						<u-input  placeholder='请输入密码' border='bottom' v-model="model.accountPasword">
							<template slot="prefix">
								<text class=" f28-c333">密码 <text class="xing">*</text></text>
							</template>
						</u-input>
					</view>
				</u-form-item>

				<u-form-item >
					<view class="input_item row jc_sb status">
						<text>账号状态</text>
						<u-switch activeColor="#FF6C00" size="16" v-model="model.enabled"  @change="changeDefault1"></u-switch>
					</view>
				</u-form-item>
			</u-form>
		</view>
		<view class="power">
			<view class="title">子账号权限</view>
			<view class="row jc_sb">
				<text class="f28-c333">显示商品价格</text>
				<u-switch activeColor="#FF6C00" size="16" v-model="model.showPrice" @change="changeDefault2"></u-switch>
			</view>
		</view>
		<view :class="['btn',(model.accountName && model.accountTag && model.mobile && model.accountPasword) && 'can']" @click="submit">
			<text>保存</text>
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
				model:{
					accountName:'',
					mobile:'',
					accountPasword:'',
					accountTag:'',
					enabled:true,
					showPrice:true
				},
				isDefault:true,
				rules:{
					accountName:[
						{required:true,message:'请输入子账户名称',trigger:'blur'}
					],
					mobile:[
						{
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
					accountPasword: [{
							required: true,
							message: '请输入密码',
							trigger: 'blur'
					}],
					accountTag:[
						{required:true,message:'请输入账号别名',trigger:'blur'}
					]
				},
				pageType:'',
				detail:{},
				id:''
			};
		},
		watch:{
			
		},
		onLoad(e) {
			this.pageType=e.pageType
			this.id=e.id
			if(e.pageType=='edit'){
				this.getDetail(e.id)
			}
		},
		onReady() {
		    this.$refs.form.setRules(this.rules);
		},
		methods:{
			getDetail(id){
				this.$http('api/account/findOne',{id}).then(res=>{
					this.detail= JSON.parse(JSON.stringify(res))
					res.enabled=res.enabled>0?true:false
					res.showPrice=res.showPrice>0?true:false
					res.accountPasword='****************'
					this.model=res
				})
			},
			changeDefault1(e){
				console.log(e)
				this.model.enabled=e
			},
			changeDefault2(e){
				this.model.showPrice=e
			},
			submit(){
				this.$refs.form.validate().then(res => {
					let model=this.model
					let detail=this.detail
					let data={
						accountName:model.accountName,
						accountTag:model.accountTag,
						mobile:model.mobile,
						enabled:model.enabled?'1':'0',
						showPrice:model.showPrice?'1':'0',
					}
					if(this.pageType=='edit'){
						data.id=detail.id
						data.accountPasword=detail.accountPasword
					}else{
						data.accountPasword=model.accountPasword
					}
					let url=this.pageType=='edit'?'api/account/update':'api/account/insert'
					let method=this.pageType=='edit'?'put':'post'
					this.$http(url,data,method).then(res=>{
						console.log(1)
						uni.showToast({
							title:this.pageType=='edit'?'修改成功':'添加成功',
							icon:'none'
						})
						setTimeout(()=>{
							this.navTo('back')
						},1500)
					})
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
