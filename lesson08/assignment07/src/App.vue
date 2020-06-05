<template>
  <div id="app">
  <!-- header -->
  <header>
    <img src="./assets/header.jpg" alt="The Car Safe Kids logo next to an image of a technician working outside of a car with a family" class="img-fluid w-100">
  </header>

  <!--car icon-->
  <div id="car-container" class="one">
    <i class="fas fa-car-side fa-3x move-right" id="car-icon"></i>
  </div>

  <!-- navigation -->
  <nav class="navbar navbar-expand-lg navbar-light m-3">
      <router-link to="/header" class="navbar-brand text-danger"><strong>Car Safe Kids</strong></router-link>
       <div class="navbar-nav">
         <router-link to="/" class="nav-item nav-link text-danger active">Home <span class="sr-only">(current)</span></router-link>
         <router-link to="/schedule" class="nav-item nav-link text-danger">Schedule</router-link>
         <router-link to="/FAQs" class="nav-item nav-link text-danger">FAQs</router-link>
         <router-link to="/images" class="nav-item nav-link text-danger">Images</router-link>
       </div>
   </nav>

   <router-view />

   <!-- footer -->
   <footer class="universal-footer">
     <img class="footer-image" src="./assets/csk-small-logo.jpg" alt="The Car Safe Kids logo">
     <p class="footer-body">Aborpos nisto inci tet aut que volupti beruptiberro to ex  esseque invenienihil imaximu scideru ptistiusam consequun</p>
     <router-link to="/" class="footer-link">Home / </router-link>
     <router-link to="/schedule" class="footer-link">Schedule / </router-link>
     <router-link to="/FAQs" class="footer-link">FAQs / </router-link>
     <router-link to="/images" class="footer-link">Images / </router-link>
     <p class="footer-body">Car Safe Kids   |   Seattle, WA</p>
   </footer>

  </div>
</template>
