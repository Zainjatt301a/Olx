

export default function Card(props) {
    return (



        <div className="w-[50%] ml-10 mt-10 cursor-pointer " onClick={props.onClick}>

            <div className="group relative">
                <div className="w-full ">
                    <img
                        src={props.img}
                        alt="Product Image"
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">

                            <span aria-hidden="true" className="absolute inset-0" />
                            {props.title}


                        </h3>
                        <h3 className="text-sm text-gray-700">

                            <span aria-hidden="true" className="absolute inset-0" />
                            Category: {props.category}

                        </h3>

                    </div>
                    <p className="text-sm font-medium text-gray-900">{props.price}</p>

                </div>
                <p className="text-sm font-medium ">
                    {props.description}</p>
            </div>

        </div>

    )
}