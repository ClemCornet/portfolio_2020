<template>
  <div>
    <Hero
      :class="[$style.hero]"
    >
      <template #image>
        <TitleImage
          source="title_frontend"
          alt="title frontend"
          :class="[$style.image, {
            [$style.isActive]: active,
          }]"
        />
      </template>
      <h1
        :class="[$style.title,
                 {
                   [$style.isActive]: active,
                 }]"
      >
        {{ 'Developer' | capitalize }}
      </h1>
      <template #subtitle>
        <p :class="$style.subtitle">
          based in Paris
        </p>
      </template>
    </Hero>
    <MySelf />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import TitleImage from '@/components/Image.vue'
import MySelf from '@/components/MySelf.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    TitleImage,
    MySelf
  },
  props: {
    current: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      active: false
    }
  },
  mounted() {
    this.isActive()
  },
  methods: {
    isActive() {
      if (this.$options.name === this.current) {
        this.$nextTick(() => {
          this.active = !this.active
        })
      }
    }
  }
}
</script>

<style lang="scss" module>

.title {
  @include font($fontMediumSize, $purewhite, $fontSemiBoldWeight);
  @include bp('sm') {
    @include font($fontBigSize, $purewhite, $fontSemiBoldWeight);
  }
}

.subtitle {
  @include font($fontSmallSize, $purewhite, $fontRegularWeight);
}

.main {
  grid-row-start: 2;
  grid-column-start: 2;
}

// .title {
//   opacity: 0;
//   transition: all 5s ease-out;
//   &.isActive {
//     opacity: 1;
//   }
// }

// .title {
//   opacity: 0;
//   transition: all 5s ease-out;
//   &.isActive {
//     opacity: 1;
//   }
// }

.title {
  position: relative;

  &::after {
    background-color: $bluedark;
    transform: scaleX(1);
    transform-origin: left;
    transition: transform 1s ease-out;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}

.title {
   &.isActive {
      &::after {
        transform: scaleX(0);
        transform-origin: right;
      }
    }
  }

  .image {
  position: relative;

  &::after {
    background-color: $bluedark;
    transform: scaleX(1);
    transform-origin: left;
    transition: transform 1s ease-out;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}

.image {
   &.isActive {
      &::after {
        transform: scaleX(0);
        transform-origin: right;
      }
    }
  }

</style>
