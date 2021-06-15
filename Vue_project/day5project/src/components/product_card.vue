<template>
  <div class="product-property">
      <!-- Discount -->
      <div
        v-if="!!dataProduct.discount_price"
        class="product-property__discount-percent"
      >
        {{ dataProduct.discount_percent }}%
      </div>
    <!-- Image -->
    <div class="product-property__image">
      
      <img
       :src="dataProduct.image"
        :alt="dataProduct.name"
        width="auto"
        height="300px"
      />
    </div>
    <!-- Name -->
    <span class="product-property__row-name">{{ dataProduct.name }}</span>
    <!-- price -->
    <span class="product-property__row-price">
      Price:<span v-if="!!dataProduct.discount_price"
        >{{ dataProduct.discount_price }}
      </span>
      <span
        :class="[!!dataProduct.discount_price ? 'product-property__discount' : '']"
        >{{ dataProduct.price }}
      </span>
    </span>

    <button class="product-property__button" @click="buy_product">
      <i class="fas fa-shopping-bag"></i> Buy
    </button>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    dataProduct: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {

    };
  },
  methods: {
    buy_product() {
      this.$emit("input", this.dataProduct);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-property {
  width: 20rem;
  border: 1px solid #283747;
  border-radius: 10px;
  padding: 15px 5px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__row {
    display: inline-block;
    color: #1c2833;
    min-width: 0;
    font-family: "Sylfaen", serif;
    &-name {
      font-size: 14pt;
      font-weight: bold;
      margin-bottom: 5px;
    }
    &-price {
      font-size: 12pt;
      margin-bottom: 15px;
    }
  }
  &__discount {
    text-decoration: line-through;
  }
  &__image {
    width: auto;
    height: 300px;
    position: relative;
  }
  &__discount-percent {
    background-color: rgba(255, 102, 0, 0.8);
    right: 0;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
  }
  &__button {
    background-color: #00bc52;
    border: 1px solid #00ad4c;
    color: white;
    font-size: 12pt;
    padding: 10px 25px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    &:hover {
      background-color: #00ad4c;
    }
  }
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  }
}
</style>