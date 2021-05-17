<template>
  <button
    :type="type"
    :name="name"
    class="btn_main"
    :class="customClass"
    @click="click"
  >
    {{ innerText }}
  </button>
</template>
<style lang="scss" scoped>
@import "./index.scss";
</style>
<script>
export default {
  name: "ButtonComponent",
  props: {
    type: {
      type: String,
      default: "button"
    },
    name: {
      type: String,
      default: ""
    },
    customClass: {
      type: String,
      default: ""
    },
    innerText: {
      type: String,
      default: "BUTTON!"
    }
  },
  methods: {
    click(e) {
      this.$emit("click", {
        name: this.name,
        value: e.target.value
      });
    }
  }
};
</script>
