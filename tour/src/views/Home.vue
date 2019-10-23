<template>
  <div class="home">
    <home-header class="home-header"/>
    <home-swiper/>
    <home-catalog/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/HomeHeader'
import HomeSwiper from '@/components/HomeSwiper'
import HomeCatalog from '@/components/HomeCatalog'

export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeCatalog
    }
}
</script>

<style lang="stylus" scoped>
.home
    position relative
    .home-header
        position absolute
        top 0
        left 0
        z-index 100
        width 100%
</style>