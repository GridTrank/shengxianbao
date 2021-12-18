<template>
	<view v-if="show" class="model_wrap" @click.event="cancel" >
		<view class="info " @click.stop="childHandle">
			<view class="con column">
				<view class="title f32-c333" v-if="title">{{title}}</view>
				<view class="sub_title f28-c999 mt20" v-if="subTitle">{{subTitle}}</view>
				<view class="content mt30">
					<u-input v-model="modelValue" border='surround'></u-input>
				</view>
			</view>
			
			<view class="btn_wrap row jc_sb mt20">
				<text class="btn cancel" @click.stop="cancel">取消</text>
				<text class="btn confirm" @click.stop="confirm">保存</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"uniModel",
		props:{
			show:{
				type:Boolean,
				default:false
			},
			title:String,
			subTitle:String
		},
		data() {
			return {
				modelValue:'',
			};
		},
		
		methods:{
			cancel(){
				this.$emit('cancelModel')
			},
			confirm(){
				this.$emit('confirmModel',this.modelValue)
				this.modelValue=''
			},
			childHandle(){
				
			}
		}
	}
</script>

<style scoped lang="scss">
.model_wrap{
	position: fixed;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.3);
	z-index: 999;
	.info{
		background-color: #fff;
		width: 570upx;
		border-radius: 16upx;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		.con{
			padding: 40upx;
		}
		.btn_wrap{
			border-top: 1px solid #EEEEEE;
			.btn{
				width: 50%;
				height: 90upx;
				line-height: 90upx;
				text-align: center;
				font-size: 32upx;
			}
			.cancel{
				border-right: 1px solid #EEEEEE;
				color: #242A36;
			}
			.confirm{
				color: $base-color;
			}
		}
	}
}
</style>
