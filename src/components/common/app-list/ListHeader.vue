<template>
    <div class="listheader">
        <div class="listheader--top">
            <div class="listheader--top__location">
                <span>全国</span>
                <i class="fa fa-angle-down fa-lg"></i>
            </div>
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
                >{{info.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>


export default {
    data () {
        return {
            navInfo : [
                {id: 1, name: '全部'},
                {id: 2, name: '演唱会'},
                {id: 3, name: '音乐会'},
                {id: 4, name: '话剧歌剧'},
                {id: 5, name: '儿童亲子'},
                {id: 6, name: '音乐剧'},
                {id: 7, name: '舞蹈芭蕾'},
                {id: 8, name: '戏曲综艺'},
                {id: 9, name: '展览'},
            ]
        }
    },
    
}
</script>

<style lang="scss">
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
                    
                }
            }
        }
    }
</style>