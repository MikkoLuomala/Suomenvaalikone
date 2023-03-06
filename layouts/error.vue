<template>
  <div class="error-container text-center">
    <div v-if="error.statusCode === 404">
      <p>Sivua ei löytynyt!</p>
      <div v-if="error.message">
        {{ error.message }}
      </div>
    </div>
    <div v-else>Virhe ladattaessa sivua!</div>
   </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>

<style lang="scss" scoped>
</style>