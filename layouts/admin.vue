<template>
<div>
    <h1>Admin</h1>
    <div><button style="float: left">Manage</button> <button style="float: right" @click="logout">Logout</button></div>
  <Nuxt />
  <footer center>This is footer</footer>
</div>
</template>

<script>
export default {
  middleware: ['admin'],
  methods: {
    logout() {
      localStorage.setItem('userType', '')
    }
  }
}
</script>


