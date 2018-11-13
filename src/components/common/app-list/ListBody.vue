<template>
    <div class="listbody">
        <div class="listbody__content">
            <list-body-item
                v-for = "info in listbodyInfo"
                :key="info.id"
                :info = "info"
            ></list-body-item>
        </div>
    </div>
</template>

<script>
import qs from 'qs'
import ListBodyItem from '@c/common/app-list/ListBodyItem'
export default {
    components: {
        ListBodyItem
    },
    data () {
        return {
            listbodyInfo: []
        }
    },
    async beforeCreate () {
        let result = await this.$http({
            url: '/jucheng/Show/getShowList',
            method: 'post',
            data: qs.stringify({
                page: 1,
            }),
            react: false
        })
        this.listbodyInfo = result.list
    }
}
</script>

<style lang="scss">
    .listbody{
        background-color: rgb(242, 242, 242);
        padding: 2.36rem 0 1.333333rem;
        .listbody__content{
            box-sizing: border-box;
            padding: 0 .4rem;
            background-color: #fff;
        }
    }
</style>