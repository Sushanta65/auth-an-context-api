import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const {signInUser} = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        signInUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(err => console.log(err.message))
    }
    return (
        <div> 
        <div className='w-4/6 mx-auto m-5 border-2 border-gray-400 p-5'>
         <h2 className='pb-5 text-2xl font-bold'>Login</h2>
         <div>
             <form onSubmit={handleLogin} className='flex flex-col gap-5'>
                 <input className='text-gray-600 outline-none border-2 rounded-md py-2 px-2' type="email" name="email"  placeholder='Email' />
                 <input className='text-gray-600 outline-none border-2 rounded-md py-2 px-2' type="password" name="password"  placeholder='Password' />
                 <input className='bg-gray-300 py-2 rounded-md hover:bg-slate-300 duration-300 cursor-pointer' type="submit" value="Login" />
                 <p>New User? <Link to='/signup' className='text-blue-500 hover:underline hover:text-blue-600'>Sign Up</Link></p>
             </form>
         </div>
        </div>
     </div>
    );
};



export default Login;