<template>
  <div>
    <button @click="addGood">添加商品</button>
    <p>
      <input type="text" v-model="text" placeholder="课程名称" />
      <input type="text" v-model="price" placeholder="课程价格" />
    </p>
    <ul>
      <li v-for="(good,index) in goods" :key="good.id">
        <span>{{good.name}}</span>
        <span>¥：{{good.price}}</span>
        <button @click="addCart(index)">加购物车</button>
      </li>
    </ul>
    <cart :cart="cart" :cartName="cartName"></cart>
  </div>
</template>

<script>
import Cart from "@/components/Cart.vue";
import axios from "axios";
export default {
  components: { Cart },
  data() {
    return {
      goods: [],
      text: "",
      price: "",
      cart: JSON.parse(localStorage.getItem("cart")) || [],
      cartName: "购物车",
    };
  },
  watch: {
    cart: {
      handler(n) {
        localStorage.setItem("cart", JSON.stringify(n));
      },
      deep: true,
    },
  },
  methods: {
    addGood() {
      this.goods.push({
        name: this.text,
        price: this.price,
      });
    },
    addCart(i) {
      const good = this.goods[i];
      this.$bus.$emit("addCart", good);
    },
  },
  async created() {
    try {
      const res = await axios.get("/api/goods");
      console.log(res.data.list);
      this.goods = res.data.list;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style lang="scss" scoped>
ul,
li {
  list-style: none;
}
</style>