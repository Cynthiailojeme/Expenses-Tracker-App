<template>
  <div class="home">
    <total/>
    <div class="other">
      <car/>
    <sport/>
    <food/>
    <homeexpenses/>
    </div>
  </div>
</template>

<script>
import total from '@/components/total.vue';
import car from '@/components/car.vue';
import sport from '@/components/sport.vue';
import food from '@/components/food.vue';
import homeexpenses from '@/components/homeexpenses.vue';

export default {
  name: 'home',
  components: {
     total,
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
}
.other {
  margin-top: 200px;
}
</style>
