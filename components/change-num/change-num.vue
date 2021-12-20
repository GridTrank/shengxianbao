<template>
	<view class="num_wrap row">
		<view class="btn left" @click="change(1)">
			-
		</view>
		<u-input placeholder='' border='none' v-model="num"></u-input>
		<view class="btn right" @click="change(2)">
			+
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			index:{
				type:Number,
				default:0
			}
		},
		data(){
			return{
				num:0
			}
		},
		watch:{
			'num':function(val){
				this.$emit('changeNumResult',val,this.index)
			}
		},
		methods:{
			change(val){
				if(val==1){
					if(this.num>0){
						this.num--
					}
				}else{
					this.num++
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.num_wrap{
		/deep/ .uni-input-input{
			width: 50upx;
			padding:  10upx;
			background-color: #ECECEC;
		}
		/deep/ input{
			width: 50upx;
			background-color: #ECECEC;
		}
		.btn{
			width: 50upx;
			background-color: #ECECEC;
			text-align: center;
			height: 48upx;
			line-height: 48upx;
		}
		.left{
			margin-right: 10upx;
		}
		.right{
			margin-left: 10upx;
		}
	}
</style>
