import { shallowMount } from '@vue/test-utils'
import Agile from '../../src/Agile.vue'

describe('Renders:', () => {
  it('should render nav buttons', () => {
    const wrapper = shallowMount(Agile, {
      slots: {
        prevButton: 'prev',
        nextButton: 'next',
      },
    })

    expect(wrapper.text()).toContain('prev')
    expect(wrapper.text()).toContain('next')
  })
})
