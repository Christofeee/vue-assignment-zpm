<script setup>
import './assets/app.css'
import Title from './components/Title.vue'
import List from './components/List.vue'

import { ref } from 'vue';

// Create a ref for the List component
const listRef = ref(null);

// Function to call the toggleDetails method in List component
const toggleListDetails = () => {
  listRef.value.toggleDetails();
};
</script>

<template>
  <div id="title-box">
    <Title text="Car List" />
  </div>
  <div style="margin-left: 50px;">
    <List ref="listRef" />
  </div>
  
  <div style="display: inline; text-align: center;">
    <button @click="toggleListDetails" id="button">Show/Hide Details</button>
  </div>
</template>