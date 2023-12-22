import useAuth from "../../../Hooks/useAuth";
import { motion } from "framer-motion";

const UserHome = () => {

    const { user } = useAuth()
    return (
        <motion.div
        animate={{rotate : [0,5,0,0]}}
        transition={{repeat: Infinity,duration: 1}}
        className="stat max-w-sm mx-auto border border-primary rounded-2xl">
            <div className="stat-figure text-secondary">
                <div className="avatar online">
                    <div className="w-16 rounded-full">
                        <img src={user.photoURL} />
                    </div>
                </div>
            </div>
            <div className="stat-value">{user.displayName}</div>
            <div className="stat-title">Tasks done</div>
        </motion.div>
    );
};

export default UserHome;