<template>
  <div class="wrapper">
    <!-- FOR NUMBER -->
    <div class="wrapper-number" v-if="isNumber">
      <!--  Minus Button -->
      <div
        class="wrapper-number__minus"
        @click="removeClick"
        :class="[this.inputValue === this.min ? 'disabled' : '']"
      >
        <i class="far fa-minus-square"></i>
      </div>
      <!--  Minus Button -->

      <!-- Input -->
      <div class="enrty-input" v-bind:style="{ width: width + 'rem' }">
        <input
          class="enrty-input__field"
          v-model="inputValue"
          @input="removeSymbol"
          @blur="textReplace"
          v-bind="$attrs"
        />
        <div class="enrty-input__icon" v-if="clearable" @click="clear_input">
          <i :class="[clearable ? 'far fa-times-circle' : '']"></i>
        </div>
      </div>
      <!-- Input -->

      <!-- Plus Button -->
      <div
        class="wrapper-number__plus"
        @click="addClick"
        :class="[this.inputValue === this.max ? 'disabled' : '']"
      >
        <i class="far fa-plus-square"></i>
      </div>
      <!-- Plus Button -->
    </div>

    <!-- FOR STRINGS -->
    <div class="wrapper-string" v-else>
      <div class="enrty-input" v-bind:style="{ width: width + 'rem' }">
        <input
          class="enrty-input__field"
          v-bind:maxlength="this.maxlength"
          v-model="inputValue"
          @input="stringInputs"
          v-bind="$attrs"
        />
        <div class="enrty-input__icon" v-if="clearable" @click="clear_input">
          <i :class="[clearable ? 'far fa-times-circle' : '']"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  data() {
    return {
      inputValue: "",
      isNumber: false,
      addAcive: true,
      removeActive: true,
      disabled: false,
    };
  },
  props: {
    max: {
      type: Number,
      default: Number.MAX_SAFE_INTEGER,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    min: {
      type: Number,
      default: Number.MIN_SAFE_INTEGER,
    },
    number: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [Number, String],
      default: 0,
    },
    maxlength: {
      type: Number,
      default: 10,
    },
    width: {
      type: Number,
      default: 6,
    },
    error: {
      type: String,
      default: "",
    },
  },

  watch: {
    value: function () {
      this.inputValue = this.value;
    },
    number: {
      immediate: true,
      handler: function () {
        this.isNumber = this.number;
      },
    },
  },
  methods: {
    clear_input() {
      this.inputValue = "";
      this.$emit("input", Number(this.inputValue));
    },
    textReplace() {
      this.$emit("input", Number(this.inputValue));
    },
    removeSymbol() {
      this.inputValue = this.inputValue.replaceAll(/(?!^-)[^0-9]/g, "");
      if (+this.inputValue === this.max || +this.inputValue < this.min) {
        let inputArray = this.inputValue.split("");
        inputArray.pop();
        this.inputValue = inputArray.join("");
      }
    },
    addClick() {
      if (+this.inputValue < this.max) {
        ++this.inputValue;
      }
      this.$emit("input", Number(this.inputValue));
    },
    removeClick() {
      if (+this.inputValue > this.min) {
        --this.inputValue;
      }
      this.$emit("input", Number(this.inputValue));
    },
    stringInputs() {
      if (this.inputValue.length > this.maxlength) {
        let inputArrays = this.inputValue.split("");
        inputArrays.pop();
        this.inputValue = inputArrays.join("");
      }
      this.$emit("input", this.inputValue);
    },
  },
  mounted() {
    const _this = this;
    _this.$emit("input", _this.inputValue);
  },
};
</script>

<style lang="scss" scoped>
.wrapper-number {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 22px;
}

.enrty-input {
  margin-right: 27px;
  margin-left: 4px;
  color: #a9a9a9;
  // display: flex;
  // flex-direction: row;
  // align-items: center;
  position: relative;
  &__field {
    width: 100%;
    height: 1.5rem;
    padding: 3px;
    padding-right: 16px;
    border-radius: 5px;
    border: 1px solid rgba(169, 169, 169, 0.75);
    outline: none;
  }
  &__icon {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%) translateX(20px);
  }
}
.disabled {
  color: grey;
  cursor: not-allowed;
}
</style>