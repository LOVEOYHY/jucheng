<template>
    <div class="showswiper">
        <div class="showswiper__title">
            巡回演出
            <p>更多巡演></p>
        </div>
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide class="showswiper__item"
                v-for = "info in showinfo"
                :key = "info.ticket_id"
            >
                <div class="showswiper__item__picture">
                    <img :src = "info.pic">
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
        //   slidesPerView: "auto",
          slidesPerView: 3,
        //   freeMode: true,
        }
      },
      showinfo: []
    };
  },
  beforeCreate() {
    this.$http({
      url: "/jucheng/Tour/ShowList",
      method: "post",
      react: false
    }).then(result => {
      this.showinfo = result;
    //   console.log(result)
    });
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
    .showswiper{
        padding: .266667rem 0 .4rem .333333rem;
        margin-bottom: .266667rem;
        .showswiper__title{
            font-size: 0.48rem;
            font-weight: 700;
            color: #1a1a1a;
            margin-bottom: 0.333333rem;
            p{
                float: right;
                width: 2.666667rem;
                margin-right: .4rem;
                font-size: .293333rem;
                color: rgb(153, 153, 153);
                text-align: right;
            }
        }
        .showswiper__item{
            width: 3rem!important;
            height:3.906667rem;
            margin-right: .133333rem;          
        }
    }
</style>