<template>
	<view class="page_wrap">
		<view class="search_wrap row">
			<view class="input_wrap row">
				<image class="search_img" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/search.png"></image>
				<input @focus="searchFocus" @blur="searchBlur" type="text" border="none" clearable v-model="keyWord"
					@confirm="search(keyWord)" placeholder="搜索商品" />
				<!-- 语音 -->
				<voice :isFocus="isFocus"></voice>
				<!-- <view :class="['voice_btn',{'fixed':isFocus}]" :style="'bottom:'+(isFocus ? (focusHeight+10) : 0)+'px'" @touchstart="streamRecord"
					@touchend="streamRecordEnd">
					<image mode="widthFix" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/play.png"></image>
					<view v-if="isFocus">按住 说出你要的商品</view>
				</view> -->

			</view>
			<text class="btn" v-if='keyWord' @click="search(keyWord)">搜索</text>
			<text class="btn" v-else @click="navTo('back')">取消</text>
		</view>

		<view v-if="isEmpty">
			<historyList @search="search" ref='history' @delHistory='delHistory'></historyList>
		</view>
		<view v-else v-for="(item,index) in dataList" :key="index">
			<list pageFrom='search_page' :info="item" class="mt20"></list>
		</view>

		<view v-if="dataList.length<=0 && !isEmpty">
			<no-data></no-data>
		</view>
	</view>
</template>

<script>
	import voice from '@/components/voice/voice'
	import historyList from './histotyList.vue'
	import list from '@/pages/Classify/list.vue'

	export default {
		components: {
			historyList,
			list,
			voice
		},
		data() {
			return {
				isFocus:false,
				focusHeight:0,
				keyWord: '',
				searchList: [],
				isEmpty: true,
				isSpeaking: false,
			};
		},
		onLoad() {
		},
		methods: {
			
			searchFocus(e) {
				console.log(e)
				if (e.detail.height) {
					this.isFocus = true;
					this.focusHeight = e.detail.height;
				}
			},
			searchBlur(){
				this.isFocus = false;
				this.focusHeight = 0;
			},
			
			search(val) {
				this.keyWord = val
				this.queryUrl = 'api/pms/productcategory/getProductList'
				this.queryData = {
					productName: val
				}
				this.getList().then(res => {
					this.saveKey(val)
					this.isEmpty = false
				})

			},
			saveKey(keyName) {
				this.$http('api/searchrecord/saveSearchRecord', {
					keyName
				}, 'post').then(res => {})
			},
			delHistory() {
				this.keyWord = ''
			}
		}
	}
</script>
<style scoped lang="scss">
	.page_wrap {
		padding: 100upx 30upx;
		background-color: #fff;
		min-height: 100vh;

		

		.search_wrap {
			justify-content: space-between;
			position: fixed;
			top: 0upx;
			left: 0;
			width: 93%;
			background-color: #fff;
			padding: 10upx 30upx;
			z-index: 9;

			// border-bottom: 1px solid #e2e2e2;
			.input_wrap {
				width: 75%;
				background-color: #F6F6F6;
				border-radius: 40upx;
				padding: 0upx 30upx;
				display: flex;
				align-items: center;
				height: 80upx;
				.search_img {
					width: 26upx;
					height: 26upx;
				}

				/deep/ input {
					padding-left: 20upx;
					flex:2;
				}
			}

			.btn {
				color: #242A36;
				font-size: 32upx;
			}
		}
	}
</style>
