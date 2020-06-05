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
               <div v-for="item in items" v-bind:key="item" class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                 <div class="flex-fill m-5" style="background-color: #f2e6df;">{{ item.date }}</div>
                 <div class="flex-fill m-5">{{ item.time }}</div>
                 <div class="flex-fill m-5">{{ item.location }}</div>
               </div>
             </div>
         </div>

   </div>
</template>

<script>
export default {
  name: 'schedule',
  data () {
  return {
      items: [
        { date: 'July 18th', time: '10am - 2pm', location: '12040 N.E. 128th St, Kirkland, WA ' },
        { date: 'August 22nd', time: '10am - 12:30pm', location: '4800 Sand Point Way N.E., Seattle, WA' },
        { date: 'September 5th', time: '10am - 5pm', location: '12040 N.E. 128th St, Kirkland, WA' },
      ],
    }
  }
}
</script>

<style scoped>

</style>
