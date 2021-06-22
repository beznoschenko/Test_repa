<template>
  <ul class="parent">
    <span
      @click="isVisible = !isVisible"
      v-show="this.parentdata.hasOwnProperty('children')"
    >
      <i class="fas fa-caret-down"></i>
    </span>
    {{
      this.parentdata.name
    }}
    <li
      v-show="isVisible"
      class="parrent__children"
      v-if="this.parentdata.hasOwnProperty('children')"
    >
      <custom-tree
        v-for="(item, index) in parentdata.children"
        :key="index"
        :parentdata="item"
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: "CustomTree",
  props: {
    parentdata: {},
  },
  data() {
    return {
      isVisible: false,
    };
  }
};
</script>

<style lang="scss" scoped>
.parent {
  list-style: none;
  font: normal 14pt "Sylfaen", serif;
}
</style>