// import logo from './logo.svg';
//  import { useState } from 'react';
 import { BrowserRouter, Routes, Route} from 'react-router-dom';
//  import PropTypes from 'prop-types';
// import HomePage from './App';
import './App.css';
import LltLogin from './LLTLogin';
import SignupPage from './LLTSignup';
import ForgotPassword from './ForgotPass';
  // import AccordionUsage from './MUI/Accordian';
  // import SimpleBadge from './MUI/Badges';
  // import CustomButton from './MUI/Button';
  // import LabTabs from './MUI/Tabs';
  // import RecipeReviewCard from './MUI/Card';
//  import Product from './Products/Product';
//  import Layout from './Products/Layout';
// import SubmitForm from './Forms/Submitform';
// import Loginform from './Forms/LoginformValida';
// import SubmitForm from './Forms/MultipleFields';
// import Mobile from './useState';
// import Counter from './VirtualDOM'
// import Component from './Component';
// import ClassComponent from './ClassComponent';
// import Counter from './FunctionState';
// import Classes from './ReactES6/Classes.jsx';
// import Present from './ReactES6/Classes.jsx';
// import Calculator from './ReactES6/Destructing';
// import Spread from './ReactES6/SpreadOperator';
// import MyComponent from './RenderHTML';
//  import User from './Props';
// import Counter from './Events';
// import Goal from './ConditionalRender';
// import Destructing from './ReactES6/DestructingObjects';
// import SimpleTable from './SimpleTable';
// import Mobilebrand from './Hooks/useState';
// import FavoriteColor from './Hooks/UpadateColor';
// import Car from './Hooks/IndividualValues';
// import Cars from './Hooks/useStateObject';
// import Vehicle from './Hooks/useStateSpreadOpe';
// import SimpleTable from './Hooks/CreateTable';
// import Timer from './Hooks/useEffect';
// import Counter from './Hooks/useEffectDeponVar';
// import Timer from './Hooks/EffectCleanup';
// import MyComponent from './Hooks/useEffectEX';
// import MyForm from './Forms/AddingForm';
// import Data from './Forms/DataHandling';
// import Myform from './Forms/SubmitingForm';
// import Layout from './Router/Layout';
// import Home from './Router/Home';
// import ContactUs from './Router/ContactUs';
// import About from './Router/About';
// import TodoList from './Router/TodoList';
// import CreateTodo from './Router/CreateTodo';
// import DeleteTodo from './Router/DeleteTodo';
//  import LeftNavigation from './RouterComp/LeftNav';
//  import Card from './RouterComp/CardComp';
//  import Panel from './RouterComp/PanelComp';
// import { Autocomplete } from "@mui/material";
//  import Users from './Keys';
// import Timer from './Lifecycle';
// import MyComponent from './Refs';



function App() {

  // const [tableData, setTableData] = useState([
    // { id: 1, name: 'John', age: 30, city: 'New York' },
    // { id: 2, name: 'Alice', age: 25, city: 'Los Angeles' },
    // { id: 3, name: 'Bob', age: 40, city: 'Chicago' }
  // ]);


  // const editFunction = (name) => alert(`edit name:${name}`);
  // const deleteFunction = (name) => alert(`delete name:${name}`);

  // const data = [
    // { name: 'John', age: 30, city: 'New York' },
    // { name: 'Alice', age: 25, city: 'Los Angeles' },
    // { name: 'Bob', age: 40, city: 'Chicago' },
  // ];

  // let editFunction = (name) => alert(`edit name:${name}`);
  // let deleteFunction = (name) => alert(`delete name:${name}`);

  // const name = "John";
  // const age = 20;
  

  // Users.propTypes = {
  //   name: PropTypes.string.isRequired,
  //   age: PropTypes.number,
  //   salary:PropTypes.array
  // }

  // const users = [
  //   {id: 1, name: "Ram"},
  //   {id: 2, name: "Sita"},
  //   {id: 3, name: "Laxman"}
  // ]

  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Component name="rama" age={25} State="Andhra" /> */}
      {/* <ClassComponent name = {name} age = {age} /> */}
      {/* <Counter />   */}
       {/* <Classes /> */}
       {/* <Present /> */}
       {/* <Calculator /> */}
       {/* <Spread /> */}
       {/* <MyComponent /> */}
       {/* <ParentComponent /> */}
       {/* <Counter /> */}
       {/* <Goal /> */}
       {/* <Destructing /> */}
       {/* <SimpleTable data={data} editFun={editFunction} deleteFun={deleteFunction} /> */}
       {/* <Mobilebrand /> */}
       {/* <FavoriteColor /> */}
       {/* <Car /> */}
       {/* <Cars /> */}
       {/* <Vehicle /> */}
       {/* <SimpleTable data={useState} editfun = {editFunction} deletefun = {deleteFunction} /> */}
       {/* <Timer /> */}
       {/* <Counter /> */}
       {/* <Timer /> */}
       {/* <MyComponent /> */}
       {/* <MyForm /> */}
       {/* <Myform /> */}
       {/* <SubmitForm /> */}
       {/* <Loginform /> */}
       {/* <SubmitForm /> */}
        {/* <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route  path="/ContactUs" element={<ContactUs />}/>
          <Route  path="/todoList" element={<TodoList />}/>
          <Route  path="/CreateTodo" element={<CreateTodo />}/>
          <Route  path="/DeleteTodo" element={<DeleteTodo />}/>
        </Route>
       </Routes>
        </BrowserRouter> */}
     {/* <BrowserRouter>
    <header style={{padding: "10px", background: "navy", justifyContent: 'center', color: "white"}}>UI Components</header>
      <div className="app" style={{display: 'flex'}}>
        <LeftNavigation />
      <div className="main-content" style={{ marginLeft: '300px' }}>
      <Routes>
            <Route path="/card" element={<Card title="Card" description="Card content"/>}/>
            <Route path="/panel" element={<Panel panelheading="Panel Heading" panelcontent="Panel Info"/>}/>
      </Routes>
      </div>
      </div>
    </BrowserRouter>  */}
 
      {/* <BrowserRouter>
       <Routes>
         <Route path="/" element={<Layout />}> 
          <Route index element={<Product />} />
         </Route> 
       </Routes>
      </BrowserRouter>  */}
      {/* <Autocomplete /> */}
      {/* <CustomButton />
      <LabTabs />
      <SimpleBadge />
      <AccordionUsage />
      <RecipeReviewCard /> */}
    <BrowserRouter>
      <Routes>
        
          <Route path="/"  element={<LltLogin/>} />
          <Route path="/signUp" element={<SignupPage/>} />
          <Route path="/forgotPassword" element={<ForgotPassword/>} />
        
      </Routes>
    </BrowserRouter>
    {/* <Users name= "John" age= {23} salary= {[23000, 2000, 30000]}/> */}
    {/* <h1>List of Users</h1>
    <UserList users={users} /> */}
    {/* <MyComponent /> */}
    {/* <HomePage /> */}
    {/* <Timer /> */}
    </div>
  );
}

export default App;
