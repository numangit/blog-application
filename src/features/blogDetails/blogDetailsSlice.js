import { getBlogDetails } from "./blogDetailsAPI";


const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    isLoading: false,
    blogDetails: {},
    error: ''
};

//Thunk function to fetch blog details
export const fetchBlogDetails = createAsyncThunk("blogDetails/fetchBlogDetails",
    async (id) => {
        const blogDetails = await getBlogDetails(id);
        return blogDetails;
    }
);

const blogDetailsSlice = createSlice({
    name: "blogDetails",
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(fetchBlogDetails.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchBlogDetails.fulfilled, (state, action) => {
                state.isLoading = false;
                state.blogs = action.payload;
            })
            .addCase(fetchBlogDetails.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
});

export default blogDetailsSlice.reducer;