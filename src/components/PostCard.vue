<template>
  <div class="post">
    <h3 class="post-title" @click="routeToPost(post.id)">
      {{ post.id }}: {{ post.title }}
    </h3>
    <p class="" post-body>{{ post.body }}</p>
    <button @click="$emit('action')">addToCart</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    post: {
      type: Object as () => { title: string; body: string },
    },
  },
})
export default class PostCardComponent extends Vue {
  routeToPost(postId: string | number) {
    this.$router.push({ name: "postPage", params: { id: postId.toString() } });
  }
}
</script>

<style scoped lang="scss">
.post {
  border: 1px solid;
  border-radius: 5px;
}
</style>
