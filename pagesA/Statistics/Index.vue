<template>
    <view>
        <view class="charts-box">
            <qiun-data-charts type="ring" :chartData="chartData" background="none" />
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
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
            }
        },
        methods: {

        }
    }
</script>

<style scoped lang="scss">
    /* 请根据需求修改图表容器尺寸，如果父容器没有高度图表则会显示异常 */
    .charts-box {
        width: 100%;
        height: 300px;
    }
</style>
