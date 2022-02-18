import { useEffect, useState } from "react";
import Card from "../../Components/Card"
import { collection, getDocs, getFirestore } from "firebase/firestore";
const Home = () => {
    const [allData, setAllData] = useState([])
    const [index, setIndex] = useState()
    // let temp = [...allData]
    // temp.push(getSellData)
    // setAllData(temp)
    // console.log(allData, "state data");
    const db = getFirestore();

    useEffect(() => {
        getSellData()
    }, [])

    const getSellData = async () => {
        const data = await getDocs(collection(db, "Products"));
        let temp = []
        data.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.data());

            temp.push(doc.data())

            // console.log(allData, "state data");

        });
        setAllData(temp)
    }
    console.log(allData, "State DATA");
    return (
        <div className="w-full">
            <div className="flex justify-between pr-5 items-center">
                <div>
                    <img
                        className=" h-12 "
                        src="https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png"
                        alt="Workflow"
                    />
                </div>
                <div className="bg-blue-600 text-white w-[5%] flex justify-center h-10 rounded">
                    <button>
                        Sell it
                    </button>
                </div>
            </div>

            <div className="flex flex-col">
                {
                    allData.map((items, index) => {
                        return (
                            <div key={index}>
                                < Card title={items.title} img="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
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