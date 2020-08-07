<template>
  <div>
    <div>login</div>
    <input type="button" @click="login" value="登录" />
  </div>
</template>

<script>
export default {
  methods: {
    async login() {
      //   window.isLogin = true;
      await this.$store.dispatch("submitLogin");
      if (this.$store.state.isLogin) {
        //或者用this.$store.state.isLogin 判断
        const { redirect } = this.$route.query;
        if (redirect) {
          this.$router.push(redirect);
        } else {
          this.$router.push("/");
        }
      } else {
        alert("登录失败请重试");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>