import { create } from 'zustand'

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  
  // Recipe management actions
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, newRecipe] 
  })),
  updateRecipe: (id, updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    )
  })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),
  setRecipes: (recipes) => set({ recipes }),
  
  // Search and filtering actions
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () => {
    const { recipes, searchTerm } = get()
    const filtered = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    set({ filteredRecipes: filtered })
  },
  
  // Favorites actions
  addFavorite: (recipeId) => set((state) => ({ 
    favorites: [...state.favorites, recipeId] 
  })),
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  
  // Recommendations action
  generateRecommendations: () => set((state) => {
    // Simple recommendation logic based on favorites
    // If user has favorites, recommend similar recipes (mocked here)
    if (state.favorites.length > 0) {
      const recommended = state.recipes.filter(recipe =>
        !state.favorites.includes(recipe.id) && Math.random() > 0.7
      ).slice(0, 3); // Limit to 3 recommendations
      return { recommendations: recommended };
    }
    
    // If no favorites, show random recommendations
    const randomRecommendations = state.recipes.length > 3
      ? [...state.recipes].sort(() => 0.5 - Math.random()).slice(0, 3)
      : state.recipes;
    
    return { recommendations: randomRecommendations };
  })
}))

export default useRecipeStore
