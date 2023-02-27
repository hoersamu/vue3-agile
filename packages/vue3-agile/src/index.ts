import VueAgile from './Agile.vue'

/* Vue plugin */

const install = app => {
  // Components
  app.component('Agile', VueAgile)
}

const plugin = {
  // eslint-disable-next-line no-undef
  version: VERSION,
  install,
}

export default plugin
