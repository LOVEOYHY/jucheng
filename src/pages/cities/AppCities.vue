<template>
    <div class="appcitys">
        <div class="appcitys__header">
            <i @click = "back" class="fa fa-chevron-left fa-lg"></i>
            <p>切换城市</p>
        </div>
        <app-cities-content></app-cities-content>
    </div>
</template>

<script>
import AppCitiesContent from '@c/common/app-cities/AppCitiesContent'
export default {
    name: 'app-cities',
    components: {
        AppCitiesContent
    },
    methods: {
        back () {
            window.history.go(-1)
        }
    }
}
</script>

<style lang="scss">
    .appcitys{
        width: 100%;
        box-sizing: border-box;
        padding: 1.173333rem 0 0 .4rem;
        .appcitys__header{
            padding: 0 .826667rem 0 .4rem;
            width: 100%;
            height: 1.16rem;
            border-bottom: 1px solid #e0e0e0;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 5;
            display: flex;
            justify-content: space-between;
            align-items: center;
            p{
                flex: 1 1;
                text-align: center;
                color: #212121;
                font-size: .426667rem;
            }
        }
    }
</style>
