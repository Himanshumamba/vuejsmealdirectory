<template>

    <div>
    <div class="flex p-8 justify-center">


</div>
 <div class="flex gap-2 mt-2 justify-center">
<router-link :to="{ name:'byLetter' , params :{letter}}" v-for=" letter of letters" :key="letter"> 
{{ letter }}</router-link>
</div>
</div>

    <div v-for ="meal of meals" :key = "meal.idMeal" :meal="meal">
        <h2 class="px-5 py-5 font-bold text-2xl text-center"> {{ meal.strMeal }}</h2>

            <img :src="meal.strMealThumb"  alt = "strMeal" class="rounded mx-auto"/>
   
       

        </div>

</template>

<script setup>
  import { computed, onMounted, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import store from '../store';

  const letters = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'.split('');
  const route = useRoute();
  const meals = computed(() => store.state.mealsByLetter);

  watch(route, () => {
    store.dispatch('searchMealsLetter', route.params.letter);
  });

  onMounted(() => {
    store.dispatch('searchMealsLetter', route.params.letter);
  });
</script>

<style scoped >
</style>