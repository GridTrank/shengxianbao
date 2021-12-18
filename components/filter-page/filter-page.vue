<template>
	<view class="filter_wrap">
		<scroll-view class="parent_list" scroll-y="true">
			<view class="tit f32-c333 fwb">全部分类</view>
			<view class="parent_item" v-for="(item,index) in list" :key="index">
				<view class="f28-c333 mt40">{{item.label}}</view>
				<view class="child_list row">
					<view :class="['child_item', 'mt20', el.checked && 'is_check' ]" @click="selectItem(el,e)" v-for="(el,e) in item.childList" :key="e">
						{{el.label}}
					</view>
				</view>
			</view>
		</scroll-view>
		
		<view class="btn_wrap row jc_sb">
			<text class="btn left" @click="submit(1)">重置</text>
			<text class="btn right" @click="submit(2)">确定</text>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{
						label:'蔬菜',
						childList:[
							{label:'青菜',checked:false},
							{label:'青菜',checked:false},
							{label:'青菜',checked:false},
							{label:'青菜',checked:false},
							{label:'青菜',checked:false},
							{label:'青菜',checked:false}
						]
					},
					{
						label:'蔬菜',
						childList:[
							{label:'青菜',checked:false},
							{label:'青菜',checked:false},
							{label:'青菜',checked:false},
							{label:'青菜',checked:false},
							{label:'青菜',checked:false},
							{label:'青菜',checked:false}
						]
					}
					
				],
			}
		},
		methods:{
			selectItem(item,index){
				item.checked=!item.checked
			},
			submit(val){
				if(val==1){
					this.list.forEach(el=>{
						el.childList.forEach((e=>{
							e.checked=false
						}))
					})
				}else{
					let arr=[]
					this.list.forEach(el=>{
						el.childList.forEach((e=>{
							if(e.checked){
								arr.push(e)
							}
						}))
					})
					console.log(arr)
				}
			}
		}
	}
</script>

<style scoped lang="scss">
.filter_wrap{
	width: 540upx;
	height: 100%;
	background-color: #fff;
	padding: 60upx 30upx 120upx 30upx;
	.parent_list{
		height: 92%;
		.parent_item{
			padding-bottom: 30upx;
		}
	}
	.child_list{
		flex-wrap: wrap;
		.child_item{
			width: 166upx;
			height: 56upx;
			line-height: 56upx;
			text-align: center;
			border-radius: 32upx;
			background-color: #F2F2F2;
			color: #333;
			font-size: 24upx;
			margin-right: 20upx;
			&:nth-child(3n){
				margin-right: 0;
			}
		}
		.is_check{
			background-color: #fff;
			border: 1px solid #FE5B07;
			width: 160upx;
			color: #FE5B07;
		}
	}
	.btn_wrap{
		position: fixed;
		width: 540upx;
		right: 0;
		bottom: 0;
		background-color: #fff;
		padding: 30upx;
		border-top: 1px solid #f1f1f1;
		.btn{
			width: 45%;
			height: 70upx;
			line-height: 70upx;
			text-align: center;
			border-radius: 35upx;
			font-size: 28upx;
		}
		.left{
			border: 1px solid #C4C4C4;
			color: #333;
		}
		.right{
			color: #fff;
			background: linear-gradient(136deg, #F87523 0%, #FD1D20 100%);
		}
	}
	
}
</style>
