import { createReducer } from "@reduxjs/toolkit";

const initialState={
    isLoading: true
}

export const careerReducer= createReducer(initialState, {
    careerCreateRequest: (state) => {
        state.isLoading = true
    },
    careerCreateSuccess: (state,action) => {
        state.isLoading = false;
        state.career = action.payload;
        state.success = true;
    },
    careerCreateFail: (state,action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
    },

    // get career
    getCareerRequest: (state) =>{
        state.isLoading = true;
    },
    getCareerSuccess: (state,action)=>{
        state.isLoading = false;
        state.career = action.payload;
    },
    getCareerFailed: (state,action)=>{
        state.isLoading = false;
        state.error = action.payload;
    },

    // get all careers
    getAllCareersRequest: (state)=>{
        state.isLoading = true
    },
    getAllCareersSuccess: (state,action)=>{
        state.isLoading = false;
        state.careers = action.payload;
    },
    getAllCareersFailed: (state,action)=>{
        state.isLoading = false;
        state.error = action.payload;
    },

    // delete career
    deleteCareerRequest: (state) => {
        state.isLoading = true;
    },
    deleteCareerSuccess: (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
    },
    deleteCareerFailed: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    },

    // edit career
  editCareerRequest: (state) => {
    state.isLoading = true;
  },
  editCareerSuccess: (state, action) => {
    state.isLoading = false;
    state.career = action.payload;
  },
  editCareerFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  
    clearErrors: (state) => {
        state.error = null;
    },

})