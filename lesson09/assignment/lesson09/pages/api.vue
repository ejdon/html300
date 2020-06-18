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

</style>
