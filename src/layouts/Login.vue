<template>
    <div class="login-container">
        <form>
            <h1>Login</h1>
            <div>
                <label for="username">Username:</label>
                <input v-model="username" type="text" id="username" name="username" required>
            </div>
            <div>
                <label for="password">Password:</label>
                <input v-model="password" type="password" id="password" name="password" required>
            </div>
            <button type="submit" @click.stop.prevent="login()">Login</button>
        </form>
    </div>
</template>
  
<script>
import '../assets/login.css'

export default {
    data() {
        return {
            username: null,
            password: null,
        };
    },
    methods: {
        login() {
            if (this.username === "admin" && this.password === "admin") {
                console.log('Login success');
                this.$router.push({name: "Welcome"});
            } else {
                console.error('Login failed');
                this.$router.push({name: "Login"});
                alert("Login fail. Try Again.");
            }
        },
    },
};
</script>
  