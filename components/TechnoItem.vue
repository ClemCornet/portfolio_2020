<template>
  <div
    :class="$style.item"
    :style="`transform: rotate(${degrees}deg) translate(${trans}em ) rotate(-${degrees}deg`"
  >
    <img :class="$style.image" :src="require(`@/assets/images/technos/${image}.jpg`)" alt="logo_technologies">
    <p :class="$style.description">
      {{ name }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'TechnoItem',
  props: {
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    degrees: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  computed: {
    trans() {
      return this.$mq === 'xl' ? 14.5 : 13.5
    }
  }
}
</script>

<style lang="scss" module>

.item {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8em; height: 8em;
  margin: -3.5em;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
  &:hover {
    .image {
      transform: scale(1.2);
    }
    .description {
      opacity: 1;
    }
  }
}

.image {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  transition: transform .2s;
}

.description {
  z-index: 10;
  @include font(1.2rem, $purewhite, $fontSemiBoldWeight);
  opacity: 0;
  transition: opacity .3s;
}

</style>
