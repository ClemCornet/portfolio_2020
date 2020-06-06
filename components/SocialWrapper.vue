<template>
  <div>
    <h3 :class="$style.title">
      Keep in touch
    </h3>
    <Flex justify="center" :class="$style.wrapperButton">
      <SocialButton
        v-for="network in social"
        :key="network.id"
        :network="network"
      />
    </Flex>
  </div>
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
  computed: {
    ...mapGetters('pages', ['social'])
  }
}
</script>

<style lang="scss" module>
.title {
    color: white;
    text-align: center;
}

.wrapperButton {
    margin-top: spacer(4);
}
</style>
