import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-semibold text-xl text-primary'>Login With</h1>
            <div className='grid grid-cols-1 *:mt-4'>
                <button className='btn rounded-lg bg-white text-blue-400 border border-blue-400 hover:bg-blue-400 hover:text-white'><FaGoogle size={20}/> Login with Google</button>
                <button className='btn rounded-lg bg-white text-neutral-700 border border-neutral-700 hover:bg-neutral-700 hover:text-white'><FaGithub size={20}/> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;