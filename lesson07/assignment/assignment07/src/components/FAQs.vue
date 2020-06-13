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
                 <button class="btn btn-link" type="button" v-on:click="show = !show" data-target="#collapseOne">
                   {{ item.question }}
                 </button>
               </h2>
             </div>

             <!--Answer-->
             <div id="collapseOne" v-if="show" class="collapse show" data-parent="#accordion">
               <div class="card-body">
                   {{ item.answer }}
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
    { question: 'Will I be asked to participate?', answer: ' A car seat clinic is an educational opportunity. We want you to get the most value for your time, so plan to participate in the check-up process.' },
    { question: 'Should I bring anything?', answer: 'Yes. Bring the owner manuals for the car seat and vehicle. Having diapers, snacks and toys handy may make waiting time more pleasant.' },
    { question: 'Will there be a place for kids to play?', answer: 'There will be a small play area for kids. However, we recommend bringing personal toys as well.' },
  ],
   show: false,
    }
  }
}
</script>

<style scoped>


</style>
