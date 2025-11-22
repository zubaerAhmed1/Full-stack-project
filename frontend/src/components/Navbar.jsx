import { useAuth } from "../contexts/authcontext";
import { Link } from "react-router-dom";


export default function Navbar() {
    const {user,logout} = useAuth();

    return(
        <nav>
        {user ? (
            <>
            <button type="submit" onClick={logout}>Log Out</button>
            <br />
            <Link to='/dashboard'>Dashboard</Link>
            </>
        ) : (
        <>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        </>)
    }
        </nav>
    );
}