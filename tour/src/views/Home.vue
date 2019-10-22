<template>
  <div class="home">
    <home-header/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/HomeHeader'

export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>
