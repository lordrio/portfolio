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
  created() {
    fetch('https://cat-fact.herokuapp.com/facts').then((res) => {
      console.log(res)
    })
  },
}
</script>

<style></style>
