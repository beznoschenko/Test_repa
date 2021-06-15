<template>
  <div class="wrapper">
    <!-- <span>First Name</span>
    <custom-input v-model="inputText.f_name" :maxlength="5"/>
    <br />
    <span>Last Name</span>
    <custom-input v-model="inputText.l_name" :maxlength="15"/>
    <br />
    <span>Gender</span>
    <custom-radio-button-group :items="radio" v-model="inputText.gender" />

    <span>Age</span>
    <custom-input v-model="inputText.age" :max="maxVal" :min="minVal" number />

    <br />
    {{ fullInformation }} -->
    <router-view></router-view>
    </div>
</template>

<script>
import CustomInput from "./components/custom_input.vue";
import CustomCheckbox from "./components/custom_checkbox.vue";
import CustomRadioButtonGroup from "./components/custom_radiogroup.vue";
import routes from './router/routes';


export default {
  name: "App",
  components: {
    CustomInput,
    CustomCheckbox,
    CustomRadioButtonGroup,
 
  },
  data() {
    return {
      // maxVal: 100,
      // minVal: 0,
      // inputText: { f_name: "", l_name: "", gender: "", age: 0 },
      // value: false,
      // radioCheck: true,
     // checkData: {},
      // radio: [{ label: "Мужчина" }, { label: "Женщина" }]
     
    };
  },
  computed: {
    // fullInformation() {
    //   return this.inputText.gender+':'+this.inputText.f_name+' '+this.inputText.l_name+', '+this.inputText.age;
    // },
  },
};
</script>

<style lang="scss" scoped>

</style>
