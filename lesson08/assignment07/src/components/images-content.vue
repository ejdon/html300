<template>
<!--photo code -->
  <div>
    <img :src="image.src" :alt="image.alt" style="width:100%" id="noBorder" class="addBorder frame card-img-top img-fluid rounded">
    <div class="caption">
    <p>{{image.caption}}</p>
    </div>
  </div>
</template>

<script>

//props
export default {
    name: 'photos',
    props: {
            image: Object,
            default: function () {
                return {}
            }
          }
        }
</script>

<style scoped>
.addBorder {
  border: 5px solid #de1616;
}

</style>
