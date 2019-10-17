<template>
  <div id="app">
    <router-view class="view"/>
  </div>
</template>
<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700')

html
  background-color #fefefe

body
  position relative
  margin 0px
  padding 0px
  height 100%
  color #484848
  font-family 'Ubuntu', sans-serif
  font-size 16px
  overflow scroll
  cursor default
  
h1
  margin 0px
  padding 24px
  color #484848
  font-family 'Ubuntu', sans-serif
  font-size 38px
  font-weight 700

h2
  margin 0px
  padding 20px
  color #484848
  font-family 'Ubuntu', sans-serif
  font-size 32px
  font-weight 700

h3
  margin 0px
  padding 16px 20px
  color #484848
  font-family 'Ubuntu', sans-serif
  font-size 24px
  font-weight 700

img
  user-select none

p 
  margin 0px
  padding 8px
  color #484848
  font-family 'Ubuntu', sans-serif
  font-size 16px
  line-height 1.7

a
  display inline-block
  margin 0px
  padding 0px
  color #3aeebe
  font-family 'Ubuntu', sans-serif
  font-size 16px
  cursor pointer
  text-decoration none

li
  text-decoration none

div
  margin 0px
  padding 0px
  color #484848
  font-family 'Ubuntu', sans-serif
  font-size 16px

span
  line-height 1.7

footer
  position fixed
  bottom 0
  width calc(100% - 30px)
  height 36px
  padding 0px 15px
  text-align left
  background-color rgba(255,255,255,0.98)
  box-shadow 0px 8px 40px 2px rgba(170,170,170,1)
  z-index 5

  p
    display inline-block
    margin-top 8px
    font-size 8px
    color #aaa

::selection
  background lighten(#f28e1c, 40%)
  color #fefefe

::-moz-selection
  background lighten(#f28e1c, 40%)
  color #fefefe

.view
  position relative
  margin 0px auto
  overflow auto
  background rgba(255,255, 255, 0.35)

</style>
