<template>
    <div class="content">
        <nuxt-content :document="pageContent"/>
    </div>
</template>
<script>
  export default {
    async asyncData({ $content, params }) {
      const pageContent = await $content('pages/gdpr', params.slug)
        .fetch()
      return {
        pageContent
      }
    }
  }
</script>
<style scoped>
 .content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 3rem;
    padding-right: 3rem;
 }

</style>
