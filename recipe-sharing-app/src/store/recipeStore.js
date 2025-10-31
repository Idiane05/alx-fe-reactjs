import { create } from 'zustand'

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, { ...newRecipe, id: Date.now() }] 
  })),
  setRecipes: (recipes) => set({ recipes })
}))

export default useRecipeStore