import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="font-semibold text-xl sm:text-2xl text-primary mb-4">
        Login With
      </h1>
      <div className="grid grid-cols-1 gap-4">
        <button className="btn flex items-center justify-center gap-2 rounded-lg bg-white text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white transition duration-200">
          <FaGoogle size={20} /> Login with Google
        </button>
        <button className="btn flex items-center justify-center gap-2 rounded-lg bg-white text-neutral-700 border border-neutral-700 hover:bg-neutral-700 hover:text-white transition duration-200">
          <FaGithub size={20} /> Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
