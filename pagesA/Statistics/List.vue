<template>
    <view class="page_wrap">
        <view class="tab_list mt10 row">
            <view 
            :class="['tab_item', tabActive==index && 'tab_active']" 
            v-for="(item,index) in tabList" 
            :key="index"
            @click="tabHandle(item,index)">
               {{item.name}}
            </view>
        </view> 
        
        <view class="data_wrap row">
            <view class="data_item column">
                <text class="t1 b">878</text>
                <text class="t2">采购笔数</text>
            </view>
            <view class="data_item column">
                <text class="t1 b">¥1</text>
                <text class="t2">单品数量</text>
            </view>
            <view class="data_item column">
                <text class="t1 b">878</text>
                <text class="t2">订货金额</text>
            </view>
        </view>
        
        <view class="tab_list date mt10 row">
            <view 
            :class="['tab_item', dateActive==index && 'date_active']" 
            v-for="(item,index) in dateTypeList" 
            :key="index"
            @click="dateHandle(item,index)">
               {{item.name}}
            </view>
        </view>
        
        <view class="list">
            <view class="item mt10" v-for="(item,index) in datas" :key="index">
                <template v-if="!item.show">
                    <view class="f28-c333">
                        名称
                    </view>
                    <view class="row mt20 jc_sa">
                        <text class="f24-c999">商品数量：30</text>
                        <text class="f24-c999">订货金额：<text class="f28-dc">¥20000</text></text>
                    </view>
                    <view class="more" @click="showMore(item,true)">
                        <text class="iconfont icon-zhankai"></text>
                    </view>
                    
                </template>
                
                <template v-else>
                    <view class="row jc_sb i1">
                        <text class="f28-c333">名称</text>
                        <text class="f24-c999">1231</text>
                    </view>
                    <view class="row jc_sb i2 mt10">
                        <text class="f24-c999">1包约125g</text>
                        <text class="f24-c999">1231</text>
                    </view>
                    <view class="row jc_sb i3 mt10">
                        <view class="left ">
                            <view class="f24-c999 row">
                                <text class="bg_style1">斤</text>  * 30
                            </view>
                            <view class="f24-c999 mt10 row">
                                <text  class="bg_style1">包</text> * 30
                            </view>
                        </view>
                        <text class="f24-c999">订单金额： <text class="f28-dc">¥300</text> </text>
                    </view>
                    <view class="row jc_sb i4 mt10">
                        <text class="f24-c999">2021-12-12</text>
                        <text class="bg_style1 f24-dc">查看订单</text>
                    </view>
                   <!-- <view class="more" @click="showMore(item,false)">
                        <text class="iconfont icon-shang"></text>
                    </view> -->
                </template>
                
            </view>
        </view>
    </view>
</template>

<script>
    export default{
        data(){
            return{
                tabList:[
                    {
                        name:'采购明细',
                        value:1
                    },
                    {
                        name:'商品汇总',
                        value:2
                    },
                    {
                        name:'分类汇总',
                        value:3   
                    }
                ],
                dateTypeList:[
                    {
                        name:'今日',
                        value:1
                    },
                    {
                        name:'昨日',
                        value:2
                    },
                    {
                        name:'近7天',
                        value:3   
                    },
                    {
                        name:'筛选',
                        value:4   
                    }
                ],
                tabActive:0,
                dateActive:0,
                datas:[
                    {show:false},
                    {show:false},
                    {show:false},
                ]
            }
        },
        onLoad(e) {
           console.log(e) 
        },
        methods:{
            tabHandle(item,index){
                this.tabActive=index
            },
            dateHandle(item,index){
                if(index==3){
                    this.navTo('./Screen')
                }else{
                    this.dateActive=index
                }
            },
            showMore(item,val){
                item.show=val
            }
        }
        
    }
</script>

<style scoped lang="scss">
    .page_wrap{
        .tab_list{
            background-color: #fff;
            justify-content: space-around;
            padding: 20upx 0;
            .tab_item{
                color: #333;
                font-size: 28upx;
                position: relative;
                padding-bottom: 14upx;
            }
            .tab_active{
                color: $base-color;
                padding-bottom: 10upx;
                border-bottom: 4upx solid $base-color;
            }
            .date_active{
                color: $base-color;
            }
        }
        .date{
            .tab_item{
                padding: 0;
            }
        }
        .data_wrap{
            background-color: #fff;
            justify-content: space-around;
            padding:20upx;
            .data_item{
                color: $base-color;
                .t1{
                    font-size: 42upx;
                }
                .t2{
                    margin-top: 20upx;
                    font-size: 24upx;
                }
            }
        }
       .list{
           .item{
               background-color: #fff;
               padding: 30upx;
               position: relative;
               .row{
                   .bg_style1{
                       padding: 4upx 12upx;
                       margin-right: 10upx;
                   }
               }
               .more{
                   position: absolute;
                   right: 30upx;
                   bottom: 40upx;
               }
               
           }
       } 
    }
</style>
