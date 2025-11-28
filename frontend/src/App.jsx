import {Routes,Route } from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Teachers from "./components/Teachers";

function App (){
  return(
     <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/ >}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      <Route path="/teacher" element={<ProtectedRoute> <Teachers/> </ProtectedRoute>}/>
    </Routes>
    </> 
  );
}
 export default App;
