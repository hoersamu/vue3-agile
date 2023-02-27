import VueAgile from 'vue3-agile'
import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    app.use(VueAgile)
  },
}
