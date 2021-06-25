<template>
  <div class="editing-wrapper">
    <div class="editing-wrapper__title">EDITING</div>
    <editing-row v-model="user.f_name">First name:</editing-row>
    <editing-row v-model="user.l_name">Last name:</editing-row>
    <editing-row v-model="user.email">Email:</editing-row>
  </div>
</template>

<script>
import EditingRow from "../components/editing_row.vue";
export default {
  components: { EditingRow },
  name: "Editing",
  data() {
    return {
      isTruu: false,
      user: {},
    };
  },
  methods: {
    updateUser() {
      this.$store.commit("moduleUsers/updateData", this.user );
    },
  },
  watch: {
    user: {
      handler: function () {
        console.log("hhh")
      this.updateUser();
      },
      deep: true
    },
  },
  created() {
    const _this = this;
    _this.user = _this.$store.getters["moduleUsers/getUsersData"];
  },
};
</script>

<style lang="scss" scoped>
.editing-wrapper {
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
}
</style>