<template>
    <div class="navswiper">
        <swiper v-if = "navswiperdata.length" :options="swiperOption" ref="mySwiper" >
            <!-- slides -->
            <swiper-slide
              v-for = "data in navswiperdata"
              :key = "data.si_id"
            >
              <!-- http://image.juooo.com//group1/M00/02/50/rAoKNVvZNM2AJVLUAAEsV6tm7RY977.jpg -->
              <div class="navswiper-bg">
                <img class="navswiper-picture" :src = '"http://image.juooo.com/" + data.touch_image_url'  :title = "data.title" :alt = "data.url">
              </div>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import qs from "qs";
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        centeredSlides: true,
        autoplay: true
      },
      navswiperdata: []
    };
  },
  async beforeCreate() {
    let result = await this.$http({
      url: "/jucheng/index/getNationalSildeList",
      method: "post",
      // body: FormData,
      // content-type: application/x-www-form-urlencoded; charset=UTF-8,
      data: qs.stringify({
        confType: "L",
        isSymbol: 1,
        limit: 6
      }),
      react: false
    })
    this.navswiperdata = result;
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  }
};
</script>

<style lang="scss">
.navswiper {
  height: 4.133333rem;
  margin-top: 0.026667rem;
  .navswiper-bg {
    width: 10rem;
    height: 4.133333rem;
    background-color: #ccc;
    .navswiper-picture {
      width: 100%;
      height: 100%;
    }
  }
}
</style>