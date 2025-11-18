import { BrowserRouter,Routes,Route } from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import  {AuthProvider}  from "./contexts/authcontext";

function App (){
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/ >}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
    </>
  );
}
 export default App();
{/*export default function App() {

  return (
   //<AuthProvider>
      <BrowserRouter>
      <Navbar/>
      <AppUI/>
      </BrowserRouter>
    </AuthProvider>
) 
} */}
