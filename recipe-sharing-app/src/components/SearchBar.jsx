import { useEffect } from 'react'
import useRecipeStore from './recipeStore'

const SearchBar = () => {
  const searchTerm = useRecipeStore(state => state.searchTerm)
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm)
  const filterRecipes = useRecipeStore(state => state.filterRecipes)

  // Trigger filtering whenever search term changes
  useEffect(() => {
    filterRecipes()
  }, [searchTerm, filterRecipes])

  return (
    <div style={{ margin: '20px 0' }}>
      <input
        type="text"
        placeholder="Search recipes by title or description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '10px',
          width: '300px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
    </div>
  )
}

export default SearchBar
