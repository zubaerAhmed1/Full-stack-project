import {useAuth} from "../contexts/authcontext";

export default function Login() {
    const {login} = useAuth();

    const loginhandle = async (e) =>  {
        e.preventDefault();

        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata);

        try {
            await login({
                phone: data.phone,
                password: data.password

            });
            
            alert("Login Successfull!")
        } catch (error) {
            alert("Login Failed! " + error.message)
        }
    }


return(
    <form onSubmit={loginhandle} style={{padding:5,border:"1px solid green"}}>
        <h3>Login</h3>

        <div style={{padding:5,backgroundColor:"blue"}}>
            <label htmlFor="login-phone">Phone Number</label><br />
            <input id="login-phone" type="tel" name="phone" placeholder="Enter Your Phone Number" aria-required="true" required /><br /><br />
            <label htmlFor="login-password">Password</label><br />
            <input id="login-password" type="password" name="password" placeholder="Type Your Password" aria-required="true" required /><br /><br />
            <button type="submit">Log In</button>
        </div>
    </form>
)
};