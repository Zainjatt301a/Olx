import Detail from "../../Components/Detail"


const Productdetail = (props) => {
    console.log(props, "Propssssss");
    return (
        <>
            <div className="flex justify-between pr-5 items-center">
                <div>
                    <img
                        className=" h-12 cursor-pointer "
                        src="https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png"
                        alt="Workflow"
                        onClick={() => props.onClick("Home")}
                    />
                </div>
                <div className="bg-blue-600 text-white w-[5%] flex justify-center h-10 rounded">
                    <button
                        onClick={() => props.onClick("Sell")}
                    >
                        Sell it
                    </button>
                </div>
            </div>
            <Detail title="Headphone" img="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
                price="1500"
                description="This is dummy image
    This is dummy image
    This is dummy image
    This is dummy image
    This is dummy image
    This is dummy image" />
        </>
    )
}

export default Productdetail