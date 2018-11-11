<template>
    <div class="home-body">
        <nav-swiper></nav-swiper>
        <div class="activities">
            <div class="activities--top">
                <div class="activities--top__item"
                    v-for = "data in activities_top"
                    :key="data.id"
                >
                    <div class="top__item__picture">
                        <img :src = "data.img" alt="">
                    </div>
                    <p class="top__item__title">{{data.title}}</p>
                </div>
            </div>
            <div class="activities--bottom">
                <div class="activities--bottom__item"
                    v-for = "data in activities_bottom"
                    :key="data.id"
                >
                    <img :src = "data.img" alt="">
                    <p class="bottom__item__title">{{data.title}}</p>
                </div>
            </div>
        </div>
        <seckill-swiper></seckill-swiper>
        <show-swiper></show-swiper>
        <home-show-list></home-show-list>
    </div>
</template>

<script>
import NavSwiper from '@c/common/app-home/NavSwiper'
import SeckillSwiper from '@c/common/app-home/SeckillSwiper'
import ShowSwiper from '@c/common/app-home/ShowSwiper'
import HomeShowList from '@c/common/app-home/HomeShowList'
export default {
    components:{
        NavSwiper,
        SeckillSwiper,
        ShowSwiper,
        HomeShowList
    },
    data(){
        return {
            activities_top:[
                { id:1, img:'http://image.juooo.com/group1/M00/01/9B/rAoKmVvFUxWAVCq7AAA1AYjHYo4689.png', title:'演唱会' },
                { id:2, img:'http://image.juooo.com/group1/M00/02/45/rAoKNVvFUyCATRKeAAAs7TXa0as743.png', title:'音乐会' },
                { id:3, img:'http://image.juooo.com/group1/M00/02/45/rAoKNVvFUyiAJYdkAAAznnkz53A336.png', title:'舞台剧' },
                { id:4, img:'http://image.juooo.com/group1/M00/01/9B/rAoKmVvFUzCANA78AAAuNmAUVOY761.png', title:'音乐剧' },
                { id:5, img:'http://image.juooo.com/group1/M00/02/45/rAoKNVvFUzmASY4pAAAm76AQAHw370.png', title:'儿童' }
            ],
            activities_bottom:[
                { id:1, img:'http://image.juooo.com/group1/M00/02/47/rAoKNVvIIbGAD-K0AAAOH9v_NJM654.png', title:'演出日历' },
                { id:2, img:'http://image.juooo.com/group1/M00/01/9D/rAoKmVvIIb2ALd7KAAAFL7b1wtg147.png', title:'聚特惠' },
                { id:3, img:'http://image.juooo.com/group1/M00/02/47/rAoKNVvIIcWAFU2WAAAJASjVCNQ181.png', title:'学生专区' },
                { id:4, img:'http://image.juooo.com/group1/M00/01/9D/rAoKmVvIIc2AR3T7AAAGkekOAEY845.png', title:'欢聚橙卡' }
            ]
        }
    }
    
}
</script>

<style lang="scss">
    .home-body{
        padding: 1.16rem 0 0;
        .activities{
            height: 5.026667rem;
            width: 100%;
            padding: .266667rem .333333rem;
            .activities--top{
                height: 2.626667rem;
                padding: .36rem 0;
                display: flex;
                justify-content: space-between;
                box-shadow: 0.10667rem 0.10667rem 0.21333rem rgba(178, 178, 178, 0.1);
                .activities--top__item{
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    .top__item__picture{
                        height: 1.4rem;
                        width: 1.4rem;
                    }
                    .top__item__title{
                        font-size: .32rem;
                        color: rgb(51, 51, 51);
                        text-align: center;
                    }
                }
            }
            .activities--bottom{
                padding: .533333rem 0;
                display: flex;
                justify-content: space-between;
                .activities--bottom__item{
                    position: relative;
                    width: 2.186667rem;
                    height: 1.32rem;
                    img{
                        width: 2.186667rem;
                        height: 1.32rem;
                    }
                    .bottom__item__title{
                        position: absolute;
                        bottom: 0;
                        top: 0;
                        margin: 0 auto;
                        text-align: center;
                        line-height: 1.32rem;
                        font-size: .373333rem;
                        color: rgb(255, 255, 255);
                    }
                }
            }
        }
    }
</style>