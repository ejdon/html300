<template>
<div>
<!-- alert -->
 <div class="alert alert-warning">To continue to serve child caregivers during social distancing, CSK has formed a virtual checkup sub-team. If you are a currently certified child passenger safety technician who would like to be added to our team, please contact Jane at jane.doe@mail.com.</div>
 <main>
 <!-- image gallery -->
 <div class="row">
  <div class="col-md-4">
    <div class="thumbnail">
        <img src="../assets/sidebar-1.jpg" alt="Lights" style="width:100%">
        <div class="caption">
          <p>CSK will teach you how to install your child's car seat.</p>
        </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="thumbnail">
        <img src="../assets/sidebar-2.jpg" alt="Nature" style="width:100%">
        <div class="caption">
          <p>CSK can assist families with babies, expectant parents, and others, including grandparents and nannies.</p>
        </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="thumbnail">
        <img src="../assets/sidebar-3.jpg" alt="Fjords" style="width:100%">
        <div class="caption">
          <p>CSK technicians will ensure your baby's care seat harness is used properly.</p>
        </div>
    </div>
  </div>
</div>
</main>
</div>
</template>

<script>

export default {
  name: 'images',
  props: {
    msg: String
  }
}
</script>
