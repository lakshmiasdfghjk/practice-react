 import React from "react";
 import { Outlet, Link } from "react-router-dom";

 const Layout = () => {
     return (
         <div>
             <nav style={{ justifyContent: "left" }}>
                 <ul style={{ listStyle: "none", display: "flex", }}>
                     <li style={{ margin: "0 10px" }}>
                         <Link to="/">Home</Link>
                     </li>
                     <li style={{ margin: "0 10px" }}>
                         <Link to="/About">About</Link>
                     </li>
                     <li style={{ margin: "0 10px" }}>
                         <Link to="/ContactUs">ContactUs</Link>
                     </li>
                     <li style={{ margin: "0 10px" }}>
                         <Link to="/todoList">TodoList</Link>
                     </li>
                     <li style={{ margin: "0 10px" }}>
                         <Link to="/CreateTodo">CreateTodo</Link>
                     </li>
                     <li style={{ margin: "0 10px" }}>
                         <Link to="/DeleteTodo">DeleteTodo</Link>
                     </li>
                 </ul>
             </nav>
             <Outlet />
         </div>
     );
 }

 export default Layout;

// import React from "react";
// import { Link } from "react-router-dom";

// const Component = () => {
//     return (
//         <div>
//             <nav>
//                 <ul>
//                     <li>
//                         <Link to="/Card">Card</Link>
//                     </li>
//                     <li>
//                         <Link to="/Panel">Panel</Link>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     )
// }

// export default Component;
