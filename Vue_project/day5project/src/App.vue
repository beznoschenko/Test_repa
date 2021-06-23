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
    <custom-menu :items="menu" />
    <router-view> </router-view>
  </div>
</template>

<script>
import CustomInput from "./components/custom_input.vue";
import CustomCheckbox from "./components/custom_checkbox.vue";
import CustomRadioButtonGroup from "./components/custom_radiogroup.vue";
import CustomMenu from "./components/custom_menu.vue";
import routes from "./router/routes";

export default {
  name: "App",
  components: {
    CustomInput,
    CustomCheckbox,
    CustomRadioButtonGroup,
    CustomMenu,
  },
  data() {
    return {
      routes,
      //menu_data: ["Home", "Category", "Products"],
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
    menu() {
      if (this.$store.getters["moduleUsers/getLoginStatus"].status){
        return this.routes.filter((el) => el.meta.visible);
      }
      else{
        return this.routes.filter((el)=> el.name!=='product')
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
