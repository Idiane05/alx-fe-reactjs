import { useState } from 'react'
import useRecipeStore from './recipeStore'

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore(state => state.updateRecipe)
  const [title, setTitle] = useState(recipe.title)
  const [description, setDescription] = useState(recipe.description)
  const [isEditing, setIsEditing] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    updateRecipe(recipe.id, { title, description })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setTitle(recipe.title)
    setDescription(recipe.description)
    setIsEditing(false)
  }

  if (!isEditing) {
    return (
      <button onClick={() => setIsEditing(true)}>
        Edit Recipe
      </button>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Recipe</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Save Changes</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  )
}

export default EditRecipeForm