<template>
    <view class="page_wrap">
        <view class="type_list row mt20">
            <view 
            v-for="(item,index) in typeList"
            :key="index"
            @click="navTo('./List?type='+item.value)"
            class="type_item column">
                <text class="iconfont icon-tongji"></text>
                <text>{{item.label}}</text>
            </view>
        </view>
        <view class="charts-box mt20">
            <view class="title f32-c333">订货统计</view>
            <qiun-data-charts type="ring" :chartData="chartData" background="none" />
        </view>
        
        <view class="mt20 charts-c2">
            <view class="title f32-c333">商品订货量TOP统计</view>
            <qiun-data-charts
                type="column"
                :chartData="chartData1"
                background="none"
              />
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                typeList:[
                    {
                        label:'采购明细',
                        value:1,
                    },{
                        label:'商品汇总',
                        value:2,
                    },{
                        label:'分类汇总',
                        value:3,
                    }
                ],
                chartData: {
                    categories: [],
                    series: [{
                        "data": [{
                                "name": "蔬菜",
                                "value": 50
                            },
                            {
                                "name": "水果",
                                "value": 30
                            },
                            {
                                "name": "冻品",
                                "value": 20
                            },
                            {
                                "name": "海鲜",
                                "value": 18
                            },
                            {
                                "name": "零食",
                                "value": 8
                            },
                            {
                                "name": "其他",
                                "value": 8
                            }
                        ]
                    }],
                },
                chartData1:{
                    "categories": [
                        "2016",
                        "2017",
                        "2018",
                        "2019",
                        "2020",
                        "2021"
                    ],
                    "series": [
                        {
                            "name": "目标值",
                            "data": [
                                35,
                                36,
                                31,
                                33,
                                13,
                                34
                            ]
                        }
                    ]
                }
            }
        },
        methods: {

        }
    }
</script>

<style scoped lang="scss">
    /* 请根据需求修改图表容器尺寸，如果父容器没有高度图表则会显示异常 */
    
    .page_wrap{
        .type_list{
            background-color: #fff;
            padding: 40upx 0;
            justify-content: space-around;
            .type_item{
                color: $base-color;
                font-size: 24upx;
                .iconfont{
                    font-size:38upx !important;
                }
            }
        }
        .charts-box {
            height: 350px;
            background-color: #fff;
            .title{
                padding: 30upx;
                border-bottom: 2upx solid #f1f1f1;
            }
        }
        .charts-c2{
            height: 930upx !important;
            background-color: #fff;
            padding-bottom: 160upx;
            .title{
                padding: 30upx;
                border-bottom: 2upx solid #f1f1f1;
            }
        }
    }
</style>
