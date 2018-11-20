<template>
    <form action="" @submit.prevent = "login">
    <div class="login">
        <p class="login__header">
            <i @click = "back" class="fa fa-chevron-left fa-lg"></i>
            <router-link tag="span" :to="{name: 'register'}">注册</router-link>
        </p>
        <div class="login__content">
            <h1>欢迎来到聚橙网</h1>
            <ul>
                <li>
                    <input v-model = "phone" type="text" placeholder="请输入手机号/邮箱">
                    <p v-if = "isCodeShow" @click = "sendCode">{{isResend ? '重发('+resendTime+'s)' : '发送验证码'}}</p>
                </li>
                <li>
                    <input v-model = "code" type="password" placeholder="请输入密码">
                </li>
            </ul>
            <div class="login__content--way">
                <span>验证码登录&nbsp;></span>
                <span>忘记密码</span>
            </div>
            <!-- <a >登&nbsp;&nbsp;录</a> -->
            <button type="submit">登&nbsp;&nbsp;录</button>
        </div>
    </div>
    </form>
</template>

<script>
export default {
    data () {
        return {
            isCodeShow: false,
            phone: '',
            isResend: false,
            resendTime: 60,
            code: ''
        }
    },
    methods: {
        back () {
            window.history.go(-1)
        },
        async sendCode () {
            if ( !this.isResend ) {// 发送验证码
                // ajax 如过成功
                let res = await this.$http({
                    url: '/mz/v4/api/code',
                    method: 'POST',
                    data: {
                        mobile: this.phone,
                        type: "2"
                    },
                    params: { __t: Date.now() }
                }, true)
                if ( res.data.status === 0 ) { // 验证码发送成功
                    this.authCode()
                }
                
            }
        },
        async login () {
            let res = await this.$http({
                url: '/mz/v4/api/login',
                method: 'POST',
                data: {
                    // "2f3ee20be6a12d25c541a3d1dfe2f839"
                    loginType: 1,
                    password: this.code,
                    username: this.phone
                }
            }, true)
            if ( res.data.status === 0 ) { // 验证码发送成功
                
                // 存储
                localStorage.setItem('userInfo', JSON.stringify(res.data.data.data))
                for (const key in res.data.data.data) {
                    this.$cookies.set(key, res.data.data.data[key])
                }

                this.$router.replace({name: 'user-info'})
            }
        },
        authCode () { // 验证码处理
            this.isResend = true
            this.timer = setInterval(() => {
                this.resendTime --
                if ( this.resendTime === 0 ) {
                    clearInterval(this.timer)
                    this.isResend = false
                    this.resendTime = 60
                }
            },1000)
        }
    },
    watch: {
        phone: {
            immediate: true,
            handler (val) {
                let result = /^1[34578]\d{9}$/.test(this.phone.trim())
                this.isCodeShow = result
            }
        }
    }
}
</script>

<style lang="scss">
    .login{
        .login__header{
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
        .login__content{
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
                    position: relative;
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
                    p{
                        width: 2.133333rem;
                        height: 100%;
                        line-height: 1.04rem;
                        text-align: center;
                        background-color: rgb(238, 77, 139);
                        border-radius: .133333rem;
                        position: absolute;
                        right: 0;
                        top: 0;
                    }
                }
            }
            .login__content--way{
                padding-top: .266667rem;
                display: flex;
                justify-content: space-between;
                span{
                    width: auto;
                }
            }
            // a{
            //     display: block;
            //     line-height: 1.2rem;
            //     text-align: center;
            //     height: 1.2rem;
            //     margin: .8rem 0 0;
            //     font-size: .453333rem;
            //     color: #fff;
            //     font-weight: bold;
            //     border-radius: .6rem;
            //     background: rgba(255, 215, 140, 0.8);
            //     background-image: linear-gradient(135deg, #ffd88c 2.6666666667rem, #ffbc8c 6.6666666667rem);
            // }
            button{
                display: block;
                width: 100%;
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
