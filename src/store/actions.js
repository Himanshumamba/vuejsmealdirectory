import axiosClient from "../axiosClient";

export  function searchMeals({commit} ,keypairs){

    axiosClient.get(`search.php?s=${keypairs}`)
    .then(({ data }) => {
     commit('setSearchMeals' ,data.meals);

    })
    
}

export  function searchMealsLetter({commit} ,letter){

    axiosClient.get(`search.php?f=${letter}`)
    .then(({ data }) => {
     commit('setSearchLetter' ,data.meals);

    })
    
}

export  function searchMealsIngredients({commit} ,ing){

    axiosClient.get(`filter.php?i=${ing}`)
    .then(({ data }) => {
     commit('setSearchIngredients' ,data.meals);

    })
    
}