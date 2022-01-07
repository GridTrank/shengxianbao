<template>
	<view class="list row ">
		<view class="item column mt30" 
        @click="getData(item)"
        v-for="(item,index) in list" :key="index">
			<view class="item_top row">
				<text class="sign"></text>
				<text class="title">{{item.recommendName}}</text>
				<image class="more" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/jiantou.png" mode="widthFix"></image>
			</view>
			<view class="item_center">
				{{item.subTitle || '123'}}
			</view>
			<view class="item_bottom row">
				<image class="img" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/111.png" ></image>
				<image class="img" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/111.png" ></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
        props:{
            list:{
                type:Array,
                default:()=>{
                    return []
                }
            }
        },
		data(){
			return{
				// list:[
				// 	{
				// 		title:'肉蛋水产',
				// 		subTitle:'营养满分 健康美味',
				// 	},
				// 	{
				// 		title:'家庭菜场',
				// 		subTitle:'家庭采购 实惠便宜',
				// 	},
				// 	{
				// 		title:'乳饮干货',
				// 		subTitle:'营养满分 健康美味',
				// 	},
				// 	{
				// 		title:'水果专场',
				// 		subTitle:'时令水果 新鲜美味',
				// 	},
				// ]
			}
		},
        methods:{
            getData(item){
                this.queryUrl='api/myOneslft/getBMallRecommendProductList'
                this.queryData={
                    productCategoryId:item.id,
                    recommendId:1
                }
                this.getList()
            }
        }
	}
</script>

<style scoped lang="scss">
	.list{
		flex-wrap: wrap;
		justify-content: space-between;
		.item{
			align-items:baseline;
			width: 38.4%;
			background-color: #fff;
			padding:30upx 40upx;
			.item_top{
				.sign{
					display: block;
					width: 8upx;
					height: 40upx;
					background-color: #FF6105;
					border-radius: 8upx;
					margin-right: 30upx;
				}
				.title{
					color: #2c2c2c;
					font-size: 32upx;
					font-weight: 600;
					margin-right: 10upx;
				}
				.more{
					width: 16upx;
					
				}
			}
			.item_center{
				padding:4upx 20upx;
				font-size: 20upx;
				color: #999;
			}
			.item_bottom{
				padding: 20upx;
				.img{
					width: 120upx;
					height: 120upx;
					border-radius: 12upx;
					&:first-child{
						margin-right: 20upx;
					}
				}
			}
		}
	}
</style>
