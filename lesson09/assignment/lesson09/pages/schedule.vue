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
                 <div class="flex-fill m-5">{{ item.note }}</div>
               </div>
             </div>
         </div>

<!--api -->
        <div class="wrapper">
          <h1 class="heading">Stuck waiting? Here's some news to pass the time:</h1>
          <section class="container" v-if="articles">
          <api
            v-for="article of articles"
            :key="article.id"
            :article="article"
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
       articles: null,
       errored: false,
       title: 'Car Safe Kids Schedule!',
       items: [
       { date: 'July 18th', time: '10am - 2pm', location: '12040 N.E. 128th St, Kirkland, WA ', note: 'Please note: there may be a wait before being helped' },
       { date: 'August 22nd', time: '10am - 12:30pm', location: '4800 Sand Point Way N.E., Seattle, WA', note: 'Please note: there may be a wait before being helped' },
       { date: 'September 5th', time: '10am - 5pm', location: '12040 N.E. 128th St, Kirkland, WA', note: 'Please note: there may be a wait before being helped' },
       ],
     }
   },
   mounted() {
     axios
       .get('https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=3FMO8VAGazMqugbximtsivAFJyeSqiA4')
       .then(response => {this.articles = response.data.results})
       .catch(error => {
         console.log(error)
         this.errored = true
       })
       .finally(() => this.loading = false)
   }
 }
 </script>

 <style>
  .heading {
  margin-left: 13%;
  }
  </style>
