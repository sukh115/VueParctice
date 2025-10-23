<template>
  <div>
    <h2>{{ teacher.name }}</h2>
    <h3>강의가 있습니까?</h3>
    <p>{{ hasLectures }}</p>
    <button v-on:click="counter">{{ counter }}</button>
    <h2>이름</h2>
    <p>{{ fullName }}</p>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'

export default {
  setup() {
    const teacher = reactive({
      name: 'Lee',
      lectures: ['Vue', 'React', 'Angular'],
    })

    const hasLectures = computed(() => (teacher.lectures.length > 0 ? '있음' : '없음'))

    const existsLectures = () => {
      return teacher.lectures.length > 0 ? '있음' : '없음'
    }

    const counter = ref(0)

    const firstName = ref('Hong')
    const lastName = ref('Gil Dong')

    const fullName = computed(() => `${firstName.value} ${lastName.value}`)
    console.log('풀네임 출력 : ' + fullName.value)

    return {
      teacher,
      hasLectures,
      existsLectures,
      counter,
      fullName,
    }
  },
}
</script>

<style lang="scss" scoped></style>
