<template>
<div>
        <nuxt-link to="/Store/Dashboard">Dashboard</nuxt-link>
        <h1>Products</h1>
        <p v-for="(product, index) in products" :key="index">{{ product }}</p>
</div>
</template>

<script>
export default {
    computed: {
        products() {
            return this.$store.getters["main/getProducts"];
        }
    }
}
</script>