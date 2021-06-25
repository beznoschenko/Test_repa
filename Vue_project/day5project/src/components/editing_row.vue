<template>
  <div class="edit-wrapper__row">
    <div class="edit-wrapper__row-title">
      <slot></slot>
      </div>
    <div class="edit-wrapper__row-data">
      <custom-input
        :width="20"
        :maxlength="30"
        v-model="rowValue"
        v-if="isTruu"
      />
      <span v-else>{{ value }}</span>
    </div>
    <editing-icon v-model="isTruu" @click.native="text" />
  </div>
</template>

<script>
import EditingIcon from "./editing_icon.vue";
import CustomInput from "./custom_input.vue";
export default {
  name: "EditingRow",
  components: { EditingIcon, CustomInput },
  props:{
   
  value:{
    type: String,
    default: ''
  }
  },
  data() {
    return {
      isTruu: false,
      rowValue: ''
    };
  },
  watch:{
    rowValue: function (){
      this.$emit('input', this.rowValue)
    }
  },
  commputed:{
    rowValue(){
      return this.value
    }
  },
  methods:{
      text() {

    },
  },
  mounted(){
    const _this = this
    _this.rowValue = _this.value
  }
}

</script>

<style lang="scss" scoped>
.edit-wrapper {
  &__row {
    font: normal 20pt "Sylfaen", serif;
    display: flex;
    align-items: baseline;
    margin: 7px 0;
    &-title{
        width: 8rem;
    }
    &-data {
      width: 22rem;
      display: flex;
      justify-content: flex-start;
      align-items: baseline;
    }
  }
}

</style>