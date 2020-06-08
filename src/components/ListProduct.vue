<template>
  <div>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      items: []
    };
  },

  async mounted() {
    const response = await axios.get("http://localhost:3000/api/v1/products");
    this.items = response.data;
  }
};
</script>
