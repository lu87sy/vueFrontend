<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of headerImg" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data() {
        return {
            headerImg: [
                {
                    id: '001',
                    imgUrl: require('@/assets/img/nueva.jpg')
                },
                {
                    id: '002',
                    imgUrl: require('@/assets/img/zt1.jpg')
                }
            ],
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                },
                loop: true
            }
        }
    },
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background #fff
.swiper-img
    width 100%
</style>