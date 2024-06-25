import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const mailReducer = createReducer(initialState, {

  // create a request to send an email
  createMailRequest: (state) => {
    state.isLoading = true;
  },
  createMailSuccess: (state, action) => {
    state.isLoading = false;
    state.mail = action.payload;
  },
  createMailFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;

  },

  // subscribe newsletter
  subscribeRequest: (state) => {
    state.isLoading = true;
  },
  subscribeSuccess: (state, action) => {
    state.isLoading = false;
    state.mail = action.payload;
  },
  subscribeFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  // get all mails
  getMailsRequest: (state) => {
    state.isLoading = true;
  },
  getMailsSuccess: (state, action) => {
    state.isLoading = false;
    state.mails = action.payload;
  },
  getMailsFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  // delete subscriber
  deleteMailRequest: (state) => {
    state.isLoading = true;
  },
  deleteMailSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload;
  },
  deleteMailFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  clearErrors: (state) => {
    state.error = null;
  },

});
