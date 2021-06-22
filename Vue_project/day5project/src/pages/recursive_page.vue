<template>
  <div class="wrapper-recursive">
    <custom-tree :parentdata="this.items" />
  </div>
</template>

<script>
import CustomTree from "../components/custom_tree.vue";
export default {
  name: "RecursivePage",
  components: {CustomTree},
  data() {
    return {
      items: {
        name: "Root",
        children: [
          { name: "Title1" },
          { name: "Title2", children: [{ name: "Title3" }] },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper-recursive{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

</style>