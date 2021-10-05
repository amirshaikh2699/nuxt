<template>
  <div>
    <nuxt-link to="/Store">Store</nuxt-link>
    <div>
      <input v-model="name" />
      <button @click="addProduct">send</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      rs: "123456",
    };
  },
  mounted() {
    let arr = [];
    console.log(this.$amirFunction(arr));
  },
  methods: {
    addProduct() {
      this.$store.dispatch("main/addProduct", this.name);
    },
  },
  computed: {
    products() {
      return this.$store.getters["main/getProducts"];
    },
  },
};
</script>