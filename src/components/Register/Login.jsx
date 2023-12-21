import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="min-h-screen ">
            <div className="hero-content flex-col max-w-7xl mx-auto mt-10">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login Now!</h1>
                </div>
                <div className="w-full shadow-2xl bg-base-100 ">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <label className="label px-4">
                            New Here? <Link to="/register" className="label-text-alt link link-hover">Register Here</Link>
                        </label>
                        <div className="divider">continue with</div>
                        <div className="flex justify-center">
                            <div className="mb-5 flex gap-4">
                                <button className=" btn btn-outline ">
                                    <FaGoogle></FaGoogle>
                                    Google
                                </button>
                                <button className=" btn btn-outline ">
                                    <FaGithub></FaGithub>
                                    Github
                                </button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Login;