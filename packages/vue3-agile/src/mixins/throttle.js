/**
 * Throttle methods by lodash
 */

import ldthrottle from 'lodash.throttle'

const throttle = {
  created() {
    this.goTo = ldthrottle(this.goTo, this.throttleDelay)
    this.getWidth = ldthrottle(this.getWidth, 500)
  },
}

export { throttle }
