<template>
      <div class="wrapper">
          <product-card v-for="(item, index) in product" :key="index" :dataProduct="item" v-model="checkData" />
      </div>
</template>

<script>
import ProductCard from "../components/product_card.vue";
export default {
    name: "Home",
    components:{
           ProductCard
    },
    data() {
    return {
      checkData: {},
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
        {
          name: "Samsung Galaxy S21 Ultra",
          price: 39999,
          image: "https://content.rozetka.com.ua/goods/images/big/163259157.jpg"
        },
        {
          name: "Samsung Galaxy A12",
          price: 5199,
          discount_price: 5499,
          discount_percent: 5,
          image: "https://content2.rozetka.com.ua/goods/images/big/178061476.jpg"
        },
        {
          name: "Samsung Galaxy A21s ",
          price: 5399,
          image: "https://content.rozetka.com.ua/goods/images/big/172730930.jpg"
        }
      ],
    };
  },

}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

</style>