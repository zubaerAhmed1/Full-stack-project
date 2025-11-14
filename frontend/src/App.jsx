import { useEffect } from "react";
import { useAuth } from "./contexts/authcontext";
import Register from "./components/register";
import Login from "./components/login";

export default function App() {
  const {user, isAuthLoading,logout} = useAuth();

  

  return (
    <div style={{padding: '20px'}}>
      <h2 style={{color: 'green'}}>✅ App Loaded Successfully</h2>
      <h1>Full Stack LMS Project</h1>
      <hr />

      <h2>Current Status:</h2>
      {isAuthLoading ? (
        <p>Checking Login Status...</p>
      ) : user ? (  <>
        <p>Welcome, {user.username}! You are logged in.</p>
        <hr />
        <div>
          <button type="submit" onClick={logout} style={{padding:10, border:"1px solid green", backgroundColor: "green"}}>Log Out</button>
        </div> </>
      ) : (
        <p>You are not logged in.</p>
      )
    }
      <hr />
      {!user && <Register/>}

      <hr />
      {!user && <Login/>}
      
    </div>
  );
}
