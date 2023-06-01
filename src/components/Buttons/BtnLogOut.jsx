/**
 *
 * @param {Function} props Return a Function to LogOut, this Function need to be in the Father
 * @returns Return a Component with the Function to Call
 */
const BtnLogOut = (props) => {
    return (
        <div className="flex justify-start w-full max-w-4xl">
            <button
                onClick={props.children}
                className="btn-animate flex items-center text-2xl lg:text-3xl text-gray-100"
            >
                <span className="material-symbols-outlined text-2xl lg:text-3xl">
                    logout
                </span>
                <span className="text-border-btn text-2xl">Logout</span>
            </button>
        </div>
    );
};

export default BtnLogOut ;
