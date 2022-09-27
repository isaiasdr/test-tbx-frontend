import { createSlice } from "@reduxjs/toolkit";

export const filesSlice = createSlice({
  name: 'files',
  initialState: {
    isLoading: false,
    fileList: [],
    search: '',
  },
  reducers: {
    startLoadingFiles: (state, action) => {
      state.isLoading = true;
    },
    setFiles: (state, action) => {
      state.isLoading = false;
      state.fileList = action.payload;
    },
    setSearchTerm: ( state, action ) => {
      state.search = action.payload
    }
  }
});
  
export const { startLoadingFiles, setFiles, setSearchTerm } = filesSlice.actions