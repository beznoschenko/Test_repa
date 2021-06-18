<template>
  <div class="wrapper">
    <div class="wrapper-info">
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

    <div class="wrapper-comment">
      <div
        v-for="(item, index) in datas.comments"
        :key="index"
        class="wrapper-comment__comments"
      >
        <div class="wrapper-comment__comments-user">
          {{ item.user }}
          <span class="wrapper-comment__comments-date">{{ item.date }}</span>
        </div>
        <div class="wrapper-comment__comments-comment">{{ item.comment }}</div>
        <div @click="removeComments(index)" class="wrapper-comment__remove">
          <i class="far fa-times-circle"></i>
        </div>
      </div>
      <div class="wrapper-comment__add-comment" v-if="isLogin.status">
        <span class="wrapper-comment__add-comment-title" >Add your comment</span>
        <textarea
          rows="5"
          class="wrapper-comment__add-comment-text-field"
          v-model="commentText"
        />
        <button 
          @click="addComments"
          class="wrapper-comment__add-comment-button"
        >
          Add comment
        </button>
      </div>
      <!-- <button @click="clearComments" class="wrapper-comment__button">
        Clear comment
      </button> -->
    </div>
  </div>
</template>

<script>
import CustomInput from "../components/custom_input.vue";
import routes from "../router/routes";
export default {
  name: "ProductInfo",
  components: {
    CustomInput,
  },
  data() {
    return {
      routes,
      commentText: "",
    };
  },
  methods: {
    addComments() {
     let payload={index:this.$route.params.id, text: this.commentText }
      this.$store.commit("addComment", payload);
      this.commentText = "";
    },
    clearComments() {
      this.$store.commit("clearComments", this.$route.params.id);
    },
    removeComments(index) {
      let payload={pindex:this.$route.params.id, cindex: index }
      this.$store.commit("removeComment", payload);
    },
  },
  computed: {
    datas() { 
      return this.$store.getters.getProduct[this.$route.params.id];
    },
    isLogin(){
      return this.$store.getters.getLoginStatus
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 60%;
  margin: 20px 0;
  padding: 5px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &-info {
    display: flex;
    flex-direction: row;
  }
}
.propertys {
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
.wrapper-comment {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  &__add-comment {
    margin-top: 17px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    &-text-field {
      border-radius: 5px;
      outline: none;
      font: normal 15pt "Sylfaen", serif;
    }
    &-title {
      font: normal 19pt "Sylfaen", serif;
    }
    &-button {
      margin-top: 7px;
      width: 16rem;
      background-color: #00bc52;
      border: 1px solid #00ad4c;
      color: white;
      font-size: 13pt;
      padding: 10px 35px;
      border-radius: 5px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 3px 10px 0 rgba(0, 0, 0, 0.19);
      &:hover {
        background-color: #00ad4c;
      }
    }
  }
  &__comments {
    font-size: 15pt;
    margin-top: 17px;
    padding: 20px;
    border-radius: 7px;
    border: 1px solid gray;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    position: relative;
    &-date {
      font-weight: normal;
      margin-left: 7px;
      font-size: 13pt;
      color: gray;
    }
    &-user {
      font-weight: bold;
    }
    &-comment {
      margin-top: 10px;
      font-size: 18pt;
    }
  }
  &__remove {
    position: absolute;
    right: 0;
    top: 0;
    color: gray;
    &:hover {
      color: #273746;
      cursor: pointer;
    }
    //transform: translateY(-50%) translateX(50%);
  }
}
</style>