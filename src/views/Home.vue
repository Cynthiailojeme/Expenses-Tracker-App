<template>
  <div class="home">
    <newcategory/>
    <car/>
    <sport/>
    <food/>
    <homeexpenses/>
  </div>
</template>

<script>
import newcategory from '@/components/newcategory.vue';
import car from '@/components/car.vue';
import sport from '@/components/sport.vue';
import food from '@/components/food.vue';
import homeexpenses from '@/components/homeexpenses.vue';

export default {
  name: 'home',
  components: {
    newcategory,
    car,
    sport,
    food,
    homeexpenses
    }
}
</script>
<style>
.home {
    color: #ffffff;
    margin-top: 150px;
}
</style>
