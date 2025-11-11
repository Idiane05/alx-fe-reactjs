import { useParams, Link } from 'react-router-dom'
import useRecipeStore from './recipeStore'
import EditRecipeForm from './EditRecipeForm'
import DeleteRecipeButton from './DeleteRecipeButton'
import FavoriteButton from './FavoriteButton'

const RecipeDetails = () => {
  const { id } = useParams()
  const recipeId = parseInt(id)
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  )

  if (!recipe) {
    return (
      <div>
        <h2>Recipe not found</h2>
        <Link to="/">Back to recipes</Link>
      </div>
    )
  }

  return (
    <div>
      <Link to="/">← Back to recipes</Link>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: '0', right: '0' }}>
          <FavoriteButton recipeId={recipe.id} />
        </div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <h2>Manage Recipe</h2>
        <EditRecipeForm recipe={recipe} />
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
    </div>
  )
}

export default RecipeDetails
