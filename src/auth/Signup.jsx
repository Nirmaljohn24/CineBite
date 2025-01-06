import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {

        e.preventDefault();

        // console.log(email,password);

        try {

            await createUserWithEmailAndPassword(auth, email, password);
            console.log("Success")

        } catch (err) {

            console.log("Wrong Details")
        }
    };

    return (
        <div className='container m-auto min-h-screen my-44'>
            
            <form className="max-w-sm mx-auto" onSubmit={handleSignup}>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='enter your password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SignUp</button>
            </form>

        </div>
    )
}

export default Signup