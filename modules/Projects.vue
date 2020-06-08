<template>
  <div>
    <Hero :class="$style.hero">
      <h1 :class="$style.title">
        {{ 'Projets' | capitalize }}
      </h1>
      <template #subtitle>
        everything I could do...
      </template>
    </Hero>
    <Grid
      :class="$style.wrapper"
      :template-columns="$isMobile ? '1fr' : '1fr 1fr'"
      :template-rows="$isMobile ? '1fr' : '1fr 10fr'"
    >
      <Tabs :projects="projects.length">
        <Tab v-for="project in projects" :key="project.id">
          {{ project.title }}
        </Tab>
      </Tabs>
    </Grid>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Grid from '@/components/Grid.vue'
import Hero from '@/components/Hero.vue'
import Tabs from '@/components/TabsProjects.vue'
import Tab from '@/components/TabProject.vue'

export default {
  name: 'Projects',
  components: {
    Hero,
    Grid,
    Tabs,
    Tab
  },
  props: {
    current: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters('projects', ['projects']),
    isActive() {
      return this.$options.name === this.current
    }
  }
}
</script>

<style lang="scss" module>
.hero {
  margin-top: spacer(8);
}
.title {
  @include font($fontMediumSize, $purewhite, $fontSemiBoldWeight);
  @include bp('sm') {
    @include font($fontBigSize, $purewhite, $fontSemiBoldWeight);
  }
}

.subtitle {
  @include font($fontSmallSize, $purewhite, $fontRegularWeight);
}

</style>
