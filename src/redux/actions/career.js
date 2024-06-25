import axios from "axios";
import { server } from "../../server";

// create career
export const createCareer = (
    title,
    description,
    experience,
    salary,
    jobType,
    jobPlace,
    skills,
    category
) => async (dispatch) => {
    try {
        dispatch({
            type: "careerCreateRequest"
        });

        const { data } = await axios.post(
            `${server}/career/create-career`,
            title,
            description,
            experience,
            salary,
            jobType,
            jobPlace,
            skills,
            category
        );

        dispatch({
            type: "careerCreateSuccess",
            payload: data.career
        })
    } catch (error) {
        dispatch({
            type: "careerCreateFail",
            payload: error.response.data.message
        })
    }
}

// get all careers
export const getAllCareers = () => async (dispatch)=>{
    try{
        dispatch({
            type: "getAllCareersRequest"
        })

        const {data} = await axios.get(
            `${server}/career/get-all-careers`
        )

        dispatch({
            type: "getAllCareersSuccess",
            payload: data.careers
        })
    }catch(error){
        dispatch({
            type: "getAllCareersFailed",
            payload: error.response.data.message
        })
    }
}

// delete career
export const deleteCareer = (id) => async (dispatch) =>{
    try{
        dispatch({
            type: "deleteCareerRequest"
        })

        const {data} = await axios.delete(
            `${server}/career/delete-career/${id}`,
            {
                withCredentials: true
            }
        );

        dispatch({
            type: "deleteCareerSuccess",
            payload: data.message
        })

    }catch(error){
        dispatch({
            type: "deleteCareerFailed",
            payload: error.response.data.message
        })
    }
}

// get career
export const getCareer = (id) => async (dispatch) => {
    try{
        dispatch({
            type: "getCareerRequest"
        })

        const {data} = await axios.get(
            `${server}/career/get-career/${id}`,{
            withCredentials: true
        })

        dispatch({
            type: "getCareerSuccess",
            payload: data.career
        })
    }catch(error){
        dispatch({
            type: "getCareerFailed",
            payload: error.response.data.message
        })
    }
}

// edit career
export const editCareer = (id,title,
    description,
    experience,
    salary,
    jobType,
    jobPlace,
    skills,
    category) => async(dispatch)=>{
    try{
        dispatch({
            type: "editCareerRequest"
        })

        const {data} = await axios.put(
            `${server}/career/edit-career/${id}`,
            title,
            description,
            experience,
            salary,
            jobType,
            jobPlace,
            skills,
            category
        )

        dispatch({
            type: "editCareerSuccess",
            payload: data.career
        })

    }catch(error){
        dispatch({
            type: "editCareerFailed",
            payload: error.response.data.message 
        })
    }
}