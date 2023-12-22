import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import def from '../../assets/user.png'
import useAuth from '../../Hooks/useAuth';

const NavBar = () => {

  const { user, logOut } = useAuth()
  const links = <>
    <Link className='mr-4' to='/'><li>Home</li></Link>
    <Link to='/dashboard/userHome'><li>Task Manager</li></Link>
  </>
  return (
    <div className="navbar max-w-7xl mx-auto border-b bg-transparent ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {
              links
            }
          </ul>
        </div>
        <img className='invisible md:visible md:w-2/4' src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            links
          }
        </ul>
      </div>
      <div className="navbar-end">
                <div className="dropdown dropdown-end ">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user ? <img src={user.photoURL} alt="" /> :
                                    <img src={def} alt="" />
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 border-2 border-primary  z-10">
                        <div className="text-xl text-center">
                            {
                                user && <h1 className='border-b border-primary font-bold'>{user?.displayName}</h1>
                            }
                        </div>
                        <div className="">
                            
                            {
                                user ? <button className="btn btn-outline w-full text-primary" onClick={logOut}>SignOut</button>
                                    :
                                    <Link to="/login"><button className="btn btn-outline w-full text-primary">Login</button></Link>
                            }
                        </div>
                    </ul>
                </div>
            </div>
    </div>
  );
};



export default NavBar;