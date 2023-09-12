import { FETCH_BEER, SEARCH_BEER } from './mutations-types'
  
  
  export default {
    [FETCH_BEER](state, payload) {
      state.beer = payload
    },
    [SEARCH_BEER](state, payload) {
      state.beerSearch = null
      state.beerSearch = payload
    }
  }
  