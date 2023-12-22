const Guide = () => {
    return (
        <div className="max-w-3xl px-8 py-8">
            <h1 className="text-3xl mb-6 text-center">FAQ</h1>
            <div tabIndex={0} className="collapse bg-base-200 mb-5  border-primary border">
                <div className="collapse-title text-xl font-medium">
                    How to Use ? 
                </div>
                <div className="collapse-content">
                    <p>First You login and then Create Task</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse bg-base-200 mb-5  border-primary border">
                <div className="collapse-title text-xl font-medium">
                    Can Everyone check others Task ?
                </div>
                <div className="collapse-content">
                    <p>No, Only a logged in user can see their individual Task</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse bg-base-200 mb-5  border-primary border">
                <div className="collapse-title text-xl font-medium">
                    Can I Add Multiple task ?
                </div>
                <div className="collapse-content">
                    <p>Yes, A User can create multiple tasks</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse bg-base-200 mb-5  border-primary border">
                <div className="collapse-title text-xl font-medium">
                    Can I Update My task ?
                </div>
                <div className="collapse-content">
                    <p>Yes, A User can Update tasks</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse bg-base-200 mb-5  border-primary border">
                <div className="collapse-title text-xl font-medium">
                    What About Task Deadline ?
                </div>
                <div className="collapse-content">
                    <p>A User can set Deadline while creating Task</p>
                </div>
            </div>
        </div>
    );
};

export default Guide;