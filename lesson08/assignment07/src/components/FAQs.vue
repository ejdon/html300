<template>
<div>

<div class="container">
       <h2 class="m-3">Frequently asked questions</h2>

       <!-- starting for loop -->
       <div v-for="item in items" v-bind:key="item" class="accordion m-3">
           <div class="card">

           <!--Question-->
             <div class="card-header">
               <h2>
                 <button class="btn btn-link" type="button"  v-on:click="show = !show" data-target="#collapseOne">
                   {{ item.question1 }}
                 </button>
               </h2>
             </div>

             <!--Answer-->
             <div id="collapseOne" v-if="show" class="collapse show" data-parent="#accordion">
               <div class="card-body">
                   {{ item.answer1 }}
               </div>
             </div>
           </div>
           <div class="card">

           <!--Question 2-->
             <div class="card-header">
               <h2>
                 <button class="btn btn-link" data-toggle="collapse" type="button" v-on:click="show2 = !show2" data-target="#collapseTwo">
                   {{ item.question2 }}
                 </button>
               </h2>
             </div>

             <!--Answer 2-->
             <div id="collapseTwo" v-if="show2" class="collapse show2" data-parent="#accordion">
               <div class="card-body">
                   {{ item.answer2 }}
               </div>
             </div>
           </div>
           <div class="card">

           <!--Question 3-->
             <div class="card-header">
               <h2>
                 <button class="btn btn-link" data-toggle="collapse" type="button" v-on:click="show3 = !show3" data-target="#collapseThree">
                   {{ item.question3 }}
                 </button>
               </h2>
             </div>

             <!--Answer 3 -->
             <div id="collapseThree" v-if="show3" class="collapse show3" data-parent="#accordion">
               <div class="card-body">
                   {{ item.answer3 }}
               </div>
             </div>
           </div>
       </div>
   </div>

</div>
</template>


<script>
export default {
  name: 'FAQs',
  data () {
    return {
    items: [
    { question1: 'Will I be asked to participate?', answer1: ' A car seat clinic is an educational opportunity. We want you to get the most value for your time, so plan to participate in the check-up process.', question2: 'Should I bring anything?', answer2: 'Yes. Bring the owner manuals for the car seat and vehicle. Having diapers, snacks and toys handy may make waiting time more pleasant.', question3: 'Will there be a place for kids to play?', answer3: 'There will be a small play area for kids. However, we recommend bringing personal toys as well.' },
  ],
   show: false,
   show2: false,
   show3: false,

    }
  }
}
</script>

<style scoped>
</style>
