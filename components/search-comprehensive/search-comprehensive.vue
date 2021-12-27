<template>
	<view class="">
		<view class="search_wrap row jc_sb">
			<view v-if="showInput" class="input_wrap row">
				<image class="search" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/search.png" mode="widthFix"></image>
				<u-input type="text" border='none' v-model="keyWrod" :placeholder="placeholder" @confirm='bindConfirm'>
					
				</u-input>
				<text v-if="showScan"  class="iconfont icon-saoyisao" @click="saoCode" ></text>
			</view>
			<view v-if="showScreen"  class="screen" @click="showFilter=true">
				筛选<text class="iconfont icon-shaixuan"></text>
			</view>
		</view>
		<u-popup :show="showFilter" mode="right" @close="showFilter=false">
			<filter-page></filter-page>
		</u-popup>
	</view>
</template>

<script>
	export default{
		props:{
			placeholder:{
				type:String,
				default:'请输入关键词搜索'
			},
			showScreen:{
				type:Boolean,
				default:false
			},
			showScan:{
				type:Boolean,
				default:true
			},
			showInput:{
				type:Boolean,
				default:true
			},
			
		},
		data(){
			return {
				keyWrod:'',
				showFilter:false
			}
		},
		methods:{
			bindConfirm(){
				this.$emit('searchInput',this.keyWrod)
			},
			saoCode(){
				uni.scanCode({
					success: (res) => {
						uni.showToast({
							title:res,
							icon:'none'
						})
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.search_wrap{
		background-color: #fff;
		padding: 30upx;
		.input_wrap{
			background-color: #F6F6F6;
			padding:14upx 30upx;
			border-radius: 40upx;
			flex: 1;
			margin-right: 20upx;
			image{
				width: 26upx;
				margin-right: 10upx;
			}
			.iconfont{
				color: $base-color;
			}
		}
		.screen{
			color: #333;
			font-size: 28upx;
		}
	}
</style>
