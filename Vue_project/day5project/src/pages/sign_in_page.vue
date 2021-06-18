<template>
  <div class="wrapper">
    <div class="wrapper-form">
      <div class="wrapper-form__title">LOGIN</div>
      <br />
      <div class="wrapper-form__label" patten="\w+@{1}[a-zA-Z]+\.{1}[a-zA-Z]+">E-mail</div>
      <custom-input :width="20" :maxlength="40" v-model="user.email"/>

      <div class="wrapper-form__label">Password</div>
      <custom-input :width="20" :maxlength="30" type="password" v-model="user.password"/>

      <button class="wrapper-form__button" @click="checkData">Log in</button>
    </div>
  </div>
</template>

<script>
import CustomInput from "../components/custom_input.vue";
export default {
  name: "Login",
  data() {
    return {
      user:{}
    };
  },
  components: {
    CustomInput,
  },
  methods:{
    checkData(){
      let name = this.$store.state.users.map( a => {return a.email})
      let userIndex = name.findIndex((name) => {return name==this.user.email.toLowerCase()})
      //debugger
      if (userIndex!==-1 && this.$store.state.users[userIndex].password==this.user.password){
        console.log("Успешный логин")

      this.$store.commit("login_out");
      this.$store.commit("login", userIndex);
      this.$router.push("/")
      }
      else{
        console.log("Ваши данные хуета!")
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
}
.wrapper-form {
  //border: 1px solid gray;
  border-radius: 10px;
  padding: 35px 70px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  &__title {
    font: normal 20pt "Sylfaen", serif;
    display: flex;
    justify-content: center;
    padding: 15px 0 5px 0;
    border-bottom: 2px solid #abb2b9;
  }
  &__label {
    font: normal 15pt "Sylfaen", serif;
    color: #212f3d;
  }
  &__button {
    float: right;
    margin: 5px 0;
    padding: 10px;
    font: normal 13pt "Sylfaen", serif;
    width: 50%;
    border-radius: 15px;
    background-color: #7fb3d5;
    border: none;
  }
}
</style>