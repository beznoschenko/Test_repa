<template>
  <div class="edit-field">
    <div class="edit-field__icon" @click="editing()">
      <div v-show="!isEdit">
        <i  class="fas fa-edit"></i>
      </div>
      <div v-show="isEdit">
        <i class="fas fa-check"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditingIcon",
  data() {
    return {
    };
  },
  props: {
    value: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    editing() {
  
      this.$emit("input", !this.isEdit);
    },
  },
  computed:{
      isEdit(){
          return this.value
      }
  }
};
</script>

<style>
.edit-field__icon {
  font: normal 20pt "Sylfaen", serif;
  color: gray
}
.edit-field__icon:hover{
  color: black;
  cursor: pointer;
}
</style>