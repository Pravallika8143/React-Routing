import React from "react";
import recipes from "./assets/recipes.json";
import { Link } from "react-router-dom";

function Recipes() {
  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">🍽 Recipes</h1>

      <div className="row">
        {recipes.recipes.map((recipe) => (
          <div key={recipe.id} className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <img
                src={recipe.image}
                className="card-img-top"
                alt={recipe.name}
                style={{ height: "150px", objectFit: "cover" }}
              />

              <div className="card-body text-center">
                <h5 className="card-title">{recipe.name}</h5>

                <Link
                  to={`/recipeDetails/${recipe.id}`}
                  className="btn btn-primary mt-2"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
