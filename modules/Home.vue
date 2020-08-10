<template>
  <Grid
    :template-columns="$isMobile ? '1fr' : '3fr 1fr'"
    :template-rows="$isMobile ? '0.5fr' : '1fr 1fr'"
    :class="{[$style.isActive]: active}"
  >
    <div :class="$style.containerTitles">
      <TitleImage
        source="title_frontend"
        alt="title frontend"
        :class="$style.image"
        width="auto"
        height="auto"
      />
      <h1 :class="$style.title">
        {{ content.title | capitalize }}
      </h1>
      <p :class="$style.subtitle">
        {{ content.subtitle }}
      </p>
    </div>
    <SocialWrapper
      v-if="!$isMobile"
      :class="$style.social"
      :active="active"
    />
    <MySelf :class="$style.myself" :description="content.description" />
  </Grid>
</template>

<script>
import Grid from '@/components/Grid.vue'
import TitleImage from '@/components/Image.vue'
import SocialWrapper from '@/components/SocialWrapper.vue'
import MySelf from '@/components/MySelf.vue'

export default {
  name: 'Home',
  components: {
    Grid,
    TitleImage,
    SocialWrapper,
    MySelf
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
    }
  }
}
</script>

<style lang="scss" module>

.image {
  position: relative;
  margin: 0 spacer(2);
  @include bp('sm') {
    margin: 0;
  }
  &:after {
    @include overlayHorizontal((position: absolute, value: 0, delay: 1s));
  }
}

.containerTitles {
  grid-row-start: 1;
  grid-column-start: 1;
  margin-top: spacer(8);
}

.title {
  margin-left: spacer(0.5);
  position: relative;
  @include font($fontMediumSize, $purewhite, $fontSemiBoldWeight);
  text-align: center;
  @include bp('sm') {
    text-align: left;
    @include font($fontBigSize, $purewhite, $fontSemiBoldWeight);
  }
    &:after {
    @include overlayHorizontal((position: absolute, value: 0, delay: 1s));
  }
}

.subtitle {
  margin-left: spacer(1);
  position: relative;
  text-align: center;
  @include font($fontSmallSize, $purewhite, $fontRegularWeight);
  @include bp('sm') {
    text-align: left;
    @include font($fontMediumSize, $purewhite, $fontRegularWeight);
  }
   &:after {
    @include overlayHorizontal((position: absolute, value: 0, delay: 2s));
  }
}

.myself {
  grid-row-start: 2;
  grid-column-start: 1;
  margin-left: spacer(2);
  position: relative;
  align-self: center;
  &:after {
     @include overlayHorizontal((position: absolute, value: 0, delay: 2s));
  }
}

.social {
  align-self: top;
}

.isActive {
  .title {
    &:after {
      @include overlayHorizontalHide
    }
  }
  .subtitle {
    &:after {
      @include overlayHorizontalHide
    }
  }

  .image {
    &:after {
      @include overlayHorizontalHide
    }
  }
  .myself {
    &:after {
      @include overlayHorizontalHide
    }
  }
}
</style>
