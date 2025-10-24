<template>
  <div>
    <main>
      <div class="container py-4">
        <ScriptSetup />
      </div>
    </main>
  </div>
</template>

<script>
import ScriptSetup from './ScriptSetup.vue'

export default {
  components: {
    ScriptSetup,
  },
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
