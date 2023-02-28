import Agile from './Agile.vue'
export { Agile }

/* Vue plugin */

const install = app => {
  // Components
  app.component('Agile', Agile)
}

const plugin = {
  // eslint-disable-next-line no-undef
  version: VERSION,
  install,
}

export default plugin
