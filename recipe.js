'use strict';

function addIngredient(recipe, ingredient_name, amount){
  recipe[ingredient_name] = amount;
  return recipe;
}

function removeIngredient(recipe, ingredient_name){
  delete recipe[ingredient_name];
  return recipe;
}


function updateIngredient(recipe, ingredient_name, amount){
  recipe[ingredient_name] = amount;
  return recipe;
}

function readRecipe(recipe){
  for(var key in recipe){
    console.log(`this recipe calls for ${recipe[key]} of ${key}`)
  }
}