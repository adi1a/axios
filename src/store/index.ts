import Vue from "vue";
import Vuex from "vuex";

interface IStore {
  cart: number[];
  posts: { title: string; body: string; id: number }[];
}

Vue.use(Vuex);

export default new Vuex.Store<IStore>({
  state: {
    cart: [],
    posts: [],
  },
  getters: {},
  mutations: {
    SET_POSTS(state, { posts }) {
      state.posts = posts;
    },
    ADD_PRODUCT_TO_CART(state, { postId }) {
      state.cart.push(postId);
    },
  },
  actions: {
    addProductToCart({ commit }, { postId }) {
      commit("ADD_PRODUCT_TO_CART", { postId });
    },
    setPosts({ commit }, { posts }) {
      commit("SET_POSTS", { posts });
    },
  },
  modules: {},
});
