<template>
	<view class="spec_wrap">
		<u-popup 
		:show="show" 
		:closeable="true"
		@close="show=false"
		mode="bottom">
			<view class="con">
				<view class="info row">
					<image :src="selectData.imageUrl" mode="widthFix"></image>
					<view class="">
						<text class="f32-c333 mr20">{{selectData.productName}}</text>
						<text class="f24-c999 mt10">{{selectData.productModel}}</text>
					</view>
				</view>
				<view class="detail row jc_sb">
					<text class="f28-c333">结算单位</text>
					<text class="f28-c999">{{selectData.productUnit}}</text>
				</view>
				<view class="detail row jc_sb">
					<text class="f28-c333">数量</text>
					<view class="num_wrap row">
						<text @click="changNum(1)">-</text>
						<u-input border='none' type="text" v-model="num" />
						<text @click="changNum(2)">+</text>
					</view>
				</view>
				<view class="detail jc_sb row">
                    <u-input  placeholder='请输入备注' border='none' v-model="remark">
                    	<template slot="prefix">
                    		<text class="label f28-c333">备注</text>
                    	</template>
                    	
                    </u-input><!-- 
					<view class="f28-c333">备注</view>
					<u-input class="mt20 ml20"  type="text" v-model="remark" border='none' placeholder="请输入备注" /> -->
				</view>
				
				<view class="btn_default" @click="add">
					确定
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default{
		props:{
			selectData:{
				type:Object,
				default:()=>{
					return {}
				}
			}
		},
		data(){
			return{
				show:false,
				num:1,
				remark:'',
				img:''
			}
		},
		watch: {		},
		methods:{
			changNum(val){
				if(val==1 && this.num>1){
					this.num--
				}else if(val==2){
					this.num++
				}
			},
			// 加入购物车
			add(){
				this.$http('api/bmallshoppingcart/addShoppingCart',
				{buyQuantity:this.num,productSkuId:this.selectData.productSkuId,remark:this.remark},
				'post').then(res=>{
                    this.show=false
					uni.showToast({
						title:'添加成功',
						icon:'none'
					})
				})      
			}
		}
	}
</script>

<style scoped lang="scss">
	.spec_wrap{
		/deep/ .u-popup{
			.u-transition{
				z-index: 99998;
			}
		}
		
		.con{
			padding: 30upx;
			.info{
				justify-content: center;
				margin-bottom: 120upx;
				image{
					margin-right: 30upx;
					width: 172upx;
					height: 172upx;
				}
			}
			.detail{
				padding: 30upx;
				border-top: 1px solid #eee;
				.num_wrap{
					text{
						background-color: #F6F6F6;
						padding: 8upx 16upx;
						color: #bebebe;
						font-size: 28upx;
					}
					/deep/{
						input{
							background-color: #F6F6F6;
							padding: 3upx 18upx !important;
							width: 50upx;
							margin: 0 6upx;
						}
					}
				}
			}
				
		}
		
	}
</style>
