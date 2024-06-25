import React from "react";
import { Link } from "react-router-dom";


const CareerCard = ({ data }) => {
    return (
        <div className="w-full h-[220px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
            <Link to={`/get-career/${data?._id}`}>
            <div className="py-2 flex items-center justify-between">
                    <div className="flex">
                        <h2 className="left-2">
                            {data?.title}
                        </h2>
                        <h2 className="right-2 absolute">
                            {data?.category}
                        </h2>
                    </div>
            </div>
            <br />
            <div className="py-2 flex items-center justify-between">
                    <div className="flex">
                        <h2 className="left-2">
                            {data?.jobType}
                        </h2>
                        <h2 className="right-2 absolute">
                            {data?.jobPlace}
                        </h2>
                    </div>
            </div>
            <br />
            <div className="py-2 flex items-center justify-between">
                    <div className="flex">
                        <h2 className="left-2">
                            {data?.experience}{" "} Years
                        </h2>
                        <h2 className="right-2 absolute">
                            {data?.salary} {" "} Yearly
                        </h2>
                    </div>
            </div>
            <br />
            <div className="absolute right-2 bottom-2">
                <h1 className="text-teal-400">Read More...</h1>
            </div>
                </Link>
        </div>
    )
}

export default CareerCard;