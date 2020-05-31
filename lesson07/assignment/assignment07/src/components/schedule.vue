<template>
<div>
<!-- alert -->
 <div class="alert alert-warning">To continue to serve child caregivers during social distancing, CSK has formed a virtual checkup sub-team. If you are a currently certified child passenger safety technician who would like to be added to our team, please contact Jane at jane.doe@mail.com.</div>

 <!-- schedule grid -->
 <main>
  <div class="container">
    <h1>Car Safe Kids Schedule</h1>
  </div>
  <div class="container">
  <div class="row">
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="flex-fill m-5" style="background-color: #f2e6df;"><strong>Date</strong></div>
      <div class="flex-fill m-5">July 18th</div>
      <div class="flex-fill m-5">August 22nd</div>
      <div class="flex-fill m-5">September 5th</div>
    </div>
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="flex-fill m-5" style="background-color: #f2e6df;"><strong>Time</strong></div>
      <div class="flex-fill m-5">10am - 2pm</div>
      <div class="flex-fill m-5">10am - 12:30pm</div>
      <div class="flex-fill m-5">10am - 2pm</div>
    </div>
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="flex-fill m-5" style="background-color: #f2e6df;"><strong>Location</strong></div>
      <div class="flex-fill m-5" data-toggle="popover" title="12040 N.E. 128th St, Kirkland, WA " data-content="Main (Blue) Garage, 1st Floor">Evergreen Hospital</div>
      <div class="flex-fill m-5" data-toggle="popover" title="4800 Sand Point Way N.E., Seattle, WA" data-content="Ocean Garage">Seattle Children's Hospital</div>
      <div class="flex-fill m-5" data-toggle="popover" title="12040 N.E. 128th St, Kirkland, WA " data-content="Main (Blue) Garage, 1st Floor">Evergreen Hospital</div>
    </div>
  </div>
</div>
</main>

</div>
</template>

<script>
export default {
  name: 'schedule',
  props: {
    msg: String
  }
}
</script>
