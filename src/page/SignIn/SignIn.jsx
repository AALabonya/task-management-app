import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
const SignIn = () => {
  const { signIn, signInWithGoogle } = useAuth()

    const [showLogInError, setShowLogInError] = useState("")

    const location = useLocation()
    const navigate = useNavigate()

    const handleLoginForm = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value

        signIn(email, password)
            .then((result) => {

                if(result.user){
                    return (
                        toast("Good job!", "Login Successful!", "success"
                        ) && navigate(location?.state ? location.state : "/")
                    )
                }
            })
            .catch(() => {
                setShowLogInError("Invalid Email or Password")
            })

        event.target.reset()
    }
    const handleGoogle = e => {
        e.preventDefault()
        signInWithGoogle()
            .then(() => {
              toast("Good job!", "Google login Successful!!", "success");
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
             <div className="flex justify-center items-center min-h-screen">
        <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
          <div className='mb-8 text-center'>
            <h1 className='my-3 text-4xl font-bold'>Log In</h1>
            <p className='text-sm text-gray-400'>
              Sign in to access your account
            </p>
          </div>
          <form onSubmit={handleLoginForm} className='space-y-6 ng-untouched ng-pristine ng-valid'>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900' />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div>
            <button
              type='submit'
              className='bg-red-500 w-full rounded-md py-3 text-white' 
            > Submit
            </button>
          </div>
          <Link> <p className="text-center mt-5 border p-1 rounded-md "><button onClick={handleGoogle} className="btn border-blue-500 font-bold text-pink-500"><FaGoogle className="text-blue-500 ml-16"></FaGoogle>Login with Google</button></p></Link>
          </form>
          {
            showLogInError && <p className="text-white font-bold">{showLogInError}</p>
           }
          <p className="text-center font-bold text-lg mt-2"><small>New Here? Create an account <Link to="/signUp" className="text-blue-600">SignUp </Link></small></p>
         
        </div>
      </div>
        </div>
    );
};

export default SignIn;