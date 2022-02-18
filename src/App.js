import Card from "./Components/Card";
import Route from "./Components/Routes";
import Home from "./Views/Home";
import Productdetail from "./Views/Productdetail";
import Sell from "./Views/Sell";
import Signin from "./Views/Signin";
import Signup from "./Views/Signup";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { useState } from "react";
import Registrationroutes from "./Components/Registrationroutes";

function App() {
  const [component, setComponent] = useState()

  useEffect(() => {

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setComponent(<Route />)
      } else {
        setComponent(<Registrationroutes />)
      }
    });


  }, [])
  return (
    <div className="">
      {/* <Signin /> */}
      {/* <Signup /> */}
      {/* <Card /> */}
      {/* <Route /> */}
      {/* <Sell /> */}
      {/* <Productdetail /> */}
      {component}
    </div>
  );
}

export default App;
