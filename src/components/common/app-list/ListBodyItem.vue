<template>
    <div>
        <div v-if = "info">
            <div @click="goToDetails" class="listbody__item">
                <img v-lazy = "'http://image.juooo.com' + info.pic">
                <div class="listbody__item--describe">
                    <div>{{info.schedular_name}}</div>
                    <p>{{info.show_time}}</p>
                    <p>[{{info.c_name}}]&nbsp;{{info.v_name}}</p>
                    <p>￥ {{info.min_price}}&nbsp;-&nbsp;{{info.max_price}}</p>
                </div>
            </div>
        </div>
        <app-empty v-else></app-empty>
    </div>
</template>

<script>
import AppEmpty from '@c/layout/AppEmpty'
export default {
    components: {
        AppEmpty
    },
    props: ['info'],
    methods: {
        goToDetails () {
            this.$router.push({name: 'details', params: { 
                id: this.info.id,
                pic: 'http://image.juooo.com' + this.info.pic,
                name:  this.info.schedular_name,
                show_time: this.info.show_time,
                city: this.info.v_name,
                min_price: this.info.min_price,
                max_price: this.info.max_price
            }})
        }
    },
    
}
</script>

<style lang="scss">
    .listbody__item{
        padding: .2rem 0;
        width: 100%;
        height: 3.6rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgb(230, 230, 230);
        img{
            width: 2.346667rem;
            height: 3.146667rem;
            flex: 0 0 auto;
        }
        .listbody__item--describe{
            flex: 1 1 auto;
            padding: .066667rem 0 0 .4rem;
            div{
                margin-bottom: .333333rem;
                font-size: .373333rem;
                color: rgb(38, 38, 38);
                // height: .986667rem;
                display: -webkit-box;    
                -webkit-box-orient: vertical;    
                -webkit-line-clamp: 2;    
                overflow: hidden; 
            }
            p{
                padding: .066667rem 0;
                font-size: .293333rem;
                color: rgb(153, 153, 153);
            }
            p:last-of-type{
                // margin-top: .466667rem;
                font-size: .426667rem;
                color: rgb(255, 121, 25);
            }
        }
    }
</style>