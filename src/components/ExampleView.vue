<template>
  <main>
    <div class="container py-4">
      <Mybase class="my-button" id="my-button" @click="sayHello" />
      <LabelInput label="이름" data-id="id입니다" />
      <hr />
      <FancyButton>Click!! <span style="color: red">@@@</span></FancyButton>
      <hr />
      <AppCard>
        <template #[slotArgs]>제목입니다</template>
        <template #default="{ childMessage, helloMessage }"
          >{{ childMessage }}, {{ helloMessage }}
        </template>
        <template #footer>푸터입니다</template>
      </AppCard>
      <hr />
      <AppCard> <template #default> 게시글입니다 </template> </AppCard>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue'
import AppCard from './AppCard.vue'
import FancyButton from './FancyButton.vue'
import LabelInput from './LabelInput.vue'
import Mybase from './MyBase.vue'

export default {
  components: {
    Mybase,
    LabelInput,
    FancyButton,
    AppCard,
  },
  setup() {
    const sayHello = () => {
      alert('안녕하세요!')
    }
    const slotArgs = ref('header')
    const message = ref('안녕하세요')
    return {
      sayHello,
      slotArgs,
      message,
    }
  },
}
</script>

<style lang="scss" scoped></style>
