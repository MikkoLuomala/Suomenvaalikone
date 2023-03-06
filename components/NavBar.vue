<template>
    <nav class="header">
        <div class="nav">
          <NuxtLink class="nav-link uppercase" to="/" exact>Kysely</NuxtLink>
          <NuxtLink class="nav-link uppercase" to="/gdpr">Tietosuoja</NuxtLink>
        </div>
    </nav>
</template>
  
<script>
  export default {
    props: {
      navLinks: {
        type: Object,
        required: false
      }
    },
  }
</script>

<style scoped>

    .nav {
        display: flex;
        justify-content: center;
    }
    .nav-link {
        display: block;
        color: #000;
        padding: 8px 16px;
        text-decoration: none;
        background-color: #ccc;
    }

    a:hover {
        background-color: #555;
        color: white;
    }
</style>
  

