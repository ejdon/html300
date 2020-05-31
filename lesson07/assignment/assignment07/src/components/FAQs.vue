<template>
<div>
<!-- FAQs -->
<div class="container">
  <h2 class="m-3">Frequently asked questions</h2>
  <div class="accordion m-3">
    <div class="card">
      <!--Question-->
      <div class="card-header">
        <h2>
          <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne">
          Will I be asked to participate?
          </button>
        </h2>
      </div>
      <!--Answer-->
      <div id="collapseOne" class="collapse show" data-parent="#accordion">
        <div class="card-body">
          A car seat clinic is an educational opportunity. We want you to get the most value for your time, so plan to participate in the check-up process.        </div>
      </div>
    </div>
    <!--Question-->
    <div class="card">
      <div class="card-header">
        <h2>
          <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo">
          Should I bring anything?
          </button>
        </h2>
      </div>
      <!--Second collapsible content-->
      <div id="collapseTwo" class="collapse" data-parent="#accordion">
        <div class="card-body">
          Yes. Bring the owner's manuals for the car seat and vehicle. Having diapers, snacks and toys handy may make waiting time more pleasant.
        </div>
      </div>
    </div>
    <!--Question-->
    <div class="card">
      <div class="card-header">
        <h2>
          <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseThree">
          Will there be a place for kids to play?
          </button>
        </h2>
      </div>
      <!--Third collapsible content-->
      <div id="collapseThree" class="collapse" data-parent="#accordion">
        <div class="card-body">
          There will be a small play area for kids. However, we recommend bringing personal toys as well.
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
  props: {
    msg: String
  }
}
</script>
