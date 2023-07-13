<template>
    <div class="p-6">
      <input
        type="text"
        v-model="keypairs"
        class="rounded border-black-200 w-full"
        placeholder="search salmon.."
        @input="searchMeals"
      />
  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <!-- <pre>{{ dishes }}</pre> -->
        <div v-for ="meal of dishes" :key = "meal.idMeal">
        <router-link :to ="{name:'mealDetails' ,params:{id:meal.idMeal}}" >
            <img :src="meal.strMealThumb"  alt = "strMeal" class="rounded t-xl h-48 w-full object-cover"/>
        </router-link>
        <h2 class="px-3 py-2 font-semibold"> {{ meal.strMeal }}</h2>
        <p class="px-3 mb-4 "> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde velit </p>
        <div class="px-3 py-2 flex justify-between">
            <a :href ="meal.strYoutube" target ="_blank" class="px-3 py-2 rounded border bg-red-500   hover:bg-red-500 hover:text-white transition-color"> Youtube</a>
            <router-link :to ="meal.strYoutube" target ="_blank" class="px-3 py-2 rounded border bg-purple-600 hover:bg-purple-500 hover:text-white transition-color"> View</router-link >

        </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { computed,onMounted, ref } from 'vue';
  import { useStore } from 'vuex';
  import {useRoute} from 'vue-router';
  export default {
    setup() {
      const keypairs = ref('');
      const store = useStore();
      const dishes = computed(() => store.state.searchedMeals);
       const  route = useRoute();
      function searchMeals() {
        store.dispatch('searchMeals', keypairs.value);
      }
      onMounted(() => {
      keypairs.value = route.params.name;

      if(keypairs.value){
        searchMeals();
      }
    });

  
      return {
        keypairs,
        dishes,
        searchMeals,
      };
    },

 
  };


  </script>
  
  <style scoped>

  </style>
  
