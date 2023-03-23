<template>
  <div id="app">
    <div class="cart">in cart: {{ cart.length }}</div>
    <button @click="$router.go(-1)">back</button>
    <router-link to="/cart">cart-view</router-link>
    <router-view />
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
  computed: {
    ...mapState({
      user: "user",
      actualVacancies: "actualVacancies",
      jobs: "jobs",
      cart: "cart",
    }),
  },
})
export default class AppView extends Vue {}
</script>
