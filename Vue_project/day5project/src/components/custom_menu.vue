<template>
  <div class="menu">
    <span
      class="menu__item"
      :key="index"
      v-for="(item, index) in items"
      @click="$router.push(item.path)"
    >
      {{ items[index].name.toUpperCase() }}
    </span>
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
};
</script>

<style lang="scss" scoped>
.menu {
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
</style>