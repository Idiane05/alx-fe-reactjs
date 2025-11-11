import { Link } from 'react-router-dom'
import useRecipeStore from './recipeStore'
import FavoriteButton from './FavoriteButton'

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes)
  const searchTerm = useRecipeStore((state) => state.searchTerm)
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes)

  // Use filtered recipes when search term exists, otherwise use all recipes
  const displayRecipes = searchTerm ? filteredRecipes : recipes

  return (
    <div>
      <h2>Recipes</h2>
      {displayRecipes.length === 0 ? (
        <p>
          {searchTerm 
            ? `No recipes found for "${searchTerm}". Try a different search term.`
            : 'No recipes yet. Add one above!'
          }
        </p>
      ) : (
        <>
          {searchTerm && (
            <p>Showing {filteredRecipes.length} results for "{searchTerm}"</p>
          )}
          {displayRecipes.map((recipe) => (
            <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                <FavoriteButton recipeId={recipe.id} />
              </div>
              <h3>
                <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
              </h3>
              <p>{recipe.description}</p>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default RecipeList
