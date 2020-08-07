<template>
  <div>
    <h-form :model="ruleForm" :rules="rules" ref="loginFrom">
      <form-item label="用户名" prop="name">
        <H-input v-model="ruleForm.name"></H-input>
      </form-item>
      <form-item label="密码" prop="pwd">
        <H-input v-model="ruleForm.pwd" type="password"></H-input>
        <p>用户名：{{someValue}}密码：{{pwd}}</p>
      </form-item>
      <form-item>
        <input type="button" @click="submitForm()" value="登录" />
      </form-item>
    </h-form>
  </div>
</template>

<script>
import HForm from "@/components/Form.vue";
import FormItem from "@/components/FormItem.vue";
import HInput from "@/components/HInput.vue";
export default {
  data() {
    return {
      someValue: "some value",
      pwd: "",
      ruleForm: { name: "", pwd: "" },
      rules: {
        name: [
          { required: true, message: "请输入名称" },
          { min: 6, max: 10, message: "请输入6~10位用户名" },
        ],
        pwd: [
          { required: true, message: "请输入密码" },
          { min: 6, max: 10, message: "请输入6~10位密码" },
        ],
      },
    };
  },
  components: {
    FormItem,
    HInput,
    HForm,
  },
  methods: {
    submitForm() {
      this.$refs.loginFrom.validate((valid) => {
        if (valid) {
          alert("提交");
        } else {
          alert("校验失败");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>