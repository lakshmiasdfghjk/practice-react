import React from "react";
import { Fragment } from "react";

// function UserList ({users}) {
//     return (
//         <ul>
//             {users.map(user => (
//                 <li key = {user.id}>
//                     {user.name}
//                 </li>
//             ))}
//         </ul>
//     );
// }

// export default UserList;


function Users ({Users}) {  
    return (  
      <Fragment>  
        {Users.map(Users => (  
          // Without the 'key', React will give a key warning  
          <React.Fragment key={Users.id}>  
            <h2>{Users.name}</h2>  
            <p>{Users.age}</p>  
            <p>{Users.salary}</p>  
          </React.Fragment>  
        ))}  
      </Fragment>  
    )  
  } 
  
  export default Users;