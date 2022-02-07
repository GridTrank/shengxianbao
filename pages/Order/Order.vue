<template>
	<view class="page_wrap">
		<view class="tab_list row">
			<view 
			:class="['tab_item',tabIndex==index && 'active_tab']" 
			v-for="(item,index) in tabList" 
			@click="tabHandle(item,index)"
			:key="index">
				{{item.label}}
			</view>
		</view>
		
		<list :list="dataList"></list>
		<view class="" v-if="dataList.length<=0">
		    <no-data></no-data>
		</view>
	</view>
</template>

<script>
	import list from './components/list.vue'
	export default {
		components:{list},
		data() {
			return {
				tabList:[
					{
						label:'全部',
						status:'',
					},
					{
						label:'待审核',
						status:0,
					},
					{
						label:'待发货',
						status:1,
					},
					{
						label:'待收货',
						status:2,
					},
					{
						label:'已收货',
						status:4,
					},
				],
				tabIndex:0,
				data:[]
			};
		},
        onLoad(e) {
            console.log(e)
            this.tabIndex=e.index
            this.queryUrl='api/oms/order/pageList'
            this.queryData={
                billState:e.status
            }
            this.getList()
           
        },
		methods:{
			tabHandle(item,index){
				this.tabIndex=index
                this.dataList=[]
                this.queryData={
                    billState:item.status
                }
                this.getList()
			}
		}
		
	}
</script>

<style scoped lang="scss">
.page_wrap{
	padding-top: 80upx;
	padding-bottom: 20upx;
	.tab_list{
		position: fixed;
		top: 0upx;
		background-color: #fff;
		width: 100%;
		justify-content: space-around;
		padding: 20upx 0;
		border-bottom: 1px solid #f1f1f1;
		.tab_item{
			color: #333;
			font-size: 28upx;
		}
		.active_tab{
			color: $base-color;
			position: relative;
			&::after{
				content: '';
				display: block;
				position: absolute;
				bottom: -20upx;
				width: 100%;
				height: 4upx;
				background-color: $base-color;
			}
		}
	}
}
</style>
