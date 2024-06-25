import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    isLoading: true
}


export const applyCareerReducer = createReducer(initialState, {
    // create a request
    applyCareerRequest: (state)=>{
        state.isLoading = true;
    },
    applyCareerSuccess: (state,action)=>{
        state.isLoading = false;
        state.applyCareer = action.payload;
        state.success = true;
    },
    applyCareerFail: (state,action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
    },

    // get all apply careers
    getApplyCareersRequest: (state)=>{
        state.isLoading = true;
    },
    getApplyCareersSuccess: (state,action)=>{
        state.isLoading = false;
        state.applyCareers = action.payload;
    },
    getApplyCareersFailed: (state,action)=>{
        state.isLoading = false;
        state.error = action.payload;
    },

    // get apply career
    getApplyCareerRequest: (state) =>{
        state.isLoading = true;
    },
    getApplyCareerSuccess: (state,action)=>{
        state.isLoading = false;
        state.applyCareer = action.payload;
    },
    getApplyCareerFailed: (state,action)=>{
        state.isLoading = false;
        state.error = action.payload;
    },

    // delete apply career
    deleteApplyCareerRequest: (state) => {
        state.isLoading = true;
    },
    deleteApplyCareerSuccess: (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
    },
    deleteApplyCareerFailed: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    },

    clearErrors: (state) => {
        state.error = null;
    },
})

