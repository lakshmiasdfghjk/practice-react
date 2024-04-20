 import { useState, useEffect } from 'react';

 function MyComponent() {
   const [count, setCount] = useState(0);

   useEffect(() => {

     return () => {
     } 
   }, [count]); 

   return (
     <div>
       <p>You clicked {count} times</p>
       <button onClick={() => setCount(count + 1)}>
         Click me
       </button>
     </div>
   );
 }

 export default MyComponent;



// import { useState, useEffect } from 'react';

// function SideMenuBar() {
//   const [showSideMenu, setShowSideMenu] = useState();

//   useEffect(() => {
    
//     if (showSideMenu) {
      
//       console.log('Side menu is visible!');
//      } else {
      
//        console.log('Side menu is hidden!');
//      }

//     }, [showSideMenu]); 

//   const SideMenu = () => {
//     setShowSideMenu(!showSideMenu);
//   }

//   return (
//     <div>
//       <h1>My App</h1>
//       <button onClick={SideMenu}>Side Menu</button>
//       {showSideMenu && (
//         <div style={{ width: '200px', backgroundColor: '#f0f0f0', padding: '20px' }}>
//           <h2>Side Menu</h2>
//           <ul>
//             <li>Menu Item 1</li>
//             <li>Menu Item 2</li>
//             <li>Menu Item 3</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SideMenuBar;



// import React, { useState, useEffect } from 'react';

// function App() {
//   const [showSideMenu, setShowSideMenu] = useState(true);

//   // useEffect runs after every render
//   useEffect(() => {
//     // This function will be executed after every render
//     // We check if the showSideMenu state is true or false
//     if (showSideMenu) {
//       // If showSideMenu is true, we can do something here, like displaying the side menu
//       console.log('Side menu is visible!');
//     } else {
//       // If showSideMenu is false, we can do something here, like hiding the side menu
//       console.log('Side menu is hidden!');
//     }
//   }, [showSideMenu]); // We specify that useEffect should run whenever the showSideMenu state changes

//   return (
//     <div>
//       <h1>My App</h1>

//       {/* Render the side menu based on the showSideMenu state */}
//       <div style={{ display: showSideMenu ? 'block' : 'none', width: '200px', backgroundColor: '#f0f0f0', padding: '20px' }}>
//         <h2>Side Menu</h2>
//         <ul>
//           <li>Menu Item 1</li>
//           <li>Menu Item 2</li>
//           <li>Menu Item 3</li>
//         </ul>
//       </div>

//       <div>
//         <p>Main content area...</p>
//       </div>
//     </div>
//   );
// }

// export default App;


