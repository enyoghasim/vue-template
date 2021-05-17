<template>
  <div class="input_wrapper">
    <label v-if="withLabel" :for="id">{{ labelText }}</label>
    <input
      @input="handleInput"
      :name="name"
      class="input_main"
      :class="customClass"
      :placeholder="placeholder"
      :id="id"
      :type="type"
    />
  </div>
</template>
<style lang="scss" scoped>
@import "./index.scss";
</style>
<script>
export default {
  name: "InputComponent",
  props: {
    type: {
      type: String,
      default: "text"
    },
    name: {
      type: String,
      default: "text"
    },
    customClass: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    withLabel: {
      type: Boolean,
      default: false
    },
    labelText: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleInput(e) {
      this.$emit("input", {
        name: this.name,
        value: e.target.value
      });
    }
  }
};
</script>
