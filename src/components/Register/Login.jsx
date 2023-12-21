import bg from '../../assets/bg.png'
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    const bgStyle = {
        backgroundImage: `url(${bg})`,
    }
    return (
        <div className="min-h-screen bg-cover" style={bgStyle}>
            <div className="hero-content flex-col max-w-7xl mx-auto py-8">
                <div className="text-center">
                    <h1 className="text-5xl font-bold border-b border-primary">Login Now!</h1>
                </div>
                <div className="w-full border-primary border">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered bg-transparent" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered bg-transparent" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary btn-outline">Login</button>
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