<template>
	<view class="page_wrap">
		<u-swipe-action class="mt20">
		    <u-swipe-action-item 
			v-for="(item,index) in dataList"
			:key="index"
			:name="index"
			:show='false'
			@click="selectAddress" 
			:options="options2">
		        <view class="item" @click="confirmAddress(item)">
		        	<view class="user_info row">
		        		<text v-if="index===0" class="moren">[默认]</text>
						<text class="name">姓名</text>
						<text class="phone">12345678911</text>
		        	</view>
					<view class="address mt20">
						江苏省 相城区 苏州市 江苏省相城区漕湖花园
					</view>
		        </view>
		    </u-swipe-action-item>
			
		</u-swipe-action>
		
		<view class="btn_default" @click="navTo('./AddressDetail?pageType=add')">
			+ 新增地址
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options2: [{
				    text: '编辑',
				    style: {
				        backgroundColor: '#FDCE00'
				    }
				}, {
				    text: '删除',
				    style: {
				        backgroundColor: '#FD4D00'
				    }
				}],
				pageType:''
				
			};
		},
		onLoad(e) {
			this.pageType=e.pageType
			this.getData()
		},
		methods:{
			getData(){
				this.queryUrl='api/oms/pageList'
				this.getList()
				console.log(this.dataList)
			},
			selectAddress(e){
				if(e.index==1){
					uni.showModal({
						title:'提示',
						content:'确定要删除吗？',
						success: (res) => {
							if(res.confirm){
								uni.$u.toast('删除成功')
							}
						}
					})
				}else{
					this.navTo('./AddressDetail?pageType=edit')
				}
			},
			confirmAddress(e){
				if(this.pageType=='confirmOrder'){
					console.log(123)
				}
			}
		}
	}
</script>

<style scoped lang="scss">
.page_wrap{
	/deep/ .u-swipe-action-item__content{
		transition: transform 300ms ease 0s;
		transform: translateX(0px);
	}
	padding-bottom: 240upx;
	.item{
		padding:30upx;
		border-bottom: 1px solid #eee;
		.user_info{
			.moren{
				color:$base-color;
				font-size:24upx;
				margin-right: 20upx;
			}
			.name{
				color: #333;
				font-size: 32upx;
				
			}
			.phone{
				margin-left: 20upx;
				color: #aaa;
				font-size: 28upx;
			}
		}
		.address{
			color: #333;
			font-size: 28upx;
		}
	}
	.btn_default{
		width: 93%;
		position: fixed;
		bottom: 40upx;
		left: 3.5%;
	}

}
</style>
