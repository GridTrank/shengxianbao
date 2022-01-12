<template>
	<view class="page_wrap">
		<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
		<u--form class="" :labelWidth="120" :labelStyle="{height:'60upx'}" :rules="rules" :model="userInfo" ref="userInfo">
			<u-form-item label="客户名称" prop="customerName" borderBottom ref="item1">
				<u--input class="from_item" v-model="userInfo.customerName" border="none" placeholder="请输入客户名称">
				</u--input>
			</u-form-item>
			<!-- <u-form-item label="客户类型" prop="customerTypeId" borderBottom @click="showActionSheet('customerType')"
				ref="item1">
				<u--input class="from_item" v-model="userInfo.customerType" disabled disabledColor="#ffffff"
					placeholder="请选择客户类型" border="none"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item> -->
			<u-form-item label="联系人" prop="customerContact" borderBottom ref="item1">
				<u--input class="from_item" v-model="userInfo.customerContact" border="none" placeholder="请输入联系人">
				</u--input>
			</u-form-item>
			<u-form-item label="联系电话" prop="telephone" ref="item1">
				<u--input class="from_item" v-model="userInfo.telephone" border="none" placeholder="请输入联系电话">
				</u--input>
			</u-form-item>
			<!-- 	<u-form-item class="mt20" label="客户地址参照物" prop="addrReference" borderBottom
				@click="showSex = true; hideKeyboard()" ref="item1">
				<u--input class="from_item" v-model="userInfo.addrReference" disabled disabledColor="#ffffff"
					placeholder="请选择客户地址参照物" border="none"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item> -->
			
			<u-form-item style="margin-top: 10px;" class="mt20"  label="详细地址" prop="addrDetails" borderBottom ref="item1">
				<view class="mt20 address row jc_sb">
					<u--textarea class="textarea" height="30" v-model="userInfo.addrDetails" placeholder="请输入详细地址或直接定位"
						border="none">
					</u--textarea>
					<image class="icon" @click="navTo('/pagesB/ChooseAddress/index')" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/icon_region.png"
						mode="widthFix">
					</image>
				</view>
			</u-form-item>
			<u-form-item label="收货时间" prop="deliveryTime" @click="showActionSheet('deliveryTime')" ref="item1">
				<u--input class="from_item" v-model="userInfo.deliveryTime" disabled disabledColor="#ffffff"
					placeholder="请选择收货时间" border="none"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>
			<u-form-item class="mt20" labelPosition="top" prop="customerBusinessLicenseUrl" ref="item1">
				<view class="upload_wrap">
					<view class="f28-c333">上传营业执照</view>
					<view class="column">
						<view class="upload_img mt40" @click="chooseImage" v-if="!userInfo.customerBusinessLicenseUrl">
							<span class="upload_icon">+</span>
							<view>点击拍摄/上传图片</view>
						</view>
						<view class="upload_img mt40" v-else>
							<image :src="userInfo.customerBusinessLicenseUrl" mode="heightFix"></image>
						</view>
					</view>
				</view>
			</u-form-item>
			<u-form-item class="mt20" label="邀请码" prop="inviteCode" ref="item1">
				<u--input class="from_item" v-model="userInfo.inviteCode" border="none" placeholder="请输入邀请码（选填）">
				</u--input>
			</u-form-item>
		</u--form>
		<view class="btn_wrap">
			<view class="btn" @click="submit">
				提交
			</view>
		</view>
		<u-action-sheet :show="showSheet" :actions="actions"
			:title="`请选择${actionSheetType == 'customerType'?'客户类型':'收货时间'}`" @close="showSheet = false"
			@select="select">
		</u-action-sheet>
	</view>
</template>

<script>
	import baseUrl from '@/common/js/request'
	export default {
		data() {
			return {
				baseUrl: baseUrl,
				showSheet: false,
				rules: {
					customerName: {
						type: 'string',
						required: true,
						message: '请填写客户名称',
						trigger: ['blur', 'change']
					},
					customerTypeId: {
						type: 'string',
						required: true,
						message: '请选择客户类型',
						trigger: ['blur', 'change']
					},
					customerContact: {
						type: 'string',
						required: true,
						message: '请填写联系人',
						trigger: ['blur', 'change']
					},
					telephone: {
						type: 'string',
						required: true,
						max:11,
						message: '请填写联系电话',
						trigger: ['blur', 'change']
					},
					addrDetails: {
						type: 'string',
						required: true,
						message: '请填写详细地址',
						trigger: ['blur', 'change']
					},
					deliveryTime: {
						type: 'string',
						required: true,
						message: '请选择收货时间',
						trigger: ['blur', 'change']
					},
					customerBusinessLicenseUrl: {
						type: 'string',

						required: true,
						message: '请上传营业执照',
						trigger: ['blur', 'change']
					},
				},
				userInfo: {
					"addrDetails": "",
					"addrReference": "",
					"areaId": 0,
					"customerBusinessLicenseUrl": "",
					"customerBusinessLicenser": "",
					"customerContact": "",
					"customerName": "",
					"customerTypeId": 123123,
					"customerType": '123',
					"customerUrl": "",
					"deliveryTime": "",
					"inviteCode": "",
					"latitude": "",
					"longitude": "",
					"telephone": ""
				},
				actions: [],
				radio: '',
				fileList: [],
				switchVal: false,
				customerType: [],
				customerTime: [],
				actionSheetType: 'customerType',
			};
		},
		created() {
			this.getType();
			this.getTime();
		},
		methods: {
			// 选项显示
			showActionSheet(type) {
				this.actionSheetType = type;
				if (type == 'customerType') {
					this.actions = this.customerType;

				} else {
					// 时间
					this.actions = this.customerTime;
				}
				this.showSheet = true;
			},

			select(e) {
				console.log(e)
				this.userInfo[this.actionSheetType] = e.name;
				if (this.actionSheetType == 'customerType') {
					this.userInfo.customerTypeId = e.id;
					this.$refs.userInfo.validateField('customerTypeId')
				}else{
					this.$refs.userInfo.validateField(this.actionSheetType)
				}
				console.log(this.userInfo)
			},
			// 获取客户类型
			getType() {
				this.$http('api/getCustomerTypeList').then(res => {
					res = res || [];
					this.customerType = res.map(item => {
						return {
							name: item.customerType,
							id: item.id
						}
					});

				})
			},
			// 获取客户类型
			getTime() {
				this.$http('api/getReceivingTimeList').then(res => {
					res = res || [];
					this.customerTime = res.map(item => {
						return {
							name: item.startDate + '~' + item.endDate
						}
					});
				})
			},
			// 上传
			chooseImage(event) {
				var _ = this;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						_.userInfo.customerBusinessLicenseUrl = tempFilePaths[0]
						uni.uploadFile({
							url: _.baseUrl + 'api/sys/oss/uploadFile',
							filePath: tempFilePaths[0],
							name: 'file',
							header: {
								'content-type': 'application/x-www-form-urlencoded',
								'token': uni.getStorageSync('token') || '',
							},
							success: (uploadFileRes) => {
								console.log(uploadFileRes.data);
								// _.userInfo.customerBusinessLicenseUrl = tempFilePaths
							}
						});
					}
				});
			},
			submit() {
				this.$refs.userInfo.validate().then(res => {
					this.$http('api/myOneslft/addCustomerAddr',this.userInfo,(res)=>{
						uni.showToast({
							title:'认证成功',
							icon:'none'
						});
						this.navTo('/')
					})
					// uni.$u.toast('校验通过')
				}).catch(errors => {
					// uni.$u.toast('校验失败')
				})
			}

		},
	};
</script>

<style scoped lang="scss">
	.page_wrap {
		padding-bottom: 250upx;
		/deep/ .u-form-item{
			background-color: #fff;
			padding: 0 30upx;
		}
		/* #ifdef MP-WEIXIN */
		/deep/ .u-textarea__field{
			width: 408upx !important;
		}
		/* #endif */ 
		.upload_wrap {
			width: 100%;
			padding-bottom: 20upx;
		}
		.textarea {
			padding: 0;
			width: 200upx;
		}
		.upload_img {
			width: 528upx;
			height: 320upx;
			border: 1px dashed #CECECE;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			color: #AAAAAA;
			font-size: 28upx;
			.upload_icon {
				font-size: 60upx;
			}
		}
		.address{
			flex-shrink: 0;
			/* #ifdef H5*/
			width: 100%;
			/* #endif */
		}
		.icon {
			width: 28upx;
		}
		.from_item {
			height: 60upx;
		}
		.btn_wrap {
			position: fixed;
			bottom: 0;
			padding: 30upx 0;
			left: 0;
			width: 100%;
			background-color: #fff;

			.btn {
				background: linear-gradient(113deg, #F87523 0%, #FF6C00 0%, #FD1D20 100%);
				width: 90%;
				height: 100upx;
				line-height: 100upx;
				text-align: center;
				color: #fff;
				font-size: 32upx;
				margin: auto;
				border-radius: 48upx;
			}
		}
	}
</style>
