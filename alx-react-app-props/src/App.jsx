import './App.css'
import ProfilePage from './components/ProfilePage'
import { UserContext } from './components/UserContext'

function App() {

const userData = { name: "Lukman Modibbo", email: "Lukmansaid@gmail.com"}
  return (
    <UserContext.Provider value={userData}>
      <ProfilePage userData={userData}/>
    </UserContext.Provider>
  )
}

export default App
