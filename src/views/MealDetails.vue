<template>
 <div class="max-w-[800px] ">
        <h1 class="text-5xl font-bold mb-5">{{meal.strMeal}} </h1>
        
        <img :src="meal.strMealThumb"  class="rounded  max-w-[100%]"/>    </div>
  
    <div class="grid gid-cols-1 md:grid-cols-3 text-lg">
      <ul class =  "inline-flex justify-around">
      <li> <strong class="font-bold">Category </strong>{{meal.strCategory}}  </li>
      <li> <strong class="font-bold">Area </strong>{{meal.strArea}}  </li>
      <li> <strong class="font-bold">Tags </strong>{{meal.strTags}}  </li>

      </ul>

      
    </div>
    <p class="flex  justify-center px-3  py-5 ">
      {{meal.strInstructions}}
    </p>


    <div class="grid grid-cols-1 md:grid-cols-3">
       <div>
      <h2 class="text-2md font-semibold "> Ingredient </h2>

      <ul>
        <template v-for="(el,index) of newArray(20)">
      <li v-if="meal[`strIngredient${index+1}`]">{{index+1}}.  {{meal[`strIngredient${index+1}`]}} </li>
      </template>
      </ul>
      </div>

      <div>
      <h2 class="text-2md font-semibold "> Measures </h2>

      <ul>
        <template v-for="(el,index) of newArray(8)">
      <li v-if="meal[`strMeasure${index+1}`]">{{index+1}}.  {{meal[`strMeasure${index+1}`]}} </li>
      </template>
      </ul>
      </div>


      </div>


  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient.js'  
  const route = useRoute();
  const meal = ref({});
  
  onMounted(() => {
    axiosClient
      .get(`lookup.php?i=${route.params.id}`)
      .then(({ data }) => {
        debugger;
        console.log(data)
        meal.value = data.meals?.[0] || {};
      })
      .catch((error) => {
        console.error(error);
      });
  });

  function newArray(length) {
  return Array.from({ length });
}
  </script>
  