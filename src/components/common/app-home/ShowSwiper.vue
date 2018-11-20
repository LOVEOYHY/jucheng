<template>
    <div class="showswiper"
        v-if = "showinfo.length"
    >
        <div class="showswiper__title">
            巡回演出
            <p>更多巡演></p>
        </div>
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide
                v-for = "info in showinfo"
                :key = "info.show_id"
            >
                <div class="showswiper__item__picture">
                    <img :src = "info.pic">
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import qs from 'qs'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      showinfo: [],
      swiperOption: {
          slidesPerView: "auto",
        //   slidesPerView: 3,
        //   freeMode: true,
      },
    };
  },
   watch: {
        '$store.state.chunks.city': {
            immediate: true,
            handler (val) {
                if ( !val.cityId ) return false
                this.$http({
                    url: "/jucheng/Tour/ShowList",
                    method: "post",
                    data: qs.stringify({
                        city_id: this.$store.state.chunks.city.cityId
                    }),
                    react: false
                }).then(result => {
                    this.showinfo = result
                })
                
            }
        }
    },
//   async beforeCreate() {
//     let result = await this.$http({
//       url: "/jucheng/Tour/ShowList",
//       method: "post",
//       react: false
//     })
//     this.showinfo = result;
//     //   console.log(result)
//   },
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
        .swiper-slide{
            width: 3rem;
            height:3.906667rem;
            margin-right: .133333rem;
            .showswiper__item__picture{
                height: 100%;
                width: 100%;
                img{
                    height: 100%;
                    width: 100%;
                }
            }          
        }
    }
</style>