<template>
    <div class="home-header">
        <router-link tag = "div" :to = "{ name: 'cities' }" class="home-header--left">
            <img src="https://m.juooo.com/public/basic/Home/app/app-juooo5/images/index/location.png" alt="">
            <span>{{chunks.city.cityName}}</span>
        </router-link>
        <div class="home-header--right">
            搜索演出、艺人或场馆
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
// import { CHANGE_CITY } from '@/store/chunks/mutation-type'
// import { CHANGE_CITY } from '@/store/chunks/mutation-type'

export default {
    computed: mapState(['chunks']),
}
</script>

<style lang="scss">
    .home-header{
        box-sizing: border-box;
        height: 1.16rem;
        width: 100%;
        padding: 0 .4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 5;
        background: #fff;
        .home-header--left{
            flex: 0 0 auto;
            width: auto;
            padding: 0 .8rem 0 0;
            display: flex;
            align-items: center;
            img{
                height: .453333rem;
                width: .373333rem;
                margin-right: .066667rem;
            }
            span{
                color:#262626;
                font-size: .373333rem;
                line-height: 1.16rem;
                white-space: nowrap;
            }
        }
        .home-header--right{
            flex: 1 1 auto;
            height: .8rem;
            line-height: .8rem;
            padding-left: .826667rem;
            font-size: .32rem;
            color: #b3b3b3;
            background: #f0f0f0 url(https://m.juooo.com/public/basic/Home/app/app-juooo5/images/index/search.png) no-repeat 20px center;
        }
    }
</style>