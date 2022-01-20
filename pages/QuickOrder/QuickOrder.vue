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
			ref="uTbas"
			lineColor="#FF6304" 
			itemStyle="padding-left: 15px; padding-right: 15px; height: 34px; background:#fff"
			@click="selectParent">
			</u-tabs>
			<view class="more_icon" @click="parentListPop=true">
				<text class="iconfont icon-zhankai1"></text>
			</view>
		</view>
		<view class="second_list">
			<view class="left_list" >
				<view class="left_item row" @click="selectChild(item.id)" v-for="(item,index) in tabInfo" :key="index"
					:class="selectChildIndex==item.id && 'select_child' ">
					<text>{{item.name}}</text>
				</view>
			</view>
			<template v-if="dataList.length>0">
				<view  class="right_list">
					<view  class="list  mt20" v-for="(item,index) in dataList" :key="index">
						<list></list>
					</view>
				</view>
			</template>
			<template v-else>
				<view class="right_list">
					<no-data></no-data>
				</view>
			</template>
			
		</view>
		<!-- 弹出框 -->
		<view class="all_list_wrap" v-if="parentListPop" @click="parentListPop=false">
			<view class="all_list ">
				<view class="all_top row">
					<text class="all">全部分类</text>
					<text @click="parentListPop=false" class="iconfont icon-guanbi"></text>
				</view>
				<view>
					<view :class="selectAllIndex==index && 'select_all_item' " @click.stop="selectItem(item,index)"
						class="all_item mt20" v-for="(item,index) in parentList" :key="index">
						{{item.name}}
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import search from '../Classify/search.vue'
	import list from './list.vue'
	export default {
		components: {
			search,
			list
		},
		data() {
			return {
				parentList: [],
				productList:[],
				selectParentIndex: 0,
				selectChildIndex: 0,
				selectAllIndex:0,
				page:1,
				parentListPop: false,
				tabInfo: [{
					name: '常用清单',
					id: 0,
				}, {
					name: '最近购买',
					id: 1,
				}]
			};
		},
		onShow() {
			this.dataList=[]
			this.getCateList()
		},
		methods: {
			getCateList() {
				this.$http('api/pms/productcategory/getCategoryPidList').then(res => {
					res.forEach(item => {
						item.name = item.categoryName
					})
					this.parentList = res
					this.selectChild(0)
				})
			},
			selectParent(e) {
				this.dataList=[]
				this.selectParentIndex = e.index
				this.selectChildIndex = 0;
				this.selectAllIndex=e.index
				this.selectChild(0)
			},
			async selectChild(id) {
				this.dataList=[]
				this.selectChildIndex = id;
				if(id == 1){
					// 最近购买
					this.queryUrl = 'api/oftenbuy/getCusOftenBuyProductList'
					this.getList()
				}else{
					// 常用
					this.queryUrl = 'api/usedlist/findUsedList'
					this.getList()
				}
			},
			selectItem(item, index) {
				this.selectAllIndex = index
				this.$refs.uTbas.current=index
				this.$refs.uTbas.setLineLeft()
				this.dataList=[]
				this.selectChild(0)
				this.parentListPop=false
			}
		}
	}
</script>

<style lang="scss">
	.page_wrap {
		.parent_list {
			position: relative;
			padding-right: 50upx;
			padding-top: 30upx;
			background-color: #fff;

			.more_icon {
				position: absolute;
				right: 0upx;
				top: 42upx;
				color: $base-color;
				background-color: #fff;
				border-left: 1px solid #E8E8E8;
				padding-right: 20upx;
				padding-left: 10upx;
			}

			/deep/ .u-tabs__wrapper__nav {
				position: relative;
			}
		}

		.labels_list {
			display: flex;
			flex-wrap: nowrap;
			white-space: nowrap;
			background-color: #fff;
			border-bottom: 1px solid #ddd;

			.label_item {
				display: inline-block;
				text-align: center;
				color: #333;
				font-size: 28upx;
				padding: 20upx 30upx;

			}

			.select_parent {
				color: $base-color;
				position: relative;

				&::after {
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

		.second_list {
			display: flex;
			height: 88vh;
			overflow: hidden;

			.left_list {
				width: 25%;
				text-align: center;
				overflow-y: scroll;
				.left_item {
					padding: 40upx 0;
					justify-content: center;
					color: #666;
					font-size: 28upx;

					.rexiao_img {
						width: 20upx;
						margin-right: 20upx;
					}
				}

				.select_child {
					background-color: #fff;
					color: $base-color;
					font-size: 28upx;
					font-weight: bold;
					position: relative;

					&::after {
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

			.right_list {
				width: 75%;
				background-color: #fff;
				overflow-y: scroll;
				.list {
					padding-bottom: 30upx;
				}
			}
		}
		.all_list_wrap {
			position: fixed;
			top: 90upx;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.3);
			.all_list {
				background-color: #fff;
				padding: 40upx 30upx;
		
				.all_top {
					justify-content: space-between;
		
					.all {
						color: #333;
						font-size: 28upx;
						font-weight: bold;
						padding: 0 30upx;
						position: relative;
		
						&::after {
							position: absolute;
							content: '';
							display: block;
							width: 8upx;
							height: 30upx;
							background-color: $base-color;
							border-radius: 0 20upx 20upx 0;
							left: 0;
							top: 6upx;
						}
					}
				}
		
				.all_item {
					display: inline-block;
					padding: 10upx 26upx;
					background-color: #F6F6F6;
					border-radius: 4upx;
					color: #999;
					font-size: 24upx;
					margin-right: 30upx;
		
					&:nth-child(4n) {
						margin-right: 0;
					}
				}
				.select_all_item {
					background-color: #fff4ed;
					color: $base-color;
				}
			}
		}
	}
</style>
