import { Link } from 'react-router-dom'
import useRecipeStore from './recipeStore'

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations)

  return (
    <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#e8f5e9', border: '1px solid #66bb6a' }}>
      <h2>🍳 Recommended For You</h2>
      {recommendations.length === 0 ? (
        <p>Add some favorites to get personalized recommendations!</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id} style={{ border: '1px solid #66bb6a', padding: '10px', margin: '10px 0', backgroundColor: 'white' }}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default RecommendationsList
