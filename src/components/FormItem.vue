<template>
  <div>
    <label v-if="label">{{label}}</label>
    <div>
      <slot></slot>
      <p v-if="validateStatus === 'error'" class="error">{{errormessage}}</p>
    </div>
  </div>
</template>

<script>
import Schema from "async-validator";
export default {
  inject: ["form"], // 注入form，获取model和rules
  props: ["label", "prop"],
  data() {
    return {
      validateStatus: "",
      errormessage: "",
    };
  },
  created() {
    this.$on("validate", this.validate);
  },
  mounted() {
    // 挂载到form上时，派发一个添加事件
    if (this.prop) {
      this.$parent.$emit("formItemAdd", this);
    }
  },
  methods: {
    validate() {
      return new Promise((resolve) => {
        // 依赖 async-validator
        const des = { [this.prop]: this.form.rules[this.prop] };
        const validator = new Schema(des);
        validator.validate(
          { [this.prop]: this.form.model[this.prop] },
          (errors) => {
            if (errors) {
              this.validateStatus = "error";
              this.errormessage = errors[0].message;
              resolve(false); //校验失败
            } else {
              this.validateStatus = "";
              this.errormessage = "";
              resolve(true); //校验成功
            }
          }
        );
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  color: red;
}
</style>