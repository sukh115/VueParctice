<template>
  <div>
    <div class="card">
      <div class="card-body">
        <span class="badge bg-secondary">{{ typeName }}</span>
        <h5 class="card-title mt-2">{{ title }}</h5>
        <p class="card-text">
          {{ contents }}
        </p>
        <a href="#" :class="isLikedClass">좋아요</a>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    type: {
      type: String,
      default: 'news',
      validator: (value) => {
        return ['news', 'notice'].includes(value)
      },
    },
    title: {
      type: String,
      required: true,
    },
    contents: {
      type: String,
      // required: true,
    },
    isLiked: {
      type: Boolean,
      default: false,
    },
    obj: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    console.log(props.title)
    const isLikedClass = computed(() =>
      props.isLiked ? 'btn btn-danger' : 'btn btn-outline-danger',
    )
    const typeName = computed(() => (props.type === 'news' ? '뉴스' : '공지사항'))
    return {
      isLikedClass,
      typeName,
    }
  },
}
</script>

<style></style>
