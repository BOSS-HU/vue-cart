<template>
  <div>
    <p>page页面</p>
    {{foo}}
  </div>
</template>

<script>
export default {
  props: {
    foo: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
</style>