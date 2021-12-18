<template>
	<view class="page_wrap">
		<view class="input_wrap mt20">
			<u--form ref='form' :model="model" :rules="rules" >
				<u-form-item prop="account">
					<view class="input_item">
						<u-input max placeholder='请填写商品品牌，例：百事' border='bottom' v-model="model.account">
							<template slot="prefix">
								<text class=" f28-c333">品牌</text>
							</template>
						</u-input>
					</view>
				</u-form-item>
				
				<u-form-item prop="account">
					<view class="input_item">
						<u-input max placeholder='请填写商品规格，例：250ml/瓶' border='bottom' v-model="model.account">
							<template slot="prefix">
								<text class=" f28-c333">规格</text>
							</template>
						</u-input>
					</view>
				</u-form-item>
		
				
				<u-form-item prop="name">
					<view class="input_item ">
						<u-input   placeholder='请填写编码' border='bottom' v-model="model.name">
							<template slot="prefix">
								<text class=" f28-c333">编码 </text>
							</template>
							<template slot="suffix">
								<text class="iconfont icon-saoyisao"></text>
							</template>
						</u-input>
					</view>
				</u-form-item>
				
				<u-form-item prop="account">
					<view class="input_item">
						<u-input max placeholder='请填写预计一个月的供货量' border='none' v-model="model.account">
							<template slot="prefix">
								<text class=" f28-c333">月供货量</text>
							</template>
						</u-input>
					</view>
				</u-form-item>
			</u--form>
		</view>
		
		<view class="list mt20">
			<view class="item ">
				<view class="left ">
					备注
				</view>
				<u--textarea placeholder="请填写备注，例：品种、口味、产地等" v-model="model.remark" border="none"></u--textarea>
			</view>
		</view>
		
		<view class="list mt20">
			<view class="item ">
				<view class="left ">
					上传图片
				</view>
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
		
		<view class="btn_default" @click="submit">
			提交
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
	</view>
</template>

<script>
	import {checkStr} from '@/common/js/util'
	export default {
		data() {
			return {
				tips:'',
				canClick:false,
				model:{
					
				},
				fileList:[],
				columns:[{label:'仓库1',value:1},{label:'仓库2',value:2}],
				isDefault:true,
				rules:{
					account:[
						{required:true,message:'请输入子账户名称',trigger:'blur'}
					],
					phone:[
						{required:true,validator:this.phoneRule,trigger:'blur'}
					],
					password:[
						{required:true,validator:this.passWordRule,trigger:'blur'}
					],
					name:[
						{required:true,message:'请输入联系人姓名',trigger:'blur'}
					]
				},
				isAgree:false
			};
		},
		watch:{
			
		},
		methods:{
			phoneRule(rule,value,cb){
				if(!value || !checkStr(value, 'mobile')){
					cb(new Error('请输入正确的手机号码'))
				}
				cb()
			},
			passWordRule(rule,value,cb){
				if(!value || !checkStr(value, 'pwd')){
					cb(new Error('密码为8-16位，须包含数字、字母、符号'))
				}
				cb()
			},
			changeDefault(e){
				this.isDefault=e
			},
			submit(){
				this.navTo('./AddGood')
			},
			confirm(e){
				console.log(e)
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
		}
		
	}
</script>

<style scoped lang="scss">
.page_wrap{
	
	.input_wrap{
		background-color: #fff;
		padding:0 30upx;
		/deep/ .u-input{
			padding: 20upx 0 !important;
			background-color: #fff !important;
		}
		
		/deep/ .u-input__content__prefix-icon{
			width: 180upx !important;
		}
		/deep/ .input_item{
			width: 100% !important;
		}
		/deep/ .u-form-item__body__right__message{
			margin:0 !important;
		}
		.input_item{
			.label{
				color: #333;
				font-size: 32upx;
			}
			.iconfont{
				color: #d1d1d1;
			}
			.get_code{
				color: #FD4D00;
				font-size: 28upx;
			}
			.xing{
				color: $base-color;
			}
		}
		.status{
			height: 88upx;
		}
	}
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
			
			&:last-child{
				border:none
			}
		}
	}

	.btn_default{
		width: 93%;
		margin: auto;
		margin-top: 50upx;
		margin-bottom: 20upx;
	}


}
</style>
