<template>
      <div class="wrapper">
          <product-card v-for="(item, index) in product" :key="index" :dataProduct="item" v-model="checkData" @click.native="$router.push({ name: 'product', params:{id: index}})" /> 

      </div>
</template>

<script>
import ProductCard from "../components/product_card.vue";
import products from "../mocks/products.js"
export default {
    name: "Home",
    components:{
           ProductCard
    },
    data() {
    return {
      checkData: {},
      
    };
  },
  computed:{
    product(){
      return this.$store.getters.getProduct
    }
  }, 
  created(){
    this.$store.commit('loadData', products.datas)
  }

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