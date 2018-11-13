<template>
    <div class="applist">
        <header>
            <list-header></list-header>
        </header>
        <main>
            <list-body></list-body>
        </main>
        <footer>
            <app-footer></app-footer>
        </footer>
    </div>
</template>

<script>
import ListHeader from '@c/common/app-list/ListHeader'
import ListBody from '@c/common/app-list/ListBody'
import AppFooter from '@c/layout/AppFooter'
export default {
    components: {
        ListHeader,
        ListBody,
        AppFooter
    }
}
</script>

<style lang="scss">
    .applist{
        
    }
</style>
