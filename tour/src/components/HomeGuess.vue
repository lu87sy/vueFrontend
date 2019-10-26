<template>
    <div class="guess">
        <div class="guess-desc" :class="[guessDescChange]">
            <div>猜你喜欢</div>
        </div>
        <div class="guess-content" v-for="item of guessList" :key="item.id">
            <div class="guess-content-img">
                <img :src="item.imgUrl">
                <div>{{item.rank}}</div>
            </div>
            <div class="guess-content-desc">
                {{item.desc}}
            </div>
            <div class="guess-content-prise">
                <div class="guess-content-prise-left">
                    酒店距景点{{item.distance}}km
                </div>
                <div class="guess-content-prise-right">
                    <span>￥</span>{{item.prise}}<span>起</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeGuess',
    data() {
        return {
            guessDescChange: '',
            guessList: [
                {
                    id: '2254856',
                    imgUrl: 'https://pic3.40017.cn/zzy/rimage/2016/01/14/17/ToLHVj_420x228_00.jpg',
                    rank: '1176点评.98%满意度',
                    desc: '常州西太湖明都国际会议中心1晚，自选常州淹城/美食套餐',
                    distance: '5.79',
                    prise: '280'
                },
                {
                    id: '2254854',
                    imgUrl: 'https://pic3.40017.cn/zzy/rimage/2016/01/14/17/ToLHVj_420x228_00.jpg',
                    rank: '1176点评.98%满意度',
                    desc: '常州西太湖明都国际会议中心1晚，自选常州淹城/美食套餐',
                    distance: '5.79',
                    prise: '280'
                },
                {
                    id: '2254857',
                    imgUrl: 'https://pic3.40017.cn/zzy/rimage/2016/01/14/17/ToLHVj_420x228_00.jpg',
                    rank: '1176点评.98%满意度',
                    desc: '常州西太湖明都国际会议中心1晚，自选常州淹城/美食套餐',
                    distance: '5.79',
                    prise: '280'
                },
                {
                    id: '2254855',
                    imgUrl: 'https://pic3.40017.cn/zzy/rimage/2016/01/14/17/ToLHVj_420x228_00.jpg',
                    rank: '1176点评.98%满意度',
                    desc: '常州西太湖明都国际会议中心1晚，自选常州淹城/美食套餐',
                    distance: '5.79',
                    prise: '280'
                },
                {
                    id: '2254859',
                    imgUrl: 'https://pic3.40017.cn/zzy/rimage/2016/01/14/17/ToLHVj_420x228_00.jpg',
                    rank: '1176点评.98%满意度',
                    desc: '常州西太湖明都国际会议中心1晚，自选常州淹城/美食套餐',
                    distance: '5.79',
                    prise: '280'
                }
            ]
        }
    },
    methods: {
        scrollChange(){
           let height = document.documentElement.scrollTop
           if(height>580) {
               this.guessDescChange='guessDescChange'
           }else{
               this.guessDescChange=''
           }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollChange)
    },
}
</script>

<style lang="stylus" scoped>
.guess
    border-top:.3rem solid #eee
    background:#fff
    .guess-desc
        overflow:hidden
        height:0
        padding-bottom:10%
        text-align:center
        color:#23beae
    .guessDescChange
        position fixed
        top .9rem
        left 0
        width 100%
        background #fff
        z-index 100
    .guess-desc > div
        overflow:hidden
        width:25%
        height:0
        padding-bottom:6%
        margin:0 auto
        padding-top:.23rem
        border-bottom:.1rem solid #23beae
    .guess-content
        overflow:hidden
        width:92%
        height:0
        padding-bottom:64%
        margin:0 auto
        .guess-content-img
            position:relative
            overflow:hidden
            height:0
            padding-bottom:48.3%      
        .guess-content-img >img
            max-width:100%
        .guess-content-img >div
            position:absolute
            bottom:.2rem
            left:.1rem
            color:#fff
        .guess-content-desc
            overflow:hidden
            height:0
            padding-bottom:12%
            text-align:left
            padding-top:.1rem
            text-indent:.1rem
            font-size:.28rem
            font-weight:bold
            letter-spacing:.01rem
            line-height:.35rem
        .guess-content-prise
            overflow:hidden
            height:0
            padding-bottom:10%
        .guess-content-prise-left
            float:left
            color:#aaa
        .guess-content-prise-right
            float:right
            margin-right:.1rem
        .guess-content-prise-right > span
            color:red
            font-weight:bold
            font-size:.4rem
</style>