<template>
    <div class="homefooter">
        <div class="homefooter__item">
            <i>1</i>
            <p>首页</p>
        </div>
        <div class="homefooter__item">
            <i>2</i>
            <p>演出库</p>
        </div>
        <div class="homefooter__item">
            <i>3</i>
            <p>我的</p>
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
</style>


