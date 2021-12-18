<template>
	<view class="picker_wrap">
		<u-popup
			:show="true"
			mode="bottom"
		>
			<picker   class="picker-view">
			    123123
			</picker >
			<picker   class="picker-view">
			    123123
			</picker >
		</u-popup>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped lang="scss">
	 .picker-view {
	        width: 750rpx;
	        height: 100rpx;
	        margin-top: 20rpx;
	    }
</style>
