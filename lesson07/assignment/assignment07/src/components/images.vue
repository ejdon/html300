<template>
<div>

<!-- alert -->
 <div class="alert alert-warning">To continue to serve child caregivers during social distancing, CSK has formed a virtual checkup sub-team. If you are a currently certified child passenger safety technician who would like to be added to our team, please contact Jane at jane.doe@mail.com.</div>

 <!-- image gallery -->
 <main>
 <div class="row">

 <!-- for loop -->
  <div v-for="images in images" v-bind:key="images" class="col-md-4">
    <div class="thumbnail">
    <a v-bind:href="link">
        <img :src="images.src" :alt="images.alt" style="width:100%">
        <div class="caption">
          <p>{{images.caption}}</p>
        </div>
        </a>
    </div>
  </div>
</div>
</main>

</div>
</template>

<script>

//creating variables for array
var image1 = require('../assets/sidebar-1.jpg');
var image2 = require('../assets/sidebar-2.jpg');
var image3 = require('../assets/sidebar-3.jpg');

export default {
  name: 'images',
  data () {
    return {
    link: "/schedule",
    images: [
      { src: image1, alt: 'a woman installing a car seat into a car', caption: 'CSK will teach you how to install your car seat' },
      { src: image2, alt: 'a baby smiling at the camera while in a car seat', caption: 'CSK can assist families with babies, expectant parents, and others, including grandparents and nannies' },
      { src: image3, alt: 'a man installing a baby into a car seat', caption: 'CSK technicians will ensure your car seat harness is used properly' },
      ]
    }
  }
}
</script>

<style scoped>

</style>
