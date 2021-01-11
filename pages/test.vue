<template>
  <div>Pototka {{ name }}</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      name: 'haims',
    }
  },
  created() {
    const a = async () => {
      const cats = await this.$axios.$get(
        'https://cat-fact.herokuapp.com/facts'
      )
      console.log(cats)
    }
    a()
  },
})
</script>

<style></style>
