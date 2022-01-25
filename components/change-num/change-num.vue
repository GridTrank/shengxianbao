<template>
	<view class="num_wrap row">
		<view class="btn left" @click="change(1)">
			-
		</view>
		<u-input border='none' v-model="num" @blur="change(3)"></u-input>
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
			},
			num:{
				type:Number|String,
				default:0
			},
			
		},
		data(){
			return{
			}
		},
		
		methods:{
			change(val){
				if(val==1){
					if(this.num>0){
						this.$emit('changeNumResult','sub',this.index,)
					}
				}else if(val==2){
					this.$emit('changeNumResult','add',this.index)
				}else{
					this.$emit('changeNumResult','',this.index,this.num)
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
