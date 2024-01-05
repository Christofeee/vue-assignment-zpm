<script>
export default {
    data() {
      return {
        items: [
          { name: 'Mercedes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli' },
          { name: 'BMW', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
          { name: 'Bentley ', description: 'Lorem ipsum dolor sit amet, consectetur' },
          { name: 'Rolls-Royce', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing' },
        ],
        showDetails: false
      };
    },
    methods: {
      toggleDetails() {
        this.showDetails = !this.showDetails;
      }
    }
  };
</script>
<template>
  <ul>
    <li v-for="item in items" :key="item.name" id="list-header-box">
      {{ item.name }}
      <ul>
        <li v-if="showDetails">{{ item.description }}</li>
      </ul>
    </li>
  </ul>
</template>