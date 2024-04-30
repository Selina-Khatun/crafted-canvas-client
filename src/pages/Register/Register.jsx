import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { FaEye } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Helmet } from "react-helmet-async";
const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    // console.log(user);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const [verificationError, setVerificationError] = useState('');
    const [showPassword, setShowPassword] = useState()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || '/';
    const onSubmit = (data) => {

        const passwords = data.password;

        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const lengthRegex = /.{6,}/;

        if (!uppercaseRegex.test(passwords) || !lowercaseRegex.test(passwords) || !lengthRegex.test(passwords)) {
            setVerificationError('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long');
            return;
        }

        setVerificationError('');

        const { email, password, name, photoURL } = data;
        createUser(email, password)
            // console.log(data)
            .then(() => {

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You have successfully registered ",
                    showConfirmButton: false,
                    timer: 1500
                });
                updateUserProfile(name, photoURL)
                    .then(() => {

                        navigate(from)
                    })
                // console.log(user)

            })

    }

    return (
        <div>
            <Helmet>
                <title>craftedCanvas || Register</title>

            </Helmet>
            <div className="h-full bg-gray-50  dark:bg-gray-900">

                <div className="mx-auto">
                    <div className="flex justify-center  px-6 ">

                        <div className="w-full xl:w-3/4 py-5  lg:w-11/12 flex">

                            <div className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                                style={{ backgroundImage: `url('https://source.unsplash.com/random/1920x1080?nature')` }}></div>

                            <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                                <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">Create an Account!</h3>
                                <form onSubmit={handleSubmit(onSubmit)} className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                                    <div className="mb-4 md:flex md:justify-between">
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="firstName">
                                                Name
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="firstName"
                                                type="text"
                                                name="name"
                                                placeholder="First Name"
                                                {...register("name", { required: true })}
                                            />
                                        </div>
                                        {errors.name && <span className="font-semibold text-red-500">This field is required</span>}

                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            {...register("email", { required: true })}
                                        />
                                        {errors.email && <span className="font-semibold text-red-500">This field is required</span>}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="email">
                                            photoURL
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id=" photoURL"
                                            type="url"
                                            name=" photoURL"
                                            placeholder=" photoURL"
                                            {...register("photoURL")}
                                        />
                                    </div>

                                    <div className="mb-4 md:flex md:justify-between">
                                        <div className="mb-4 md:mr-2 md:mb-0 relative">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="password">
                                                Password
                                            </label>
                                            <input 
                                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline relative"
                                                id="password"
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder="******************"
                                                {...register("password", {
                                                    required: true,
                                                })}
                                            />
                                            <span className=' absolute bottom-5 right-2' onClick={() => setShowPassword(!showPassword)}>
                                                {showPassword ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}
                                            </span>
                                            {errors.password && <span className="font-semibold text-red-500">This field is required</span>}

                                            {verificationError && <p className="font-semibold text-red-500">{verificationError}</p>}
                                        </div>

                                    </div>
                                    <div className="mb-6 text-center">
                                        <button
                                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                            type="submit" 
                                        >
                                            Register Account
                                        </button>
                                    </div>
                                    <hr className="mb-6 border-t" />
                                    <div className="text-center">
                                        <a className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                                            href="#">
                                            Forgot Password?
                                        </a>
                                    </div>
                                    <div className="text-center">
                                        <Link to={'/login'} className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                                        >
                                            Already have an account? Login!
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;