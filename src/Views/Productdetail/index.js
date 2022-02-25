import Detail from "../../Components/Detail"
import { getAddDetails } from "../../Config/firebase"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const Productdetail = (props) => {

    const [paramDetailTemp, setParamDetailTemp] = useState([])

    const params = useParams()
    // setParamState(params)
    console.log(params.adid, "PARAMSSS State");

    useEffect(() => {
        getProductDetails()
    }, [])

    const getProductDetails = async () => {
        const paramDetail = await getAddDetails(params.adid)
        const temp = []
        temp.push(paramDetail)
        setParamDetailTemp(temp)

        // setParamDetailTemp(paramDetail, "PARAMDETAIL")
        // console.log(paramDetailTemp, "Pram");

    }
    console.log(paramDetailTemp, "Detail");

    return (
        <div>
            {paramDetailTemp.map((item) => {
                return <Detail title={item.title} img="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
                    price={item.price}
                    description={item.description} />
            })}
        </div>


    )
}

export default Productdetail