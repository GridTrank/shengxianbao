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
			
			method:method || 'GET',
			success: (res) => {
				console.log(res)
			},
			fail:function(err){
				uni.hideLoading()
				reject(err)
			}
		})
	
	})
}
