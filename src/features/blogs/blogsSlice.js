import { getBlogs } from "./blogsAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    isLoading: false,
    blogs: [],
    error: ''
};

//Thunk function to fetch blogs
export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs",
    async () => {
        const blogs = await getBlogs();
        return blogs;
    }
);

const blogsSlice = createSlice({
    name: "blogs",
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(fetchBlogs.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.blogs = action.payload;
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
});

export default blogsSlice.reducer;