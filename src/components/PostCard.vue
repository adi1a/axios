<template>
  <div class="post">
    <h3 class="post-title">
      {{ post.title }}
    </h3>
    <p class="" post-body>{{ post.body }}</p>
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
export default class PostCardComponent extends Vue {}
</script>

<style scoped lang="scss">
.post {
  border: 1px solid;
  border-radius: 5px;
}
</style>
