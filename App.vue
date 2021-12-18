<script>
	import Vue from 'vue'
	export default {
		onLaunch() {
			uni.getSystemInfo({
				success: e=> {
					this.initSize(e);
				}
			})
			this.initLogin();
		},
		methods: {
			//登录状态
			async initLogin(){
				const token = uni.getStorageSync('uniIdToken');
				if(token){
					this.$store.commit('setToken', {
						token
					});
				}
			},
			/**
			 * 存储设备信息 参考colorUI
			 * @param {Object} 
			 */
			initSize(e){
				const systemInfo = e;
				let navigationBarHeight;
				let custom = {};
				// #ifndef MP
				custom = {height: 36,width: 88};
				navigationBarHeight = 44;
				// #endif
				// #ifdef MP
				custom = wx.getMenuButtonBoundingClientRect();
				navigationBarHeight = custom.bottom + custom.top - e.statusBarHeight * 2;
				// #endif	
				systemInfo.custom = custom;
				systemInfo.navigationBarHeight = navigationBarHeight;
				Vue.prototype.systemInfo = systemInfo;
			},
			
		},
		onShow() {
		},
		onHide() {
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "@/uni_modules/uview-ui/index.scss";
	@import url("./common/css/common.scss");
	@import url("./common/css/icon.css");
	::-webkit-scrollbar{ display:none;}
</style>
