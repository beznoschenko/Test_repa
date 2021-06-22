<template>
<div>
    <custom-tree :parentdata="children" />
</div>

</template>

<script>
import CustomTree from "./custom_tree.vue";
export default {
  name: "CustomBranch",
  components: {CustomTree},
  props:{ 
      childrens: () => {}

  },
  data() {
    return {};
  },
};
</script>

<style>
</style>