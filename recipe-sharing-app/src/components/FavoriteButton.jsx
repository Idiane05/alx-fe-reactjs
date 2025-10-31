import useRecipeStore from './recipeStore'

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore(state => state.favorites)
  const addFavorite = useRecipeStore(state => state.addFavorite)
  const removeFavorite = useRecipeStore(state => state.removeFavorite)
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations)

  const isFavorite = favorites.includes(recipeId)

  const handleClick = () => {
    if (isFavorite) {
      removeFavorite(recipeId)
    } else {
      addFavorite(recipeId)
    }
    // Regenerate recommendations after favorite change
    setTimeout(() => generateRecommendations(), 100)
  }

  return (
    <button 
      onClick={handleClick}
      style={{
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: '24px',
        color: isFavorite ? '#ff6b6b' : '#ccc'
      }}
      title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFavorite ? '❤️' : '🤍'}
    </button>
  )
}

export default FavoriteButton
