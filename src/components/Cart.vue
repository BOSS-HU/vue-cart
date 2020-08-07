<template>
  <div class="wrap">
    <p>{{cartName}}</p>
    <table border="1">
      <tr>
        <th></th>
        <th>课程名</th>
        <th>单价</th>
        <th>数量</th>
        <th>总价格</th>
      </tr>
      <tr v-for="(c,i) in cart" :key="c.id" :class="{active:c.active}">
        <td>
          <input type="checkbox" v-model="c.active" />
        </td>
        <td>{{c.name}}</td>
        <td>¥{{c.price}}</td>
        <td>
          <button @click="minus(i)">minus</button>
          {{c.count}}
          <button @click="add(i)">add</button>
        </td>
        <td>¥{{c.price*c.count}}</td>
      </tr>
      <tr>
        <td></td>
        <td colspan="2">{{activeCount}}/{{count}}</td>
        <td colspan="2">¥{{total}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ["cartName", "cart"],
  data() {
    return {
      data: [],
    };
  },
  methods: {
    minus(i) {
      let count = this.cart[i].count;
      if (count > 1) {
        this.cart[i].count -= 1;
      } else {
        if (confirm("确定删除吗")) {
          this.remove(i);
        }
      }
    },
    add(i) {
      this.cart[i].count += 1;
    },
    remove(i) {
      this.cart.splice(i, 1);
    },
  },
  computed: {
    activeCount() {
      return this.cart.filter((c) => c.active).length;
    },
    count() {
      return this.cart.length;
    },
    total() {
      let num = 0;
      this.cart.forEach((c) => {
        if (c.active) {
          num += c.price * c.count;
        }
      });
      return num;
    },
  },
  created() {
    this.$bus.$on("addCart", (good) => {
      const ret = this.cart.find((v) => v.id === good.id);
      if (ret) {
        ret.count += 1;
      } else {
        this.cart.push({
          ...good,
          count: 1,
          active: true,
        });
      }
    });
  },
};
</script>

<style lang="sass" scoped>
.wrap
    display: inline-block
.active
    color: blue
</style>