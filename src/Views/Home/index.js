import { useEffect, useState } from "react";
import Card from "../../Components/Card"
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import { GetAdd } from "../../Config/firebase";

const Home = (props) => {
    const [allData, setAllData] = useState([])
    const [index, setIndex] = useState()
    // let temp = [...allData]
    // temp.push(getSellData)
    // setAllData(temp)
    // console.log(allData, "state data");
    const db = getFirestore();
    const navigate = useNavigate()

    useEffect(() => {
        getSellData()
    }, [])

    const getSellData = async () => {
        const temp = await GetAdd()
        setAllData(temp)
    }
    console.log(allData, "State DATA");

    return (
        <div className="w-full">

            <Header />
            <div className="flex flex-col ">
                <h1 className="text-center text-2xl mt-5 ">All Products</h1>
                {
                    allData.map((items, index) => {
                        // console.log(items, "ALl itemsssss");
                        return (
                            <div className="flex justify-center" key={index}>
                                < Card title={items.title} onClick={() => navigate(`/productdetail/${items.id}`)} img="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
                                    price={items.price}
                                    description={items.description}
                                    category={items.category}
                                />
                            </div>
                        )
                    })

                }


            </div>

        </div>
    )
}

export default Home