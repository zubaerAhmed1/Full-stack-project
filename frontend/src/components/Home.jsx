import { useAuth } from "../contexts/authcontext";

export default function Home() {
  const { user, isAuthLoading, logout } = useAuth();

  if (isAuthLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Full Stack LMS Project</h1>
      <hr />

      {user ? (
        <>
          <p>Welcome, {user.username}! You are logged in.</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>You are not logged in. Please login or register. </p>
      )}
    </div>
  );
}