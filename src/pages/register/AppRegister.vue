<template>
    <div class="register">
        <p class="register__header">
            <i class="fa fa-chevron-left fa-lg"></i>
            <router-link tag="span" :to="{name: 'login'}">登录</router-link>
        </p>
        <div class="register__content">
            <h1>注册账号</h1>
            <ul>
                <li>
                    <input type="text" placeholder="请输入手机号">
                </li>
            </ul>
            <button type="submit">下&nbsp;&nbsp;一&nbsp;&nbsp;步</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        back () {
            window.history.go(-1)
        }
    }
}
</script>

<style lang="scss">
    .register{
        .register__header{
            // width: 100%;
            height: 1.6rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            i,span{
                padding: .266667rem;
                margin-right: .16rem;
                font-size: .373333rem;
                color: rgb(77, 77, 77);
                flex: 0 0 auto;
            }
            span{
                width: auto;
            }
        }
        .register__content{
            box-sizing: border-box;
            padding: .933333rem 1.106667rem 0;
            h1{
                // font-weight: bold;
                font-size: .64rem;
                margin-bottom: 1.066667rem;
            }
            ul{
                li{
                    margin-bottom: .533333rem;
                    border-bottom: .013333rem solid rgb(230, 230, 230);
                    input{
                        width: 100%;
                        border: 0;
                        height: 1.053333rem;
                        font-size: .56rem;
                        // color: #ccc;
                        outline:none;
                    }
                    input::-webkit-input-placeholder {
                    /* placeholder颜色  */
                        color: #ccc;
                    }
                }
            }
            // .register__content--way{
            //     padding-top: .266667rem;
            //     display: flex;
            //     justify-content: space-between;
            //     span{
            //         width: auto;
            //     }
            // }
            button{
                width: 100%;
                display: block;
                line-height: 1.2rem;
                text-align: center;
                height: 1.2rem;
                margin: .8rem 0 0;
                font-size: .453333rem;
                color: #fff;
                font-weight: bold;
                border-radius: .6rem;
                background: rgba(255, 215, 140, 0.8);
                background-image: linear-gradient(135deg, #ffd88c 2.6666666667rem, #ffbc8c 6.6666666667rem);
            }
        }
    }
</style>
