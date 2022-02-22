<template>
	<view :class="['voice_btn',{'fixed':isFocus}]" :style="'bottom:'+(isFocus ? (focusHeight+10) : 0)+'px'"
		@touchstart="streamRecord" @touchend="streamRecordEnd">
		<image mode="widthFix" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/play.png"></image>
		<view v-if="isFocus">按住 说出你要的商品</view>
	</view>
</template>

<script>
	// #ifdef MP-WEIXIN
	var plugin = requirePlugin('WechatSI')
	let voicManager = plugin.getRecordRecognitionManager();
	// #endif
	export default {
		name: "voice",
		props: {
			isFocus:Boolean //搜索框是否触发焦点
		},
		data() {
			return {
				modelValue: '',
				keyWord:''
			};
		},
		mounted() {
			this.initRecord()
		},
		methods: {
			streamRecord() {
				voicManager.start({
					lang: 'zh_CN',
				})
				uni.vibrateShort();
				this.isSpeaking = true;
			},
			streamRecordEnd() {
				voicManager.stop();
				uni.vibrateShort();
				this.isSpeaking = false;
			},
			initRecord() { //有新的识别内容返回，则会调用此事件
				// 识别结束事件
				console.log('initRecord')
				voicManager.onStop = (res) => {
					console.log(res)
					let text = res.result.slice(0, res.result.length - 1)
					if (text == '') { // 用户没有说话，可以做一下提示处理...
						uni.showToast({
							title: '请大声说出你要搜索的内容',
							icon: 'none'
						})
						return
					}
					// 这里得到完整识别内容就可以去翻译了
					this.keyWord = text
					
					this.$emit('search',text);
				}
			},
		}
	}
</script>

<style scoped lang="scss">
	.voice_btn {
		position: relative;
		height: 60upx;
		width: 60upx;

		image {
			position: absolute;
			top: 0upx;
			width: 60upx;
			height: 60upx;
			display: block;
		}

		&.fixed {
			position: fixed;
			left: 50%;
			margin-left: -250upx;
			background-color: #F3F3F3;
			border-radius: 100upx;
			bottom: 0;
			height: 80upx;
			width: 500upx;
			display: flex;
			align-items: center;
			justify-content: center;
			box-sizing: border-box;

			image {
				position: relative;
				margin-right: 20upx;
			}
		}
	}
</style>
