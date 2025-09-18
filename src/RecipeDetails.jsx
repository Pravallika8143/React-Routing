import React from "react";
import { useParams } from "react-router-dom";
import recipes from "./assets/recipes.json";

function RecipeDetails() {
  var x = useParams();
  console.log(recipes);
  var selectedRecipe = recipes.recipes.find((recipe) => {
    console.log(recipe.id, x.id);
    if (recipe.id == x.id) {
      return true;
    }
  });
  console.log(selectedRecipe);
   console.log(x);
  return (
    <div className="border border-5 p-3 m-2 border-success">
      <h3>RecipeDetails</h3>
      <h3>{selectedRecipe.name}</h3>
      <img src={selectedRecipe.image} width="200px" alt="" />
      <h3>Ingredients</h3>
      <ul>
        {selectedRecipe.ingredients.map((ing) => {
          return <li>{ing}</li>;
        })}
      </ul>
      <h3>Instructions</h3>
      <ol>
        {selectedRecipe.instructions.map((ing) => {
          return <li>{ing}</li>;
        })}
      </ol>
    </div>
  );
}

export default RecipeDetails;