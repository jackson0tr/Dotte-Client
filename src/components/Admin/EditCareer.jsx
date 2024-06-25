import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editCareer } from "../../redux/actions/career";
import { toast } from "react-toastify";
import { server } from "../../server";
import axios from "axios";

const EditCareer = () => {

  const { error } = useSelector((state) => state.career);

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [experience, setExperience] = useState();
  const [salary, setSalary] = useState();
  const [jobType, setJobType] = useState("");
  const [jobPlace, setJobPlace] = useState("");
  const [skills, setSkills] = useState("");
  const [category, setCategory] = useState("");

  const {id} = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${server}/career/edit-career/${id}`, {
        title,
        description,
        experience,
        salary,
        jobType,
        jobPlace,
        skills,
        category
      })
      if (response.data.success) {
        dispatch()
        // dispatch(editCareer(response.data.career));
        toast.success("Career edited successfully!");

      } else {
        toast.error(error);
        console.log("ERROR: ", error)
      }
    } catch (error) {
      toast.error(error);
      console.error('Error updating career:', error);
    }
  };

  console.log("ID", id);
  console.log("ID", title);



  return (
    <>
      <div className="w-[90%] 800px:w-[50%] bg-white  shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
        <h5 className="text-[30px] font-Poppins text-center">Preview Career</h5>
        {/* {
        careerData ? ( */}
        <form onSubmit={handleSubmit}>
          <br />
          <div>
            <label className="pb-2">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setTitle(e.target.value)}
              // onChange={handleChange}
              placeholder="Enter your career title..."
            />
          </div>
          <br />
          <div>
            <label className="pb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              cols="30"
              required
              rows="8"
              type="text"
              name="description"
              value={description}
              className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setDescription(e.target.value)}
              // onChange={handleChange}
              placeholder="Enter your career description..."
            ></textarea>
          </div>
          <br />
          <div>
            <label className="pb-2">
              Category <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="category"
              value={category}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setCategory(e.target.value)}
              // onChange={handleChange}
              placeholder="Enter your career category..."
            />
          </div>
          <br />
          <div>
            <label className="pb-2">Experience</label>
            <input
              type="number"
              name="experience"
              value={experience}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setExperience(e.target.value)}
              // onChange={handleChange}
              placeholder="Enter your career experience..."
            />
          </div>
          <br />
          <div>
            <label className="pb-2">Salary</label>
            <input
              type="number"
              name="salary"
              value={salary}
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={(e) => setSalary(e.target.value)}
              // onChange={handleChange}
              placeholder="Enter your career salary..."
            />
          </div>
          <br />
          <div>
            <label className="pb-2">
              Job Type <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full mt-2 border h-[35px] rounded-[5px]"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            // onChange={handleChange}
            >
              <option value="Choose a job type">Choose a Job Type</option>
              <option value="Full Time">
                Full Time
              </option>
              <option value="Part Time">
                Part Time
              </option>
              <option value="Contract">
                Contract
              </option>
            </select>
          </div>
          <br />
          <div>
            <label className="pb-2">
              Job Place <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full mt-2 border h-[35px] rounded-[5px]"
              value={jobPlace}
              onChange={(e) => setJobPlace(e.target.value)}
            // onChange={handleChange}
            >
              <option value="Choose a job place">Choose a Job Place</option>
              <option value="On Site">
                On Site
              </option>
              <option value="Remote">
                Remote
              </option>
              <option value="Hybrid">
                Hybrid
              </option>
            </select>
          </div>
          <br />
          <div>
            <label className="pb-2">
              Skills <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="skills"
              className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            // onChange={handleChange}
            />
            <br />
            <div>
              <input
                type="submit"
                value="Update"
                className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </form>
        {/* ) :  (null)
      } */}

      </div>
    </>
  );
};

export default EditCareer;
