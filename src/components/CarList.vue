<script>
import axios from 'axios';
var bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MDQ3NDM3MTQsImV4cCI6MTcwNDc0NzMxNCwibmJmIjoxNzA0NzQzNzE0LCJqdGkiOiJXWnVZT0NMU214UEFVWWx4Iiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.Z7Uj30fS5eTF_aJiBStFVWazWrg0oB3vwxw4aX6pAI0';
export default {
    data() {
        return {
            cars: [],
            error: null,
            loading: true,
        };
    },
    mounted() {
        axios.get('http://localhost:8000/api/auth/get_cars', {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        })
            .then(response => {
                this.cars = response.data.cars
                this.loading = false;
                console.log(response.data)
                console.log(this.cars)
            })
            .catch((error) => {
                this.error = error;
                this.loading = true;
                console.log(error)
            })
    }
};
</script>
<template>
    <br>
    <h1>Browse Our Featured Cars. Discover your dream car.</h1>
    <div class="car-grid">
        <article class="car-card" v-if="!loading" v-for="car in cars" :key="car.id">
            <div class="car-details">
                <h3>{{ car.name }}</h3>
                <p>2023 Sedan</p>
                <span class="price">{{ car.price }}</span>
            </div>
        </article>
        <article class="car-card" v-else>
            <div class="car-details">
                <h3>Coming Soon!</h3>
                <span class="price">Please be patient.</span>
            </div>
        </article>
    </div>
</template>