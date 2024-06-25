import axios from "axios";
import { server } from "../../server";

export const createRequest=(
    name,
    jobTitle,
    categoryJob,
    email,
    cv,
    phoneNumber
) => async (dispatch)=>{
    try{
        dispatch({
            type: "applyCareerRequest"
        })

        const {data} = await axios.post(
            `${server}/applyCareer/apply-job`,
            name,
            jobTitle,
            email,
            phoneNumber,
            cv,
            categoryJob
        )

        dispatch({
            type: "applyCareerSuccess",
            payload: data.applyCareer
        })

    }catch(error){
        dispatch({
            type: "applyCareerFail",
            payload: error.response.data.message
        })
    }
}

// get all appliers career
export const getAllApplyCareers = ()=>async (dispatch) => {
    try{
        dispatch({
            type: "getApplyCareersRequest"
        })

        const {data} = await axios.get(
            `${server}/applyCareer/all-job-appliers`,
            {withCredentials: true}
        )

        dispatch({
            type: "getApplyCareersSuccess",
            payload: data.applyCareers
        })

    }catch(error){
        dispatch({
            type: "getApplyCareersFailed",
            payload: error.response.data.message
        })
    }
}

// delete requests
export const deleteApplyCareer = (id) => async (dispatch) => {
    try{

        dispatch({
            type: "deleteApplyCareerRequest"
        })

        const {data} = await axios.delete(
            `${server}/applyCareer/delete-apply-job/${id}`,{
                withCredentials: true
            }
        )

        dispatch({
            type: "deleteApplyCareerSuccess",
            payload: data.message
        })

    }catch(error){
        dispatch({
            type: "deleteApplyCareerFailed",
            payload: error.response.data.message
        })
    }
}


// get apply request 
export const getApplyCareer = (id) => async(dispatch)=>{
    try{

        dispatch({
            type: "getApplyCareerRequest"
        })

        const {data} = await axios.get(
            `${server}/applyCareer/job-applier/${id}`,{
                withCredentials: true
            }
        )

        dispatch({
            type: "getApplyCareerSuccess",
            payload: data.applyCareer
        })

    }catch(error){
        dispatch({
            type: "getApplyCareerFailed",
            payload: error.response.data.message
        })
    }
}