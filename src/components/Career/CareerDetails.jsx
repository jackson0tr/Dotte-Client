import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../../server";
import styles from "../../styles/styles";
import axios from "axios";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { createRequest } from "../../redux/actions/applyCareer";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const CareerDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const { success, error } = useSelector((state) => state.applyCareer);

  useEffect(() => {
    axios.get(`${server}/career/get-career/${id}`, { withCredentials: true }).then((res) => {
      setData(res.data.career);
    })
  }, []);

  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [categoryJob, setCategoryJob] = useState("");
  const [cv, setCv] = useState(null);
  const [openForm, setOpenForm] = useState(false);
  const [dragging, setDragging] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newForm = new FormData();

    newForm.append("name", name);
    newForm.append("jobTitle", jobTitle);
    newForm.append("email", email);
    newForm.append("phoneNumber", phoneNumber);
    newForm.append("cv", cv);
    newForm.append("categoryJob", categoryJob);
    dispatch(
      createRequest({
        name,
        jobTitle,
        email,
        phoneNumber,
        cv,
        categoryJob
      })
    );
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      console.log("ERROR: ", error)
    }
    if (success) {
      toast.success("Apply Job created successfully!");
    }
  }, [dispatch, error, success])

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (reader.readyState === 2) {
          setCv({ ...cv, cv: reader.result });
        }
      }

      reader.readAsDataURL(file);
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  }

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  }

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setCv({ ...cv, cv: reader.result });
      }

      reader.readAsDataURL(file);
    }
  }

  return (
    <>
      <Header />
      <div className={`${styles.section} my-8`}>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Job Details</h2>
        <br />
        {
          data ? (
            <div className="mx-auto space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <span className="text-lg font-medium text-gray-900">
                  Job Title: {" "} {data?.title}
                </span>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <span className="text-lg font-medium text-gray-900">
                  Experience: {" "} {data?.experience} {" "} Years
                </span>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <span className="text-lg font-medium text-gray-900">
                  Salary: {" "} {data?.salary} {" "} Yearly
                </span>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <span className="text-lg font-medium text-gray-900">
                  Career: {" "} {data?.category}
                </span>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <span className="text-lg font-medium text-gray-900">
                  Job Type: {" "} {data?.jobType}
                </span>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <span className="text-lg font-medium text-gray-900">
                  Job Place: {" "} {data?.jobPlace}
                </span>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <span className="text-lg font-medium text-gray-900">
                  Description: {" "} {data?.description}
                </span>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <span className="text-lg font-medium text-gray-900">
                  Skills: {" "} {data?.skills}
                </span>
              </div>
              <br />
              <br />
              <span onClick={() => setOpenForm(!openForm)} className={`${styles.button} right-0 bg-green-600 text-lg text-white`}>
                Apply
              </span>

            </div>
          ) : (
            null
          )
        }
        <div className="justify-center pt-[20px] items-center flex">
          {
            openForm && (
              <div className="w-[90%] top-[40px] z-[999] 800px:w-[50%] bg-white justify-center shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
                <form onSubmit={handleSubmit}>
                  <label value={name}>Full Name</label>
                  <input onChange={(e) => setName(e.target.value)} type="text" required placeholder="Enter your Full Name"
                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                  <br />
                  <label value={email}>Email</label>
                  <input onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="Enter your Email"
                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                  <br />
                  <label value={jobTitle}>Job Title</label>
                  <input onChange={(e) => setJobTitle(e.target.value)} type="text" required placeholder="Enter your Job Title"
                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                  <br />
                  <label value={phoneNumber}>Phone Number</label>
                  <input onChange={(e) => setPhoneNumber(e.target.value)} type="number" required placeholder="Enter your Phone Number"
                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                  <br />
                  <label value={categoryJob}>Category</label>
                  <input onChange={(e) => setCategoryJob(e.target.value)} type="text" required placeholder="Enter your Category"
                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                  <br />
                  <div className="w-full">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.txt,image/*"
                      id='file'
                      className='hidden'
                      onChange={handleFileChange} />
                    <label
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                      onDragLeave={handleDragLeave}
                      className={`w-full min-h-[10vh] dark:border-[#fff] border-[#00000026] p-3 flex border items-center justify-center ${dragging ? 'bg-[#00b4ff]' : 'bg-transparent'
                        } `}
                      htmlFor="file">
                      {
                        cv ? (
                          <img
                            src={cv}
                            alt="cv"
                            className='max-h-full w-full object-cover' />
                        ) : (
                          <span className='text-[#333] cursor-pointer dark:text-[#fff]'>
                            Pull or Put your CV - Resume
                          </span>
                        )
                      }
                    </label>
                    <br />
                    <div>
                      <input
                        type="submit"
                        value="Apply"
                        className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <br />
                </form>
              </div>
            )
          }
        </div>

      </div>
      <Footer />
    </>

  )

};







export default CareerDetails;
