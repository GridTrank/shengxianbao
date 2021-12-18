<template>
	<view class="page_wrap">
		<view class="input_wrap mt20">
			<u--form ref='form' :model="model" >
				<u-form-item prop="account">
					<view class="input_item">
						<u-input max placeholder='请输入名称' border='bottom' v-model="model.account">
							<template slot="prefix">
								<text class=" f28-c333">名称 <text class="xing">*</text> </text>
							</template>
						</u-input>
					</view>
				</u-form-item>
				<u-form-item prop="type">
					<view class="input_item " @click="$refs.jPicker.pickerVisable=true">
						<u-input disabled  placeholder='请选择分类' border='none' v-model="type">
							<template slot="prefix">
								<text class=" f28-c333">分类 <text class="xing">*</text></text>
							</template>
							<template slot="suffix">
								<text class="iconfont icon-jinru"></text>
							</template>
						</u-input>
					</view>
				</u-form-item>
			</u--form>
		</view>
		
		<view class="btn_default" @click="submit">
			下一步
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
				columns:[{label:'仓库1',value:1},{label:'仓库2',value:2}],
				isDefault:true,
				type:''
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
				this.navTo('./fillIn2')
			},
			confirm(e){
				this.type=e.label
			}
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
	

	.btn_default{
		width: 93%;
		margin: auto;
		margin-top: 220upx;
	}


}
</style>
