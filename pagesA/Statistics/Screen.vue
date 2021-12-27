<template>
	<view class="page_wrap">
		<view class="list mt20">
            <view class="item row" >
            	<view class="left ">
            		商品名称
            	</view>
            	<view class="right row">
            		<search-comprehensive
                    :showScreen='false'
                    >
                    </search-comprehensive>
            	</view>
            </view>
			<view class="item row" @click="showPopHandle(1)">
				<view class="left ">
					商品分类
				</view>
				<view class="right row">
					<text class="label">1231231</text>
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
			<view class="item row" @click="showPopHandle(2,'start')">
				<view class="left ">
					开始日期
				</view>
				<view class="right row">
					<text class="label">{{startDate}}</text>
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
			
			<view class="item row" @click="showPopHandle(2,'end')">
				<view class="left ">
					结束日期
				</view>
				<view class="right row">
					<text class="label">{{endDate}}</text>
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
			
		</view>
		
		<!-- 按钮 -->
		<view class="btn_default" @click="submit">
			查询
		</view>
        
        <jPicker
        ref='jPicker'
        title='选择分类'
        :options="columns" 
        valKey='value'
        showKey="label"
        @sure='confirm'
        >
        </jPicker>
		
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
				startDate:'',
                endDate:'',
                dateType:'',
                columns:[{label:'分类1',value:1},{label:'分类2',value:2}],
                
			};
		},
		onLoad(e) {
			this.startDate=this.endDate=date('Y-m-d',new Date().getTime())
		},
		methods:{
			showPopHandle(val,key){
				if(val==2){
					this.$refs.dateEl.show();
                    this.dateType=key
				}else{
					this.$refs.jPicker.pickerVisable=true
				}
			},
			// 选择日期
			dateConfirm(date){
                if(this.dateType=='start'){
                    this.startDate = date;
                }else{
                    this.endDate=date
                }
			},
            
            submit(){
                uni.navigateBack()
            }
		}
	}
</script>

<style scoped lang="scss">
.page_wrap{
	padding-bottom: 100upx;
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
                /deep/ .search_wrap {
                    padding: 0;
                    .input_wrap{
                        margin-right: 0;
                    }
                }
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
