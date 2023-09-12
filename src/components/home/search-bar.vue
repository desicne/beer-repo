<template>
    <div class="search-component">
        <transition name="fade" mode="out-in">
            <input v-if="searchType === 'name'" id="name-input" class="search-input" type="text" onfocus="this.value=''" @keyup.enter="searchBeerByName()" @keyup.exact="searchBeerByName()" placeholder="Search bears here.." v-model="name" autocomplete="off" key="nameSearch">
            <!-- following date selector can and should be in separate component -->
            <div v-else class="date-selector" key="dateSearch">
                <select class="select" v-model="selectedMonth">
                    <option disabled value="">Select Month</option>
                    <option v-for="(month, index) in months" :key="index">{{month}}</option>
                </select>
                <select class="select" v-model="selectedYear">
                    <option disabled value="">Select Year</option>
                    <option v-for="(year, index) in years" :key="index">{{year}}</option>
                </select>
            </div>
        </transition>
        <div class="drop-select">
            <ul class="drop-down-menu">
                <li class="drop"><span>by {{ searchType }}</span>
                    <ul>
                        <li @click="searchType = 'name'"><span>by Name</span></li>
                        <li @click="searchType = 'date'"><span>by Brew Date</span></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="support-text">*press enter to finish or select from list</div>
        <div class="results">
            <div v-for="beer in beers" :key="beer.id" class="result" @click="getMyBeer(beer.id)">
                <div :style="{backgroundImage: 'url('+ beer.image_url +')'}" class="beer-mini-img"></div>
                <div class="beer-mini-title">
                    <span>{{ beer.name }}</span>
                    <span style="display: block; font-weight: 400">{{ beer.tagline}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import m from 'moment'
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            years: ['2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007'],
            selectedMonth: '',
            selectedYear: '',
            searchType: 'name',
            name: '',
        }
    },
    computed: {
        ...mapGetters({
            beers: 'searchBeer'
        }),
    },
    methods: {
        showResult(month, year) {
            if(month === '' || year === '') {
                return
            }
            let date = m(month + ' ' + year, 'MMMM YYYY').format('MM-YYYY')
            this.searchByMyBrewDate(date)
        },
        searchBeerByName() {
            if(this.name.length < 3) {
                return
            } else {
                let searchName = this.name
                this.searchByName({ searchName }).then(() => {
                    let resultShow = document.getElementsByClassName('results')
                    resultShow[0].style.visibility = 'visible'
                })
            }
        },
        searchByMyBrewDate(date) {
            this.searchByBrewDate({ date }).then(() => {
                let resultShow = document.getElementsByClassName('results')
                resultShow[0].style.visibility = 'visible'
            })
        },
        getMyBeer(id) {
            let resultShow = document.getElementsByClassName('results')
            resultShow[0].style.visibility = 'hidden'
            this.fetchBeer({id}).then(() => {
                this.selectedMonth = ''
                this.selectedYear = ''
                this.name = ''
            })
        },
        ...mapActions([
            'fetchBeer',
            'searchByName',
            'searchByBrewDate'
        ])
    },
    watch: {
        selectedMonth: function () {
            this.showResult(this.selectedMonth, this.selectedYear)
        },
        selectedYear: function () {
            this.showResult(this.selectedMonth, this.selectedYear)
        }
  }
}
</script>

<style lang="stylus" scoped>
select
    margin-right 24px
    -webkit-appearance none
    -moz-appearance none
    appearance none
    outline none
    text-indent 1px
    text-overflow ''

.search-component
    position absolute
    display inline-block
    margin-left 24px
    width calc(100% - 140px)
    max-width 720px
    z-index 5

.search-input
    display inline-block
    padding 18px
    border 0px
    border-radius 5px
    width calc(100% - 150px)
    color #646464
    font-size 18px
    font-weight 600
    box-shadow inset 0 0 10px #a4a4a4
    transition all 0.5s linear
    user-select none

    &:focus
        outline none

    &::placeholder
        color #a4a4a4

.date-selector
    display inline-block
    padding 18px
    border 0px
    border-radius 5px
    width calc(100% - 150px)
    color #646464
    font-size 18px

.drop-select
    display inline-block
    z-index 5

.support-text
    margin-top 8px
    font-size 12px
    color #848484

.drop-down-menu
  display inline-block
  margin-top 0px
  margin-bottom 0px
  padding 0px
  
  li
    display inline-block
    padding 19px 18px
    cursor pointer
    text-transform capitalize

.drop
  position relative
  user-select none
  
  ul
    position absolute
    left 0px
    top 60px
    padding-left 0px
    background-color #fbfbfb
    transition all 0.3s ease
    transform scale(0)
    transform-origin 0 0
    box-shadow 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)
    
    li
      display block
      width 100px
      padding-left 32px
      padding-right 8px
      box-sizing content-box
      transition all 0.3s ease
    
      &:hover
        background #eaeaea

        span
          color #f28e1c

  &:hover 
    ul
      transform scale(1)

.select
    font-size 20px
    border 0px
    color #848484
    background #fff
    cursor pointer

.results
    position absolute
    padding 16px
    height auto
    max-height 320px
    top 60px
    z-index 5
    background #fafafa
    font-size 20px
    width calc(100% - 150px)
    box-shadow 0 0 4px 0 rgba(0, 0, 0, 0.19)
    cursor pointer
    visibility hidden
    overflow-y scroll
    transition all 0.5s ease

.result
    padding 8px

    &:hover
        background #a4a4a4

.beer-mini-img
    display inline-block
    width 48px
    height 48px
    border-radius 5px
    background-position center
    background-clip content-clip
    background-repeat no-repeat
    background-size cover

.beer-mini-title
    display inline-block
    vertical-align top
    margin-left 8px
    font-weight 600

.fade-enter-active, .fade-leave-active
  transition opacity 1s

.fade-enter, .fade-leave-to
  opacity 0

</style>

