<template>
	<view class="page_wrap">
		<view class="list mt20">
			<view class="item row" @click="showPopHandle(1)">
				<view class="left ">
					仓库
				</view>
				<view class="right row">
					<text class="label">{{cangk}}</text>
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
			<view class="item row" v-if="pageType=='return'" @click="showPopHandle(4)">
				<view class="left ">
					客户
				</view>
				<view class="right row">
					<text class="label">客户名称</text>
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
			<view class="item row" @click="showPopHandle(2)">
				<view class="left ">
					{{pageTxt}}类别
				</view>
				<view class="right row">
					<text class="label">盘亏</text>
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
			<view class="item row">
				<view class="left ">
					{{pageTxt}}单号
				</view>
				<view class="right input">
					<input type="text" :placeholder="`请输入${pageTxt}单号（非必填）`" v-model="num" />
				</view>
			</view>
			<view class="item row" @click="showPopHandle(3)">
				<view class="left ">
					日期
				</view>
				<view class="right row">
					<text class="label">{{selectDate}}</text>
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
		</view>
		<!-- 按钮 -->
		<view class="btn_default" @click="navTo('./List?pageType='+ pageType)">
			开始查询
		</view>
		
		<!-- 弹出框 -->
		<jPicker
		ref='jPicker'
		title='选择仓库'
		:options="columns" 
		valKey='value'
		showKey="label"
		@sure='confirm'
		></jPicker>
		
		<!-- 时间日期选择 -->
		<itmister-date-picker ref="dateEl" @dateConfirm="dateConfirm"></itmister-date-picker>
	</view>
</template>

<script>
	import {date} from "@/common/js/util"
	export default {
		data() {
			return {
				num:'', 	
				showPop:false,
				selectDate:'',
				pageType:'',
				pageTxt:'',
				cangk:'',
				columns:[{label:'仓库1',value:1},{label:'仓库2',value:2}],
			};
		},
		onLoad(e) {
			let barTitle
			if(e.pageType=='inventory'){
				barTitle='盘点查询'
				this.pageTxt='盘点'
			}else if(e.pageType=='frmLoss'){
				barTitle='报损查询'
				this.pageTxt='报损'
			}else if(e.pageType=='overflow'){
				barTitle='报溢查询'
				this.pageTxt='报溢'
			}else if(e.pageType=='return'){
				barTitle='退货查询'
				this.pageTxt='退货'
			}
			this.pageType=e.pageType
			uni.setNavigationBarTitle({
				title:barTitle
			})
			this.selectDate=date('Y-m-d',new Date().getTime())
		},
		methods:{
			showPopHandle(val){
				if(val==3){
					this.$refs.dateEl.show();
				}else{
					this.$refs.jPicker.pickerVisable=true
				}
			},
			dateConfirm(date){
			    this.selectDate = date;
			},
			confirm(e){
				console.log(e)
				this.cangk=e.label
			}
		},
		onBackPress(options) {
			if(options.from=='backbutton'){
				uni.switchTab({
					url:'/pages/User/User'
				})
				return true
			}
		}
	}
</script>

<style lang="scss">
.page_wrap{
	.list{
		background-color: #fff;
		padding:0 30upx;
		.item{
			padding: 40upx 0;
			border-bottom: 1px solid #E1E1E1;
			justify-content: space-between;
			.left{
				font-size: 30upx;
				color: #333;
			}
			.right{
				.label{
					color: #666;
					font-size: 28upx;
					margin-right: 12upx;
				}
			}
			.input{
				width: 400upx;
			}
			&:last-child{
				border:none
			}
		}
	}
	.btn_default{
		width: 90%;
		margin: auto;
		margin-top: 300upx;
	}
}
</style>
