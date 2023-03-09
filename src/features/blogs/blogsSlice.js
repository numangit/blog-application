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
});

export default blogsSlice;