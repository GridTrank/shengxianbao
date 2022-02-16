<template>
	<view class="page_wrap">
		<u-form labelPosition="top" labelWidth="auto" :model="userInfo" :rules="rules" ref="feedback">
			<u-form-item labelPosition="top" label="请描述您遇到的问题（必填）" prop="userInfo.content"
				ref="content">
				<u--textarea class="mt10 textarea" height="100" border="none" count maxlength="20"  v-model="userInfo.content" placeholder="描述你的问题"></u--textarea>
			</u-form-item>
			<u-form-item class="mt20" labelPosition="top" label="请上传凭证（非必填）不超过3张" prop="userInfo.fileList"
				ref="fileList">
				<u-upload class="mt10" :fileList="userInfo.fileList" multiple :maxCount="3">
					<view class="upload_icon">
						<span class="icon">+</span>
						<span>上传图片</span>
					</view>
				</u-upload>
			</u-form-item>
		</u-form>
		<u-form class="mt20" labelPosition="left" labelWidth="auto" :labelStyle="{height:'60upx'}" :model="userInfo" :rules="rules" ref="feedback">
			<u-form-item label="联系人（必填）" prop="userInfo.name" borderBottom ref="name">
				<u--input class="item" v-model="userInfo.name" placeholder="请输入联系人" border="none"></u--input>
			</u-form-item>
			<u-form-item label="联系电话（必填）" prop="userInfo.phone" @click="" ref="item1">
				<u--input class="item" v-model="userInfo.phone" placeholder="请输入联系电话" border="none"></u--input>
			</u-form-item>
		</u-form>
		<view class="btn_wrap">
			<view class="btn">提交</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {
					fileList: [],
					phone: '',
					name: '',
					content: ''
				},
				rules: {
					'userInfo.content': {
						type: 'string',
						required: true,
						message: '请描述您遇到的问题',
						trigger: ['change']
					},
					'userInfo.name': {
						type: 'string',
						required: true,
						message: '请填写联系人',
						trigger: ['change']
					},
					'userInfo.phone': {
						type: 'string',
						required: true,
						message: '请填写联系电话',
						trigger: ['change']
					},
				},
			};
		},
		onLoad(e) {

		},
		methods: {

		},

	}
</script>

<style lang="scss">
	.page_wrap {
		padding-top: 10upx;
		padding-bottom: 180upx;
		.btn_wrap {
			position: fixed;
			width: 100%;
			height: 160upx;
			background-color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			bottom: -.5px;
			left: 0;
			.btn{
				display: flex;
				justify-content: center;
				align-items: center;
				background: linear-gradient(136deg, #F87523 0%, #FD1D20 100%);
				width: 688upx;
				height: 100upx;
				color: #fff;
				font-size: 36upx;
				border-radius: 200upx;
			}
		}
		.u-form {
			.u-form-item  {
				background-color: #fff;
				padding: 0 30upx;
				.u-form-item__body{
					padding: 0 30upx;
					/* #ifdef MP-WEIXIN */
					padding: 30upx 0;
					/* #endif */ 
				}
			}
			.textarea{
				padding:0;
				.u-textarea__count {
					color: #333;
					font-size: 28upx;
				}
			}
			.item{
				height: 60upx;
			}
			.upload_icon {
				width: 200upx;
				height: 200upx;
				box-sizing: border-box;
				border:.5px dashed #CECECE;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				color: #9FA4AE;
				font-size: 24upx;
				.icon {
					font-size: 46upx;
				}
			}
		}
		
	}
</style>
