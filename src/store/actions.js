import { FETCH_BEER, SEARCH_BEER } from './mutations-types'
import axios from 'axios'

function fetchFromApi(url, params) {
  return axios({method: 'GET', url, params})
    .catch(err => { throw err})
}

export default {
    fetchBeer({ commit }, { id }) {
      fetchFromApi('beers/' + id,)
        .then(res => {commit(FETCH_BEER, { data: res.data[0] })})
        .catch(() => {commit(FETCH_BEER, { data: null })})
    },
    fetchRandomBeer({ commit }) {
      fetchFromApi('beers/random')
        .then(res => {commit(FETCH_BEER, { data: res.data[0] })})
        .catch(() => {commit(FETCH_BEER, { data: null })})
    },
    fetchNonAlcBeer({ commit }) {
      fetchFromApi('beers/random', { abv_lt: 0.05 }  )
        .then(res => {commit(FETCH_BEER, { data: res.data[0] })})
        .catch(() => {commit(FETCH_BEER, { data: null })})
    },
    searchByName({ commit }, { searchName }) {
      fetchFromApi('beers', { beer_name: searchName })
        .then(res => {commit(SEARCH_BEER, {data: res.data })})
        .catch(() => {commit(SEARCH_BEER, {data: null })})
    },
    searchByBrewDate({ commit }, { date }) {
      fetchFromApi('beers', { brewed_before: date })
        .then(res => {commit(SEARCH_BEER, {data: res.data })})
        .catch(() => {commit(SEARCH_BEER, {data: null })})
    }
  }