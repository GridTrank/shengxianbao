<template>
	<view class="list_wrap">
		<view class="list " >
			<view class="item row " >
				<image src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/taocan.png" mode="widthFix"></image>
				<view class="info">
					<view class="row jc_sb">
						<text class="f28-c333">{{inventory.productName}}</text>
						<text class="f24-c999">商品编码:{{inventory.productCode}}</text>
					</view>
					<view class="row jc_sb f24-c999 mt20">
						一{{inventory.productUnit}}约1斤
					</view>
					<view class="row bottom jc_sb mt20">
						<view class="left">
							<text style="margin-right: 50px;">{{inventory.productUnit}}</text>
							<text>¥{{inventory.inputAmount}}/包</text>
						</view>
						<text>库存：{{inventory.inventoryQuantity}}</text>
					</view>
				</view>
			</view>
            
		</view>
        <view class="detail">
            <view class="item" v-for="(item,index) in 5" :key="index">
                <view class="row jc_sb">
                    <text class="f32-c333 b">名称</text>
                    <text class="f28-c666">1231231</text>
                </view>
                <view class="f28-c666 mt20">
                    单据日期：2020-10-14
                </view>
            </view>
        </view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				inventory:{}
			}
		},
		onLoad(e){
			this.getData();
		},
		methods:{
			getData(){
				this.$http('api/inventory/info',{id:this.$route.query.id}).then(res=>{
					console.log(res);
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.list_wrap{
	.list{
		.item{
			background-color: #fff;
			padding: 30upx;
			margin-bottom: 20upx;
			image{
				width: 120upx;
				height: 120upx;
				margin-right: 50upx;
			}
			.info{
				width: 480upx;
				.bottom{
					color: $base-color;
					font-size: 24upx;
				}
			}
		}
	}
    .detail{
        .item{
            background-color: #fff;
            padding: 30upx;
            border-bottom: 2upx solid #f1f1f1;
            &:last-child{
                border: none;
            }
        }
    }
}
</style>
