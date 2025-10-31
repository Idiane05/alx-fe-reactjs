import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'

function App() {


  return (
    <div>
      <UserProfile 
        name='Alice'
        age={25}
        bio="Loves hiking and photography"
      />
      <Counter />
      <Footer />
    </div>
  )
}

export default App
