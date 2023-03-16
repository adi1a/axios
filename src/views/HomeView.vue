<template>
  <div class="home">
    <div class="posts">
      <PostCardComponent
        v-for="(post, index) in posts"
        :post="post"
        :key="index"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PostCardComponent from "@/components/PostCard.vue";
import axios from "axios";

@Component({
  components: {
    PostCardComponent,
  },
})
export default class HomeView extends Vue {
  posts: { title: string; body: string }[] = [];

  mounted() {
    this.getPosts();
  }
  async getPosts() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (response.data) {
        this.posts = response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style scoped lang="scss">
.posts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
}
</style>
