<template>
	<view class="list row ">
		<view class="item column mt30" 
        @click="navTo('/pagesB/RecommendPage/RecommendPage?id='+item.id)"
        v-for="(item,index) in list" :key="index">
			<view class="item_top row">
				<text class="sign"></text>
				<text class="title">{{item.recommendName}}</text>
				<image class="more" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/jiantou.png" mode="widthFix"></image>
			</view>
			<view class="item_center">
				{{item.remark || ''}}
			</view>
			<view class="item_bottom row">
				<image 
				v-for="(img,i) in item.recommendProductinfoVoList"
				:key="i"
				class="img" 
				:src="img.defaultImage" 
				>
				</image>
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
			}
		},
        methods:{
            
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
