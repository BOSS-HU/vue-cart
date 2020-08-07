<template>
  <div>
    <p>我是user页面</p>
    <p>{{userid}}</p>
    <p>{{usermsg}}</p>
    <p>{{userfoo}}</p>
  </div>
</template>

<script>
export default {
  props: ["userid", "usermsg", "userfoo"],
};
</script>

<style lang="scss" scoped>
</style>