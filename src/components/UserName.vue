<template>
  <div>
    <LabelInput v-model="computedFirstname" label="성"></LabelInput>
    <LabelInput v-model="computedLastname" label="이름"></LabelInput>
  </div>
</template>

<script>
import { computed } from 'vue'
import LabelInput from './LabelInput.vue'

export default {
  props: ['firstname', 'lastname'],
  emits: ['update:firstname', 'update:lastname'],
  components: {
    LabelInput,
  },
  setup(props, { emit }) {
    const computedFirstname = computed({
      get() {
        return props.firstname
      },
      set(value) {
        emit('update:firstname', value)
      },
    })
    const computedLastname = computed({
      get() {
        return props.lastname
      },
      set(value) {
        emit('update:lastname', value)
      },
    })
    return {
      computedFirstname,
      computedLastname,
    }
  },
}
</script>

<style lang="scss" scoped></style>
