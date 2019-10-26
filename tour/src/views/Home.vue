<template>
  <div class="home">
    <home-header class="home-header"/>
    <home-swiper/>
    <home-catalog/>
    <home-hot/>
    <home-weekend/>
    <home-guess/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/HomeHeader'
import HomeSwiper from '@/components/HomeSwiper'
import HomeCatalog from '@/components/HomeCatalog'
import HomeHot from '@/components/HomeHot'
import HomeWeekend from '@/components/HomeWeekend'
import HomeGuess from '@/components/HomeGuess'

export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeCatalog,
        HomeHot,
        HomeWeekend,
        HomeGuess
    }
}
</script>

<style lang="stylus" scoped>
.home
    position relative
    .home-header
        position fixed
        top 0
        left 0
        z-index 100
        width 100%
</style>