import { createRouter, createWebHistory } from  'vue-router'
import Home from '../views/Home.vue'
import  SearchByName   from '../views/SearchByeName.vue';
import  SearchByeLetter   from '../views/SearchByeLetter.vue';
import  SearchByIngredients   from '../views/SearchByIngredients.vue';
import  MealDetails   from '../views/MealDetails.vue';

import DefaultLayout  from '../components/DefaultLayout.vue'
const routes=[
    {
        path :'/',
        component:DefaultLayout,
        children:[
            {
                path :'/',
                name:'home',
                component:Home
            },
            {
                path:'/byName/:name?',
                name:'byName',
                component:SearchByName
            },
            {
                path:'/byLetter/:letter?',
                name:'byLetter',
                component:SearchByeLetter
            },
            {
                path:'/byIngredients:Ingredient?',
                name:'byIngredients',
                component:SearchByIngredients
            },
            {
                path:'/meal/:id',
                name:'mealDetails',
                component:MealDetails
            },
        
        ]
    },
   
];


const router = createRouter({

    history:createWebHistory(),
    routes


})

export default router