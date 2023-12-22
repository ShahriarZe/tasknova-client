import useAuth from "../../../Hooks/useAuth";


const UserHome = () => {

    const { user } = useAuth()
    return (
        <div className="stat max-w-sm mx-auto border border-primary">
            <div className="stat-figure text-secondary">
                <div className="avatar online">
                    <div className="w-16 rounded-full">
                        <img src={user.photoURL} />
                    </div>
                </div>
            </div>
            <div className="stat-value">{user.displayName}</div>
            <div className="stat-title">Tasks done</div>
        </div>
    );
};

export default UserHome;