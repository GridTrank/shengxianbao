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
		<view class="tool">
			<!-- <view class="item mr10" @click="prev" v-if="index">上一条</view> -->
			<view class="item" @click="next" v-if="index < list.length">下一条</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail:{},
				list:[],
				index:0,
			};
		},
		onLoad(e) {
			this.getDetail(e.id);
			this.getData();
			this.index = e.index;
		},
		methods:{
			prev(){
				this.detail=this.list[this.index--]
			},
			next(){
				this.detail=this.list[this.index++]
			},
			getDetail(id){
				this.$http('api/myOneslft/getCustomerNoticeInfo',{id}).then(res=>{	
					this.detail=res
				})
			},
			getData(){
				this.$http('index/getCustomerNoticeRollingList').then(res=>{
					this.list=res
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
	.tool {
		margin-top: 100upx;
		display: flex;
		justify-content: center;
		align-items: center;
		.item{
			width: 278upx;
			height: 70upx;
			font-size: 32upx;
			background: linear-gradient(113deg, #F87523 0%, #FF6C00 0%, #FD1D20 100%);
			color: #FFFFFF;
			line-height: 70upx;
			text-align: center;
			border-radius: 100upx;
		}
	}
}
</style>
