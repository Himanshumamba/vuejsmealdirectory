<template>
    <div class="p-8">
        <h1 class="text-4xl  font-bold mb-4"> Ingredients</h1>
         <router-link :to="{name:'byIngredients' ,params:{ingredient :ingredient.idIngredient}}" v-for="ingredient of ingredients" :key="ingredient.id" class=" block bg-white">
        <h1 class="text-2xl font-bold pt-10">{{ ingredient.strIngredient }} </h1>
        <p class="pt-8 font-semibold text-justify line-height-1" >{{ ingredient.strDescription }} </p>
        </router-link >

    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import axiosClient from '../axiosClient.js';
  
  export default {
    setup() {
      const ingredients = ref([]);
  
      onMounted(() => {
        axiosClient.get('list.php?i=list')
          .then(({ data }) => {

            ingredients.value = data.meals;
          });
      });
  
      return {
        ingredients
      };
    }
  }
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  