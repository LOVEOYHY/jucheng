<template>
    <div class="home-header">
        <div class="home-header--left">
            <img src="https://m.juooo.com/public/basic/Home/app/app-juooo5/images/index/location.png" alt="">
            <span>全国</span>
        </div>
        <div class="home-header--right">
            搜索演出、艺人或场馆
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .home-header{
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
            flex-grow: 0 0 auto;
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
            flex-grow: 1 1 auto;
            height: .8rem;
            line-height: .8rem;
            padding-left: .826667rem;
            font-size: .32rem;
            color: #b3b3b3;
            background: #f0f0f0 url(https://m.juooo.com/public/basic/Home/app/app-juooo5/images/index/search.png) no-repeat 20px center;
        }
    }
</style>