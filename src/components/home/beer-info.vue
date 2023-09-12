<template>
    <div v-if="beer" class="beer-info">
        <div v-if="beer.image_url" :style="{backgroundImage: 'url('+ beer.image_url +')'}" class="beer-img"></div>
        <div v-else class="placeholder-beer">
            <img src="@/assets/placeholder/beer-drink.jpg" alt="any-beer" class="placeholder-img">
        </div>
        
        <div class="beer-main-info">
            <h1 id="main-name">{{ beer.name | trimTitleFit }}</h1>
            <div class="beer-description">
                {{ beer.description | trimDesc }}
            </div>
            <div class="beer-response">
                <div class="beer-yes" @click="fetchNewRandom">
                    Random Beer
                </div>
                <div class="beer-no" @click="fetchNonAlc">
                    Random Non-Alc Beer
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    props: ['beer'],
    methods: {
        fetchNewRandom() {
            this.fetchRandomBeer()
        },
        fetchNonAlc() {
            this.fetchNonAlcBeer()
        },
        ...mapActions([
            'fetchRandomBeer',
            'fetchNonAlcBeer'
        ])
    }
}
</script>

<style lang="stylus" scoped>
input::placeholder
    color #646464
    font-weight 400

.beer-info
    position relative
    width 100%
    max-width 800px
    margin auto
    margin-top 32px
    z-index 1

.beer-img
    display inline-block
    width 250px
    height 350px
    border-radius 5px
    background-position center
    background-clip content-clip
    background-repeat no-repeat
    background-size contain

.beer-main-info
    display inline-block
    position relative
    vertical-align top
    margin-left 32px
    width calc(100% - 290px)
    height 350px

    h1
        padding-bottom 16px
        padding-top 8px

    div
        padding-left 24px
        margin-top 16px
        font-size 22px

    p
        display inline-block
        padding-top 0px
        padding-left 12px
        font-size 20px
        vertical-align top

    a
        display inline-block
        padding-top 4px
        padding-left 12px
        color #484848
        font-size 20px
        vertical-align top
        transition all 0.8s ease

        &:hover
            color #3aeebe

.placeholder-beer
    display inline-block

.placeholder-img
    width 100%
    max-width 250px
    margin-top 32px
    border-radius 6px

.beer-description
  margin 0px
  padding 0px
  color #484848
  font-family 'Ubuntu', sans-serif
  font-size 16px !important
  line-height 1.7

.beer-response
    position absolute
    left 0px
    bottom 24px

.beer-yes
    display inline-block
    padding 8px
    padding-left 24px
    padding-right 24px
    margin-top 8px
    background linear-gradient(45deg, #583105, #f28e1c)
    border-radius 5px
    color #fff
    cursor pointer
    transition all 0.8s ease

    &:hover 
        transform scale(1.05)

.beer-no
    display inline-block
    color #b7b7b7
    cursor pointer
    transition all 0.8s ease

    &:hover 
        color #484848

@media (max-width: 960px)
    .beer-main-info h1
        font-size 30px


@media (max-width: 720px)
    .beer-main-info 
        p
            font-size 16px
            padding-top 4px
        
        a
            font-size 16px
            padding-top 6px

    .beer-yes
        font-size 16px !important

    .beer-no
        font-size 16px !important 

@media (max-width: 670px)
    .beer-img
        display block
        width 100%
        border-radius 0px
        margin-bottom 28px

    .placeholder-img
        max-width 100%
        border-radius 0px

    .beer-main-info 
        display block
        width 100%
        margin 0px
        padding-left 4px
        
        h1
            font-size 28px

        p
            font-size 18px
            padding-top 0px

        a
            font-size 18px
            padding-top 0px


@media (max-width: 340px)
    .beer-main-info
        h1
            font-size 24px
        p
            font-size 14px
            padding-top 6px
        a
            font-size 14px
            padding-top 8px

    .beer-response
        text-align center
        width 80%

</style>

