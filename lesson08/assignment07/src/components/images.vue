<script>
import mixins from './mixins';
import photos from './images-content.vue';

//Creating image variables
var image1 = require('../assets/sidebar-1.jpg');
var image2 = require('../assets/sidebar-2.jpg');
var image3 = require('../assets/sidebar-3.jpg');


//image data
export default {
name: 'Images',
mixins: [mixins],
components: {
  photos
},
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

<template>
<div id="app">

<!-- alert -->
 <div class="alert alert-warning">To continue to serve child caregivers during social distancing, CSK has formed a virtual checkup sub-team. If you are a currently certified child passenger safety technician who would like to be added to our team, please contact Jane at jane.doe@mail.com.</div>

 <!--Button to remove border -->
 <div class="text-center" v-if="images">
   <button v-if="myVal" @click="myMethod()" class="btn btn-info">
     Click to remove border
   </button>
 </div>

<!--inserting photo onto page-->
<div v-if="images" class="container">
    <photos
     v-for="images in images"
     v-bind:image="images"
     v-bind:key="images.src"
    />
</div>

</div>
</template>

<style scoped>


</style>
