
import { useState } from 'react'





function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Detail(props) {

    // console.log(props, "Propss");


    return (
        <div className="bg-white">
            <div className="pt-6">
                {/* Product info */}
                <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{props.title}</h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:mt-0 lg:row-span-3">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl text-gray-900">{props.price}</p>
                        <button
                            type="submit"
                            className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Add to bag
                        </button>

                    </div>

                    <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        {/* Description and details */}
                        <div className='flex'>
                            <h3 className="">Category:</h3>

                            <div className="space-y-6 ml-5">
                                <p className="text-base text-gray-900">Laptops</p>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{props.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}