# vue3-agile

[![](https://img.shields.io/npm/v/vue3-agile.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/vue3-agile) [![](https://img.shields.io/npm/l/vue3-agile.svg?style=flat-square&logo=github)](https://github.com/hoersamu/vue3-agile/blob/master/LICENSE) [![](https://img.shields.io/npm/dm/vue3-agile.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/vue3-agile)

This is a fork of [vue-agile by Łukasz Florczak](https://github.com/lukaszflorczak/vue-agile). Since he abandoned his project in February of 2023 I decided to publish my own version with some improvements (SSR Support and Vue3 only)

> A carousel component for Vue.js inspired by [Slick](https://github.com/kenwheeler/slick/).<br>
> Powerful, responsive, touch-friendly, with Nuxt.js SSR support, without a jQuery dependency.

**[Demo & examples](https://hoersamu.github.io/vue3-agile/)**

---

If you like the component remember to **star it** ⭐️.

---

## Installation

```bash
npm install vue3-agile
```

or

```bash
yarn add vue3-agile
```

## Styles

**The component is delivered without styles for the appearance of the navigation elements** (like dots color and shape, arrows position, etc.). I think most people use their own styles and default styles are completely redundant. If you
want, feel free to use styles from [CodePen demos](https://codepen.io/collection/AdRzJW/).

## Importing

#### Global

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import VueAgile from 'vue3-agile'

createApp(App)
  .use(VueAgile)
```

#### Component

```vue
<template>
  <Agile>
    ...
  </Agile>
</template>

<script setup>
import { Agile } from 'vue3-agile'
<script>
```

## Usage

```vue
<template>
  <Agile>
    <div class="slide">
      <h3>slide 1</h3>
    </div>

    ...

    <div class="slide">
      <h3>slide n</h3>
    </div>
  </Agile>
</template>
```

Every first-level child of `<agile>` is a new slide. You also can group them inside `<template v-slot:default>...</template>` tags.

## Options / Props

| Parameter | Type | Default | Description |
| --- | :---: | :---: | --- |
| [asNavFor](#asNavFor) | array | `[]` | Set the carousel to be the navigation of other carousels |
| autoplay | boolean | `false` | Enable autoplay |
| autoplaySpeed | integer (ms) | `3000` | Autoplay interval in milliseconds |
| centerMode | boolean | `false` | Enable centered view when `slidesToShow` > `1` |
| changeDelay | integer (ms) | `0` | Insert a delay when switching slides. Useful for `fade`: `true` |
| dots | boolean | `true` | Enable dot indicators/pagination |
| fade | boolean | `false` | Enable fade effect |
| infinite | boolean | `true` | Infinite loop sliding |
| initialSlide | integer | `0` | Index of slide to start on |
| mobileFirst | boolean | `true` | Enable mobile first calculation for responsive settings |
| navButtons | boolean | `true` | Enable prev/next navigation buttons |
| options | object | `null` | All settings as one object |
| pauseOnDotsHover | boolean | `false` | Pause autoplay when a dot is hovered |
| pauseOnHover | boolean | `true` | Pause autoplay when a slide is hovered |
| [responsive](#Responsive) | object | `null` | Object containing breakpoints and settings objects |
| rtl | boolean | `false` | Enable right-to-left mode |
| slidesToShow | integer | `1` | Number of slides to show |
| speed | integer (ms) | `300` | Slide animation speed in milliseconds |
| swipeDistance | integer (px) | `50` | Distance to swipe the next slide |
| throttleDelay | integer (ms) | `500` | Throttle delay for actions |
| timing | string | `ease` | Transition timing function <br> (`linear`/`ease`/`ease-in`/`ease-out`/`ease-in-out`) |
| unagile | boolean | `false` | Disable Agile carousel |

#### Example

```vue
<agile :dots="false" :infinite="false" :autoplay-speed="5000">...</agile>
```

**Important!** If you use props inline, convert props names from `camelCase` to `kebab-case`.

## Methods

| Name | Description |
| --- | --- |
| `getCurrentBreakpoint()` | Returns current breakpoint (can returns `0` in mobile first for the smallest breakpoint and `null` for desktop first for the largest) |
| `getCurrentSettings()` | Returns settings object for current breakpoint – useful for debugging |
| `getCurrentSlide()` | Returns index of current slide |
| `getInitialSettings()` | Returns full settings object with all options – useful for debugging |
| `goTo()` | Navigates to a slide by index |
| `goToNext()` | Navigates to next slide |
| `goToPrev()` | Navigate to previous slide |
| `reload()` | Reload carousel & slides settings, classes and inline styles |

#### Example

```vue
<agile ref="carousel">...</agile>

<button @click="$refs.carousel.goToNext()">My custom button</button>
```

## Events

| Name | Value | Description |
| --- | --- | --- |
| after-change | `{ currentSlide }` | Fires after slide change |
| before-change | `{ currentSlide, nextSlide }` | Fires before slide change |
| breakpoint | `{ breakpoint } ` | Fires after breakpoint change |

#### Example

```vue
<Agile @after-change="showCurrentSlide($event)">...</Agile>
```

```js
showCurrentSlide(event)
{
  console.log(event)
  // Shows for example: { currentSlide: 1 }
}
```

## Responsive

To customize responsiveness, I recommend defining your desired breakpoints and passing settings object with your modification options inside **options**.

#### Example

```vue
<Agile :options="myOptions">...</Agile>
```

```js
data()
{
  return {
    myOptions: {
      navButtons: false,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            dots: false
          }
        },

        {
          breakpoint: 900,
          settings: {
            navButtons: true,
            dots: true,
            infinite: false
          }
        }
      ]
    }
  }
}
```

How does it work? Mobile first mode is used by default. It means, that `navButtons: false` option will be used on screens from 0 to 600 px width (+ all default carousel options). On screens from 600 to 900 px    `dots: false`    will be
added to options from breakpoint before. And on screens over 900 px width `navButtons` and `dots` options will be overwritten and `infinite: false` will be added.

## Custom arrows / nav buttons

The component uses slots for custom navigation buttons. It means you can put inside whatever you want – any HTML with text, image, icon etc.

#### Example

```vue
<Agile>
... <!-- slides -->

<template slot="prevButton">prev</template>
<template slot="nextButton">next</template>
</Agile>
```

## Caption

To display a static caption or such like within the gallery, you can use the `caption` slot.

#### Example

```vue
<Agile @after-change="e => currentSlide = e.currentSlide">
  ... <!-- slides -->

  <template slot="caption">{{ captions[currentSlide] }}</template>
</Agile>

<script setup>
  import { ref } from 'vue';

  const currentSlide = ref(0);
  const captions = [
    'This is slide 1',
    'This is the second slide',
    'This is a third and final slide',
  ];
</script>
```

## asNavFor

This option is useful for example for creating a photo gallery with two related slider – one big with only one slide in view and second for navigation with thumbnails.

#### Example

```vue
<agile ref="main" :fade="true">...</agile>

<agile ref="thumbnails" :as-nav-for="[$refs.main]" :slides-to-show="4" autoplay>...</agile>
```

**Important!** If you want to use the autoplay mode use it only in one of the related carousels.

## `v-if` & `v-show`

If you have slides being dynamically loaded, use `v-if` to show the carousel after the slides are ready. Using `v-if` is also recommended in other situations if you want to hide/show the slideshow.

It is also possible to use `v-show`, but you have to use the `reload()` method.

#### Example

```vue
<button @click="isActive = !isActive">Toggle carousel</button>

<agile v-if="isActive">...</agile>
```

## Nuxt.js && SSR Support

The component uses browser specific attributes (like `window` and `document`). However, you can try to render the first view on server side.

#### Example

```js
// plugins/vue3-agile.js

import Vue from 'vue'
import VueAgile from 'vue3-agile'

Vue.use(VueAgile)
```

```js
// nuxt.config.js

export default {
  plugins: ['~/plugins/vue3-agile'],

  build: {
    transpile: ['vue3-agile']
  }
}
```

To use component without SSR use the `client-only` component:

```vue
<ClientOnly placeholder="Loading...">
  <agile>...</agile>
</ClientOnly>
```

**Important!** Component rendered on server side has additional CSS class: `agile--ssr`, so you can use it to add some additional styles or manipulations. For example, I have limited options for setting the first appearance of the slides.
By default, the server renders the view and styles, where only the first slide is visible.

```css
.agile--ssr .agile__slides > * {
  overflow: hidden;
  width: 0
}

.agile--ssr .agile__slides > *:first-child {
  width: 100%
}
```

At this stage slides don't have `agile__slide` class yet, so I use `> *` instead of this.

If you would like to connect this with params `slidesToShow` or `initialSlide` you have to add some custom styles with `nth-child` param.

#### Example for `:slidesToShow="2"`

```sass
.agile--ssr
  .agile__slides
    > *:nth-child(1),
    > *:nth-child(2)
      width: 50%
```

#### Example for `:initialSlide="1"`

(Slides index starts at `0`)

```sass
.agile--ssr
  .agile__slides
    > *:nth-child(1)
      width: 0

    > *:nth-child(2)
      width: 100%
```

## FAQ

#### 1. Using component with dynamic content

If content changes, you have to use `reload` or in some cases, you can use `key` property: `<agile :key="mySlides.length">...</agile>` (it'll rebuild the carousel after each change of `mySlides` length).