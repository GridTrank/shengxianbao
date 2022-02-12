<template>
	<view class="page_wrap">
		<template v-if="dataList.length>0">
			<view class="list">
				<view 
				class="item model-wrap" 
				v-for="(item,index) in dataList" 
				@click="navTo('./Detail?id='+item.id)"
				:key="index">
					<view class="top row jc_sb">
						<view class="no f28-c333" @click.stop="checkedHandle(item)">	
							{{item.offerpriceCode}}
						</view>
						<view class="status" :class="item.billState==-1?'die':''">
							{{item.billState==1?'已审核':item.billState==-1?'已作废':'待审核'}}
						</view>
					</view>
					<view class="detail"> 
						<view class="label bg_style1">{{item.customerlevelName}}</view>
						<view class="row jc_sb mt30">
							<text class="date f28-c333">
								{{item.createDate}}
							</text>
							<text class="price" >
								{{item.createName}}
							</text>
						</view>
					</view>
				</view>
			</view>
		</template>
		<template v-else>
			<no-data></no-data>
		</template>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	export default {
		data() {
			return {
				pageType:'',
				pageTxt:'',
				initList:[],
				total:0
			};
		},
		onLoad(e) {
			
		},
		onShow() {
			this.dataList=[]
			this.initData()
		},
		computed:{
			
		},
		methods:{
			...mapMutations(['CLEAR_STOCK_MANAGE']),
			async initData(){
				uni.showLoading({
					title:'加载中'
				})
				this.queryUrl='api/salesofferPrice/page'
				this.getList()
			},
		},
	}
</script>

<style scoped lang="scss">
.page_wrap{
	padding-bottom: 20upx;
	.list{
		padding: 20upx;
		.item{
			background-color: #fff;
			margin-bottom: 20upx;
			.top{
				padding-bottom: 20upx;
				border-bottom: 1px solid #f1f1f1;
				.status{
					font-size: 28upx;
					color: $base-color;
				}
				.die{
					color: #666;
				}
				
			}
			.detail{
				padding-top: 10upx ;
				.label{
					display: inline-block;
					padding: 4upx 12upx;
					border-radius: 12upx;
					font-size: 24upx;
				}
				.inve{
                    display: inline-block;
                    font-size: 24upx;
                    padding: 4upx 12upx;
                    border-radius: 12upx;
                }
                .ying{
                    background-color: rgba(7, 254, 19, 0.2);
                    color: #00B809;
                }
                .kui{
                    background-color: rgba(254, 7, 7, 0.2);
                    color: #D30000;
                }
				.price{
					color: $base-color;
					font-size: 36upx;
				}
                
			}
		}
	}
	
}
</style>
