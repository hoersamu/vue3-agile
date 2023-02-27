import { shallowMount } from '@vue/test-utils'
import Agile from '../../../src/Agile.vue'

const slides =
  '<div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div>'
const propsData = {
  infinite: true,
  throttleDelay: 0,
}
const slots = {
  default: slides,
}

describe('Infinite mode:', () => {
  describe('Enabled:', () => {
    it('click prev button on first slide should move to the last one', async () => {
      const wrapper = shallowMount(Agile, {
        propsData,
        slots,
      })
      const prevButton = wrapper.find({ ref: 'prevButton' })

      expect(wrapper.vm.canGoToPrev).toBe(true)

      await prevButton.trigger('click')

      expect(wrapper.vm.currentSlide).toBe(5)
    })

    it('click next button on last slide should move to the first one', async () => {
      const wrapper = shallowMount(Agile, {
        propsData: { ...propsData, initialSlide: 5 },
        slots,
      })
      const nextButton = wrapper.find({ ref: 'nextButton' })

      expect(wrapper.vm.canGoToNext).toBe(true)

      await nextButton.trigger('click')

      expect(wrapper.vm.currentSlide).toBe(0)
    })
  })

  describe('Disabled:', () => {
    it("prev button on first slide shouldn't be available", async () => {
      const wrapper = shallowMount(Agile, {
        propsData: { ...propsData, infinite: false },
        slots,
      })

      expect(wrapper.vm.canGoToPrev).toBe(false)
    })

    it("next button on last slide shouldn't be available", async () => {
      const wrapper = shallowMount(Agile, {
        propsData: { ...propsData, infinite: false, initialSlide: 5 },
        slots,
      })

      expect(wrapper.vm.canGoToNext).toBe(false)
    })
  })
})
