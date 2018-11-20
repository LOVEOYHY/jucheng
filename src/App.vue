<template>
  <div id="app">
      <main>
        <keep-alive include="app-cities">
          <router-view></router-view>
        </keep-alive>
      </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import { CHANGE_CITY } from '@/store/chunks/mu/tation-type'
// import { CHANGE_CITY } from '@/store/chunks/mutation-type'

export default {
  name: "app",
  computed: mapState(['chunks']),
  
  beforeCreate () {
    if ( localStorage.city ) {
        this.$store.commit({
            type: 'chunks/' + CHANGE_CITY,
            // cities: JSON.parse(localStorage.cities),
            city: JSON.parse(localStorage.city)
        })
    } else {
        this.$store.dispatch({type: 'chunks/getCurrentPosition'})
    }
  }
}
</script>



<style lang="scss">
  html, body, #app, main {
    height: 100%;
  }
</style>
