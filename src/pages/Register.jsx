import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { User, Mail, Lock, Image } from 'lucide-react';
import FormInput from "../components/FormInput"

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    photoUrl: '',
    email: '',
    password: '',
    acceptTerms: false
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      const form = e.target;

      setIsLoading(false)

      const name = form.name.value;
      const photo = form.photoUrl.value;
      const email = form.email.value;
      const password = form.password.value;
      
      createUser(email, password)
        .then((result) => {
          const user = result.user;
          updateUser({ displayName: name, photoURL: photo })
            .then(() => {
              setUser({ ...user, displayName: name, photoURL: photo });
              navigate("/");
            })
            .catch((error) => {
              console.log(error);
              setUser(user);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage, errorCode);
        });
    }, 1000);

  };
  return (
    <div className="w-full flex items-center justify-center px-4 pt-6 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-800 tracking-tight">
            Register your account
          </h1>
          <div className="mt-4 border-t border-gray-200 pt-2"></div>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          <div className="space-y-6">
            <FormInput
              id="name"
              name="name"
              type="text"
              label="Your Name"
              value={formData.name}
              onChange={handleChange}
              icon={<User className="h-5 w-5 text-gray-400" />}
              placeholder="Enter your name"
              required
            />

            <FormInput
              id="photoUrl"
              name="photoUrl"
              type="url"
              label="Photo URL"
              value={formData.photoUrl}
              onChange={handleChange}
              icon={<Image className="h-5 w-5 text-gray-400" />}
              placeholder="Enter photo URL"
            />

            <FormInput
              id="email"
              name="email"
              type="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
              icon={<Mail className="h-5 w-5 text-gray-400" />}
              placeholder="Enter your email address"
              required
            />

            <FormInput
              id="password"
              name="password"
              type="password"
              label="Password"
              value={formData.password}
              onChange={handleChange}
              icon={<Lock className="h-5 w-5 text-gray-400" />}
              placeholder="Enter your password"
              required
            />

            <div className="flex items-center">
              <input
                id="acceptTerms"
                name="acceptTerms"
                type="checkbox"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                required
              />
              <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-700">
                Accept <a href="#terms" className="text-rose-500 hover:text-rose-600">Term & Conditions</a>
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading || !formData.acceptTerms}
              className="group cursor-pointer relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                'Register'
              )}
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already Have An Account?{' '}
            <Link to="/auth/login" className="font-medium text-rose-500 hover:text-rose-600 transition-colors">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
