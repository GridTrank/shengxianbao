<template>
	<view class="page_wrap">
		<view class="input_wrap mt20">
			<u--form ref='form' :model="model" :rules="rules" >
				<u-form-item >
					<view class="input_item">
						<u-input  placeholder='请输入收货人姓名' border='bottom' v-model="model.account">
							<template slot="prefix">
								<view class="label">收货人</view>
							</template>
						</u-input>
					</view>
				</u-form-item>
				<u-form-item >
					<view class="input_item ">
						<u-input   placeholder='请输入联系电话' border='none' v-model="model.password">
							<template slot="prefix">
								<view class="label">联系电话</view>
							</template>
						</u-input>
					</view>
				</u-form-item>
				
				<u-form-item >
					<view class="input_item mt20 row c_view after">
						<view class="label">收货地址</view>
						<view class="cen" @click="chooseAddress">
							{{address.address ? 
							address.address + ' ' + address.room + ' ' + address.title :
							'请选择收货地址' 
							}}
						</view>
						<text class="iconfont icon-jinru"></text>
					</view>
				</u-form-item>
				<u-form-item >
					<view class="input_item  row c_view">
						<view class="label">标签</view>
						<view class="list row">
							<view 
							:class="['item',selectTagIndex==tIndex && 'select_tag']" 
							@click="selectTag(tIndex)" v-for="(tag,tIndex) in tags" :key="tIndex">
								{{tag}}
							</view>
						</view>
					</view>
				</u-form-item>
				
				<u-form-item >
					<view class="input_item mt20  c_view">
						<view class="moren row">
							<text>是否设为默认地址</text>
							<u-switch activeColor="#FF6C00" size="16" v-model="isDefault" @change="changeDefault"></u-switch>
						</view>
						<view class="m_s mt20">每次订货优先选择该地址，方便您订货</view>
					</view>
				</u-form-item>
			</u--form>
		</view>
		
		<view class="btn_default" @click="login">
			提交
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
					
				},
				tags:['家','父母家','公司'],
				selectTagIndex:0,
				isDefault:true,
				address:{}
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
			//选择地址回调
			setAddress(e){
				this.address = e
			},
			selectTag(index){
				this.selectTagIndex=index
			},
			//选择地址
			chooseAddress(){
				let url = '/pages/ChooseAddress/index';
				if(this.address.title){
					url += `?data=${JSON.stringify(this.address)}`; 
				}
				this.navTo(url);
			},
			changeDefault(e){
				this.isDefault=e
			}
		}
	}
</script>

<style scoped lang="scss">
.page_wrap{
	min-height: calc( 100vh - 74px );
	.input_wrap{
		
		/deep/ .u-input{
			padding: 30upx 0 !important;
		}
		/deep/ .u-form-item__body{
			padding: 0;
		}
		/* #ifdef H5 */ 
		/deep/ .input_item{
			width: 100% !important;
		}
		/* #endif */ 
		/deep/ .u-form-item__body__right__message{
			margin:0 !important;		}
		.input_item{
			background-color: #fff;
			padding:10upx 30upx;
			.label{
				color: #333;
				font-size: 28upx;
				width: 200upx;
			}
			.cen{
				color: #c0c4cc;
				font-size: 30upx;
				width: 440upx;
			}
			.list{
				.item{
					width: 86upx;
					height: 38upx;
					line-height: 38upx;
					text-align: center;
					border-radius: 2upx;
					color: #aaa;
					font-size: 24upx;
					border: 1px solid #aaa;
					margin-right: 20upx;
				}
				.select_tag{
					border-color: $base-color;
					color: $base-color;
				}
			}
			.moren{
				justify-content: space-between;
				font-size: 28upx;
				color: #333;
			}
			.m_s{
				color: #aaa;
				font-size: 24upx;
			}
			
		}
		.c_view{
			height: 108upx;
			position: relative;
			.iconfont{
				position: absolute;
				right: 30upx;
			}
		}
		.c_view.after{
			&::after{
				content: "";
				display: block;
				position: absolute;
				bottom: 0;
				width:91%;
				height: 2upx;
				background-color: #dadbde;
			}
		}
	}

	.btn_default{
		width: 93%;
		position: fixed;
		bottom: 40upx;
		left: 3.5%;
	}
	
}
</style>
