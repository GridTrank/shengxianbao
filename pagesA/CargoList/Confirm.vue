<template>
	<view class="page_wrap">
		<view class="detail">
			<view class="detail_item row jc_sb">
				<text class="label f28-c333">{{pageTxt}}单号</text>
				<text class="val f28-c333">123456</text>
			</view>
			<view class="detail_item row jc_sb" v-if="pageType=='return'">
				<text class="label f28-c333">关联订单</text>
				<text class="val  f28-c333">123456</text>
			</view>
			
			<view class="detail_item row jc_sb">
				<text class="label f28-c333">{{pageTxt}}日期</text>
				<text class="val  f28-c333">123456</text>
			</view>
			<view class="detail_item row jc_sb"  v-if="pageType!=='return'">
				<text class="label f28-c333">{{pageTxt}}仓库</text>
				<text class="val  f28-c333">123456</text>
			</view>
			<view class="detail_item row jc_sb">
				<text class="label f28-c333">{{pageTxt}}类型</text>
				<text class="val  f28-c333">123456</text>
			</view>
			<view class="detail_item  ">
				<view class="label f28-c333">备注</view>
				<u-input v-model="remark" placeholder='请填写备注' border='none'></u-input>
			</view>
			<view class="detail_item  pz">
				<view class="label f28-c333">上传凭证（选填，最多上传3张）</view>
				<u-upload
				class="mt20"
					:fileList="fileList"
					@afterRead="afterRead"
					@delete="deletePic"
					name="photo"
					multiple
					:maxCount="3"
					:previewFullImage="true"
				></u-upload>
			</view>
		</view>
		
		<view class="goods mt30">
			<text class="f32-c333 title">商品明细</text>
			<view class="list ">
				<view class="item  mt30" v-for="(item,index) in 3" :key="index">
					<view class="item_wrap row">
						<image class="img" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/111.png" mode="widthFix"></image>
						<view class="info">
							<view class="row jc_sb">
								<text class="f28-c333">名称</text>
								<text class="f24-c999">商品编号：123456</text>
							</view>
							<view class="desc mt10 f24-c999">
								1包约125g
							</view>
							<view class="price mt10">
								<text class="bao">包</text>
								<text class="f24-c999">￥10.00元/包</text>
							</view>
							<view class="num row jc_sb mt10">
								<text class="f24-c999">库存数量：10包</text>
								<text class="f24-c999">{{pageTxt}}数量：<text class="num_util">1包</text></text>
							</view>
							<view class="total mt20">
								{{pageTxt}}金额:-￥10.00
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="statistics">
				<view class="s_item row jc_sb">
					<text class="f28-c999">{{pageTxt}}商品</text>
					<text class="f28-c333">2</text>
				</view>
				<view class="s_item row jc_sb">
					<text class="f28-c999">{{pageTxt}}金额</text>
					<text class="f28-c333">￥20.00</text>
				</view>
			</view>
		</view>
		
		<view class="btn_wrap row">
			<text class="btn left" @click="navTo('back')">取消</text>
			<text class="btn right" @click="submit">保存</text>
		</view>
	</view>
</template>

<script>
	import {date} from "@/common/js/util"
	export default {
		data() {
			return {
				remark:'',
				num:'', 	
				showPop:false,
				selectDate:'',
				pageType:'',
				pageTxt:'',
				fileList:[
					
				],
			};
		},
		onLoad(e) {
			let barTitle
			if(e.pageType=='inventory'){
				barTitle='新增盘点单'
				this.pageTxt='盘点'
			}else if(e.pageType=='frmLoss'){
				barTitle='新增报损单'
				this.pageTxt='报损'
			}else if(e.pageType=='overflow'){
				barTitle='新增报溢单'
				this.pageTxt='报溢'
			}else if(e.pageType=='return'){
				barTitle='新增退货单'
				this.pageTxt='退货'
			}
			uni.setNavigationBarTitle({
				title:barTitle
			})
			this.pageType=e.pageType
			
		},
		methods:{
			submit(){
				this.navTo('./Add?pageType='+this.pageType)
			},
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this.fileList.length
				lists.map((item) => {
					this.fileList.push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].thumb)
					let item = this.fileList[fileListLen]
					this.fileList.splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}
			},
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'file',
						formData: {
							user: 'test'
						},
						success: (res) => {
							setTimeout(() => {
								resolve(res.data.data)
							}, 1000)
						}
					});
				})
			},
		},
		
	}
</script>

<style lang="scss">
.page_wrap{
	padding: 20upx 30upx 130upx 30upx;
	.detail{
		padding: 30upx;
		background-color: #fff;
		border-radius: 8upx;
		.detail_item{
			margin-bottom: 30upx;
		}
		.pz{
			border-top: 1px dashed #E7E7E7;
			padding-top: 30upx;
		}
	}
	.goods{
		padding: 30upx 0;
		background-color: #fff;
		border-radius: 8upx;
		.title{
			margin: 30upx ;
		}
		.list{
			.item{
				border-bottom: 1px solid #E7E7E7;
				padding-bottom: 30upx;
				.item_wrap{
					align-items: flex-start;
					padding: 30upx;
				}
				.img{
					width: 120upx;
					margin-right: 20upx;
				}
				.info{
					width: 460upx;
					.bao{
						background-color:#fff4ed;
						color: $base-color;
						font-size: 20upx;
						border-radius: 2upx;
						padding:0 4upx;
						margin-right: 10upx;
					}
					.num_util{
						color: $base-color;
					}
					.total{
						color: #D30000;
						font-size: 24upx;
						width: 100%;
						text-align: right;
						padding-top: 20upx;
						border-top: 1px solid #E7E7E7;
					}
				}
				
			}
		}
		.statistics{
			padding: 30upx 30upx 0 30upx;
		}
	}
	.btn_wrap{
		position: fixed;
		width: 100%;
		background-color: #fff;
		padding: 30upx 0;
		bottom: 0;
		left: 0;
		border-top: 1px solid #f1f1f1;
		display: flex;
		justify-content: center;
		.btn{
			width: 240upx;
			height: 60upx;
			text-align: center;
			line-height: 60upx;
			border-radius: 30upx;
			color: #fff;
			font-size: 28upx;
		}
		.left{
			background: linear-gradient(90deg, #F43B3B 0%, #FF3033 100%);
			margin-right: 30upx;
		}
		.right{
			background: linear-gradient(113deg, #F87523 0%, #FF6C00 0%, #FD1D20 100%);
		}
	}
}
</style>
