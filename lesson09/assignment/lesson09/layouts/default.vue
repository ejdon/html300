<template>
  <div>

  <!-- header and slot-->
  <header>
   <hero>
     <slot name="heading"></slot>
   </hero>
 </header>

  <!-- navigation -->
  <nav class="navbar navbar-expand-lg navbar-light m-3">
      <nuxt-link to="/home" class="navbar-brand text-danger"><strong>Car Safe Kids</strong></nuxt-link>
       <div class="navbar-nav">
         <nuxt-link to="/home" class="nav-item nav-link text-danger active">Home <span class="sr-only">(current)</span></nuxt-link>
         <nuxt-link to="/schedule" class="nav-item nav-link text-danger">Schedule</nuxt-link>
         <nuxt-link to="/FAQs" class="nav-item nav-link text-danger">FAQs</nuxt-link>
         <nuxt-link to="/images" class="nav-item nav-link text-danger">Images</nuxt-link>
       </div>
   </nav>

    <nuxt />

    <!-- footer -->
  <footer class="universal-footer">
    <img class="footer-image" src="/csk-small-logo.jpg" alt="The Car Safe Kids logo">
    <p class="footer-body">Aborpos nisto inci tet aut que volupti beruptiberro to ex  esseque invenienihil imaximu scideru ptistiusam consequun</p>
    <nuxt-link to="/home" class="footer-link">Home / </nuxt-link>
    <nuxt-link to="/schedule" class="footer-link">Schedule / </nuxt-link>
    <nuxt-link to="/FAQs" class="footer-link">FAQs / </nuxt-link>
    <nuxt-link to="/images" class="footer-link">Images / </nuxt-link>
    <p class="footer-body">Car Safe Kids   |   Seattle, WA</p>
  </footer>

  </div>
</template>

<script>
import hero from '../pages/hero.vue';
export default {
  name: 'default',
  components: {
    hero
  }
}
</script>



<style lang="scss">
* {
    font-family: "Georgia", serif;;
}

.navbar {
background-color: #f2e6df;
border-radius: 25px;
}

//footer
.universal-footer {
    text-align: center;
    margin: 0% 5%;
  .footer-link {
    text-decoration: none;
  }
  .footer-image {
    @media (min-width: 526px) {
      width: 10%;
    }
    @media (max-width: 525px) {
      width: 30%;
    }
  }
}

</style>
