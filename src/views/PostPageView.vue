<template>
  <div>
    <h2>{{ post.id }}: {{ post.title }}</h2>
    <strong>{{ post.body }}</strong>

    <div class="user">
      <h2>Name: {{ userData.name }}</h2>
      <p>Email: {{ userData.email }}</p>
    </div>
    <button @click="$router.go(-1)">back</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class PostPageView extends Vue {
  post: { title: string; body: string; id: number; userId: number } = {
    title: "",
    body: "",
    id: 0,
    userId: 0,
  };
  userId: number;

  userData: { name: string; email: string } = {
    name: "",
    email: "",
  };
  async mounted() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + this.$route.params.id
      );
      if (response.data) {
        this.post = response.data;
        this.userId = this.post.userId;
        await this.getUserData();
      }
    } catch (error) {
      console.error(error);
    }
  }
  async getUserData() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/" + this.userId
      );
      if (response.data) {
        this.userData = response.data;
      }
    } catch (error) {
      console.error(error);
    }
  }
}
</script>

<style scoped></style>
