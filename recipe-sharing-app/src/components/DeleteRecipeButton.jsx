import { useNavigate } from 'react-router-dom'
import useRecipeStore from './recipeStore'

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe)
  const navigate = useNavigate()
  const [confirmDelete, setConfirmDelete] = useState(false)

  const handleDelete = () => {
    deleteRecipe(recipeId)
    navigate('/')
  }

  if (!confirmDelete) {
    return (
      <button 
        onClick={() => setConfirmDelete(true)}
        style={{ backgroundColor: '#ff4444', color: 'white', marginTop: '10px' }}
      >
        Delete Recipe
      </button>
    )
  }

  return (
    <div>
      <p>Are you sure you want to delete this recipe?</p>
      <button onClick={handleDelete} style={{ backgroundColor: '#ff4444', color: 'white' }}>
        Yes, Delete
      </button>
      <button onClick={() => setConfirmDelete(false)}>Cancel</button>
    </div>
  )
}

export default DeleteRecipeButton