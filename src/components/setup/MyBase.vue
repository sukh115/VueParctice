<template>
  <div class="p-3 bg-danger">
    <button type="button" class="btn btn-primary" @click="sayHello">My button</button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  emits: ['sayHello'],
  setup(props, { emit }) {
    const sayHello = () => {
      emit('sayHello')
    }
    return {
      sayHello,
    }
  },
}
</script>

<style lang="scss" scoped></style>
