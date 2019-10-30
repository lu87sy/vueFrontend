<template>
  <div class="home">
    <home-header class="home-header" :city="city" />
    <home-swiper :swiperList="swiperList" />
    <home-catalog :iconList="iconList" />
    <home-hot :hotPriseList="hotPriseList" :hotTrendList="hotTrendList" :hotContentList="hotContentList" />
    <home-weekend :weekendList="weekendList" />
    <home-guess :guessList="guessList" />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
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
    },
    data() {
      return {
        city: '',
        guessList: [],
        hotPriseList: [],
        hotTrendList: [],
        hotContentList: [],
        iconList: [],
        swiperList: [],
        weekendList: []
      }
    },
    methods: {
      getHomeData(){
        axios.get("/api/index")
          .then(this.getHomeDataSucc)
      },
      getHomeDataSucc(res){
        // console.log(res)
        res = res.data
        if(res.data){
          const data = res.data
          this.city = data.city
          this.guessList = data.guessList
          this.hotPriseList = data.hotPriseList
          this.hotTrendList = data.hotTrendList
          this.hotContentList = data.hotContentList
          this.iconList = data.iconList
          this.swiperList = data.swiperList
          this.weekendList = data.weekendList
        }
      }
    },
    mounted() {
      this.getHomeData()
    },
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