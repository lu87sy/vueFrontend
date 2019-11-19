<template>
    <div>
        <location-header/>
        <location-list :letter="letter"/>
        <location-alphabet @change="handleLetterChange"/>
    </div>
</template>

<script>
import locationHeader from '@/components/locationHeader'
import locationList from '@/components/locationList'
import locationAlphabet from '@/components/locationAlphabet'
export default {
    name: 'Location',
    data() {
        return {
            letter: ''
        }
    },
    methods: {
        handleLetterChange(letter){
            this.letter = letter
        }
    },
    components: {
        locationHeader,
        locationList,
        locationAlphabet
    }
}
</script>

<style lang="stylus" scoped>

</style>