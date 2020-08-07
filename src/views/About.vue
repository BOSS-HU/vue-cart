<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{foo}}
    <input type="button" value="页面跳转" @click="goToPage" />
    <p>
      <input type="button" value="同步提交mutations" @click="addCount" />
      <input type="button" value="异步提交mutations" @click="addCountAsync" />
    </p>

    <!-- 如果不用mapState就用如下的方式取数据 -->
    <!-- <p>{{$store.state.count}}</p> -->

    <!-- 用mapState用如下方式 -->
    <p>{{count}}</p>
    <p>您的余额为：{{money}}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
// 帮助方法，使用store的数据时不用$store.state.count这么麻烦，直接用具体的数据就行
// mapState, mapGetters 函数返回一个对象 类似{count:this.$store.state.count}
export default {
  props: {
    foo: {
      type: String,
      default: "",
    },
  },
  computed: {
    // 类似{count:this.$store.state.count}
    ...mapState(["count"]),
    ...mapGetters(["money"]),
  },
  methods: {
    ...mapMutations(["add"]),
    ...mapActions(["addAsync"]),
    addCount() {
      // 不用mapMutations 用入下的方式
      // this.$store.commit("add");

      // 用mapMutations之后
      this.add();
    },
    addCountAsync() {
      // this.$store.dispatch("addAsync");
      this.addAsync();
    },
    goToPage() {
      // this.$router.push("/contant/1/react");
      this.$router.push({ name: "contant", params: { id: 2, msg: "react" } });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
