<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <input type="text" name id v-model="value1" />
    <p>{{value1}}</p>-->
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <p v-if="showName">{{name}}</p>
    <goods></goods>
    <form-test></form-test>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import Goods from "../components/Goods";
import FormTest from "../components/FormTest.vue";
export default {
  provide() {
    return {
      providervalue: "来自APP的值",
    };
  },
  name: "App",
  data() {
    return {
      name: "hello vue",
      showName: false,
      someValue: "",
      // value1: "",
    };
  },
  components: {
    HelloWorld,
    Goods,
    FormTest,
  },
  created() {
    setTimeout(() => {
      this.showName = true;
    }, 1000);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
