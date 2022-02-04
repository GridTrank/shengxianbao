<template>
	<view class="page_wrap">
		<!-- #ifdef H5 -->
		<page-header 
		:showAddress="true"
		:showTel='true'
		:showFillView="false"
		:bgColor="bgColor"
		></page-header>
		<view class="bg"></view>
		<!-- #endif -->
		<view class="container">
			<!-- #ifdef MP -->
			<view class="search_wrap" @click="navTo('/pages/Search/Search')">
				<text class="iconfont icon-sousuo"></text>搜索
			</view>
			<!-- #endif -->
			<banner :list="banners"></banner>
			<view class="">
				<view class="notice row mt30" v-if="noticeList.length>0">
					<image class="msg_img" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/message.png" mode="widthFix"></image>
					<screenTextScroll :list="noticeList"></screenTextScroll>
				</view>
				
			</view>
			<module1 :list="typeList"></module1>
			<module2 :list="recommendList"></module2>
			<module3 :list="specialList"></module3>
			<view class="guess mt30">
				<view class="guess_top row">
					<text class="top_line left"></text>
					<text class="top_txt">猜您喜欢</text>
					<text class="top_line right"></text>
				</view>
				<view class="product_list jc_sb">
					<view class="detail left_list" v-for="(arr,ai) in likeList" :key="ai">
						<view class="list column mt20" v-for="(item,index) in arr" :key="index">
							<product-list :goodInfo="item"></product-list>
						</view>
					</view>
					
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import banner from './banner.vue'
	import module1 from './module1.vue'
	import module2 from './module2.vue'
	import module3 from './module3.vue'
	export default{
		components:{banner,module1,module2,module3},
		data(){
			return {
				bgColor:'transparent',
                banners:[],
                typeList:[],
                specialList:[],
                recommendList:[],
                noticeList:[],
				likeList:[],
				pageType:'Home'
			}
		},
		onPageScroll(res) {
			// #ifdef H5
			if(res.scrollTop>50){
				this.bgColor='#FF6105'
			}else{
				this.bgColor='transparent'
			}
			// #endif
		},
        onLoad() {
            this.getBanner()
        },
        onShow() {
            if(uni.getStorageSync('token')){
                this.getLike()
            }
        },
        methods:{
            // bannner
            getBanner(){
                this.$http('index/getBannerList',{displayPosition:1}).then(res=>{
                    this.banners=res
                    this.getTypeList()
                    this.getRecommentList()
                    this.getSpecialList()
                    this.getNotice()
                })
            },
            // 分类
            getTypeList(){
                this.$http('index/getProductTypeGroupingList').then(res=>{
                    this.typeList=res
                })
            },
            // 推荐
            getRecommentList(){
                this.$http('index/getBMallRecommendList',{recommendTypeId:2}).then(res=>{
                    this.recommendList=res
                })
            },
            // 品牌
            getSpecialList(){
                this.$http('index/getSpecialList').then(res=>{
					var result = [];
					for(var i=0,len=res.length;i<len;i+=6){
						result.push(res.slice(i,i+6));
					}
                    this.specialList=result
                })
            },
            // 滚动标题
            getNotice(){
                this.$http('index/getCustomerNoticeRollingList').then(res=>{
                    this.noticeList=res
                })
            },
			// 猜你喜欢
			async getLike(){
				this.queryUrl='api/myOneslft/getFavoriteProductPage'
				let data= await this.getList()
				let arr1=[]
				let arr2=[]
				data.forEach((el,index)=>{
					if((index+1)%2==1){
						arr1.push(el)
					}else{
						arr2.push(el)
					}
				})
				this.likeList=[arr1,arr2]
			},
        }
        
	}
</script>

<style scoped lang="scss">
	.page_wrap{
		background: #F5F5F5 ;
		
		.container{
			padding:10upx 30upx;
			/* #ifdef H5*/
			background-image: url('https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/bg2.png');
			background-repeat: no-repeat;
			background-size: 100% 320upx;
			padding-top: 80upx;
			/* #endif */ 
			.search_wrap{
				width: 95%;
				background-color: #fff;
				text-align: center;
				border-radius: 36upx;
				height: 64upx;
				line-height: 64upx;
				margin:10upx auto;
				color: #bbb;
				font-size: 24upx;
				text{
					margin-right: 20upx;
				}
			}
			.notice{
				padding:4upx 12upx;
				background-color: #FFF9F3;
				border: 1px solid #FDD3AD;
				border-radius: 29upx;
				margin-top: 30upx;
				.msg_img{
					width: 46upx;
					margin-right: 30upx;
				}
				.notice_txt{
					font-size: 24upx;
					color: #A2A2A2;
					.time{
						color: #FE5108;
					}
				}
			}
			.guess{
				.guess_top{
					justify-content: center;
					.top_txt{
						color: $base-color;
						font-size: 32upx;
						margin: 0 30upx;
					}
					.top_line{
						width: 54upx;
						height: 4upx;
					}
					.left{
						background: linear-gradient(270deg, #FF6801 0%, #FFFFFF 100%);
					}
					.right{
						background: linear-gradient(270deg, #FFFFFF 0%, #FF6801 100%);
					}
				}
				
			}
			
		}
		
	}
	.product_list{
		position: relative;
		display: flex;
		flex-direction: row;
		.right_list{
			margin-left: 20upx;
		}
		.detail{
			.list{
				width: 294upx;
				background-color: #fff;
				padding:20upx;
				border-radius: 10upx;
				align-items: baseline;
			}
		}
		
	}
</style>
