<template>
    <view class="page_wrap">
        <view class="list" >
            <view class="item row jc_sa">
                <text class="f24-c333">操作内容</text>
                <text class="f24-c333">操作人</text>
                <text class="f24-c333">创建时间</text>
            </view>
            <view class="item row jc_sa mt20" v-for="(item,index) in list" :key="index">
                <text class="f24-c999">{{item.remark}}</text>
                <text class="f24-c999">{{item.createName}}</text>
                <text class="f24-c999">{{item.createDate}}</text>
            </view>
        </view>
		
		<template v-if="list.length<=0">
			<no-data></no-data>
		</template>
    </view>
</template>

<script>
    export default{
        data(){
            return{
                list:[]
            }
        },
		onLoad(e) {
			this.getData(e.id,e.pageUrl)
		},
		methods:{
			getData(id,url){
				let that=this
				that.$http(url,{id}).then(res=>{
					that.list=res.infoLogList
				})
			}
		}
    }
</script>

<style scoped lang="scss">
    .page_wrap{
        padding:30upx;
        .list{
            background:#fff;
            padding: 30upx 0;
            .item{
                text{
                    width: 20%;
                    white-space: normal;
                    display: block;
                }
            }
        }
    }
</style>
