import { useState } from "react";
import { Link } from "react-router-dom";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "⚠️ Recipe title is required.";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "⚠️ Ingredients are required.";
    } else if (ingredients.split("\n").length < 2) {
      newErrors.ingredients = "⚠️ Please add at least 2 ingredients.";
    }

    if (!steps.trim()) {
      newErrors.steps = "⚠️ Preparation steps are required.";
    }

    setErrors(newErrors);

    // return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const newRecipe = {
      title,
      ingredients: ingredients.split("\n"),
      instructions: steps.split("\n"),
    };

    console.log("✅ Recipe submitted:", newRecipe);

    // Clear form after submit
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Link to="/" className="inline-block mb-6 text-green-600 hover:underline">
        ← Back to Recipes
      </Link>

      <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">➕ Add a New Recipe</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Recipe Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full border rounded-lg p-2 focus:ring-2 ${
                errors.title ? "border-red-500" : "focus:ring-green-400"
              }`}
              placeholder="Enter recipe title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">Ingredients</label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className={`w-full border rounded-lg p-2 focus:ring-2 ${
                errors.ingredients ? "border-red-500" : "focus:ring-green-400"
              }`}
              rows="4"
              placeholder="List ingredients (one per line)"
            />
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">Preparation Steps</label>
            <textarea
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              className={`w-full border rounded-lg p-2 focus:ring-2 ${
                errors.steps ? "border-red-500" : "focus:ring-green-400"
              }`}
              rows="5"
              placeholder="Describe the steps (one per line)"
            />
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;
