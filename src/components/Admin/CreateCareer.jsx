import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCareer } from "../../redux/actions/career";
import { toast } from "react-toastify";
import axios from "axios";

const CreateCareer = () => {
 
  
  const {success,error} = useSelector((state)=>state.career);

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

  useEffect(()=>{
    if(error){
      toast.error(error);
      console.log("ERROR: ",error)
    }
    if(success){
      toast.success("Career created successfully!");
    }
  },[dispatch,error,success])


  const handleSubmit = (e) => {
    e.preventDefault();

    const newForm = new FormData();

    newForm.append("title", title);
    newForm.append("description", description);
    newForm.append("experience", experience);
    newForm.append("salary", salary);
    newForm.append("jobType", jobType);
    newForm.append("jobPlace", jobPlace);
    newForm.append("skills", skills);
    newForm.append("category", category);
    dispatch(
      createCareer({
        title,
            description,
            experience,
            salary,
            jobType,
            jobPlace,
            skills,
            category
      })
    );
  };

  return (
    <div className="w-[90%] 800px:w-[50%] bg-white shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
      <h5 className="text-[30px] font-Poppins text-center">Create Career</h5>
      {/* create product form */}
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label className="pb-2">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            value={title}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setTitle(e.target.value)}
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
          />
          <br />
          <div>
            <input
              type="submit"
              value="Create"
              className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateCareer;
