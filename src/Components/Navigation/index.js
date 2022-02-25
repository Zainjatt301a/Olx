import Home from "../../Views/Home";
import Signup from "../../Views/Signup"
import Signin from "../../Views/Signin"
import Sell from '../../Views/Sell/index'
import Productdetail from "../../Views/Productdetail";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
function Navigation() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Signup />} />
                <Route path="/login" element={<Signin />} />
                <Route path="/home" element={<Home />} />
                <Route path="/sell" element={<Sell />} />
                <Route path="/productdetail/:adid" element={<Productdetail />} />
            </Routes>
        </BrowserRouter>

    )
}


export default Navigation


// import your route components too

