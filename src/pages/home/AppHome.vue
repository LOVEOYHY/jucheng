<template>
    <div>
        <header>
            <home-header></home-header>
        </header>
        <main>
            <home-body></home-body>
        </main>
        <footer>
            <app-footer></app-footer>
        </footer>
    </div>
</template>

<script>
import HomeHeader from '@c/common/app-home/HomeHeader'
import HomeBody from '@c/common/app-home/HomeBody'
import AppFooter from '@c/layout/AppFooter'
export default {
    components:{
        HomeHeader,
        HomeBody,
        AppFooter
    }
    
}
</script>

<style lang="scss">

</style>



