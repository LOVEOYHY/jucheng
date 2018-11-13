<template>
    <div class="notfound">
        <header>
            <i>《</i>
            <p>404页面找不到哦~</p>
            <i>></i>
        </header>
        <main>
            <div class="notfound__picture"></div>
            <div class="notfound__title">
                <p>页面找不到</p>
                <p><router-link :to = "{name: 'home'}">返回首页</router-link></p>
            </div>
        </main>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .notfound{
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: rgb(246, 246, 246);
        header{
            box-sizing: border-box;
            width: 100%;
            height: 1.16rem;
            padding: 0 .426667rem 0 .4rem;
            position: fixed;
            top: 0;
            left: 0;
            background-color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: .453333rem;
            color: rgb(33, 33, 33);
            i{
                flex-grow: 0;
            }
            p{
                flex-grow: 1;
                text-align: center;
            }
        }
        main{
            .notfound__picture{
                margin: 2.906667rem auto 0;
                width: 4.16rem;
                height: 2.56rem;
                background: url(https://m.juooo.com/public/basic/Home/app/app-juooo4/images/search/search-404.png) center no-repeat;
                background-size: 100% 100%;
            }
            .notfound__title{
                padding: 1.066667rem 0 0;
                p:first-of-type{
                    text-align: center;
                    font-size: .453333rem;
                    color: rgb(153, 153, 153);
                }
                p:last-of-type{
                    width: 3.2rem;
                    height: .96rem;
                    margin: .826667rem auto 0;
                    background-color: rgb(255, 121, 25);
                    line-height: .96rem;
                    font-size: .373333rem;
                    color: #fff;
                    text-align: center;
                    a{
                        color: #fff;
                    }
                }
            }
        }
    }
</style>
