<template>
    <div class="applist">
        <header>
            <div class="listheader">
                <div class="listheader--top">
                    <router-link tag = "div" :to = "{ name: 'cities' }" class="listheader--top__location">
                        <span>{{chunks.city.cityName}}</span>
                        <i class="fa fa-angle-down fa-lg"></i>
                    </router-link>
                    <div class="listheader--top__input">
                        <p>
                            <i class="fa fa-search fa-lg"></i>
                            <span>搜索演出、艺人或场馆</span>
                        </p>
                    </div>
                    <div class="listheader--top__screen">
                        <i class="fa fa-filter fa-lg"></i>
                    </div>
                </div>
                <div class="listheader--bottom">
                    <Ul>
                        <li
                            v-for = "info in navInfo"
                            :key = "info.id"
                            @click = "category = info.category"
                            :class = "{choice: info.category === category}"
                        >{{info.name}}</li>
                    </ul>
                </div>
            </div>
        </header>
        <main>
            <list-body :category = "category"></list-body>
        </main>
        <footer>
            <app-footer></app-footer>
        </footer>
    </div>
</template>

<script>
// import ListHeader from '@c/common/app-list/ListHeader'
import ListBody from '@c/common/app-list/ListBody'
import AppFooter from '@c/layout/AppFooter'
import { mapState } from 'vuex'
// import { CHANGE_CITY } from '@/store/chunks/mutation-type'
export default {
    components: {
        // ListHeader,
        ListBody,
        AppFooter
    },
    computed: mapState(['chunks']),
    data () {
        return {
            navInfo : [
                {id: 1, name: '全部', category:0},
                {id: 2, name: '演唱会', category:35},
                {id: 3, name: '音乐会', category:36},
                {id: 4, name: '话剧歌剧', category:37},
                {id: 5, name: '儿童亲子', category:38},
                {id: 6, name: '音乐剧', category:79},
                {id: 7, name: '舞蹈芭蕾', category:86},
                {id: 8, name: '戏曲综艺', category:91},
                {id: 9, name: '展览', category:99},
            ],
            category: '' || 0
        }
    },
    mounted () {
        
    }
}
</script>

<style lang="scss">
    .applist{
       height: 100%;
       .listheader{
        width: 100%;
        height: 2.106667rem;
        box-sizing: border-box;
        padding: 0 .4rem;
        border-bottom: 1px solid rgb(230, 230, 230);
        background-color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 5;
        .listheader--top{
            width: 100%;
            height: 1.173333rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .listheader--top__location{
                width: 1.6rem;
                flex: 0 0 auto;
                span{
                    padding-right: .133333rem;
                }
            }
            .listheader--top__input{
                flex: 1 1 auto;
                text-align: center;
                display: flex;
                align-items: center;
                p{
                    width: 100%;
                    font-size: .32rem;
                    color: rgb(153, 153, 153);
                    height: .72rem;
                    border-radius: .36rem;
                    border: 1px solid rgb(235, 235, 235);
                    background-color: rgb(245, 245, 245);
                    line-height: .72rem;
                    span{
                        margin-left: .266667rem;
                    }
                }
            }
            .listheader--top__screen{
                width: .88rem;
                flex: 0 0 auto;
                display: flex;
                justify-content: flex-end;
            }
        }
        .listheader--bottom{
            height: .92rem;
            // display: flex;
            width: 100%;
            overflow: hidden;
            ul{
                height: 1rem;
                display: flex;
                width: auto;
                flex-wrap: nowrap;
                align-items: center;
                overflow-x: scroll;
                li{
                    padding: 0 .373333rem;
                    width: auto;
                    // float: left;
                    flex: 0 0 auto;
                    
                    &.choice{
                        font-weight: bold;
                        color: #ff7919;
                        border-bottom: 2px solid #ff7919;
                    }
                }
            }
        }
    }
    
    }
</style>
