<template>
	<view class="mix-page-header">
		<view class="content row">
			<view class="search-wrap row" :style="{height: customHeight + 'px'}">
				<view class=" row">
					<image class="search" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/search.png"
						mode="widthFix"></image>
					<u-input type="text" border="none" placeholder="输入关键字搜索" v-model="keyWord" />
				</view>
				<!-- <voice></voice> -->
			</view>
		</view>
	</view>
</template>

<script>
	// import voice from '@/components/voice/voice'
	export default {
		components: {
			// voice
		},
		data() {
			return {
				keyWord: '',
			};
		},
		props: {
			//顶部是否占位
			showFillView: {
				type: Boolean,
				default: true
			},
			bgColor: {
				type: String,
				default: '#fff'
			},

		},

		computed: {
			serach(val){
				
			},
			statusBarHeight() {
				return this.systemInfo.statusBarHeight
			},
			navigationBarHeight() {
				return this.systemInfo.navigationBarHeight;
			},
			customWidth() {
				return this.systemInfo.custom.width;
			},
			customHeight() {
				return this.systemInfo.custom.height;
			},
			//小程序右侧需要留出气泡空间
			headerPaddingRight() {
				// #ifndef MP
				return 0;
				// #endif
				// #ifdef MP
				return this.customWidth + 20;
				// #endif
			},
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.content {
		background-color: #fff;
		justify-content: center;
	}

	.btn {
		width: 44px;
		height: 40px;
		position: relative;

		.mix-icon {
			font-size: 20px;
			color: #333;
		}

		.dizhi {
			width: 34upx;
		}

		.msg {
			position: absolute;
			right: 7px;
			top: 5px;
			width: 12px;
			height: 12px;
			background-color: $default-bgColor;
			border: 2px solid #fff;
			border-radius: 100px;
			opacity: 0;

			&.show {
				opacity: 1;
			}
		}
	}

	.search-wrap {
		font-size: 14px;
		color: #999;
		border-radius: 100px;
		background-color: #fff;
		display: flex;
		align-items: center;
		border: 1px solid #f1f1f1;
		justify-content: space-between;
		width: 95%;

		.search {
			width: 30upx;
			margin-right: 10upx;
			margin-left: 30upx;
		}

		.icon-sousuo {
			margin-right: 6px;
			font-size: 18px;
			color: #999;
		}
	}
</style>
