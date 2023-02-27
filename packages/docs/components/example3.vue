<template>
  <div class="example3">
    <Agile
      ref="main"
      :options="options1"
      :as-nav-for="asNavFor1"
      class="main"
    >
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="slide"
        :class="`slide--${index}`"
      >
        <img :src="slide">
      </div>
    </Agile>
    <Agile
      ref="thumbs"
      :options="options2"
      :as-nav-for="asNavFor2"
      class="thumbnails"
    >
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="slide slide--thumb"
        :class="`slide--${index}`"
        @click="main?.goTo(index)"
      >
        <img :src="slide">
      </div>
    </Agile>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue'

const main = ref(null)
const thumbs = ref(null)

const asNavFor1 = ref([])
const asNavFor2 = ref([])
const options1 = {
  dots: false,
  fade: true,
  navButtons: false,
}

const options2 = {
  autoplay: true,
  centerMode: true,
  dots: false,
  navButtons: false,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        navButtons: true,
      },
    },
  ],
}

const slides = [
  'https://images.unsplash.com/photo-1453831362806-3d5577f014a4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
  'https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
  'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
  'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
  'https://images.unsplash.com/photo-1472926373053-51b220987527?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
  'https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
]

onMounted(() => {
  asNavFor1.value.push(thumbs.value)
  asNavFor2.value.push(main.value)
})
</script>

<style lang="scss">
.example3 {
  .main{
    margin-bottom: 20px;
  }
  .thumbnails {
    margin: 0 -5px;
    width: calc(100% + 10px);
  }
  // Basic VueAgile styles
  .agile {
    &__nav-button {
      background: transparent;
      border: none;
      color: #ccc;
      cursor: pointer;
      font-size: 24px;
      transition-duration: .3s;

      .thumbnails & {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        &--prev {
          left: -45px;
        }
        &--next {
          right: -45px;
        }
      }
      &:hover {
        color: #888;
      }
    }
    &__dot {
      margin: 0 10px;

      button {
        background-color: #eee;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: block;
        height: 10px;
        font-size: 0;
        line-height: 0;
        margin: 0;
        padding: 0;
        transition-duration: .3s;
        width: 10px;
      }
      &--current,
      &:hover {
        button {
          background-color: #888;
        }
  // Slides styles
      }
    }
  }
  .slide {
    align-items: center;
    box-sizing: border-box;
    color: #fff;
    display: flex;
    height: 450px;
    justify-content: center;

    &--thumb {
      cursor: pointer;
      height: 100px;
      padding: 0 5px;
      transition: opacity .3s;

      &:hover {
        opacity: .75;
      }
    }
    img {
      height: 100%;
      object-fit: cover;
      object-position: center;
      width: 100%;
    }
  }
}
</style>
