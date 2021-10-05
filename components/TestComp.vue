<template>
    <p>{{ name }}</p>
</template>
<script>
export default {
    props: {
        name: {
            type: String
        }
    },
    methods: {
        test() {
            console.log('MyName', this.name);
        }
    }
}
</script>