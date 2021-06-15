<template>
  <div class="wrapper-radiobutton">
    <div class="wrapper-radiobutton__icon" @click="clickCheck" >
      <i :class="[this.checked ? 'fas fa-circle' : '']"></i>
    </div>
    {{ label }}
  </div>
</template>

<script>
export default {
  name: "CustomRadioButton",
  data() {
    return {
    };
  },
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    id:{
      type: Number,
      default: 0
    }
  },
  methods:{
      clickCheck(){
          this.$emit('input', this.id)
      }
  },
  mounted() {
    const _this = this;
    _this.isChecked = _this.checked;
  },
};
</script>

<style lang="scss" scoped>
.wrapper-radiobutton {
  width: auto;
  display: flex;
  flex-direction: row;
  margin: 2px; 
  &__icon {
    border: 1px solid black;
    border-radius: 10px;
    padding: 0;
    margin-right: 10px;
    width: 10px;
    height: 10px;
    padding: 3px;
    font-size: 10px;
  }
}
</style>