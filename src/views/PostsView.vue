<template>
  <div class="home">
    <div class="posts">
      <PostCardComponent
        v-for="(post, index) in posts"
        :post="post"
        :key="index"
        @action="addToCart(post.id)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PostCardComponent from "@/components/PostCard.vue";
import axios from "axios";
import { mapActions, mapState } from "vuex";

@Component({
  components: {
    PostCardComponent,
  },
  computed: {
    ...mapActions({
      addProductToCart: "addProductToCart",
    }),
    ...mapState({
      posts: "posts",
    }),
  },
})
export default class HomeView extends Vue {
  posts!: never[];
  mounted() {
    this.getPosts();
  }
  async getPosts() {
    if (this.posts.length) {
      return;
    }
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (response.data) {
        await this.$store.dispatch("setPosts", { posts: response.data });
      }
    } catch (error) {
      console.log(error);
    }
  }
  addToCart(postId: number) {
    console.log(postId);
    this.$store.dispatch("addProductToCart", { postId: postId });
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
