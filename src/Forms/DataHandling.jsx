 import React,{useState} from "react";

 const Data = () => {
     const[User, setUser] = useState("");

     return (
         <form>
             <label>
                 User Name:
                 <input type="text" placeholder="Enter your name" value = {User}
                 onChange={(e) => setUser(e.target.value)} 
                 />
             </label>
         </form>
     )
 }

 export default Data;


// import React,{useState} from "react";

// const Data = () => {
//     const[User, setUser] = useState("");
//     const Handler = e => {
//         setUser(e.target.value)
//     }

//     return (
//         <form>
//             <label>
//                 User Name:
//                 <input type="text" placeholder="Enter your name" value = {User}
//                 onChange={Handler} 
//                 />
//             </label>
//         </form>
//     )
// }

// export default Data;