<template>
  <div>Pototka {{ name }}</div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      name: 'haims',
    }
  },
  async created() {
    const cats = await this.$axios.$get('https://cat-fact.herokuapp.com/facts')
    console.log(cats)
  },
}
</script>

<style></style>
