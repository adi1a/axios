<template>
  <div>
    <router-link to="/posts" tag="button">posts</router-link>
    <br />

    {{ shortMessage }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
  computed: {
    ...mapState({
      user: "user",
      actualVacancies: "actualVacancies",
      jobs: "jobs",
    }),
  },
})
export default class PostsView extends Vue {
  message = "message";

  get shortMessage() {
    return this.message[0] + this.message[this.message.length - 1];
  }
}
</script>

<style scoped></style>
