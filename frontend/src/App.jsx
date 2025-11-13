import { useEffect } from "react";
import { useAuth } from "./contexts/authcontext";
import Register from "./components/register";

export default function App() {
  const {user, isAuthLoading} = useAuth();

  // Test log to confirm component mount
  useEffect(() => {
    console.log("✅ App mounted");
  }, []);

  return (
    <div style={{padding: '20px'}}>
      <h2 style={{color: 'green'}}>✅ App Loaded Successfully</h2>
      <h1>Full Stack LMS Project</h1>
      <hr />

      <h2>Current Status:</h2>
      {isAuthLoading ? (
        <p>Checking Login Status...</p>
      ) : user ? (
        <p>Welcome, {user.username}! You are logged in.</p>
      ) : (
        <p>You are not logged in.</p>
      )}
      <hr />
      {!user && <Register/>}
    </div>
  );
}
