<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="present-area">
                <div class="present-title" ref="present">当前</div>
                <div class="present-button">{{this.city}}</div>
            </div>
            <div class="hot-area">
                <div class="hot-title">热门城市</div>
                <div class="hot-list">
                    <div class="hot-button" v-for="item of hotCities" :key="item.id">{{item.name}}</div>
                </div>
            </div>
            <div class="alph-area">
                <div class="alph-wrapper" v-for="(item,key) of cities" :key="key" :ref="key">
                    <div class="alph-title">{{key}}</div>
                    <div class="alph-list">
                        <div class="alph-button border-bottom" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import BMap from 'BMap'
export default {
    name: 'locationList',
    props: {
        letter: String
    },
    watch: {
        letter(){
            const elementLetter = this.$refs[this.letter]
            const elementPresent = this.$refs.present
            if(elementLetter){
                const element = elementLetter[0]
                this.scroll.scrollToElement(element)
            }else{
                this.scroll.scrollToElement(elementPresent)
            }
        }
    },
    data() {
        return {
            city: '',
            hotCities: [
                {
                    id: '000001',
                    name: '北京'
                },
                {
                    id: '000002',
                    name: '天津'
                },
                {
                    id: '000003',
                    name: '南京'
                },
                {
                    id: '000004',
                    name: '上海'
                },
                {
                    id: '000005',
                    name: '深圳'
                }
            ],
            cities: {
                "A": [
                    {
                        id: "0021254",
                        name: "安庆"
                    },
                    {
                        id: "0021255",
                        name: "安庆"
                    },
                    {
                        id: "0021256",
                        name: "安庆"
                    },
                    {
                        id: "0021257",
                        name: "安庆"
                    },
                    {
                        id: "0021258",
                        name: "安庆"
                    },
                    {
                        id: "0021259",
                        name: "安庆"
                    },
                    {
                        id: "0021260",
                        name: "安庆"
                    },
                    {
                        id: "0021261",
                        name: "安庆"
                    },
                ],
                "B": [
                    {
                        id: "0022254",
                        name: "北京"
                    },
                    {
                        id: "0022255",
                        name: "北京"
                    },
                    {
                        id: "0022256",
                        name: "北京"
                    },
                    {
                        id: "0022257",
                        name: "北京"
                    },
                    {
                        id: "0022258",
                        name: "北京"
                    },
                    {
                        id: "0022259",
                        name: "北京"
                    },
                    {
                        id: "0022260",
                        name: "北京"
                    },
                ],
                "C": [
                    {
                        id: "0033252",
                        name: "重庆"
                    },
                    {
                        id: "0033253",
                        name: "重庆"
                    },
                    {
                        id: "0033254",
                        name: "重庆"
                    },
                    {
                        id: "0033255",
                        name: "重庆"
                    },
                    {
                        id: "0033256",
                        name: "重庆"
                    },
                    {
                        id: "0033257",
                        name: "重庆"
                    }
                ]
            }
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper, {
            click:true,
            mouseWheel: {
                speed: 20,
                invert: false,
                easeTime: 300
            }
        })
        let map = new BMap.Map('allmap')
        let myCity = new BMap.LocalCity()
        myCity.get((result) =>{
            if(result){
                this.city = result.name
            }else{
                this.city='正在获取位置信息'
            }
        })
    },
}
</script>

<style lang="stylus" scoped>
.border-bottom
    &:before
        border .01rem solid #ccc
.list
    overflow hidden
    background #e9ecf1
    position absolute
    top 1.12rem
    left 0
    bottom 0
    width 100%
    .hot-list
        overflow hidden
    .present-title, .hot-title, .alph-title
        margin-left .4rem
        padding .4rem 0
    .hot-title
        margin-bottom -.3rem
    .present-button, .hot-button, .alph-button
        line-height .44rem
        padding .2rem .2rem
        background #fff
    .present-button
        width 84%
        margin-left .2rem
    .hot-button
        width 15%
        float left
        margin-left .2rem
        text-align center
        margin-top .2rem
    .alph-button
        width 100%
        padding-left .4rem
</style>