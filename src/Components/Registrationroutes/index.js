import { useState } from "react"
import Signup from "../../Views/Signup"
import Signin from "../../Views/Signin"

function Registrationroutes() {
    const [page, setPage] = useState("Signup")

    const changePage = (page) => {

        setPage(page)
    }
    // console.log(props,"Propssss");
    return (
        <div>
            {page === "Signup" && <Signup onClick={changePage} />}
            {page === "Signin" && <Signin onClick={changePage} />}

        </div>
    )
}

export default Registrationroutes