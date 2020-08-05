<template>
  <Grid
    :class="[$style.wrapper, { [$style.isActive]: active }]"
    :template-rows="$isMobile ? '1fr' : '1fr 1fr 1fr'"
  >
    <Hero :class="$style.hero">
      <h1 :class="$style.title">
        {{ 'let\'s talk' | capitalize }}
      </h1>
    </Hero>
    <Flex :class="$style.container">
      <div
        v-for="card in cards"
        :key="card.title"
        :class="$style.card"
      >
        <div :class="$style.header">
          <component :is="card.icon" :class="$style.icon" />
          <div :class="$style.cardTitle">
            |
          </div>
          <div :class="$style.cardTitle">
            {{ card.title }}
          </div>
        </div>
        <div :class="$style.description">
          {{ card.description }}
        </div>
      </div>
    </Flex>
  </Grid>
</template>

<script>
import Grid from '@/components/Grid.vue'
import Flex from '@/components/Flex.vue'
import Hero from '@/components/Hero.vue'
import Location from '@/assets/svg/contact/Location.vue'
import Linkedin from '@/assets/svg/contact/Linkedin.vue'
import Github from '@/assets/svg/contact/Github.vue'
import Twitter from '@/assets/svg/contact/Twitter.vue'

export default {
  name: 'Contact',
  components: {
    Hero,
    Grid,
    Flex,
    Location,
    Linkedin,
    Github,
    Twitter
  },
  props: {
    current: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    content() {
      return this.$store.getters['pages/content'](this.current)
    },
    cards() {
      const { cards } = this.content
      return cards
    }
  }
}
</script>

<style lang="scss" module>

.hero {
  margin-top: spacer(8);
  position: relative;
  &:after {
    @include overlayHorizontal(
      (
        position: absolute,
        value: 0,
        delay: 2s
      )
    );
  }
}

.title {
  position: relative;
  @include font($fontMediumSize, $purewhite, $fontSemiBoldWeight);
  @include bp('sm') {
    @include font(4rem, $purewhite, $fontSemiBoldWeight);
  }
  &:before {
    position: absolute;
    right: 0;
    content: '';
    width: 10px;
    height: 10px;
    background: $greenmain;
  }
}

.container {
  width: 70%;
  justify-self: center;
  background: #3C586E;
  border-radius: 15px;
  justify-content: space-between;
}

.card {
  flex: 1;
  padding-top: spacer(10);
}

.header {
  display: flex;
}

.cardTitle {
  align-self: flex-end;
}

.icon {
  width: 60px;
  height: 60px;
}

.isActive {
  .hero {
    &:after {
      @include overlayHorizontalHide();
    }
  }
}
</style>
