import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col p-6">
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary btn-outline drawer-button w-full lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><NavLink to='/dashboard/userHome'>User Home</NavLink></li>
            <li><NavLink to='/dashboard/alltask'>All Task</NavLink></li>
            <li><NavLink to='/dashboard/addtask'>Add Task</NavLink></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;