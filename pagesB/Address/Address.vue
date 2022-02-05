<template>
	<view class="page_wrap">
        <template v-if="type==1">
            <view class="address_wrap pt20">
                <view class="item" @click="confirmAddress(item)" v-for="(item,index) in dataList" :key="index">
                    <u-cell-group :border="false">
                        <u-cell title="收件人" :border="false" :isLink="true" :value="item.accepter">
                        </u-cell>
                        <u-cell title="联系人" :border="false" :value="item.telephone">
                        </u-cell>
                        <u-cell :title-width="100" title="地址" :border="false" :value="item.addrDetails">
                        </u-cell>
                    </u-cell-group>
                    <view class="tool_wrap">
                        <view class="tool jc_sb row">
                            <text class="moren">
                                <block v-if="index===0">[默认]</block>
                            </text>
                            <view class="row">
                                <view class="row mr20" @click="edit(item.id)">
                                    <u-icon name="edit-pen" color="#FD4D00" size="24"></u-icon>编辑
                                </view>
                                <view class="row" @click="del(item.id)">
                                    <u-icon name="trash" color="#FD4D00" size="24"></u-icon>删除
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="btn_default" @click="navTo('./AddressDetail?pageType=add')">
                + 新增地址
            </view>
        </template>
        <template v-else>
            <view class="address_wrap pt20">
            	<view class="item cus" @click="confirmAddress(item)" v-for="(item,index) in dataList" :key="index">
                    <view class="">
                        <view class="f28-c333">{{item.pointName}}</view>
                        <view class="f28-c999 mt10">{{item.pointAddr}}</view>
                    </view>
                    <view class="mt10 row">
                        <text class="f24-c333 mr20">联系电话{{item.contactsPhone}}</text>
                        <text class="f24-c333">营业时间{{item.pickupTime}}</text>
                    </view>
            	</view>
            </view>
        </template>
	</view>
</template>

<script>
    import {mapState,mapMutations} from 'vuex'
	export default {
		data() {
			return {
				pageType:'',
                type:1,
			};
		},
		onLoad(e) {
			this.pageType = e.pageType
			this.type = e.type || 1
			this.getData()
		},
        computed:{
            ...mapState(['$orderData']),
        },
		methods: {
            ...mapMutations(['SET_ORDER_DATA']),
			getData() {
				this.queryUrl =this.type==1? 'api/myOneslft/getCustomerAddrList':'api/bmallpickuppoint/page'
				this.getList().then(res => {
					console.log(res)
				})
			},
			del(id) {
				uni.showModal({
					title: '提示',
					content: '确定要删除吗？',
					success: (res) => {
						if (res.confirm) {
							this.$http('api/myOneslft/deleteCustomerAdd',{ids:[id]},'DELETE').then(res=>{
								uni.$u.toast('删除成功');
								this.getData()
							})
							
						}
					}
				})
			},
			edit(id) {
				this.navTo('./AddressDetail?pageType=edit&id=' + id)
			},
			confirmAddress(item) {
				if (this.pageType == 'confirmOrder') {
                    this.SET_ORDER_DATA({addressDetail:item})
                    this.navTo('back')
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.page_wrap {
		/deep/ .u-swipe-action-item__content {
			transition: transform 300ms ease 0s;
			transform: translateX(0px);
		}

		padding-bottom: 240upx;

		.item {
			margin-bottom: 30upx;
			background-color: #fff;

			.tool_wrap {
				padding: 0 30upx;

				.tool {
					padding: 20upx 0;
					border-top: 1px solid #eee;
					color: #FD4D00;
					font-size: 24upx;
				}
			}

		}
        .cus{
            padding: 20upx;
        }

		.btn_default {
			width: 93%;
			position: fixed;
			bottom: 40upx;
			left: 3.5%;
		}

	}
</style>
