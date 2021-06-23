<template>
  <div class="radio-grooup-wrapper">
    <custom-radio-button
      v-for="(i, index) in arrayData"
      :key="index"

      @input="trueCheck"
      :checked="i.state"
      :label="i.label"
      :id="index"
    />
  </div>
</template>

<script>
import CustomRadioButton from "./custom_radiobutton.vue";
export default {
  name: "CustomRadioButtonGroup",
  components:{CustomRadioButton},
  data() {
    return {
      checkChecked: false,
        arrayData: []
    };
  },
  props: {
    items: {
      type: Array,
      default: () => ([])
    },
  },
  methods: {
    trueCheck(index) {
       if (!this.arrayData[index].state) {
        this.arrayData.forEach((a) => {
          a.state = false;
        });
        this.arrayData[index].state = true;
        this.$emit("input", this.items[index].label)
      }
    },
    copyArray(){
      const arrayData = this.items.map(a=>Object.assign({}, a));
      arrayData.forEach( a => a.state = false )
      this.arrayData = arrayData
    }

  },
  watch:{
    items: {
      deep: true,
      immediate: true,
      handler: function(){
        this.copyArray()
      }
    }
  },

  mounted() {
    window.radiogroup = this;

    
  },
};
</script>

<style lang="scss" scoped>
.radio-grooup-wrapper{
  display: flex;
  flex-direction: row;

}
</style>