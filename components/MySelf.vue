<template>
  <Grid
    :template-columns="$isMobile ? '1fr' : $isTablet ? '2fr 5fr' : '1fr 5fr'"
    :justify-items="$isMobile ? 'center' : ''"
  >
    <Avatar
      source="avatar"
      :rounded="true"
      :width="160"
    />
    <p :class="[$style.paragraph, {[$style.bordered]: $isMobile }]">
      {{ description }}
    </p>
  </Grid>
</template>

<script>
import Grid from '@/components/Grid.vue'
import Avatar from '@/components/Image.vue'

export default {
  name: 'MySelf',
  components: {
    Avatar,
    Grid
  },
  props: {
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" module>
.paragraph {
  @include font($fontSmallSize, $purewhite, $fontLightWeight);
  padding: spacer(8) spacer(4) 0 spacer(4);
  text-justify: right;
}

.bordered {
  &:before {
  content: '';
  height: 15%;
  width: 1px;
  background: $greenmain;
  position: absolute;
  left: 20px;
  }
}

</style>
