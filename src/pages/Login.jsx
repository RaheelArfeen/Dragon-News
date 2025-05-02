import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import FormInput from "../components/FormInput"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false)

      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log({ email, password });
      signIn(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          navigate(`${location.state ? location.state : "/"}`);
        })
        .catch(() => {
        });
    }, 1000);
  };
  return (
    <div className="w-full mt-12 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-800 tracking-tight">
            Login your account
          </h1>
          <div className="mt-4 border-t border-gray-200 pt-2"></div>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-6">
            <FormInput
              id="email"
              type="email"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeHolder="Enter your Email"
              required
            />

            <FormInput
              id="password"
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeHolder="Enter your Password"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
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
                'Login'
              )}
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't Have An Account?{' '}
            <Link to="/auth/register" className="font-medium text-rose-500 hover:text-rose-600 transition-colors">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
