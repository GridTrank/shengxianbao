<template>
	<view class="page_wrap">
		<view class="level f28-c333">
			安全等级：<text class="txt">中</text>
		</view>
		<view class="list ">
			<view class="item row phone" @click="navTo('./changePhone')">
				<view class="left ">
					更换手机号
				</view>
				<view class="right row">
					<text class="label">12345678911</text>
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
			<view class="item row" @click="navTo('/pages/Login/find')">
				<view class="left ">
					修改密码
				</view>
				<view class="right row">
					<text class="label">可修改密码</text>
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
			<view class="item row" >
				<view class="left ">
					账号操作日志
				</view>
				<view class="right row">
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
			<view class="item row" >
				<view class="left ">
					设备管理
				</view>
				<view class="right row">
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
			<view class="item row" >
				<view class="left ">
					关于
				</view>
				<view class="right row">
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
		</view>
		
		<view class="list mt20">
			<view class="item row" >
				<view class="left ">
					微信
				</view>
				<view class="right row ">
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
		</view>
		
		<view class="list mt20">
			<view class="item row" >
				<view class="left ">
					登录/注册常见问题
				</view>
				<view class="right row f28-c999">
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
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
		methods:{
			
		},
		
	}
</script>

<style lang="scss">
.page_wrap{
	.level{
		padding:20upx 30upx ;
		.txt{
			color: $base-color;
		}
	}
	.list{
		background-color: #fff;
		padding:0 30upx;
		.item{
			padding: 40upx 0;
			border-bottom: 1px solid #E1E1E1;
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
			&:last-child{
				border:none
			}
		}
		.phone{
			padding-top: 100upx;
		}
	}

}
</style>
