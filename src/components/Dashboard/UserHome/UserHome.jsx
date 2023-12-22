import useAuth from "../../../Hooks/useAuth";


const UserHome = () => {

    const { user } = useAuth()
    return (
        <div>
            <h2>{user?.email}</h2>
            <h2>{user?.displayName}</h2>
            <div className="avatar">
                <div className="w-24 rounded-full">
                    <img src={user?.photoURL} />
                </div>
            </div>
        </div>
    );
};

export default UserHome;