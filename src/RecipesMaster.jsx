import React from "react";
import recipes from "./assets/recipes.json";
import { Link } from "react-router-dom";

function Recipes() {
  return (
    <div className="border border-5 p-3 m-2 border-success">
      <h1>Recipes</h1>
      <ul>
        {recipes.recipes.map((recipe) => {
          return (
            <li>
              <Link to={`/recipeDetails/${recipe.id}`}>{recipe.name}</Link>
            </li>
        );
        })}
      </ul>
    </div>
  );
}

export default Recipes