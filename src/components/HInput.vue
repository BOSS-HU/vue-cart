<template>
  <div>
    <input :type="type" :value="inputValue" @input="inputHandler" />
    {{providervalue}}
  </div>
</template>

<script>
export default {
  inject: ["providervalue"],
  props: {
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  },
  data() {
    return {
      inputValue: this.value,
    };
  },
  methods: {
    inputHandler(e) {
      this.inputValue = e.target.value;
      this.$emit("input", this.inputValue);
      // 通知FormItem做校验
      this.$parent.$emit("validate", this.inputValue);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>