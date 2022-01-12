<template>
	<view class="page_wrap">
		<view class="info model-wrap">
			<view class="t ">
				{{detail.noteTitle}}
			</view>
			<view class="c mt30">
				{{detail.noteContent}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail:{}
			};
		},
		onLoad(e) {
			this.getDetail(e.id)
		},
		methods:{
			getDetail(id){
				this.$http('api/myOneslft/getCustomerNoticeInfo',{id}).then(res=>{
					console.log(res)
					this.detail=res
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.page_wrap{
	padding: 30upx;
	.info{
		color: #666;
		font-size: 28upx;
		.t{
			color: #333;
			text-align: center;
		}
	}
}
</style>
