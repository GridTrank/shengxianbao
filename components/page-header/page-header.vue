<template>
	<view 
	class="mix-page-header" 
	>
		<view 
			class="content row" 
			:style="{
				paddingRight: headerPaddingRight + 'px',
				paddingTop: statusBarHeight + 'px',
				height: navigationBarHeight + statusBarHeight + 'px',
				backgroundColor:bgColor
			}"
		>
			<view class="btn center" v-if="showAddress">
				<image @click="navTo('/pagesB/Address/Address')" class="dizhi" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/dizhi.png" mode="widthFix"></image>
			</view>
			<view 
				class="search-wrap center"
				:style="{height: customHeight + 'px'}" 
				@click="navTo('/pages/Search/Search')"
			>
				<image class="search" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/search.png" mode="widthFix"></image>
				<text>输入关键字搜索</text>
			</view>
			<!-- #ifndef MP -->
			<view class="btn center" @click="scanCode" v-if="showTel">
				<image  class="dizhi" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/dianhua.png" mode="widthFix"></image>
			</view>
			<!-- #endif -->
		</view>
		<!-- 占位栏 -->
		<view v-if="showFillView" :style="[{minHeight: navigationBarHeight+statusBarHeight+'px'}]"></view>
	</view>
</template>

<script>
	export default {
		name: 'HomePageHeader',
		data() {
			return {
				
			};
		},
		props: {
			//顶部是否占位
			showFillView: {
				type: Boolean,
				default: true
			},
			bgColor:{
				type:String,
				default:'#fff'
			},
			showAddress:{
				type:Boolean,
				default:false
			},
			showTel:{
				type:Boolean,
				default:false
			},
		},
		
		computed: {
			statusBarHeight(){
				return this.systemInfo.statusBarHeight
			},
			navigationBarHeight(){
				return this.systemInfo.navigationBarHeight;
			},
			customWidth(){
				return this.systemInfo.custom.width;
			},
			customHeight(){
				return this.systemInfo.custom.height;
			},
			//小程序右侧需要留出气泡空间
			headerPaddingRight(){
				// #ifndef MP
				return 0;
				// #endif
				// #ifdef MP
				return this.customWidth + 20;
				// #endif
			},
		},
		methods: {
			scanCode(){
				uni.scanCode({
					success: res=> {
						const result = res.result;
						if(typeof result === 'string'){
							uni.navigateTo({
								url: '/pages/public/web-view?url=' + result
							})
							return;
						}
						//这里处理自定义逻辑
						
						
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.content{
		position: fixed;
		left: 0;
		top: 0;
		z-index: 95;
		width: 100%;
		background-color: #fff;
	}
	.btn{
		width: 44px;
		height: 40px;
		position: relative;
		
		.mix-icon{
			font-size: 20px;
			color: #333;
		}
		.dizhi{
			width: 34upx;
		}
		
		.msg{
			position: absolute;
			right: 7px;
			top: 5px;
			width: 12px;
			height: 12px;
			background-color: $default-bgColor;
			border: 2px solid #fff;
			border-radius: 100px;
			opacity: 0;
			
			&.show{
				opacity: 1;
			}
		}
	}
	.center{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.search-wrap{
		flex: 1;
		font-size: 14px;
		color: #999;
		border-radius: 100px;
		background-color: #f2f2f2;
		.search{
			width: 30upx;
			margin-right: 20upx;
		}
		.icon-sousuo{
			margin-right: 6px;
			font-size: 18px;
			color: #999;
		}
	}
</style>
