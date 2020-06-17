<template>

    <div class="flex-item">
        <h6> {{ item.source.name }} </h6>
        <a :href="item.url"> {{ item.title }} </a>
        <p><img :src="item.urlToImage"></p>
        <p> {{ item.author }} </p>
    </div>

</template>

<script>
export default {
	props: {
		item: Object
	}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
.flex-item {
    width: 11rem;
    margin: 1rem;
}
@media screen and (max-width: 680px) {
  .flex-item {
    width: 35%;
  }
}
h6 {
    font-family: 'Roboto', sans-serif;
    color: #DFBBB6;
}
a {
    font-family: 'Roboto', sans-serif;
}
img {
    width: 100%;
}
</style>
