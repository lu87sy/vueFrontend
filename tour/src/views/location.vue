<template>
    <div>
        <location-header/>
        <location-list/>
    </div>
</template>

<script>
import locationHeader from '@/components/locationHeader'
import locationList from '@/components/locationList'
export default {
    name: 'Location',
    components: {
        locationHeader,
        locationList
    }
}
</script>

<style lang="stylus" scoped>

</style>