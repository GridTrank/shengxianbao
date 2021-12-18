<template>
	<view class="page_wrap">
		<view class="list mt20">
			<view class="item row" @click="$refs.jPicker.pickerVisable=true">
				<view class="left ">
					仓库
				</view>
				<view class="right row">
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
			<view class="item row" >
				<view class="left ">
					商品名称
				</view>
				<view class="right row">
					<u-input type='password' class="mt10" placeholder='请输入商品名称（非必填）' border='none' v-model="goodName">
						<template slot="suffix">
							<text class="iconfont icon-saoyisao" @click="saoCode" ></text>
						</template>
					</u-input>
				</view>
			</view>
			
		</view>
		<!-- 按钮 -->
		<view class="btn_default" @click="navTo('./index?pageType=search')">
			开始查询
		</view>
		
		<jPicker
		ref='jPicker'
		title='选择仓库'
		:options="columns" 
		valKey='value'
		showKey="label"
		@sure='confirm'
		></jPicker>
		
	</view>
</template>

<script>
	import {date} from "@/common/js/util"
	export default {
		data() {
			return {
				goodName:'',
				columns:[{label:'仓库1',value:1},{label:'仓库2',value:2}],
			};
		},
		onLoad(e) {
			
		},
		methods:{
			confirm(e){
				console.log(e)
			},
			saoCode(){
				uni.scanCode({
					success: (res) => {
						console.log(res)
						uni.showToast({
							title:res,
							icon:'none'
						})
					}
				})
			}
		},
		
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
		width: 95%;
		margin: auto;
		margin-top: 300upx;
	}
}
</style>
