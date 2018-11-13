<template>
    <div class="appdetails">
        <div class="appdetails__header">
            <i>《</i>
            <p>演出详情</p>
            <i>2</i>
        </div>
        <div class="appdetails__body">
            <div class="appdetails__body--poster">
                <div class="poster__picture">
                    <img :src = "info.pic" alt="">
                </div>
            </div>
            <div class="appdetails__body--info">
                <p>{{info.name}}</p>
                <p>时间：{{info.show_time}}</p>
                <p>场馆：{{info.city}}</p>
                <p>￥ {{info.price ? info.price : info.min_price + '-' + info.max_price}}</p>
                <div>欢聚橙卡：</div>
            </div>
            <div class="interval"></div>
            <div class="appdetails__body--discount">
                促销
            </div>
            <div class="interval"></div>
            <div class="appdetails__body--introduce">
                <h3>—演出介绍—</h3>
                <p>一棵大树爱上一个小男孩，小男孩每天来爬树、摘树叶、吃苹果……男孩很开心，大树也很开心。</p>
                <h4>查看详情&nbsp;4</h4>
            </div>
            <div class="interval"></div>
            <div class="appdetails__body--notice">
                <h3>—购票须知—</h3>
                <p>1.为避免快递配送不能及时到达，距演出开场时间少于3天不提供快递服务，您可以选择电子票或者在线支付后上门自取纸质票。（主办演出可在演出现场取票）。</p>
                <p>2.网上订购请提前选择您意欲购买的演出和票品价位，根据流程提示完成订票。</p>
                <p>3.成功下单后，我们将短信与你确认订单信息，如有任何疑问，请致电我们的客服热线：400-185-8666，客服人员将第一时间为您服务。</p>
                <p>4.因票品的特殊性，一经订购，不退不换，请订票前务必确认购买意向。</p>
                <p>
                    <span>入场须知：</span>
                    一人一票，凭票入场
                </p>
            </div>
            <div class="interval"></div>
        </div>
        <div class="appdetails__footer">
            <div>
                <i>1</i>
                <span>客服</span>
            </div>
            <p>立即购票</p>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return{
            info: this.$route.params
        }
    },
    // beforeCreate () {
    //     console.log(this.$route.params)
    // }

}
</script>

<style lang="scss">
    .appdetails{
        .appdetails__header{
            width: 100%;
            height: 1.173333rem;
            box-sizing: border-box;
            padding-left: .4rem;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 5;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #fff;
            i:first-of-type{
                width: 1.2rem;
                flex: 0 0 auto;
            }
            p{
                flex: 1 1 auto;
                line-height: 1.173333rem;
                text-align: center;
            }
            i:last-of-type{
                width: 1.133333rem;
                padding-right: .2rem;
                flex: 0 0 auto;
            }
        }
        .appdetails__body{
            padding-bottom: 1.333333rem;
            .interval{
                height: .293333rem;
                width: 100%;
                background-color: #EFEFEF;
            }
            .appdetails__body--poster{
                width: 100%;
                height: 6.933333rem;
                background-color: #865F3A;
                box-sizing: border-box;
                padding-top: 1.52rem;
                .poster__picture{
                    width: 3.573333rem;
                    height: 4.8rem;
                    padding: .08rem;
                    background-color: #fff;
                    // margin: 1.52rem auto 0;
                    margin: auto;
                    img{
                        height: 4.8rem;
                        padding: .08rem;
                    }
                }
            }
            .appdetails__body--info{
                width: 100%;
                box-sizing: border-box;
                padding: 0 .266667rem .36rem .4rem;
                p:first-of-type{
                    color: rgb(33, 33, 33);
                    font-size: .453333rem;
                    font-weight: bold;
                    margin-bottom: .333333rem;
                }
                p:nth-of-type(2),p:nth-of-type(3){
                    color: rgb(102, 102, 102);
                    font-size: .373333rem;
                    padding-bottom: .133333rem;
                }
                p:last-of-type{
                    color: #ff7919;
                    font-size: .48rem;
                    padding: .133333rem 0 .4rem;
                }
                div{
                    padding: .4rem 0 .2rem;
                    color: #999;
                    font-size: .346667rem;
                    border: 2px solid #D8D8D8;
                    border-left: 0;
                    border-right: 0;
                }
            }
            .appdetails__body--discount{
                height: 1.106667rem;
                padding: .266667rem .266667rem .2rem .4rem;
            }
            .appdetails__body--introduce{
                padding: 0 .266667rem 0 .4rem;
                h3{
                    padding-top: .6rem;
                    font-size: .426667rem;
                    color: rgb(33, 33, 33);
                    text-align: center;
                }
                p{
                    padding-top: .4rem;
                    font-size: .373333rem;
                    color: rgb(102, 102, 102);
                    line-height: .666667rem;
                }
                h4{
                    padding: .466667rem 0;
                    color: rgb(153,153,153);
                    font-size: .32rem;
                    text-align: center;
                }
            }
            .appdetails__body--notice{
                padding: 0 .266667rem 0 .4rem;
                h3{
                    padding: .6rem 0 .266667rem;
                    font-size: .426667rem;
                    color: rgb(33, 33, 33);
                    text-align: center;
                }
                p{
                    font-size: .373333rem;
                    color: rgb(102, 102, 102);
                    line-height: .666667rem;
                }
                p:last-of-type{
                    padding: .346667rem 0 .466667rem;
                    border-top: 2px solid #D8D8D8;
                    margin-top: .2rem;
                    span{
                        font-size: .346667rem;
                        color: #B0B0B0;
                    }
                }
            }
        }
        .appdetails__footer{
            width: 100%;
            background-color: #fff;
            height: 1.333333rem;
            box-sizing: border-box;
            border-top: 1px solid rgb(255, 255, 255);
            position: fixed;
            bottom: 0;
            left: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            div{
                width: 1.733333rem;
                flex: 0 0 auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                i{
                    width: .586667rem;
                    height: 38px;
                }
                span{
                    width: auto;
                }
            }
            p{
                flex: 1 1 auto;
                line-height: 1.333333rem;
                text-align: center;
                background-color: #FE781D;
                font-size: .453333rem;
                color: #fff;
            }
        }
    }
</style>


