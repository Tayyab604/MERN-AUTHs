import axios from 'axios'
import React from 'react'

const SignUp = () => {

    const handleSignUp = async () => {
        try {
            const response = await axios.post("")
            const data = response.data
        }catch{

        }
        
    }
    return (
        <div>
            <label htmlFor="">Email: </label>
            <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter Email..."
            />
            <label htmlFor="">Password:</label>
            <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
            />
            <label htmlFor="">Confirm Password:</label>
            <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Enter password again"
            />
            <button onClick={handleSignUp} className='bg-[#0AA9BC] w-full rounded-[8px] h-[52px] mt-[32px]'>Sign Up</button>
        </div>
    )
}

export default SignUp
