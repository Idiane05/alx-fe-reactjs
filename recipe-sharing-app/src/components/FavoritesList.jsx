import { Link } from 'react-router-dom'
import useRecipeStore from './recipeStore'

const FavoritesList = () => {
  const favorites = useRecipeStore(state => 
    state.favorites.map(id => state.recipes.find(recipe => recipe.id === id))
  )

  return (
    <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff8e1', border: '1px solid #ffd54f' }}>
      <h2>⭐ My Favorites</h2>
      {favorites.length === 0 ? (
        <p>You haven't added any favorites yet. Click the heart icon on recipes to add them!</p>
      ) : (
        favorites.map(recipe => (
          recipe ? (
            <div key={recipe.id} style={{ border: '1px solid #ffd54f', padding: '10px', margin: '10px 0', backgroundColor: 'white' }}>
              <h3>
                <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
              </h3>
              <p>{recipe.description}</p>
            </div>
          ) : null
        ))
      )}
    </div>
  )
}

export default FavoritesList
