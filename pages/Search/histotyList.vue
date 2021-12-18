<template>
	<view class="history_list mt40">
		<view class="his_tit row">
			<text >历史搜索</text>
			<image @click="del" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/del.png" mode="widthFix"></image>
		</view>
		<view v-if='list.length>0' class="list row">
			<view class="item mt30" v-for="(item,index) in list" :key='index'>
				<text class="label">{{item}}</text>
			</view>
		</view>
		<view v-else class="no_list">
			暂无历史记录
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			};
		},
		created() {
			this.getData()
		},
		methods:{
			getData(){
				this.list=uni.getStorageSync('historyList') || []
				console.log(this.list)
			},
			del(){
				uni.showModal({
					title: '提示',
					content: '确定删除所有记录吗？',
					success: (res) => {
						if(res.confirm){
							uni.removeStorageSync('historyList')
							this.getData()
							this.$emit('delHistory')
						}
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.history_list{
		.his_tit{
			justify-content: space-between;
			text{
				color: #242A36;
				font-size: 32upx;
			}
			image{
				width: 36upx;
			}
		}
		.list{
			flex-wrap: wrap;
			.item{
				padding: 0 15upx;
				.label{
					color: #676C71;
					font-size: 24upx;
					background-color: #F7F7F7;
					border-radius: 32upx;
					padding: 15upx 40upx;
				}
			}
		}
		.no_list{
			color: #676C71;
			font-size: 28upx;
			margin-top: 40upx;
		}
	}
</style>
