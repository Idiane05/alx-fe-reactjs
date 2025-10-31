import { useContext } from "react"
import { UserContext } from "./UserContext"


function UserDetails(){
    const userData = useContext(UserContext)
    return (
        <div>
            <h2>My name: {userData.name}</h2>
            <p>Email: {userData.email}</p>
            <p>Age: {userData.age}</p>
            <p>Bio: {userData.bio}</p>
        </div>
    )
}
export default UserDetails