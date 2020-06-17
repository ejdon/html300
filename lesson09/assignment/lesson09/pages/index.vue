<template>
  <div class="hello">

  <!-- alert -->
  <div class="alert alert-warning">To continue to serve child caregivers during social distancing, CSK has formed a virtual checkup sub-team. If you are a currently certified child passenger safety technician who would like to be added to our team, please contact Jane at jane.doe@mail.com.</div>

  <!-- index text section -->
  <main>
    <div class="row">
    <div class="container col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" style="margin-left: 2%; margin-top: 3%;">
      <h1>Car Safe Kids</h1>
      <h2>Did you know 9 out of 10 car seats are misused!</h2>
      <p>If you want to beat these odds and maximize vehicle safety for your child, then this is for you! Come get one-on-one guidance on using your child car seat.</p>
      <p>Bring your car seat, your car, and your child and be prepared to have hands-on training. Expectant parents and other caregivers also welcome.</p>

      <!-- v-if and v-else -->
      <btn v-if="show" v-on:click="show = !show" class="btn btn-info">Check out our schedule to attend an event</btn>
      <ul v-else class="list-group list-group-flush">
        <li class="list-group-item"><nuxt-link to="/schedule">July 18th - Evergreen Hospital</nuxt-link></li>
        <li class="list-group-item"><nuxt-link to="/schedule">August 22nd - Children's Hospital</nuxt-link></li>
        <li class="list-group-item"><nuxt-link to="/schedule">September 5th - Evergreen Hospital</nuxt-link></li>
      </ul>
      </div>

  <!-- index image section -->
    <img class="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5" src="/index-image.jpg" alt="A woman buckling a child into a car seat" style="margin-right: 2%;">
  </div>

  <!-- quote and filter -->
    <div class="container">
      <div class="card m-3">
          <div class="card-header">{{ quote | upperCase }}
          </div>
          <div class="card-body">
            <blockquote class="blockquote">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <footer class="blockquote-footer">Jane Doe <cite title="Source Title">Seattle, WA</cite></footer>
            </blockquote>
          </div>
      </div>

    </div>
  </main>

  </div>
</template>

<script>

//filter
export default {
  name: 'Home',
  data () {
  return {
  quote: 'Hear from other visitors',
  }
},
filters: {
  upperCase: function(value) {
    return value.toUpperCase();
  }
}
}
</script>

<style scoped>

</style>
