<template>
	<view class="page_wrap">
		<search></search>
		<scroll-view class="labels_list "  scroll-x="true" >
			<view 
			class="label_item" 
			@click="selectParent(item,index)"  
			v-for="(item,index) in parentList" 
			:key="index"
			:class="selectParentIndex==index && 'select_parent' "
			>
				{{item.name}}
			</view>
			
		</scroll-view>
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
				parentList:[
					{name:'一级分类'},
					{name:'一级分类'},
					{name:'一级分类'},
					{name:'一级分类'},
					{name:'一级分类'},
					{name:'一级分类'},
					{name:'一级分类'},
					{name:'一级分类'},
					{name:'一级分类'},
					{name:'一级分类'},
					{name:'一级分类'},
					{name:'一级分类'},
					{name:'一级分类'},
				],
				childList:[],
				selectParentIndex:0,
				selectChildIndex:0
			};
		},
		methods:{
			selectParent(item,index){
				this.selectParentIndex=index
			},
			selectChild(item,index){
				this.selectChildIndex=index
			}
		}
	}
</script>

<style lang="scss">
.page_wrap{
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
