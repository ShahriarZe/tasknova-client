import bg from '../../assets/bg.png'
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const Login = () => {
    const bgStyle = {
        backgroundImage: `url(${bg})`,
    }

    const location = useLocation()
    const navigate = useNavigate()
    const {signInUser,googleSignIn}=useAuth()
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        const user = { email, password}
        console.log(user)
        signInUser(email,password)
        .then(result =>{
            console.log(result.user)
            e.target.reset()
            navigate(location?.state ? location.state : '/')
            Swal.fire({
                icon:'success',
                title: 'Success',
                text: 'Login Successfull',
            })
        })
        .catch(err=>{
            console.log(err)
            e.target.reset()
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err.message,
            })

        })
    }


    const handleGoogleButton = ()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user)
            Swal.fire({
                icon:'success',
                title: 'Success',
                text: 'Account Created Successfully',
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="min-h-screen bg-cover" style={bgStyle}>
            <div className="hero-content flex-col max-w-7xl mx-auto py-8">
                <div className="text-center">
                    <h1 className="text-5xl font-bold border-b border-primary">Login Now!</h1>
                </div>
                <div className="w-full border-primary border">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered bg-transparent" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered bg-transparent" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                        <input className="btn btn-outline text-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <label className="label px-4">
                            New Here? <Link to="/register" className="label-text-alt link link-hover">Register Here</Link>
                        </label>
                        <div className="divider">continue with</div>
                        <div className="flex justify-center">
                            <div className="mb-5 flex gap-4">
                                <button onClick={handleGoogleButton} className=" btn btn-outline ">
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