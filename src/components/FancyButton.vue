<template>
  <div>
    <button class="fancy-button">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style scoped>
.fancy-button {
  color: #fff;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  border: none;
  padding: 5px 12px;
  border-radius: 8px;
  cursor: pointer;
  margin: 5px;
}
</style>
