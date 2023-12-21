

import { useForm } from "react-hook-form";
import { Link} from "react-router-dom";





const SignUp = () => {
   
    const { register, formState: { errors } } = useForm();
   


   

    return (
        <>
            
            <div className="flex justify-center items-center min-h-screen">
                <div className="className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'">
                    <div className='mb-8 text-center'>
                        <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
                        <p className='text-sm text-gray-400'>Welcome to Task Management App</p>
                    </div>
                        
                            <form className="space-y-6 ng-untouched ng-pristine ng-valid">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900' />
                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900' />
                                    {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"  {...register("email", { required: true })} name="email" className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900' />
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password"  {...register("password")} placeholder="password" className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900' />
                                   
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input  className='bg-red-500 w-full rounded-md py-3 text-white' type="submit" value="Sign Up" />
                                </div>
                            </form>
                            <p className="text-center font-bold text-lg"><small>Already have an account  <Link to="/signIn" className="text-blue-600" >SignIn</Link></small></p>
                           
                        </div>
                    </div>
           
        </>
    );
};

export default SignUp;