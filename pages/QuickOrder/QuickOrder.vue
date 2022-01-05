<template>
	<view class="page_wrap">
		<search></search>
        <view class="parent_list" v-if="parentList.length>0">
        	<u-tabs
        	:list="parentList"
        	:activeStyle="{
        		color: '#FF6304',
        		fontWeight: 'bold',
        	}"
        	lineColor="#FF6304"
        	itemStyle="padding-left: 15px; padding-right: 15px; height: 34px; background:#fff"
        	@click="selectParent">
        	</u-tabs>
            
        	<view class="more_icon" @click="parentListPop=true">
        		<text class="iconfont icon-zhankai1"></text>
        	</view>
        </view>
		<view class="second_list">
			<scroll-view class="left_list"  scroll-y="true" >
				<view 
				class="left_item row" 
				@click="selectChild(item,index)"  
				v-for="(item,index) in 2" 
				:key="index"
				:class="selectChildIndex==index && 'select_child' "
				>
					<text>常用清单</text>
				</view>
			</scroll-view>
			<scroll-view  scroll-y="true" class="right_list">
				<view class="list  mt20" v-for="(item,index) in 3" :key="index">
					<list></list>
				</view>
			</scroll-view >
		</view>
		
	</view>
</template>

<script>
	import search from '../Classify/search.vue'
	import list from './list.vue'
	export default {
		components:{
			search,
			list
		},
		data() {
			return {
				parentList:[],
				childList:[],
				selectParentIndex:0,
				selectChildIndex:0
			};
		},
        onLoad() {
            this.getCateList()
        },
		methods:{
            getCateList(){
                this.$http('api/pms/productcategory/getCategoryPidList').then(res=>{
                    res.forEach(item=>{
                        item.name=item.categoryName
                    })
                    this.parentList=res
                })
            },
			selectParent(e){
				this.selectParentIndex=e.index
				// this.getCateListById(e.id)
			},
			selectChild(item,index){
				this.selectChildIndex=index
			}
		}
	}
</script>

<style lang="scss">
.page_wrap{
    .parent_list{
    	position: relative;
    	padding-right: 50upx;
    	padding-top: 30upx;
    	background-color: #fff;
    	.more_icon{
    		position: absolute;
    		right: 0upx;
    		top: 42upx;
    		color: $base-color;
    		background-color: #fff;
    		border-left: 1px solid #E8E8E8;
    		padding-right: 20upx;
    		padding-left: 10upx;
    	}
        /deep/ .u-tabs__wrapper__nav{
            position: relative;
        }
    }
	.labels_list{
		display: flex;
		flex-wrap: nowrap;
		white-space: nowrap;
		background-color: #fff;
		border-bottom: 1px solid #ddd;
		.label_item{
			display: inline-block;
			text-align: center;
			color: #333;
			font-size: 28upx;
			padding: 20upx 30upx;
			
		}
		.select_parent{
			color: $base-color;
			position: relative;
			&::after{
				content: '';
				display: block;
				position: absolute;
				bottom: 0;
				width: 30upx;
				height: 6upx;
				background-color: $base-color;
				left: 50%;
				transform: translateX(-50%);
			}
		}
	}
	.second_list{
		display: flex;
		height: 88vh;
		overflow: hidden;
		.left_list{
			width: 25%;
			text-align: center;
			.left_item{
				padding: 40upx 0;
				justify-content: center;
				color: #666;
				font-size: 28upx;
				.rexiao_img{
					width: 20upx;
					margin-right: 20upx;
				}
			}
			.select_child{
				background-color: #fff;
				color: $base-color;
				font-size: 28upx;
				font-weight: bold;
				position: relative;
				&::after{
					content: '';
					display: block;
					position: absolute;
					left: 0;
					width: 8upx;
					height: 40upx;
					background-color: $base-color;
					border-radius: 0 20upx 20upx 0;
				}
			}
		}
		.right_list{
			width: 75%;
			background-color: #fff;
			.list{
				padding-bottom: 30upx;
			}
		}
	}
}
</style>
