<template>
	<view class="filter_wrap">
		<view class="parent_list" v-if="showClassify">
			<view class="tit f32-c333 fwb">全部分类</view>
			<view class="parent_item" v-for="(item,index) in list1" :key="index">
				<view class="f28-c333 mt40">{{item.label}}</view>
				<view class="child_list row">
					<view 
                    :class="['child_item', 'mt20', el.checked && 'is_check' ]" 
                    @click="selectItem(el,e,index)" 
                    v-for="(el,e) in item.childList" 
                    :key="e">
						{{el.label}}
					</view>
				</view>
			</view>
		</view>
		
		<view class="parent_list" v-if="showStock">
			<view class="tit f32-c333 fwb">全部仓库</view>
			<view class="child_list row" >
				<view 
				@click="selecStock(item,index)"
				v-for="(item,index) in $WareHouseList" :key="index"
				:class="['child_item', 'mt20', stockIndex==(index+1) && 'is_check' ]" 
				>
					{{item.warehouseName}}
				</view>
			</view>
		</view>
		<view class="date_wrap mt30"  v-if="showDate">
			<view class="tit f32-c333 fwb">日期选择</view>
			<view class="row jc_sb mt20">
				<view class="date_btn left" @click="dateHandle('start')">
					{{lossDateStart || '开始时间'}}
				</view>
				-
				<view class="date_btn right" @click="dateHandle('end')">
					{{lossDateEnd || '结束时间'}}
				</view>
			</view>
		</view>
		
		<view class="btn_wrap row jc_sb">
			<text class="btn left" @click="submit(1)">重置</text>
			<text class="btn right" @click="submit(2)">确定</text>
		</view>
		
		<u-datetime-picker
		    :show="showDatePicker"
		    v-model="dateValue"
		    mode="date"
			@cancel="showDatePicker=false"
			@confirm="confirm"
		>
		</u-datetime-picker>
	</view>
</template>

<script>
	import {dateFormat } from '@/common/js/util'
	import {mapState,mapMutations} from 'vuex'
	export default{
		props:{
			list:{
				type:Array,
				default:()=>{
					return [{
						label:'蔬菜',
						childList:[
							{label:'青菜1',checked:false},
							{label:'青菜2',checked:false},
							{label:'青菜3',checked:false},
							{label:'青菜4',checked:false},
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
					}]
				}
			},
			showStock:{
				type:Boolean,
				default:false
			},
			showClassify:{
				type:Boolean,
				default:false
			},
			showDate:{
				type:Boolean,
				default:false
			},
			pageType:{
				type:String,
				default:''
			},
		},
		computed:{
			...mapState(['$WareHouseList'])
		},
		data(){
			return{
				list1:[{
					label:'蔬菜',
					childList:[
						{label:'青菜1',checked:false},
						{label:'青菜2',checked:false},
						{label:'青菜3',checked:false},
						{label:'青菜4',checked:false},
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
				}],
				stockIndex:0,
				warehouseId:'',
				showDatePicker:false,
				dateValue:Number(new Date()),
				lossDateStart:'',
				lossDateEnd:'',
				selectDateType:'start'
			}
		},
		methods:{
			selectItem(item,e,index){
				item.checked=!item.checked
                this.$forceUpdate()
			},
			// 选择仓库
			selecStock(item,index){
				this.stockIndex=index+1
				this.warehouseId=item.id
			},
			dateHandle(type){
				this.selectDateType=type
				this.showDatePicker=true
				if(this.lossDateStart){
					this.dateValue=Number(new Date(this.lossDateStart))
				}
			},
			// 选择日期
			confirm(e){
				if(this.selectDateType=='start'){
					this.lossDateStart=dateFormat('YYYY-MM-DD',e.value)
				}else{
					this.lossDateEnd=dateFormat('YYYY-MM-DD',e.value)
				}
				this.showDatePicker=false
			},
			submit(val){
				if(val==1){
					this.list1.forEach(el=>{
						el.childList.forEach((e=>{
							e.checked=false
						}))
					})
					this.stockIndex=0
					this.lossDateStart=''
					this.lossDateEnd=''
				}else{
					if(this.showStock){
						let data={
							warehouseId:this.warehouseId,
							lossDateStart:this.lossDateStart,
							lossDateEnd:this.lossDateEnd
						}
						this.$emit('selectFilter',data)
					}else{
						let arr=[]
						this.list1.forEach(el=>{
							el.childList.forEach((e=>{
								if(e.checked){
									arr.push(e)
								}
							}))
						})
						this.$emit('selectFilter',arr)
					}
                    
				}
			}
		}
	}
</script>

<style scoped lang="scss">
.filter_wrap{
	width: 540upx;
	background-color: #fff;
	padding: 60upx 30upx 120upx 30upx;
	overflow-y: scroll;
	.parent_list{
		height: 92%;
		.parent_item{
			padding-bottom: 30upx;
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
	}
	
	.date_wrap{
		.date_btn{
			width:45% ;
			text-align: center;
			border: 1px solid #f1f1f1;
			border-radius: 16upx;
			font-size: 28upx;
			color: #666;
			height: 50upx;
			line-height: 50upx;
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
