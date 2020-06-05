<template>
<div>

<!-- alert and filter -->
<div class="alert alert-warning">{{ alert | upperCase }}</div>


<!--header and slot-->
<img class="img-fluid" src="../assets/header-2.jpg" style="width:100%" alt="a technician teaching new parents how to install their baby into their car seat">
  <slot name="titleOne">{{ title | upperCase }}</slot>

</div>
</template>



<script>
//filter
export default {
    name: 'header',
    data () {
      return {
      alert: 'To continue to serve child caregivers during social distancing, CSK has formed a virtual checkup sub-team. If you are a currently certified child passenger safety technician who would like to be added to our team, please contact Jane at jane.doe@mail.com.',
      title: 'Here is an image of a typical car seat check!',
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
