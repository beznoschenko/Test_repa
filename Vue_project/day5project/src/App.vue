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
    <product-card v-for="(item, index) in product" :key="index" :dataProduct="item" v-model="checkData" />
    </div>
</template>

<script>
import CustomInput from "./components/custom_input.vue";
import CustomCheckbox from "./components/custom_checkbox.vue";
import CustomRadioButtonGroup from "./components/custom_radiogroup.vue";
import ProductCard from "./components/product_card.vue";

export default {
  name: "App",
  components: {
    CustomInput,
    CustomCheckbox,
    CustomRadioButtonGroup,
    ProductCard
  },
  data() {
    return {
      // maxVal: 100,
      // minVal: 0,
      // inputText: { f_name: "", l_name: "", gender: "", age: 0 },
      // value: false,
      // radioCheck: true,
      checkData: {},
      // radio: [{ label: "Мужчина" }, { label: "Женщина" }]
      product: [
        {
          name: "Samsung Galaxy Note 20 Ultra",
          price: 31999,
          discount_price: 28800,
          discount_percent: 10,
          image: "https://content2.rozetka.com.ua/goods/images/big/141334395.jpg",
        },
        {
          name: "Samsung Galaxy A02s",
          price: 3799,
          image: "https://content.rozetka.com.ua/goods/images/big/178061571.jpg",
        },
      ],
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
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: left;
}
</style>
