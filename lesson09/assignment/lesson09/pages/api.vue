<script>
export default {
	props: {
		country: Object
	}
}
</script>

<template>

    <article class="card">
        <img :src="country.flag" :alt="country.name" class="card_img">
        <h2 class="card_title">{{ country.name }}</h2>
        <p class="card_copy"> {{ country.subregion }} </p>
    </article>

</template>



<style lang="scss">
.card {
  margin: 1rem;
  border: 1px solid red;
  padding: 1.5rem;
  max-width: 200px;
  min-height: 200px;
  &_img {
    display: block;
    margin-bottom: 1rem;
  }
  &_title {
    font-size: 1rem;
    margin-bottom: .25rem;
    }
  &_copy {
    font-size: .875rem;
  }
}
</style>
