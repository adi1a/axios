<template>
  <div>
    <h1>Cart</h1>
    <PostCardComponent
      v-for="(post, index) in posts"
      :post="post"
      :key="index"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PostCardComponent from "@/components/PostCard.vue";
import { mapState } from "vuex";

@Component({
  components: {
    PostCardComponent,
  },
  computed: {
    ...mapState({
      posts: "posts",
      card: "card",
    }),
  },
})
export default class CartView extends Vue {
  postsInCart: never[] = [];

  // mounted() {
  //   this.$store.dispatch();
  // }

  /////// ....... ///////
}
</script>

<style scoped lang="scss"></style>
