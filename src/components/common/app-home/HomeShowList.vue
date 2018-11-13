<template>
    <div class="homeshowlist">
        <div class="homeshowlist__title">
            热门演出
            <div class="homeshowlist__title--right"></div>
        </div>
        <div class="homeshowlist__body">
            <home-show-list-item
                v-for = "info in homeshowlistitemInfo"
                :key="info.id"
                :info = "info"
            ></home-show-list-item>
        </div>
        <p class="homeshowlist__footer">
            查看全部演出&nbsp;>
        </p>
    </div>
</template>

<script>
import HomeShowListItem from '@c/common/app-home/HomeShowListItem'
export default {
    components:{
        HomeShowListItem
    },
    data () {
        return {
            homeshowlistitemInfo: []
        }
    },
    async beforeCreate () {
        let result = await this.$http({
            url: "/jucheng/index/hotsShowList",
            method: "post",
            react: false
        })
        this.homeshowlistitemInfo = result
    }
    
}
</script>

<style lang="scss">
    .homeshowlist{
        .homeshowlist__title{
            padding: .266667rem .333333rem .133333rem;
            font-size: .48rem;
            color: rgb(51, 51, 51);
            font-weight: bold;
            .homeshowlist__title--right{
                height: .48rem;
                width: .48rem;
                background: url(https://m.juooo.com/public/basic/Home/app/app-juooo5/images/index/icon-palace.png) center no-repeat;
                background-size: 100%;
                float: right; 
            }
        }
        .homeshowlist__body{
            padding: 0 .333333rem;
            overflow: hidden;
        }
        .homeshowlist__footer{
            margin: .666667rem auto 1.6rem;
            width: 3.173333rem;
            height: .773333rem;
            border: 1px solid rgb(230, 230, 230);
            line-height: .773333rem;
            text-align: center;
            font-size: .32rem;
            color: rgb(102, 102, 102);
        }
    }
</style>