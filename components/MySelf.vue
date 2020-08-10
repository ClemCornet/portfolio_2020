<template>
  <Flex :direction="$isMobile ? 'column' : 'row'">
    <Avatar
      source="avatar"
      :rounded="true"
      :width="140"
      :heigth="140"
      :class="$style.avatar"
    />
    <p :class="[$style.description, {[$style.bordered]: !$isMobile}]">
      {{ description }}
    </p>
  </Flex>
</template>

<script>
import Flex from '@/components/Flex.vue'
import Avatar from '@/components/Image.vue'

export default {
  name: 'MySelf',
  components: {
    Avatar,
    Flex
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

.avatar {
  margin: auto;
  margin-bottom: spacer(4);
  @include bp('sm') {
    margin: 0;
  }
}

.description {
  @include paragraph();
  align-self: center;
  text-align: center;
  width: 100%;
  padding: 0 spacer(2);
  @include bp('sm') {
    width: 50%;
    text-justify: right;
    text-align: left;
    margin-left: spacer(4);
    padding: 0 0 0 spacer(2);
  }
  &.bordered {
    border-left: 2px solid $greenmain;
  }
}

</style>
