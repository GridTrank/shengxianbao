<template>
	<view :class="['coupon_wrap',type]">
		<view v-if="couponList.length>0" class="coupon" v-for="(item,index) in couponList" :key="index">
			<view class="coupon_info">
				<view class="title b">{{item.ticketName}}</view>
				<view class="tag_wrap">
					<view class="tag line">{{JSON.parse(item.combination)[0]}}</view>
					<view class="tag line" v-if="item.ticketType">{{ticketType[item.ticketType]}}</view>
					<view class="tag">{{applyType[item.applyType]}}</view>
				</view>
				<view class="date mt30 f24-c333">{{dateTime('Y-m-d H:i',item.timeUseBegin)}}-{{dateTime('Y-m-d H:i',item.timeUseEnd)}}</view>
			</view>
			<view class="coupon-money column">
				<view class="money"><span class="min">￥</span><span>{{item.ruleAmount}}</span></view>
				<view class="condition">满{{item.ticketAmount}}可用</view>
				<view class="use" v-if="type == 'list'" @click="useCoupon(item)">
                    去使用<view class="circle"><span class="iconfont icon-jinru"></span></view>
                </view>
				<view class="get" v-if="type == 'get'" @click="getCoupon(item.id)">领取</view>
				<view class="lost" v-if="type == 'used'">{{state}}</view>
			</view>
		</view>
        
        <view v-if="couponList.length<=0">
        	<no-data></no-data>
        </view>
	</view>
</template>

<script>
	import {date} from '@/common/js/util'
    import {mapState,mapMutations} from 'vuex'
	export default{
		props:{
			couponList:{
				type:Array,
				default:()=>{
					return []
				}
			},
			// list 列表
			// get 领券中心获取
			// used  失效的
			type:{
				type:String,
				default:'list'
			},
            pageType:{
                type:String,
                default:''
            },
			// 失效优惠券 已使用还是已失效
			state:{
				type:String,
				default:'已使用'
			}
		},
		data(){
			return{
				// :0=满减券,1=品类满减券,2=商品折扣券,3=免运费券 4=新人优惠券
				ticketType:{
					'0':'满减券',
					'1':'品类满减券',
					'2':'商品折扣券',
					'3':'免运费券',
					'4':'新人优惠券'
				},
				// applyType	适用商品: 0全部商品 1 商品类型 2 单个商品
				applyType:{
					'0':'全部商品',
					'1':'商品类型',
					'2':'单个商品'
					
				}
			}
		},
        watch:{
            
        },
		created(){
		},
        computed:{
            ...mapState(['$orderData'])
        },
		methods:{
            ...mapMutations(['SET_ORDER_DATA']),
			dateTime(str,time){
				return date(str,time)
			},
            useCoupon(item){
                if(this.pageType=='orderDetail'  ){
                    if(this.$orderData.goodsAmount >item.ticketAmount){
                        this.SET_ORDER_DATA({couponAmount:item.ruleAmount,ticketId:item.id})
                        this.navTo('back')
                    }else{
                        uni.showToast({
                            title:'未满足条件',
                            icon:'none'
                        })
                    }
                }else{
                    this.navTo('/pages/Home/Home','switch')
                }
            },
			getCoupon(id){
				this.$http('api/bmallticketuse/receiveTicket',{id:id},'post').then((result)=>{
					console.log(result);
					uni.showToast({
						title:'领取成功',
						icon:'none'
					})
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.coupon_wrap {
			padding: 30upx;
			.coupon {
				display: flex;
				justify-content: space-between;
				border-radius: 10upx;
				height: 220upx;
				margin-bottom: 26upx;
			}
	
			.coupon_info {
				flex:2;
				border-radius: 10upx 0 0 10upx;
				background-color: #fff;
				position: relative;
				flex-direction: row;
				&::before{
					content: "";
					border-right: 1px dashed #fff;
					position: absolute;
					right: -1px;
					top: 0;
					height: 100%;
					z-index: 1;
				}
				padding:26upx 10upx 26upx 26upx;
				.title{
					font-size: 36upx;
				}
				.tag_wrap{
					.tag{
						margin-top: 10upx;
						display: inline-flex;
						font-size: 20upx;
						color: #fff;
						border:1px solid #FE5B07;
						background-color: #FE5B07;
						border-radius: 1px;
						padding: 2upx 15upx;
						margin-right: 8upx;
						&.line{
							color: #FE5B07;
							background-color: #fff;
							
						}
					}
				}
				
			}
	
			.coupon-money {
				border-radius: 0 10upx 10upx 0;
				justify-content: center;
				flex-shrink: 0;
				width: 240upx;
				height: 220upx;
				position: relative;
				background: linear-gradient(136deg, #F87523 0%, #FD1D20 100%);
				&::after{
					content: "";
					width: 20px;
					height: 20px;
					background-color: #f2f2f2;
					position: absolute;
					left: -10px;
					bottom:-10px;
					border-radius: 50%;
					z-index: 1;
				}
				&::before{
					content: "";
					width: 20px;
					height: 20px;
					background-color: #f2f2f2;
					position: absolute;
					left: -10px;
					top:-10px;
					border-radius: 50%;
					z-index: 1;
				}
				.money{
					font-size: 72upx;
					color: #fff;
					.min{
						font-size: 32upx;
					}
				}
				.condition,.use{
					font-size: 24upx;
					color: #fff;
				}
				.get{
					display: inline-flex;
					width: 103upx;
					height: 42upx;
					background: #E31A00;
					border-radius: 100upx;
					justify-content: center;
					align-items: center;
					color: #FFFFFF;
					font-size: 24upx;
					margin-top: 10upx;
				}
				.lost{
					font-size: 24upx;
					color: #fff;
					margin-top: 10upx;
				}
				.use{
					.circle{
						display: inline-flex;
						justify-content: center;
						align-items: center;
						width: 24upx;
						height: 24upx;
						margin:20upx 0 0 18upx;
						border-radius: 50%;
						background-color: rgba($color: #fff, $alpha: 0.49);
						color: #fff;
						.icon-jinru{
							font-size: 22upx;
						}
					}
				}
			}
			&.used{
				.coupon-money{
					background: linear-gradient(124deg, #DADADA 0%, #BCBCBC 100%);
				}
				.coupon_info {
					.tag_wrap{
						.tag{
							background-color: #AAAAAA;
							border-color: #AAAAAA;
							&.line{
								background-color: #fff;
								color: #AAAAAA;
							}
						}
					}
				}
			}
		}
</style>
