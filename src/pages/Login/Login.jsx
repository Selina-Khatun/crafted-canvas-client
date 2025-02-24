import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


const Login = () => {
    const { signInUser, googleLogin, githubLogin } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || '/';

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    // const [error1,setError1]=useState('');



    const onSubmit = (data) => {
        const { email, password } = data;
        signInUser(email, password)

            .then(result => {
                // console.log(result.user);
                if (result.user) {
                    navigate(from);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "You have successfully logged In with email",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })
            .catch(error => {
                console.log('login error', error);
                // setError1(error)
                Swal.fire({

                    icon: "error",
                    title: "Oops...",
                    text: "Invalid email or password. Please try again!",


                });
            })

    };

    const handleGithubLogin = () => {
        githubLogin()
            .then((result) => {
                // console.log(result.user)
                if (result.user) {
                    navigate(from);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "You have successfully logged In with Github",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch((error) => {
                console.error(error)
                Swal.fire({

                    icon: "error",
                    title: "Oops...",
                    text: "Invalid email or password. Please try again!",
                });
            })
           
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                console.log(result.user)

                if (result.user) {
                    navigate(from);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "You have successfully logged In with Google",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch((error) => {
                console.error(error)
            })

    };
    return (
        <div >
            <Helmet>
                <title>craftedCanvas || Login</title>

            </Helmet>
            <section className="bg-gray-100  min-h-screen flex box-border justify-center items-center">
                <div className="bg-[#dfa674] my-[7%] rounded-2xl flex max-w-3xl p-5 items-center">
                    <div className="md:w-1/2 px-8">
                        <h2 className="font-bold text-3xl text-[#002D74]">Login</h2>
                        <p className="text-sm mt-4 text-[#002D74]">If you already a member, easily log in now.</p>

                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                            <input className="p-2 mt-8 rounded-xl border" type="email" name="email" placeholder="Email"
                                {...register("email", { required: true })} />
                            {errors.email && <span className="font-semibold text-red-500">This field is required</span>}
                            <div className="relative">
                                {errors.password && <span className="font-semibold text-red-500">This field is required</span>}


                                <input className="p-2 rounded-xl border w-full" type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder="••••••••"
                                    {...register("password", {
                                        required: true

                                    })} />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute top-3.5 right-1">{showPassword ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}</span>



                            </div>
                            <button className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium" type="submit">Login</button>
                        </form>
                        <div className="mt-6  items-center text-gray-100">
                            <hr className="border-gray-300" />
                            <p className="text-center text-sm">OR</p>
                            <hr className="border-gray-300" />
                        </div>
                        <button onClick={handleGoogleLogin} className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#60a8bc4f] font-medium">
                            <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>

                            Login with Google
                        </button>
                        <button onClick={handleGithubLogin} className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#60a8bc4f] font-medium">
                            <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                            Login with Github
                        </button>
                        <div className="mt-10 text-sm border-b border-gray-500 py-5 playfair tooltip">Forget password?</div>

                        <div className="mt-4 text-sm flex justify-between items-center container-mr">
                            <p className="mr-3 md:mr-0 ">If you don't have an account..</p>
                            <Link to={'/register'}>
                                <button className="hover:border register text-white bg-[#002D74] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300">Register</button>
                            </Link>
                        </div>
                    </div>
                    <div className="md:block hidden w-1/2">
                        <img className="rounded-2xl h-[65vh] hover:scale-105 transition ease-in duration-300" src="https://source.unsplash.com/random/1920x1080?nature" alt="login form image" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;