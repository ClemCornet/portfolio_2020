<template>
  <Grid
    :class="$style.wrapper"
    :template-rows="$isMobile ? '1fr' : '1fr 2fr'"
  >
    <Hero :class="$style.hero">
      <h1 :class="$style.title">
        {{ 'Skills' | capitalize }}
      </h1>
    </Hero>
    <Flex
      v-if="!isCollapsed"
      :class="$style.skills"
      :direction="$isMobile ? 'column' : 'row'"
    >
      <SkillItem
        v-for="skill in skills"
        :key="skill.id"
        :index="skill.id"
        :class="$style.item"
        :image="skill.image"
        :title="skill.title"
        :description="skill.description"
        :bordered="skill.bordered"
        :technos="skill.technos"
        @collapsed="collapsed"
      />
    </Flex>
    <SkillCollapsed v-if="isCollapsed" :item-collapsed="itemCollapsed" @reduce="toggle" />
  </Grid>
</template>

<script>
import { mapGetters } from 'vuex'
import Hero from '@/components/Hero.vue'
import SkillItem from '@/components/SkillItem.vue'
import Grid from '@/components/Grid.vue'
import Flex from '@/components/Flex.vue'
import SkillCollapsed from '@/components/SkillCollapsed.vue'

export default {
  name: 'Skills',
  components: {
    Flex,
    Grid,
    Hero,
    SkillItem,
    SkillCollapsed
  },
  props: {
    current: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isCollapsed: false,
      itemCollapsed: null
    }
  },
  computed: {
    isActive() {
      return this.$options.name === this.current
    },
    ...mapGetters('skills', ['skills'])
  },
  methods: {
    collapsed(index) {
      this.toggle()
      this.itemCollapsed = this.skills[index].technos
    },
    toggle() {
      this.isCollapsed = !this.isCollapsed
    }
  }
}
</script>

<style lang="scss" module>
.wrapper {
  height: 100vh;
}
.hero {
  margin-top: spacer(8);
}
.title {
  @include font($fontMediumSize, $purewhite, $fontSemiBoldWeight);
  @include bp('sm') {
    @include font($fontBigSize, $purewhite, $fontSemiBoldWeight);
  }
}
.item {
  padding: 0 spacer(4);
}
 .skills {
   height: 50%;
}
</style>
