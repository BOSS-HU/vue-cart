<template>
  <div>
    <p>我是user页面</p>
    <p>{{id}}</p>
    <p>{{msg}}</p>
    <p>{{foo}}</p>
  </div>
</template>

<script>
export default {
  props: ["id", "msg", "foo"],
};
</script>

<style lang="scss" scoped>
</style>