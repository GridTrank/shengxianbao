<template>
	<u-popup :show="isShow" @close="isShow=false">
		<view class="password_wrap">
			<view class="title">
				<view class="close"><</view>
				<view>请输入支付密码</view>
			</view>
			<view class="password">
				<view class="num"  v-for="(item,index) in 6" :key="index">{{password.length > index ? '·':''}}</view>
			</view>
			<view class="keyboard">
				<view @click="key(item)" :class="['key',item.class]" v-for="(item,index) in keyboard" :key="index">
					<view class="value">{{item.value}}</view>
					<view class="dec">{{item.dec}}</view>
				</view>
			</view>
		</view>
	</u-popup>

</template>

<script>
	export default {
		props: {

		},
		data() {
			return {
				password:'',
				isShow: false,
				keyboard: [{
						value: 1,
					},
					{
						value: 2,
						dec: 'ABC'
					},
					{
						value: 3,
						dec: 'DEF'
					},
					{
						value: 4,
						dec: 'GHI'
					},
					{
						value: 5,
						dec: 'JKL'
					},
					{
						value: 6,
						dec: 'MNO'
					},
					{
						value: 7,
						dec: 'PQRS'
					},
					{
						value: 8,
						dec: 'TUV'
					},
					{
						value: 9,
						dec: 'WXYZ'
					},
					{
						class: 'center grey'
					},
					{
						value: 0,
						class: 'center'
					},
					{
						value: 'x',
						class: 'center del grey'
					}
				]
			}
		},
		watch: {

		},
		created() {},
		methods: {
			open() {
				this.isShow = true;
			},
			key(item){
				console.log(item.value)
				if(item.value == 'x'){
					this.password=this.password.substring(0,this.password.length-1)
				}else if(item.value !== undefined){
					this.password+=item.value;
					if(this.password.length == 6){
						this.isShow= false;
						this.$emit('passwordSub',this.password);
					}
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.password_wrap {
		background-color: #F9F9F9;

		.title {
			position: relative;
			text-align: center;
			height: 104upx;
			font-size: 36upx;
			line-height: 104upx;
			border-bottom: 1px solid #D4D4D4;

			.close {
				position: absolute;
				width: 104upx;
			}
		}

		.password {
			padding: 80upx 28upx 60upx;
			display: flex;

			.num {
				font-size: 130upx;
				flex: 1;
				height: 80upx;
				border: 1px solid #d4d4d4;
				border-right: none;
				display: flex;
				justify-content: center;
				line-height: 70upx;
				&:last-child {
					border-right: 1px solid #d4d4d4;
				}
			}
		}

		.keyboard {
			background-color: #FCFDFD;
			display: flex;
			flex-wrap: wrap;

			.key {
				box-sizing: border-box;
				border-bottom: 1px solid #d4d4d4;
				border-right: 1px solid #d4d4d4;
				width: 33.33%;
				height: 110upx;
				font-size: 48upx;
				display: flex;
				flex-direction: column;

				align-items: center;

				.dec {
					font-size: 24upx;
				}

				&.center {
					justify-content: center;
				}

				&.grey {
					background-color: #D4D4D4;
				}
			}
		}
	}
</style>
