import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../../server";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const GetRequestDetails = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const {success,error} = useSelector((state)=> state.applyCareer);

    useEffect(() => {
        axios.get(`${server}/applyCareer/job-applier/${id}`, { withCredentials: true }).then((res) => {
            setData(res.data.applyCareer);
        })

        if(success){
            toast.success("Successfully response")
        }

        if(error){
            toast.error("Failed response")
        }

    }, [success,error,setData]);

   

    return (
        <>
            <div className="w-[90%] 800px:w-[50%] bg-white !py-[20px] shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
                <h5 className="text-[30px] font-Poppins text-center">About Request</h5>
                <form >
                {
                    data ? (
                        <>
                            <br />
                            <div>
                                <label className="pb-2">
                                    Job Title <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="jobTitle"
                                    id="jobTitle"
                                    // value={jobTitle}
                                    value={data?.jobTitle}
                                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            <br />
                            <div>
                                <label className="pb-2">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    // value={name}
                                    value={data?.name}
                                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            <br />
                            <div>
                                <label className="pb-2">
                                    Job Category <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="categoryJob"
                                    // value={categoryJob}
                                    value={data?.categoryJob}
                                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            <br />
                            <div>
                                <label className="pb-2">Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    // value={email}
                                    value={data?.email}
                                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            <br />
                            <div>
                                <label className="pb-2">Phone Number</label>
                                <input
                                    type="number"
                                    name="phoneNumber"
                                    // value={phoneNumber}
                                    value={data?.phoneNumber}
                                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            <br />
                            <div>
                            <label className="pb-2">CV / Resume</label>
                                <input
                                    type="file"
                                    // value={cv}
                                    value={data?.cv}
                                    accept=".pdf,.doc,.docx,.txt,image/*"
                                    id='cv'
                                    className='hidden'/>
                            </div>
                            </>
                    ) : (
                        null
                        )
                    }
                    </form>


            </div>
        </>
    );
};

export default GetRequestDetails;
