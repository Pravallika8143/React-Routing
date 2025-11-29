import React from "react";
import { useParams } from "react-router-dom";
import recipes from "./assets/recipes.json";

function RecipeDetails() {
  const { id } = useParams();

  const selectedRecipe = recipes.recipes.find((recipe) => recipe.id == id);

  if (!selectedRecipe) {
    return (
      <div className="container mt-5 text-center">
        <h2 className="text-danger">Recipe Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <div className="card shadow p-4">
        <h2 className="text-center mb-3">{selectedRecipe.name}</h2>

        <div className="text-center">
          <img
            src={selectedRecipe.image}
            className="img-fluid rounded mb-4"
            style={{ maxWidth: "250px" }}
            alt={selectedRecipe.name}
          />
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <h4 className="text-success">Ingredients</h4>
            <ul className="list-group">
              {selectedRecipe.ingredients.map((ing, index) => (
                <li key={index} className="list-group-item">
                  {ing}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-6 mb-4">
            <h4 className="text-primary">Instructions</h4>
            <ol className="list-group list-group-numbered">
              {selectedRecipe.instructions.map((step, index) => (
                <li
                  key={index}
                  className="list-group-item"
                  style={{ lineHeight: "1.7rem" }}
                >
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
