<template>
  <table class="content-table">
    <tr class="content-table__row">
      <th
        v-for="(item, index) in data_header"
        :key="index"
        class="content-table__row-header"
      >
        {{ item }}
      </th>
    </tr>
    <tr
      v-for="(item, index) in querydata"
      :key="index"
      class="content-table__row"
    >
      <td
        v-for="(items, indexed) in data_header"
        :key="indexed"
        class="content-table__row-cell"
      >
        {{ item[items] }}
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "DataTable",
  props: {
    querydata: {
      type: Array,
      default: () => ([]),
    },
  },
  data() {
    return {
      data_header: [],
    };
  },

  watch: {
    querydata() {
      this.data_header = Object.keys(this.querydata[0]);
    },
  },
};
</script>

<style lang="scss" scoped>
.content-table {
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  font-size: 14pt;
  display: block;
  &__row {
      
    &-header {
      background-color: #AFCDE7;
      border: 1px solid white;
      border-spacing: 5px;
      padding: 0 5px;
    }
    &-cell {
      background: #D8E6F3;
      border: 1px solid white;
      border-spacing: 5px;
      padding: 0 5px;
    }
  }
}
</style>