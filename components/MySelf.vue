<template>
  <Flex>
    <Avatar
      source="avatar"
      :rounded="true"
      :width="160"
    />
    <p>
      Hello, moi c'est Clément. Passionné d'informatique depuis tout jeune,
      j'ai commencé à m'intéresser au développement web en parallèle de
      mes études dans la communication et le marketing.
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
  }
}
</script>

<style lang="scss" scoped></style>
