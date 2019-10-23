<template>
  <div class="home">
    <home-header class="home-header"/>
    <home-swiper/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/HomeHeader'
import HomeSwiper from '@/components/HomeSwiper'

export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper
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