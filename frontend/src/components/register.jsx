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
      alert('Registration Faild!',+ error.message)}
};

return(
    <form onSubmit={handlesubmit} style={{padding:20,border: "1px solid green"}}>
        <h3>register</h3>

        <input type="text" name='first_name' placeholder='First Name' required /> <br />
        <input type="text" name='last_name' placeholder='Last Name' required /> <br />
        <input type="text" name='username' placeholder='User Name' required /> <br />
        <input type="number" name='phone' placeholder='Phone' required /> <br />
        <input type="password" name='password' placeholder='Password' required/> <br /><br />

        <button type="submit">Register Now</button>
    </form>
)
};
