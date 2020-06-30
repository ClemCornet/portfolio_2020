<template>
  <Grid
    :template-columns="$isMobile ? '1fr' : '2fr 1fr'"
    template-row="1fr 5fr"
    :class="{ [$style.active]: active }"
  >
    <div :class="$style.back" @click="reduce">
      Go back
    </div>
    <Flex :class="$style.listitem" direction="column" wrap="wrap">
      <TechnoItem
        v-for="techno in technos"
        :key="techno.name"
        :class="$style.technoitem"
        :image="techno.image"
        :name="techno.name"
        :description="techno.description"
      />
    </Flex>
    <TechnoDescription
      :class="$style.description"
      :illustration="illustration"
      :title="title"
      :description="description"
    />
  </Grid>
</template>

<script>
import TechnoItem from '@/components/TechnoItem.vue'
import TechnoDescription from '@/components/TechnoDescription.vue'
import Grid from '@/components/Grid.vue'
import Flex from '@/components/Flex.vue'

export default {
  name: 'SkillCollapsed',
  components: {
    Grid,
    Flex,
    TechnoItem,
    TechnoDescription
  },
  props: {
    id: {
      type: Number,
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
    illustration: {
      type: String,
      required: true
    },
    technos: {
      type: Array,
      required: true
    },
    idx: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      active: false
    }
  },
  created() {
    this.isActive()
  },
  methods: {
    isActive() {
      if (this.id === this.idx) {
        setTimeout(() => {
          this.active = !this.active
        }, 500)
      }
    },
    reduce() {
      this.$emit('reduce')
    }
  }
}
</script>

<style lang="scss" module>
.listitem {
  &:after {
    @include overlayHorizontal;
  }
  position: relative;
  grid-row-start: 2;
  align-self: center;
  height: 70%;
}

.technoitem {
  margin-bottom: spacer(6);
}

.description {
  grid-row-start: 2;
}

.active {
  .listitem {
    &:after {
      @include overlayHorizontalHide();
    }
  }
}
</style>
