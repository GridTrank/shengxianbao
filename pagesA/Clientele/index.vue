<template>
	<view class="page_wrap">
		<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
		<u--form class="from_wrap" :labelWidth="120" :labelStyle="{height:'60upx'}" :model="model1"
			ref="form1">
			<u-form-item label="客户名称" prop="userInfo.name" borderBottom ref="item1">
				<u--input class="from_item" v-model="model1.userInfo.name" border="none" placeholder="请输入客户名称">
				</u--input>
			</u-form-item>
			<u-form-item label="客户类型" prop="userInfo.sex" borderBottom @click="showSex = true; hideKeyboard()"
				ref="item1">
				<u--input class="from_item" v-model="model1.userInfo.sex" disabled disabledColor="#ffffff"
					placeholder="请选择客户类型" border="none"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>
			<u-form-item label="联系人" prop="userInfo.name" borderBottom ref="item1">
				<u--input class="from_item" v-model="model1.userInfo.name" border="none" placeholder="请输入联系人">
				</u--input>
			</u-form-item>
			<u-form-item label="联系电话" prop="userInfo.name" ref="item1">
				<u--input class="from_item" v-model="model1.userInfo.name" border="none" placeholder="请输入联系电话">
				</u--input>
			</u-form-item>
			<u-form-item class="mt20" label="客户地址参照物" prop="userInfo.sex" borderBottom
				@click="showSex = true; hideKeyboard()" ref="item1">
				<u--input class="from_item" v-model="model1.userInfo.sex" disabled disabledColor="#ffffff"
					placeholder="请选择客户地址参照物" border="none"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>
			<u-form-item label="详细地址" prop="userInfo.name" borderBottom ref="item1">
				<u--textarea class="textarea" height="50" v-model="model1.userInfo.name" placeholder="请输入详细地址或直接定位"
					border="none"></u--textarea>
				<image class="icon" @click="navTo('/pages/ChooseAddress/index')" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/icon_region.png"
					mode="widthFix"></image>
			</u-form-item>
			<u-form-item label="收货时间" prop="userInfo.sex" @click="showSex = true; hideKeyboard()" ref="item1">
				<u--input class="from_item" v-model="model1.userInfo.sex" disabled disabledColor="#ffffff"
					placeholder="请选择收货时间" border="none"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>
			<u-form-item class="mt20" labelPosition="top" prop="userInfo.sex" ref="item1">
				<view class="upload_wrap">
					<view class="f28-c333">上传营业执照</view>
					<view class="column">
						<u-upload class="mt40" :maxCount="1">
							<view class="upload_img">
								<span class="upload_icon">+</span>
								<view>点击拍摄/上传图片</view>
							</view>
						</u-upload>
					</view>
				</view>
			</u-form-item>
			<u-form-item class="mt20" label="邀请码" prop="userInfo.name" ref="item1">
				<u--input class="from_item" v-model="model1.userInfo.name" border="none" placeholder="请输入邀请码（选填）">
				</u--input>
			</u-form-item>
		</u--form>
		<view class="btn_wrap">
			<view class="btn">
				提交
			</view>
		</view>
		<u-action-sheet :show="showSex" :actions="actions" title="请选择性别" description="如果选择保密会报错"
			@close="showSex = false" @select="sexSelect">
		</u-action-sheet>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showSex: false,
				model1: {
					userInfo: {
						name: '',
						sex: '',
					},
				},
				actions: [{
						name: '男',
					},
					{
						name: '女',
					},
					{
						name: '保密',
					},
				],
				radio: '',
				switchVal: false
			};
		},
		methods: {
			sexSelect(e) {
				this.model1.userInfo.sex = e.name
				this.$refs.form1.validateField('userInfo.sex')
			},
		},
	};
</script>

<style scoped lang="scss">
	.page_wrap {
		padding-bottom: 250upx;
		.from_wrap {
			.u-form-item {
				padding: 0 30upx;
				background-color: #fff;
			}

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

			.icon {
				width: 28upx;
			}

			.from_item {
				height: 60upx;
			}
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
