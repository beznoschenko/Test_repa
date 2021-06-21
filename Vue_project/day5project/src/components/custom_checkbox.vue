<template>
  <div class="checkbox-wrapper">
    <div class="checkbox-wrapper__icon" @click="checkClick()">
      <i :class="[this.isCheck ? 'fas fa-check' : '']"></i>
    </div>
    {{ label }}
  </div>
</template>

<script>
export default {
  name: "CustomCheckbox",
  data() {
    return {
      isCheck: false,
    };
  },
  props: {
    value: {
      type: Boolean,
      default: true,
    },
    label: {
      type: String,
      default: "",
    },
  },
  methods: {
    checkClick() {
      this.isCheck = !this.value;
      this.$emit("input", this.isCheck);
    },
  },
  mounted() {
    const _this = this;
    _this.isCheck = _this.value;
  },
};
</script>

<style lang="scss" scoped>
.checkbox-wrapper {
  width: auto;
  display: flex;
  flex-direction: row;
  &__icon {
    border: 1px solid black;
    padding: 0;
    margin-right: 10px;
    width: 16px;
    height: 16px;
  }
}
</style>