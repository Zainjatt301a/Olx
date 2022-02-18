import { useState } from "react"
import Home from "../../Views/Home"
import Productdetail from "../../Views/Productdetail"
import Sell from "../../Views/Sell"

function Route(props) {
    const [page, setPage] = useState("Home")

    const changePage = (page) => {

        setPage(page)
    }
    console.log(props, "Propssss");
    return (
        <div>
            {page === "Home" && <Home onClick={changePage} />}
            {page === "Sell" && <Sell onClick={changePage} />}
            {page === "Productdetail" && <Productdetail onClick={changePage} />}

        </div>
    )
}

export default Route