<template>
  <Flex
    direction="column"
    justify="space-around"
    flex="1"
    :class="[$style.item, {[$style.bordered]: bordered}, {[$style.isActive]: active}]"
  >
    <ImageNumber
      :source="image"
      alt="number"
      :class="[$style.image, {[$style.isActive]: active}]"
      :width="150"
      :height="150"
    />
    <h2 :class="$style.title">
      {{ title | capitalize }}
    </h2>
    <p :class="$style.description">
      {{ description }}
    </p>
    <div :class="$style.button" @click="collapsed">
      <p>Show more</p>
      <div :class="$style.icon">
        <ArrowRight :class="$style.arrow" />
      </div>
    </div>
  </Flex>
</template>

<script>
import ImageNumber from '@/components/Image.vue'
import Flex from '@/components/Flex.vue'
import ArrowRight from '@/assets/svg/ArrowRight.vue'

export default {
  name: 'SkillItem',
  components: {
    Flex,
    ImageNumber,
    ArrowRight
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    bordered: {
      type: Boolean,
      required: true
    },
    technos: {
      type: Array,
      required: true
    },
    active: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    collapsed() {
      this.$emit('open', this.id)
    }
  }
}
</script>

<style lang="scss" module>

.title {
  @include font($fontMediumSize, $purewhite, $fontSemiBoldWeight);
  @include bp('sm') {
    @include font($fontLargeSize, $purewhite, $fontBoldWeight);
  }
}

.item {
  &.bordered {
    &:before {
    position: absolute;
    content: '';
    right: 1px;
    width: 1px;
    height: 100%;
    background-color: $purewhite;
    }
  }
}

.description {
  @include paragraph();
  margin-top: spacer(4);
}

.button {
  align-self: flex-end;
  display: flex;
  font-size: $fontMediumSize;
  color: $purewhite;
  cursor: pointer;
  @include paragraph();
  .arrow {
    width: 30px;
    height: auto;
  }
}

</style>
