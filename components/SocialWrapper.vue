<template>
  <Flex align="flex-end" justify="flex-end">
    <Flex :class="$style.wrapperButton">
      <SocialButton
        v-for="network in social"
        :key="network.id"
        :class="[$style.button, {[$style.active]: show}]"
        :network="network"
      />
    </Flex>
  </Flex>
</template>

<script>
import { mapGetters } from 'vuex'
import Flex from '@/components/Flex.vue'
import SocialButton from '@/components/SocialButton.vue'

export default {
  name: 'SocialWrapper',
  components: {
    Flex,
    SocialButton
  },
  props: {
    active: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    ...mapGetters('pages', ['social'])
  },
  mounted() {
    this.isActive()
  },
  methods: {
    isActive() {
      if (this.active) {
        setTimeout(() => {
          this.show = this.active
        }, 1500)
      }
    }
  }
}
</script>

<style lang="scss" module>
.button {
  transform: scale(0);
  transition: transform 0.7s ease-in-out;
  &.active {
    transform: scale(1);
  }
}
.title {
    color: white;
    text-align: center;
}

.wrapperButton {
    margin-bottom: spacer(4);
}
</style>
