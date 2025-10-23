<template>
  <main>
    <div class="container">
      <PostCreate @create-post="createPost" />

      <hr class="my-4" />

      <div class="row g-3">
        <div v-for="post in posts" :key="post.id" class="col col-4">
          <PostItem :title="post.title" :contents="post.contents" :type="post.type" />
        </div>
      </div>
      <hr class="my-4" />
      <div>
        <LabelInput
          v-model="username"
          label="이름"
          class="parent-class"
          style="color: red"
          id="parent"
        />
      </div>
    </div>
  </main>
</template>

<script>
import PostItem from '@/components/PostItem.vue'
import PostCreate from './PostCreate.vue'
import LabelInput from './LabelInput.vue'
import { reactive, ref } from 'vue'
export default {
  components: {
    PostItem,
    PostCreate,
    LabelInput,
  },
  setup() {
    const post = reactive({
      title: '제목2',
      contents: '내용2',
    })
    const posts = reactive([
      { id: 1, title: '제목1', contents: '내용1', isLiked: true, type: 'news' },
      { id: 2, title: '제목2', contents: '내용2', isLiked: true, type: 'news' },
      { id: 3, title: '제목3', contents: '내용3', isLiked: true, type: 'news' },
      { id: 4, title: '제목4', contents: '내용4', isLiked: false, type: 'notice' },
      { id: 5, title: '제목5', contents: '내용5', isLiked: false, type: 'notice' },
      { id: 6, title: '제목6', contents: '내용6', isLiked: false, type: 'notice' },
    ])
    const createPost = (newPost) => {
      console.log('create post', newPost)
      posts.push(newPost)
    }
    const username = ref('')
    const firstname = ref('')
    const lastname = ref('')
    return {
      post,
      posts,
      createPost,
      username,
      firstname,
      lastname,
    }
  },
}
</script>

<style lang="scss" scoped></style>
