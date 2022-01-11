<template>
    <view class="page_wrap">
        <view class="list">
            <view class="item mt10" 
            @click="navTo('./Detail?id='+item.id+'&createName='+item.createName+'&createDate='+item.createDate)"
            v-for="(item,index) in dataList" :key="index">
                <view class="row jc_sb">
                    <text class="f28-c333">合同编号</text>
                    <text class="f28-c999">{{item.contractNo}}</text>
                </view>
                <view class="row jc_sb mt20">
                    <text class="f28-c333">合同标题</text>
                    <text class="f28-c999">{{item.contractTitle}}</text>
                </view>
                <view class="row jc_sb mt20">
                    <text class="f28-c333">创建人</text>
                    <text class="f28-c999">{{item.createName}}</text>
                </view>
                <view class="row jc_sb mt20">
                    <text class="f28-c333">创建时间</text>
                    <text class="f28-c999">{{item.createDate}}</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default{
        data(){
            return{
                
            }
        },
		onLoad() {
			this.queryUrl='api/contract/pageList'
			this.getList()
		},
		methods:{
			
		}
    }
</script>

<style scoped lang="scss">
    .page_wrap{
        .list{
            .item{
                background-color: #fff;
                padding: 30upx;
            }
        }
    }
</style>
