export default {
	data() {
		return {
			page: 1, //页码
			limit: 10, //每页加载数据量
			loadingType: 1, //0加载前 1加载中 2没有更多
			isLoading: false, //刷新数据
			loaded: false, //加载完毕
			queryUrl: '',
			queryData: {},
			dataList: [],
		}
	},
	methods: {
		navTo(url, type, checkLogin = false) {
			this.$util.throttle(() => {
				if (!url) {
					return;
				}
				if (url == 'back') {
					uni.navigateBack()
					return
				}
				// 判断是否登录
				if (checkLogin) {
					uni.showToast({
						title: '请先登录',
						icon: 'none'
					})
					return
				}
				if (type == 'switch') {
					uni.switchTab({
						url: url
					})
				} else {
					uni.navigateTo({
						url: url
					})
				}

			}, 300)
		},
		getList() {
			return new Promise((resolve,reject)=>{
				let data = {
					page: this.page,
					limit: this.limit,
					...this.queryData
				}
				this.$http(this.queryUrl, data).then(res => {
					this.dataList = this.dataList.concat(res.list || res.data || [] ); 
					resolve(this.dataList)
				})
			})
			
		},
	},
}
