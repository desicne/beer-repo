import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

Vue.axios = require('axios')
Vue.axios.defaults.baseURL = 'https://api.punkapi.com/v2/'

export default new Vuex.Store({
  state: {
    beer: {},
    beerSearch: {}
  },
  actions,
  mutations,
  getters
})
