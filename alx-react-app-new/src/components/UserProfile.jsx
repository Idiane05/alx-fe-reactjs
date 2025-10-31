
 const UserProfile = (props) => {
   return (
     <div style={{ 
        border: '2px solid gray',
        padding: '10px',
        margin: '10px'
      }}>
       <h2 style={{
        fontSize: '12px',
        margin: '10px',
        color: 'blue'
       }}>{props.name}</h2>
       <p>
          Age: 
          <span style={{ 
            fontSize: '10px', 
            margin: '10px', 
            color: 'red' 
          }}>
            {props.age}
          </span>
        </p>

      <p>
        Bio: 
     <span style={{
              fontSize: '10px',
              margin: '10px',
              color: 'orange'
        }}>
              {props.bio}
      </span>
          </p>

     </div>
   );
 };
export default UserProfile;