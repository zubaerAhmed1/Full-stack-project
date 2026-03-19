import {useAuth} from "../contexts/authcontext";

export default function Register(){
    const {register} = useAuth();

const handlesubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData(e.target);
    const data = Object.fromEntries(formdata);

    try{
         await register({
            username:data.username,
            password:data.password,
            phone:data.phone,
            firstname:data.first_name,
            lastname:data.last_name,
        });

        alert('Registration Successfull!');
    }   catch(error) {
      alert('Registration Faild!'+ error.message)}
};

return(
    <form onSubmit={handlesubmit} style={{padding:20,border: "1px solid green"}}>
        <h3>Register</h3>

        <label htmlFor="reg-first-name">First Name</label><br />
        <input id="reg-first-name" type="text" name='first_name' placeholder='First Name' aria-required="true" required /> <br />
        <label htmlFor="reg-last-name">Last Name</label><br />
        <input id="reg-last-name" type="text" name='last_name' placeholder='Last Name' aria-required="true" required /> <br />
        <label htmlFor="reg-username">Username</label><br />
        <input id="reg-username" type="text" name='username' placeholder='User Name' aria-required="true" required /> <br />
        <label htmlFor="reg-phone">Phone</label><br />
        <input id="reg-phone" type="tel" name='phone' placeholder='Phone' aria-required="true" required /> <br />
        <label htmlFor="reg-password">Password</label><br />
        <input id="reg-password" type="password" name='password' placeholder='Password' aria-required="true" required/> <br /><br />

        <button type="submit">Register Now</button>
    </form>
)
};
