<template>
  <div class="wrapper">
    <div class="propertys">
      <span class="propertys__name">{{ this.datas.name }}</span>
      <span class="propertys__description">{{ this.datas.description }}</span>
      <div
        class="property"
        v-for="(item, index) in datas.property"
        :key="index"
      >
        {{ item.name }}
        <div class="property__sub" v-if="Array.isArray(item.value)">
          <div v-for="(items, index) in item.value" :key="index">
            {{ items.name }} - {{ items.value }}
          </div>
        </div>
        <div class="property__sub" v-else>
          {{ item.name }} - {{ item.value }}
        </div>
      </div>
    </div>

    <div class="photo">
      <img
        :src="this.datas.image"
        :alt="this.datas.name"
        width="auto"
        height="600px"
      />
      <br />
      <custom-input number class="inlines" /><button
        class="propertys__button inlines"
      >
        <i class="fas fa-shopping-bag"></i> Buy
      </button>
    </div>
  </div>
</template>

<script>
import CustomInput from "../components/custom_input.vue";
import routes from "../router/routes";
import products from "../mocks/products.js"
export default {
  name: "ProductInfo",
  components: {
    CustomInput,
  },
  data() {
    return {
      routes,
      ggg: {}
      // datas: {
      //   property: [
      //     {
      //       name: "Дисплей",
      //       value: [
      //         { name: "Диагональ экрана", value: "6.9" },
      //         { name: "Разрешение дисплея", value: "3088x1440" },
      //         { name: "Тип матрицы", value: "Dynamic AMOLED 2X" },
      //         {
      //           name: "Материал экрана",
      //           value: "Стекло (Gorilla Glass Victus)",
      //         },
      //       ],
      //     },
      //     { name: "Операционная система", value: "Android" },
      //     {
      //       name: "СИМ-карты",
      //       value: [
      //         { name: "Количество СИМ-карт", value: "2" },
      //         { name: "Размеры СИМ-карты", value: "Nano-SIM" },
      //       ],
      //     },
      //   ],
      //   image: "https://content2.rozetka.com.ua/goods/images/big/141334395.jpg",
      //   name: "Samsung Galaxy Note 20 Ultra",
      //   description:
      //     "Первым соединив электронное перо и смартфон, Galaxy Note открывает для вас абсолютно новый мир. Мы сталкиваемся с новой реальностью, в которой нужны устройства нового типа. Это не смартфон в привычном представлении. Это мощный компьютер в вашем кармане. Это новый уровень развлечений и гейминга. Это киностудия с камерой 8K в ваших руках. Супермощный смартфон, меняющий ваше представление о работе и развлечениях.",
      // },
    }
  },
  computed:{
    datas(){
      console.log(this.$route.params.id);
      return this.$store.getters.getProduct[this.$route.params.id]
      
    }
    // dat(){
    //   return this.$store.getters.getProduct[this.$route.params.id]
    // }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 5px;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.propertys {
  max-width: 800px;
  font: normal 13pt "Sylfaen", serif;
  display: flex;
  flex-direction: column;
  &__name {
    font-weight: bold;
    font-size: 20pt;
  }
  &__button {
    background-color: #00bc52;
    border: 1px solid #00ad4c;
    color: white;
    font-size: 13pt;
    padding: 10px 35px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    &:hover {
      background-color: #00ad4c;
    }
  }
}
.property {
  margin-top: 10px;
  font-weight: bold;
  font-size: 15pt;
  &__sub {
    padding: 5px 10px;
    font-weight: normal;
    font-size: 12pt;
  }
}
.inlines {
  display: inline-block;
}
</style>