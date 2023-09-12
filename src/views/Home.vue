<template>
  <div class="homepage-view">
      <router-link to="/">
        <img src="@/assets/logo/beer.png" alt="beer-logo" class="beer-logo">
      </router-link>
      <search-bar></search-bar>
      <beer-info :beer="beer"></beer-info>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import beerInfo from '@/components/home/beer-info.vue'
import searchBar from '@/components/home/search-bar.vue'

export default {
  name: 'home',
  components: { beerInfo, searchBar },
  computed: {
      ...mapGetters({
        beer: 'getBeer'
      }),
  },
  mounted() {
    this.$store.dispatch('fetchRandomBeer')
  },
  methods: {
    getBeers() {
      this.$store.dispatch('fetchRandomBeer')
    }
  }
}
</script>

<style lang="stylus">
.homepage-view
  padding-bottom 0
  margin auto
  margin-top 40px
  margin-bottom 80px
  width 100%
  max-width 1280px
  overflow-x hidden

.beer-logo
    width 60px
    margin-left 80px


@media (max-width: 670px)
    .beer-logo
        margin-left calc(50% - 100px)
</style>
