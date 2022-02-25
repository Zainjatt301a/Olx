import Navigation from "./Components/Navigation";

function App() {
  // const [component, setComponent] = useState()

  // useEffect(() => {

  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const uid = user.uid;
  //       setComponent(<Route />)
  //     } else {
  //       setComponent(<Registrationroutes />)
  //     }
  //   });


  // }, [])
  return (
    <div>
      <Navigation />
      {/* 1.jo bhee fire base se data lana hai uska function bnega firebase config main
          2.async function bnana hai
          3.agar component main config se function call krwaya to us pe bhee async await lgega */}
    </div>
  );
}

export default App;
