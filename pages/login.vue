<template>
    <div>
        <input type="text" name="" id="" v-model="username">
        <input type="text" name="" id="" v-model="password">
        <button @click="login">Login</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            users: [
                {
                    username: 'amir',
                    password: 'Pass@123',
                    userType: 'Admin',
                },
                {
                    username: 'kawish',
                    password: 'Pass@123',
                    userType: 'User',
                },
            ]
        }
    },
    methods: {
        login() {
            const user = this.users.find(user => {
               if(user.username === this.username) return user;
            });
            if (user) {
                localStorage.setItem('userType', user.userType);
                if (user.userType == 'Admin') {
                    this.$router.push('/dashboard');
                } else {
                    this.$router.push('/');
                }
            } else {
                alert("Invalid user")
            }
        }
    }
}
</script>




