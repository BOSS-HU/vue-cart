<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  provide() {
    return {
      //将表单的实例传递给后代
      form: this,
    };
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
    },
  },
  created() {
    // 缓存需要校验的表单项
    this.fields = [];
    this.$on("formItemAdd", (item) => {
      this.fields.push(item);
    });
  },
  methods: {
    async validate(cb) {
      // 将FormItem数组转换为validate()返回的promise数组
      const tasks = this.fields.map((item) => item.validate());
      // 获取所有结果统一处理
      const results = await Promise.all(tasks);
      let ret = true;
      results.forEach((valid) => {
        if (!valid) {
          ret = false; // 只要一个失败就失败
        }
      });
      cb(ret);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>