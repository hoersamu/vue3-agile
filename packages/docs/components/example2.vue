<template>
  <Agile
    :nav-buttons="false"
    :autoplay-speed="5000"
    :speed="2500"
    fade
    pause-on-hover
    pause-on-dots-hover
    autoplay
    class="example2"
  >
    <img
      v-for="image in images"
      :key="image"
      :src="image"
    >
  </Agile>
</template>

<script setup lang="ts">
const images = [
  'https://images.unsplash.com/photo-1509549649946-f1b6276d4f35?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
  'https://images.unsplash.com/photo-1511469054436-c7dedf24c66b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9',
  'https://images.unsplash.com/photo-1511135232973-c3ee80040060?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9',
  'https://images.unsplash.com/photo-1511231683436-44735d14c11c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9',
  'https://images.unsplash.com/photo-1517677129300-07b130802f46?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9',
]
</script>

<style lang="scss">
.example2 {
  // VueAgile styles
  .agile {
    &__dots {
      bottom: 10px;
      flex-direction: column;
      right: 30px;
      position: absolute;
    }
    &__dot {
      margin: 5px 0;
      list-style-type: none;
      margin-top: 0 !important;

      button {
        background-color: transparent;
        border: 1px solid #fff;
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
          background-color: #fff;
        }
  // Slides styles
      }
    }
  }
  .slide {
    display: block;
    height: 500px;
    object-fit: cover;
    width: 100%;
  }
}
</style>
