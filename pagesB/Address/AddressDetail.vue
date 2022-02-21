<template>
	<view class="page_wrap">
		<view class="input_wrap mt20">
			<u--form class="form_wrap" ref='form' :labelWidth="100" :model="model" :rules="rules">
				<u-form-item label="收件人" prop="accepter" borderBottom>
					<u--input v-model="model.accepter" border="none"  placeholder="请输入收件人"></u--input>
				</u-form-item>
				<u-form-item label="手机号码" prop="telephone" borderBottom >
					<u--input v-model="model.telephone" border="none" placeholder="请输入手机号码"></u--input>
				</u-form-item>
				<!-- <u-form-item label="邮编" prop="accepter" borderBottom >
					<u--input v-model="model.telephone" border="none"  placeholder="请输入邮编"></u--input>
				</u-form-item> -->
				<!-- <u-form-item label="所在地区" prop="accepter" borderBottom >
					<u--input v-model="model.addrReference" border="none" placeholder="请输入所在地区"></u--input>
				</u-form-item> -->
				<u-form-item label="详细地址" prop="addrDetails" borderBottom >
					<view class="address row jc_sb">
						<u--input v-model="model.addrDetails" border="none" placeholder="请输入详细地址或直接定位"></u--input>
						
						<image class="icon" @click="navTo('/pagesB/ChooseAddress/index')" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/icon_region.png"
							mode="widthFix">
						</image>
					</view>
				</u-form-item>
				<u-form-item label="默认地址">
					<view class="switch">
						<u-switch activeColor="#FF6C00" size="16" v-model="isDefault" @change="changeDefault">
						</u-switch>
					</view>
				</u-form-item>
			</u--form>
		</view>

		<view class="btn_default" @click="login">
			保存
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isAgree: false,
				model: {
                    accepter:'',
                    telephone:'',
                    addrDetails:''
                },
				rules: {
					accepter: {
						type: 'string',
						required: true,
						message: '请填写客户名称',
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
				},
				selectTagIndex: 0,
				isDefault: true,
				address: {},
                pageType:'',
                queryId:''
			};
		},
        onLoad(e) {
            this.pageType=e.pageType
            if(e.id){
                this.getData(e.id)
                this.queryId=e.id
            }
        },
		methods: {
			getData(id) {
                this.$http('api/myOneslft/customerAddrInfo',{id}).then(res=>{
                    this.isDefault=res.defaultAddr==1?true:false
                    this.model=res
                })
			},
			agreeHandle() {
				this.isAgree = !this.isAgree
			},
			login() {
				this.$refs.form.validate().then(res => {
					var url = 'api/myOneslft/addCustomerAddr';
					var data = this.model;
					if(this.pageType=='edit'){
						url = 'api/myOneslft/updateCustomerAddr'
						data.id = this.queryId;
					}
                    data.defaultAddr=this.isDefault?1:0
					this.$http(url,data, 'POST').then(res => {
						uni.showToast({
							title:'保存成功',
							icon:'none'
						})
						setTimeout(()=>{
							this.navTo('back');
						},1500)
					})
				}).catch(errors => {
				})
			},
			//选择地址回调
			setAddress(e) {
				this.address = e
				this.model.addrDetails = e.address+e.room
			},
			selectTag(index) {
				this.selectTagIndex = index
			},
			//选择地址
			chooseAddress() {
				let url = '/pagesB/ChooseAddress/index';
				if (this.address.title) {
					url += `?data=${JSON.stringify(this.address)}`;
				}
				this.navTo(url);
			},
			changeDefault(e) {
				this.isDefault = e
			}
		}
	}
</script>

<style scoped lang="scss">
	.page_wrap {
		min-height: calc(100vh - 74px);
		/deep/ .u-form-item{
			background-color: #fff;
			padding: 0 30upx;
			.address{
				.icon {
					/* #ifdef MP*/
					width: 28upx;
					height: 36upx;
					/* #endif */
				}
			}
		}
		.input_wrap {
			/deep/ .u-input {
				padding: 30upx 0 !important;
			}

			/deep/ .u-form-item__body {
				padding: 0;
			}
			/deep/ .u-form-item__body__left {
				flex-shrink: 0;
			}

			/* #ifdef H5 */
			/deep/ .input_item {
				width: 100% !important;
			}

			/* #endif */
			/deep/ .u-form-item__body__right__message {
				margin: 0 !important;
			}
				.icon {
					flex-shrink: 0;
					width: 28upx;
				}
				.address{
					flex-shrink: 0;
					/* #ifdef H5*/
					width: 100%;
					/* #endif */
				}
				.switch {
					width: 100%;
					padding:30upx 0;
					display: flex;
					justify-content: flex-end;
				}
				.label {
					color: #333;
					font-size: 28upx;
					width: 200upx;
				}

				.cen {
					color: #c0c4cc;
					font-size: 30upx;
					width: 440upx;
				}
				.list {
					.item {
						width: 86upx;
						height: 38upx;
						line-height: 38upx;
						text-align: center;
						border-radius: 2upx;
						color: #aaa;
						font-size: 24upx;
						border: 1px solid #aaa;
						margin-right: 20upx;
					}

					.select_tag {
						border-color: $base-color;
						color: $base-color;
					}
				}

				.moren {
					justify-content: space-between;
					font-size: 28upx;
					color: #333;
				}

				.m_s {
					color: #aaa;
					font-size: 24upx;
				}
			.c_view {
				height: 108upx;
				position: relative;

				.iconfont {
					position: absolute;
					right: 30upx;
				}
			}

			.c_view.after {
				&::after {
					content: "";
					display: block;
					position: absolute;
					bottom: 0;
					width: 91%;
					height: 2upx;
					background-color: #dadbde;
				}
			}
		}

		.btn_default {
			width: 93%;
			position: fixed;
			bottom: 40upx;
			left: 3.5%;
		}

	}
</style>
