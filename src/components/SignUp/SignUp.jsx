import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleSignUp = e => {
        e.preventDefault()
        const email  = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
    }
        return (
        <div> 
           <div className='w-4/6 mx-auto m-5 border-2 border-gray-400 p-5'>
            <h2 className='pb-5 text-2xl font-bold'>Sign Up</h2>
            <div>
                <form onSubmit={handleSignUp} className='flex flex-col gap-5'>
                    <input required className='text-gray-600 outline-none border-2 rounded-md py-2 px-2' type="email" name="email"  placeholder='Email' />
                    <input required className='text-gray-600 outline-none border-2 rounded-md py-2 px-2' type="password" name="password"  placeholder='Password' />
                    <input className='bg-gray-300 py-2 rounded-md hover:bg-slate-300 duration-300 cursor-pointer' type="submit" value="Sign Up" />
                    <p>Already Have an Account? <Link to='/login' className='text-blue-500 hover:underline hover:text-blue-600'>Login</Link></p>
                </form>
            </div>
           </div>
        </div>
    );
};

export default SignUp;