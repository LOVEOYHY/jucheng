<template>
    <div class="applistbody">
        <div class="topbox"></div>
        <div
            ref = "root" 
            class="listbody"
        >
            <div class="listbody__content">
                <list-body-item
                    v-for = "(info,index) in listbodyInfo"
                    :key="index"
                    :info = "info"
                ></list-body-item>
            </div>
        </div>
        <div class="bottombox"></div>
    </div>
</template>

<script>
import qs from 'qs'
import { mapState } from 'vuex'
import ListBodyItem from '@c/common/app-list/ListBodyItem'
import AppEmpty from '@c/layout/AppEmpty'
import scroll from '@util/scroll'
export default {
    props: ['category'],
    data () {
        return {
            listbodyInfo: [],
            page: 1,
            // hasMore: true
            // type: ''
        }
    },
    watch: {
        category: { // 监听类型变化，如果类型变化之后
            immediate: true,
            handler () {
                this.listbodyInfo = [] // 清空当前的数据
                // this.hasMore = true // 重新更多
                this.page = 1 // 重置页数
                this.getListInfo()
            }
        }
    },
    methods: {
        backTop () {
            this.scroll.scrollTo(0,0,200)
        },
        async getListInfo () {

            // if ( !this.hasMore ) return false;

            let result = await this.$http({
                url: '/jucheng/Show/getShowList', 
                method: 'post',
                data: qs.stringify({
                    // caid: this.navInfo.item.caid,
                    city_id: this.$store.state.chunks.city.cityId,
                    page: this.page,
                    category: this.category
                }),
                loading: true
            })
            
            // if ( result.total - this.page - 1 ) {}

            this.page ++
            // console.log(result.list)
            this.listbodyInfo = this.listbodyInfo.concat(result.list)
        }
    },
    components: {
        ListBodyItem,
        AppEmpty
    },
    mounted () {
        // console.log(this.category)
        this.scroll = scroll({
           el: this.$refs.root,
           handler: this.getListInfo.bind(this) 
        })
    }
}
</script>

<style lang="scss">
    .applistbody{
        height: 100%;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        .topbox{
            height: 2.36rem;
            background-color: rgb(242, 242, 242);
        }
        .bottombox{
            height: 1.333333rem;
            background-color: rgb(242, 242, 242);
        }
        .listbody{
            height: 100%;
            // margin-top: 2.36rem;
            // padding: 2.36rem 0 1.333333rem;
            flex: 1 1;
            overflow: hidden;
                .listbody__content{
                    box-sizing: border-box;
                    padding: 0 .4rem;
                    background-color: #fff;
                    overflow-y: auto;
                }
            }
        }
            .mint-indicator-wrapper{
                width: auto!important;
            }
    
</style>