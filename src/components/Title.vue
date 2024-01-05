<script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
    <h1>{{ text }}</h1>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  text-align: center;
}
</style>
