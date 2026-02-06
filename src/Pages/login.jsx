import React, { useContext } from 'react';
import { Link } from 'react-router';
import { Authcontext } from '../Context/Authcontext';

const Login = () => {
  const {
    signInWithEmailAndPasswordFunc,
    SignInWithGoogleFunc,
  } = useContext(Authcontext);

  // email & password login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailAndPasswordFunc(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error.message));
  };

  // google login
  const handleGoogleLogin = () => {
    SignInWithGoogleFunc()
      .then(result => {
        console.log(result.user);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Log In Now!
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Don&apos;t have an account?{' '}
          <Link
            to="/register"
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            Register Now
          </Link>
        </p>

        <form onSubmit={handleLogin}>
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="********"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition mb-6"
          >
            Log In
          </button>
        </form>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500 font-medium">
              OR
            </span>
          </div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 hover:bg-gray-50 transition"
        >
          <span className="text-gray-700 font-medium">
            Log In With Google
          </span>
        </button>
      </div>
    </div>
  );
};

export default Login;
