import store from '@/store'
import cache from './cache'
import {
	msg
} from './util'

let baseUrl='http://47.96.98.41:9889/customer-api/'


export const request = (url,data,method)=>{
	return new Promise((resolve, reject) => {
		uni.request({
			url:baseUrl+url,
			data:data,
			header:{
				'token':uni.getStorageSync('token') || ''
                // 'content-type':'application/x-www-form-urlencoded'
			},
			method:method || 'GET',
			success: (res) => {
                if( Number(res.data.code) === 0 ){
                    resolve(res.data.data)
                }else if(Number(res.data.code) === 10021 || Number(res.data.code) === 10020 ){
                    uni.showToast({
                        title:'登录过期，请重新登录',
                        icon:'none'
                    })
                    setTimeout(()=>{
                        uni.navigateTo({
                            url:'/pages/Login/Login'
                        })
                    },1500)
                }else{
                    uni.showToast({
                        title:res.data.msg || '请求失败',
                        icon:'none'
                    })
                }
			},
			fail:function(err){
				uni.hideLoading()
				reject(err)
			}
		})
	
	})
}
