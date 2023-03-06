<template>
  <div>
    <NavBar/>
    <Nuxt/>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      footerText: undefined,
      copyrightText: undefined,
      backgroundImageUrl: undefined,
      logo: undefined,
    }
  },
})
</script>

<style>

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 62.5%; /* Makes rem calculation easier. 1rem = 10px */
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #000000;
  width: 100%;
}

body {
  font-size: 1.6rem;
  width: 100%;
}

a {
  text-decoration: none;
}

h1 {
  text-align: center;
  font-size: 4rem;
}

h2 {
  font-size: 2rem;
  margin-top: 10px;
}

</style>
