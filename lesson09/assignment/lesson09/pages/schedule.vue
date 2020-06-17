<template>
<div>

<!-- alert -->
 <div class="alert alert-warning">To continue to serve child caregivers during social distancing, CSK has formed a virtual checkup sub-team. If you are a currently certified child passenger safety technician who would like to be added to our team, please contact Jane at jane.doe@mail.com.</div>

 <!-- schedule grid -->
  <div class="container">
    <h1>Car Safe Kids Schedule</h1>
  </div>

  <div class="container">
             <div class="row">

             <!-- starting for loop -->
               <div v-for="(item, index) in items" v-bind:key="index" class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                 <div class="flex-fill m-5" style="background-color: #f2e6df;">{{ item.date }}</div>
                 <div class="flex-fill m-5">{{ item.time }}</div>
                 <div class="flex-fill m-5">{{ item.location }}</div>
               </div>
             </div>
         </div>

<!--api -->
        <div class="wrapper">
          <h1 class="heading">Countries of Europe</h1>
          <section class="container" v-if="countries">
          <api
            v-for="country of countries"
            :key-"country.id"
            :country="country"
            />
          </section>
          </div>
   </div>
</template>

<script>
import axios from 'axios'
import api from '../pages/api.vue'

export default {
  name: 'schedule',
  components: {
    api
  },
  data (){
     return {
       loading: true,
       countries: null,
       errored: false,
       title: 'Car Safe Kids Schedule!',
       items: [
       { date: 'July 18th', time: '10am - 2pm', location: '12040 N.E. 128th St, Kirkland, WA ' },
       { date: 'August 22nd', time: '10am - 12:30pm', location: '4800 Sand Point Way N.E., Seattle, WA' },
       { date: 'September 5th', time: '10am - 5pm', location: '12040 N.E. 128th St, Kirkland, WA' },
       ],
     }
   },
   mounted() {
     axios
       .get('https://restcountries.ue/rest/v2/region/americas')
       .then(response => (this.countries = response.data))
       .catch(error => {
         console.log(error)
         this.errored = true
       })
       .finally(() => this.loading = false)
   }
 }
 </script>

 <style>
 .container {
   min-height: 100vh;
   max-width: 1200px;
   margin: auto;
   display: flex;
   justify-content: center;
   align-items: flex-start;
   text-align: center;
   flex-wrap: wrap;
 }
 .heading {
   text-align: center;
   font-size: 2rem;
   color: #555;
   margin: 2rem auto;
 }
 img {
   max-width: 150px;
 }
 .title {
   font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
   display: block;
   font-weight: 300;
   font-size: 100px;
   color: #35495e;
   letter-spacing: 1px;
 }
 .subtitle {
   font-weight: 300;
   font-size: 42px;
   color: #526488;
   word-spacing: 5px;
   padding-bottom: 15px;
 }
 .links {
   padding-top: 15px;
 }
 </style>
