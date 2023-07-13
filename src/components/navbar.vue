<template>
<header class="h-16 flex ">
<div class="flex "> 
  <router-link  :to  = "{name: 'home'}" class="inline-flex items-center  px-5  h-full">
       Home
  </router-link>
<div class="flex item-center gap-1">
  <router-link  :to  = "{name: 'byName'}" class="inline-flex  items-center px-2 h-full">
Search Meals  </router-link>
  <router-link  :to  = "{name: 'byLetter'}" class="inline-flex items-center  px-2 h-full">
    Meals by letter
  </router-link>
  <router-link  :to  = "{name: 'byIngredients'}" class="inline-flex  items-center  px-2 h-full">
    Meals by Ingredrient
  </router-link>
</div>

</div>
</header>
    </template>
    
    <script>
    
    </script>
    
    <style setup>
    </style>