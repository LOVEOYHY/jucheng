<template>
    <div class="seckillswiper"
      v-if = "seckillInfo"
    >
        <p class="seckillswiper--title">限时秒杀</p>
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide class="seckillswiper__item"
                v-for = "info in seckillInfo"
                :key = "info.ticket_id"
            >
                <div class="seckillswiper__silde">
                    <div class="seckillswiper__picture">
                        <img class="seckillswiper__picture--img" :src = '"http://image.juooo.com/" + info.pic' :title = "info.venue_name">
                    </div>
                    <div class="seckillswiper__describe">
                        <p>{{info.schedular_name}}</p>
                        <div class="seckillswiper__options">
                            <div class="discounts__price">
                                ￥11.11
                                <span>￥{{info.ticket_price}}</span>
                            </div>
                            <p class="isnone__btn" v-if = "info.listStock == 0">下手慢喽</p>
                            <p class="ishave__btn" v-else>即将开抢</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          slidesPerView: "auto"
        }
      },
      seckillInfo: []
    };
  },
  async beforeCreate() {
    let result = await this.$http({
      url: "/jucheng/index/getNationalSeckill",
      method: "post",
      react: false
    })
    this.seckillInfo = result.secKillInfo;
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    //   console.log('this is current swiper instance object', this.swiper)
    //   this.swiper.slideTo(3, 1000, false)
  }
};
</script>

<style lang="scss">
.seckillswiper {
  padding: 0.266667rem 0 0.4rem 0.333333rem;
  .seckillswiper--title {
    font-size: 0.48rem;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 0.333333rem;
  }
  .seckillswiper__item {
    width: 9.466667rem!important;
    .seckillswiper__silde {
      width: 9.333333rem;
      display: flex;
      justify-content: space-between;
      .seckillswiper__picture {
        flex: 0 0 auto;
        width: 2.4rem;
        height: 3.2rem;
        .seckillswiper__picture--img {
          width: 2.4rem;
          height: 3.2rem;
        }
      }
      .seckillswiper__describe {
        box-sizing: border-box;
        padding: 0.333333rem 0.266667rem 0 0.333333rem;
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
          flex-grow: 1;
          font-size: 0.373333rem;
          font-weight: 700;
          color: #1a1a1a;
        }
        .seckillswiper__options {
          flex-grow: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .discounts__price {
            flex: 1 1 auto;
            font-size: 0.373333rem;
            font-weight: bold;
            color: rgb(255, 121, 25);
            span {
              color: rgb(178, 178, 178);
              font-size: 26px;
              text-decoration: line-through;
              margin-left: 0.2rem;
            }
          }
          .isnone__btn {
            flex: 0 0 auto;
            width: 2.506667rem;
            height: 1.173333rem;
            border-radius: 0.066667rem;
            background: rgb(204, 204, 204);
            line-height: 1.173333rem;
            text-align: center;
            font-size: 0.373333rem;
            color: #fff;
          }
          .ishave__btn {
            flex: 0 0 auto;
            width: 2.506667rem;
            height: 1.173333rem;
            border-radius: 0.066667rem;
            background: url(https://m.juooo.com/public/basic/Home/app/app-juooo5/images/index/bg_btn.png)
              center no-repeat;
            background-size: 100% 100%;
            line-height: 1.173333rem;
            text-align: center;
            font-size: 0.373333rem;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>