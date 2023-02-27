import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vue3-agile/package.json')

export default defineConfig({
  lang: 'en-US',
  title: 'Vue3-Agile',
  description: pkg.description,

  lastUpdated: true,
  cleanUrls: true,

  head: [['meta', { name: 'theme-color', content: '#3c8772' }]],

  markdown: {
    headers: {
      level: [0, 0],
    },
  },

  themeConfig: {
    nav: nav(),

    sidebar: {},

    editLink: {
      pattern:
        'https://github.com/hoersamu/vue3-agile/edit/main/packages/docs/:path',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hoersamu/vue3-agile' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Samuel Höra',
    },
  },

  base: '/vue3-agile/',
})

function nav() {
  return [
    { text: 'Examples', link: '/examples', activeMatch: '/examples' },
    {
      text: 'Component props',
      link: '/config',
      activeMatch: '/config',
    },
    {
      text: pkg.version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/hoersamu/vue3-agile/blob/main/packages/vue3-agile/CHANGELOG.md',
        },
        {
          text: 'Contributing',
          link: 'https://github.com/hoersamu/vue3-agile/blob/main/CONTRIBUTING.md',
        },
      ],
    },
  ]
}
