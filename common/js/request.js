import store from '@/store'
import cache from './cache'
import {
	msg
} from './util'


//云函数映射
const moduleMap = {
	user: 'mix-user',
	payment: 'mix-order',
	order: 'mix-order',
	smsCode: 'mix-sms',
	address: 'mix-address',
	live: 'mix-live',
	coupon: 'mix-coupon'
}

/**
 * @param {String} module  
 * @param {String} operation  
 * @param {Object} data 请求参数
 * @param {Object} ext 附加参数
 * @param {Number} ext.cache 数据缓存时间，秒
 */
export const request = (module, operation, data={}, ext={})=>{
	return new Promise((resolve, reject) => {
		const cloudFnName = moduleMap[module] || 'mix-uniapp';
		if(ext.cache > 0){
			const cacheResult = cache.get(cloudFnName + '-' + module+ '-' +operation);
			if(cacheResult !== false && cacheResult.status !== 0){
				resolve(cacheResult);
				return;
			}
		}
	
	})
}
