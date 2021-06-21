<template>
  <div class="menu">
    <span
      class="menu__item"
      :key="index"
      v-for="(item, index) in items"
      v-show="
        !(
          isLogin.status &&
          (item.name === 'login' || item.name === 'Registration')
        )
      "
      @click="$router.push(item.path)"
    >
      {{ item.name.toUpperCase() }}
    </span>
    <span v-if="isLogin.status" class="menu__item" @click="login_out">
      Log out
    </span>
    <span class="menu__item clear_data" @click="clearAll"> Clear all </span>
  </div>
</template>

<script>
export default {
  name: "CustomMenu",
  data() {
    return {};
  },
  props: {
    items: {
      type: Array,
      default: () => {},
    },
  },
  methods: {
    login_out() {
      this.$store.commit("logout");
    },
    clearAll() {
      this.$store.commit("clearAll");
    },
  },
  computed: {
    isLogin() {
      return this.$store.getters.getLoginStatus;
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  background-color: #212f3d;
  color: white;
  display: flex;
  flex-direction: row;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  &__item {
    padding: 15px 20px;
    font-size: 14pt;
    &:hover {
      background-color: #1c2833;
      box-shadow: 0px -5px 0px #a93226 inset;
    }
  }
}
.clear_data {
  color: #212f3d;
}
</style>