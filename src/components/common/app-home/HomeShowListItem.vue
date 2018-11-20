<template>
    <div>
        <div @click="goToDetails" class="homeshowlistitem">
            <img v-lazy = "info.pic" alt="">
            <div>{{info.show_name}}</div>
            <p>
                <span>{{info.display_show_time}}</span>
                <span>{{info.city_name}}</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['info'],
    methods: {
        goToDetails () {
            this.$router.push({name: 'details', params: { 
                id: this.info.id, 
                name: this.info.show_name,  
                pic: this.info.pic,
                show_time: this.info.display_show_time,
                city: this.info.venue_name,
                price: this.info.show_price
            }})
        }
    }
}
</script>

<style lang="scss">
    .homeshowlistitem{
        width: 3.013333rem;
        padding: .2rem 0;
        margin-right: .093333rem;
        float: left;
        img{
            height: 3.906667rem;
            width: 3rem;
            margin-bottom: .133333rem;
        }
        div{
            font-size: .373333rem;
            font-weight: bold;
            color: rgb(26, 26, 26);
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            padding: .066667rem .106667rem;
        }
        p{
            height: .36rem;
            padding: 0 .106667rem;
            font-size: .32rem;
            color: rgb(179, 179, 179);
            display: flex;
            justify-content: space-between;
            overflow: hidden;
            span:first-of-type{
                flex-grow: 1;
                padding-right: .133333rem;
            }
            span:last-of-type{
                width: 1.066667rem;
                margin-right: .013333rem;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
        }
    }
</style>