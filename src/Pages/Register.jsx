import { useContext, useEffect } from "react";
import { Authcontext } from "../Context/Authcontext";
import { Link } from "react-router";




const Register = () => {

    const {SignInWithGoogleFunc,setUser,createUserWithEmailAndPasswordFunc} =useContext(Authcontext)



// sign in with google handeler
const handleGoogleSignin = ( ) =>{
  console.log('btn is click')
  SignInWithGoogleFunc() 
  .then(result => {
    console.log(result.user)
    setUser(result.user)

    // #BackEnd
// newUser
const newUser ={
  name:result.user.displayName,
email:result.user.email,

}
console.log(newUser)
    // add user into Database
    fetch('http://localhost:3000/users',{
      method:'POST',
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(newUser)
    })
.then(res =>res.json())
.then(data => {
  console.log(data)
})

  })
  .catch(err => console.log(err.message))
    
    
}
// register handeler
const handleSubmit =(e) =>{
e.preventDefault()
const form=e.target;
// const name=form.name.value;
const email=form.email.value;
const password=form.password.value;
// const imgUrl=form.imgUrl.value;
createUserWithEmailAndPasswordFunc(email,password)
.then(result =>{
    console.log(result.user)
// Backend
// newUser
const newUser ={
  name:result.user.displayName,
email:result.user.email,

}
// add user into Database
    fetch('http://localhost:3000/users',{
      method:'POST',
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(newUser)
    })
    
.then(res =>res.json())
.then(data => {
  console.log(data)
})

})
.catch(error => console.log(error.message))

}

    return (
        <div>
            
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Register Now!
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Already have an account?{' '}
          <Link to="/login" className="text-purple-600 hover:text-purple-700 font-medium">
           LogIn Now
          </Link>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
            name="name"
              type="text"
              placeholder="Tom Holland"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input 
            name="email"
              type="email"
              placeholder="TomHolland@gmail.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Image-URL
            </label>
            <input 
            name="imgUrl"
              type="text"
              placeholder="Url"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input 
            name="password"
              type="password"
              placeholder="*************"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition duration-200 mb-6"
          >
            Register
          </button>
        </form>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500 font-medium">OR</span>
          </div>
        </div>

        <button
        onClick={handleGoogleSignin}
        className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 hover:bg-gray-50 transition duration-200">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M19.8 10.2273C19.8 9.51818 19.7364 8.83636 19.6182 8.18182H10.2V12.05H15.6109C15.3818 13.3 14.6727 14.3591 13.6091 15.0682V17.5773H16.8273C18.7091 15.8364 19.8 13.2727 19.8 10.2273Z" fill="#4285F4"/>
            <path d="M10.2 20C12.9 20 15.1727 19.1045 16.8273 17.5773L13.6091 15.0682C12.7091 15.6682 11.5636 16.0227 10.2 16.0227C7.59545 16.0227 5.38182 14.2636 4.58636 11.9H1.25455V14.4909C2.90909 17.7591 6.31364 20 10.2 20Z" fill="#34A853"/>
            <path d="M4.58636 11.9C4.39091 11.3 4.27727 10.6591 4.27727 10C4.27727 9.34091 4.39091 8.7 4.58636 8.1V5.50909H1.25455C0.572727 6.85909 0.2 8.38636 0.2 10C0.2 11.6136 0.572727 13.1409 1.25455 14.4909L4.58636 11.9Z" fill="#FBBC04"/>
            <path d="M10.2 3.97727C11.6864 3.97727 13.0136 4.48182 14.0636 5.47273L16.9227 2.61364C15.1682 0.986364 12.8955 0 10.2 0C6.31364 0 2.90909 2.24091 1.25455 5.50909L4.58636 8.1C5.38182 5.73636 7.59545 3.97727 10.2 3.97727Z" fill="#EA4335"/>
          </svg>
          <span className="text-gray-700 font-medium">Sign Up With Google</span>
        </button>
      </div>
    </div>
        </div>
    );
};

export default Register;