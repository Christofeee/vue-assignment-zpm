<template>
    <div class="welcome-container">
    <h1>Welcome to Cartopia!</h1>
    <p>Discover your dream car or find the perfect ride for your daily adventures.</p>
    <button type="submit" @click.stop.prevent="explore()" class="explore-button">Explore the cars</button>
  </div>
</template>
<script>
import '../assets/welcome.css'

export default {
    data() {
        return {
            username: null,
            password: null,
        };
    },
    methods: {
        explore() {
            this.$router.push( {name: "Car List"});
        },
    },
};
</script>