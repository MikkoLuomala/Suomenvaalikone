<template>
  <div class="content">
    <h1 class="title">Suomenvaalikone vuoden 2023 eduskuntavaaleihin</h1>
    <div class="frame-container">
      <iframe class="responsive-frame" src="https://docs.google.com/forms/d/e/1FAIpQLSd0VNND1lC_yhG06jbkTo_BKgB15MykK2nGLV2qaJsfQU4vpg/viewform?embedded=true" width="640" height="680" frameborder="0" marginheight="0" marginwidth="0">Ladataan...</iframe>
    </div>
    <a class="link" href="/gdpr">Tietosuojaseloste</a>
  </div>
</template>
<script>
export default {
  name: 'IndexPage'
}
</script>
<style>
.content {
  margin: auto;
  width: 100%;
  /*border: 3px solid blue;*/
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 4rem;
  font-weight: bold;
}

.framecontainer {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

.responsive-frame {
  position: absolute;
  top: 100px;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 75%;
}

.link {
  position: absolute;
  bottom: 20px;
}

@media (max-width: 1024px) {
  .title {
    font-size: 2rem;
  }
}
</style>