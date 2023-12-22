import bg from '../../assets/bg.png'

import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const bgStyle = {
        backgroundImage: `url(${bg})`,
    }

    const location = useLocation()
    const navigate = useNavigate()
    const {createUser,googleSignIn}=useAuth()

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const image = form.image.value
        const email = form.email.value
        const password = form.password.value
        const user = { email, password, name, image }
        console.log(user)

        if (password.length < 6) {
            e.target.reset()
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password Must be 6 Characters Long!',
            })
        }
        else if (!/[A-Z]/.test(password)) {
            e.target.reset()
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password Must Conatain 1 Uppercase Letter!',
            })
        }

        createUser(email,password)
        .then(result =>{
            console.log(result.user)
            updateProfile(result.user,{
                displayName:name,
                photoURL:image
            })
            e.target.reset()
            navigate(location?.state ? location.state : '/')
            Swal.fire({
                icon:'success',
                title: 'Success',
                text: 'Account Created Successfully',
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
            <div className="hero-content flex-col max-w-7xl mx-auto ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold border-b border-primary">Register Now!</h1>
                </div>
                <div className="w-full border-primary border">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered bg-transparent" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" name='image' placeholder="Image" className="input input-bordered bg-transparent" required />
                        </div>
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
                        <input className="btn btn-outline text-primary" type="submit" value="Register" />
                        </div>
                    </form>
                    <label className="label px-4">
                            Have an Account? <Link to="/login" className="label-text-alt link link-hover">Login Here</Link>
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

export default Register;