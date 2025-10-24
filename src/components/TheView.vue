<template>
  <div>
    <main>
      <div class="container py-4">
        <TemplateRefs></TemplateRefs>
      </div>
    </main>
  </div>
</template>

<script>
import TemplateRefs from './TemplateRefs.vue'

export default {
  components: {
    TemplateRefs,
  },
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
