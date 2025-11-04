import { useContext } from "react";
import UserDetails from "./UserDetails";
import { UserContext } from "./UserContext";

function UserProfile(){
  const UserData = useContext(UserContext);
  return <UserDetails UserData={UserData}/>
}
export default UserProfile