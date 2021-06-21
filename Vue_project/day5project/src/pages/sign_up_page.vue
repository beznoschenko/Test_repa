<template>
  <div class="wrapper">
    <div class="wrapper-form">
      <div class="wrapper-form__title">REGISTER</div>
      <br />

      <div class="wrapper-form__label">First name</div>
      <custom-input :width="20" :maxlength="40" v-model="user.f_name" />

      <div class="wrapper-form__label">Last name</div>
      <custom-input :width="20" :maxlength="40" v-model="user.l_name" />

      <div class="wrapper-form__label">E-mail</div>
      <custom-input :width="20" :maxlength="80" v-model="user.email" />

      <div class="wrapper-form__label">Password</div>
      <custom-input
        :width="20"
        :maxlength="30"
        type="password"
        v-model="user.password"
      />

      <div class="wrapper-form__label">Confirm password</div>
      <custom-input
        :width="20"
        :maxlength="30"
        v-model="user.confirm_password"
        type="password"
      />

      <custom-checkbox :label="text" v-model="terms" />
      <div v-if="!!error" class="wrapper-form__error-label">
        {{ this.error }}
      </div>

      <button class="wrapper-form__button" @click="addUser">Register</button>
    </div>
  </div>
</template>

<script>
import CustomInput from "../components/custom_input.vue";
import CustomCheckbox from "../components/custom_checkbox.vue";
import routes from "../router/routes";
export default {
  name: "Authorization",
  data() {
    return {
      routes,
      text: "I accept the Terms of Use & Privacy Policy",
      terms: false,
      user: {},
      error: "",
    };
  },
  components: {
    CustomInput,
    CustomCheckbox,
  },
  methods: {
    addUser() {
      let empty = true;
      let mail_reg = /\w+@{1}[a-zA-Z]+\.{1}[a-zA-Z]+/;
      Object.keys(this.user).forEach((a) => {
        let tet = !!this.user[a];
        if (tet) {
          empty = false;
        }
      });
      if (empty) {
        this.error = "Not all fields are filled";
      } else if (!mail_reg.test(this.user.email)) {
        this.error = "Incorrect email format";
      } else if (this.user.password.length < 4) {
        this.error = "Password is too short";
      } else if (!(this.user.password === this.user.confirm_password)) {
        this.error = "Passwords do not match";
      } else if (!this.terms) {
        this.error = "Not accepted terms";
      } else {
        delete this.user.confirm_password;
        this.user.email = this.user.email.toLowerCase();
        this.$store.commit("registerUser", this.user);
        this.$store.commit("login", this.user.f_name);
        this.$router.push("/");
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
  &__error-label {
    color: red;
    font-size: 13pt;
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

  