import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

/**
 * import { actions } from './../../src/store/actions'
 * 
  jest.mock('axios', () => {
    return {
      get: () => ({ data: { id: 73 }})
    }
  })


  describe('fetchBeer', () => {
    it('makes a request and commits the response', async () => {
      const store = { commit: jest.fn() }

      await actions.fetchBeer(store)

      expect(store.commit).toHaveBeenCalledWith('FETCH_BEER', { userId: 73 })
    }) 
  })
*/