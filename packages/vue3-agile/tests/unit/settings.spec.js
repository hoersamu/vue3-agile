import { shallowMount } from '@vue/test-utils'
import Agile from '../../src/Agile.vue'

describe('Settings:', () => {
  describe('initialSettings object:', () => {
    it('should contain all possible props without options', async () => {
      const { vm } = shallowMount(Agile)
      const { initialSettings, $props } = vm

      Object.keys($props).forEach(key => {
        const condition = key !== 'options'
        expect(
          Object.prototype.hasOwnProperty.call(initialSettings, key),
        ).toEqual(condition)
      })
    })

    it('options object should be merged with other props', async () => {
      const { vm } = shallowMount(Agile, {
        propsData: {
          options: {
            infinite: false,
            fade: true,
            throttle: 0,
          },
        },
      })

      const { initialSettings } = vm

      expect(initialSettings.infinite).toEqual(false)
      expect(initialSettings.fade).toEqual(true)
      expect(initialSettings.throttle).toEqual(0)
    })
  })
})
