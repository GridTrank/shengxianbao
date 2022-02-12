<template>
	<view class="page_wrap">
		<view class="info_list mt20">
			<!-- 单号 -->
			<view class="item row jc_sb" >
				<view class="left f28-c333">
					报价单号
				</view>
				<view class="f28-c666">
					{{pageDetail.offerpriceCode}}
				</view>
			</view>
       
            <!-- 状态 -->
            <view class="item row jc_sb">
            	<view class="left f28-c333">
            		状态
            	</view>
            	<view class="f28-c666">
            		{{pageDetail.billState==-1?'已作废':pageDetail.billState==1?'已审核':'待审核'}}
            	</view>
            </view>
            <!-- 报价单 -->
            <view class="item row jc_sb">
            	<view class="left f28-c333">
            		价格组
            	</view>
            	<view class="f28-c666">
            		{{pageDetail.customerlevelName}}
            	</view>
            </view>
            <view class="item row jc_sb">
            	<view class="left f28-c333">
            		报价时间
            	</view>
            	<view class="f28-c666">
					{{pageDetail.createDate}}
            	</view>
            </view>
            <view class="item row jc_sb">
            	<view class="left f28-c333">
            		报价时间段
            	</view>
            	<view class="f28-c666">
            		{{pageDetail.startDate}}到{{pageDetail.endDate}}
            	</view>
            </view>
            
            <!-- 备注 -->
            <view class="item row jc_sb">
            	<view class="left f28-c333">
            		备注
            	</view>
            	<view class="f28-c666">
            		{{pageDetail.remark || '无'}}
            	</view>
            </view>
            
            <!-- 操作日志 -->
            <view class="item row jc_sb" @click="navTo('./Log?id='+pageDetail.id+'&pageUrl=api/salesofferPrice/info')">
            	<view class="left f28-c333">
            		操作日志
            	</view>
            	<view class="f28-c666">
            		查看 <text class="iconfont icon-jinru"></text>
            	</view>
            </view>
		</view>
        
		<view class="slot_wrap mt20">
			<view class="item " v-for="(item,index) in pageDetail.infoInfoVoList" :key="index">
				<view class="item_wrap row">
					<view class="row">
						<image class="img" :src="item.defaultImage" mode="widthFix"></image>
					</view>
					<view class="info">
						<view class="row jc_sb">
							<text class="f28-c333">{{item.productName}}</text>
							<text class="f24-c999">商品编号：{{item.productCode}}</text>
						</view>
						<view class="desc mt10 f24-c999">
							{{item.productNameAlias }}
						</view>
						<view class="price row  mt10">
							<text class="bao mr10">{{item.auxiliaryUnit}}</text>
							<text class="f24-c999 mr10">{{item.productUnit }}</text>
							<text class="f24-c999">￥{{item.costPrice || item.returnorderPrice}}元/{{item.productUnit}}</text>
						</view>
					</view>
				</view>
				
			</view>
		</view>
        
		<view class="foot_btn  " >
			<text class="btn" @click="submit(5)">打印</text>
		</view>
		
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	export default {
		data() {
			return {
				pageType:'',
				pageTxt:'',
				showEdit:false,
				pageUrl:'',
				id:'',
				pageDetail:{}
			};
		},
		onLoad(e) {
			this.id=e.id
			this.getDetail()
			
		},
		computed:{
			...mapState(['$StockManageInfo'])
		},
		onShow() {
			
		},
		methods:{
			...mapMutations(['SET_STOCK_MANAGE_INFO']),
			// 获取详情
			getDetail(){
				this.$http('api/salesofferPrice/info',{id:this.id}).then(res=>{
					this.pageDetail=res
				})
			},
		}
	}
</script>

<style scoped lang="scss">
.page_wrap{
	padding-bottom: 30upx;
	.info_list{
		background-color: #fff;
		padding:0 30upx;
		.item{
			padding: 30upx 0;
			border-bottom: 2upx solid #f1f1f1;
			&:last-child{
				border: none;
			}
		}
	}
	.slot_wrap{
		.item{
			margin-bottom: 30upx;
			.item_wrap{
				background-color: #fff;
				align-items: flex-start;
				padding: 30upx;
				.row{
					.img{
						width: 100upx;
						height: 100upx;
					}
				}
			}
			.img{
				width: 120upx;
				margin-right: 30upx;
			}
			.info{
				flex:1;
				position: relative;
				.bao{
					background-color:#fff4ed;
					color: $base-color;
					font-size: 20upx;
					border-radius: 2upx;
					padding:0 4upx;
					margin-right: 10upx;
				}
				
			}
		}
	}
	
	.foot_btn{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		padding: 30upx 0;
		background-color: #fff;
		border-top: 1px solid #f1f1f1;
		z-index: 111;
		text-align: right;
		.btn{
			width: 156upx;
			height: 60upx;
			line-height: 60upx;
			text-align: center;
			border-radius: 30upx;
			font-size: 28upx;
			display: inline-block;
			background: linear-gradient(113deg, #F87523 0%, #FF6C00 0%, #FD1D20 100%);
			color: #fff;
			margin-right: 30upx;
		}
	}
}
</style>
