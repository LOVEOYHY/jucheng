<template>
    <div class="homefooter">
        <div class="homefooter__item">
            <router-link active-class="active" :to = "{name: 'home'}">
                <i class="fa fa-snowflake-o fa-lg"></i>
                <p>首页</p>
            </router-link>
        </div>
        <div class="homefooter__item">
            <router-link active-class="active" :to = "{name: 'list'}">
                <i class="fa fa-coffee fa-lg"></i>
                <p>演出库</p>
            </router-link>
        </div>
        <div class="homefooter__item">
            <router-link active-class="active" :to = "{name: 'user-info'}">
                <i class="fa fa-smile-o fa-lg"></i>
                <p>我的</p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .homefooter{
        width: 100%;
        height: 1.32rem;
        border-top: 1px solid rgb(230, 230, 230);
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 5;
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        .homefooter__item{
            flex-grow: 1;
            .active{
                color: orange;
            }
            a{
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                i{
                    height: .56rem;
                    width: .573333rem;
                }
                p{
                    font-size: .293333rem;
                    color: rgb(51, 51, 51);
                    text-align: center;
                }
            }
        }
    }
</style>


