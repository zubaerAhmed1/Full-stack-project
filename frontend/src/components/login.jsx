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
    <form onSubmit={loginhandle} style={{padding:5,border:"ipx solid green"}}>
        <h3>Login</h3>

        <div style={{padding:5,backgroundColor:"blue"}}>
            <input type="phone" name="phone" placeholder="Enter Your Phone Number" /> <br /><br />
            <input type="password" name="password" placeholder="Type Your Password" /><br /><br />
            <button type="submit">Click To Login!</button>
        </div>
    </form>
)
};