import { useNavigate } from "react-router-dom"
import { signOut, getAuth } from "firebase/auth";

const Header = () => {

    const navigate = useNavigate()
    const auth = getAuth();
    const Logout = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
            alert("Sign-out successful.")
            navigate("/login")

        }).catch((error) => {
            // An error happened.
        });
    }


    return (
        <div className="flex justify-between pr-5 items-center">
            <div>
                <img
                    className=" h-12 cursor-pointer "
                    src="https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png"
                    alt="Workflow"
                    onClick={() => navigate("/home")}
                />
            </div>
            <div className="bg-blue-600 text-white w-[5%] flex justify-center h-10 rounded">
                <button
                    onClick={() => navigate("/sell")}
                >
                    Sell it
                </button>
            </div>
            <div className="bg-blue-600 text-white w-[7%] flex justify-center h-10 rounded">
                <button
                    onClick={Logout}
                >
                    Sign Out
                </button>
            </div>
        </div>
    )
}

export default Header