<template>
	<view class="page_wrap">
		<view class="list mt20 " v-for="(item,index) in dataList " :key="index">
			<view class="item row ">
				<view class="left ">
					账号名称
				</view>
				<view class="right row">
					<text class="label">{{item.accountName}}</text>
				</view>
			</view>
			<view class="item row">
				<view class="left ">
					账户别名
				</view>
				<view class="right row">
					<text class="label">{{item.accountTag}}</text>
				</view>
			</view>
			<view class="item row" >
				<view class="left ">
					联系方式
				</view>
				<view class="right row">
					<text class="label">{{item.mobile}}</text>
				</view>
			</view>
			<view class="btn_wrap row">
				<view class="btn edit row" @click="navTo('./AddOrEdit?pageType=edit&id='+item.id)">
					<image src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/edit.png" mode="widthFix"></image>
					<text>编辑</text>
				</view>
				<view class="btn row" @click="disable(item)">
					<image src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/shanchu.png" mode="widthFix"></image>
					<text>禁用</text>
				</view>
			</view>
		</view>
		
		<view class="btn_default" @click="navTo('./AddOrEdit?pageType=add')">
			新建
		</view>
	</view>
</template>

<script>
	import {date} from "@/common/js/util"
	export default {
		data() {
			return {
				
			};
		},
		onLoad(e) {
			
		},
		onShow() {
			this.dataList=[]
			this.queryUrl='api/account/pageList'
			this.getList()
		},
		methods:{
			disable(item){
				if(!item.enabled){
					uni.showToast({
						title:'该账号已禁用',
						icon:'none'
					})
					return
				}
				
				this.$http('api/account/findOne',{id:item.id}).then(res=>{
					let data={
						accountName:res.accountName,
						accountTag:res.accountTag,
						accountPasword:res.accountPasword,
						mobile:res.mobile,
						enabled:'0',
						showPrice:res.showPrice,
						id:res.id
					}
					this.$http('api/account/update',data,'put').then(res=>{
						uni.showToast({
							title:'已禁用',
							icon:'none'
						})
						item.enabled='0'
					})
				})
				
			}
		},
		
	}
</script>

<style lang="scss">
.page_wrap{
	padding-bottom: 60upx;
	.level{
		padding:20upx 30upx ;
		.txt{
			color: $base-color;
		}
	}
	.list{
		background-color: #fff;
		padding:30upx;
		.item{
			padding: 30upx 0;
			
			justify-content: space-between;
			.left{
				font-size: 30upx;
				color: #333;
			}
			.right{
				.label{
					color: #666;
					font-size: 28upx;
					margin-right: 12upx;
				}
			}
			.input{
				width: 400upx;
			}
		}
		.btn_wrap{
			justify-content: flex-end;
			padding-top: 30upx;
			border-top: 1px solid #E1E1E1;
			.btn{
				margin-left: 20upx;
				image{
					width: 32upx;
					height: 32upx;
					margin-right: 8upx;
				}
				text{
					color: $base-color;
					font-size: 32upx;
				}
			}
			.edit{
				border-right: 1px solid #D3D3D3;
				padding-right: 20upx;
			}
		}
		
	}
	.btn_default{
		width: 93%;
		margin:auto;
		margin-top: 120upx;
	}
}
</style>
