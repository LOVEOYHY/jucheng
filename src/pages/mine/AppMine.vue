<template>
    <div class="mine">
        <p class="mine__header">
            <i>《</i>
            <span>注册</span>
        </p>
        <div class="mine__content">
            <h1>欢迎来到聚橙网</h1>
            <ul>
                <li>
                    <input type="text" placeholder="请输入手机号/邮箱">
                </li>
                <li>
                    <input type="text" placeholder="请输入密码">
                </li>
            </ul>
            <div class="mine__content--way">
                <span>验证码登录&nbsp;></span>
                <span>忘记密码</span>
            </div>
            <a >登录</a>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppFooter from '@c/layout/AppFooter'
export default {
    components: {
        AppFooter
    }
}
</script>

<style lang="scss">
    .mine{
        .mine__header{
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
        .mine__content{
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
            .mine__content--way{
                padding-top: .266667rem;
                display: flex;
                justify-content: space-between;
                span{
                    width: auto;
                }
            }
            a{
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
