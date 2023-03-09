const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    isLoading: false,
    blogs: [],
    error: ''
};

//Thunk function to fetch blogs
const fetchBlogs = createAsyncThunk("blogs/fetchBlogs",
    async () => {
        const blogs = await {};
        return blogs;
    }
);

const blogsSlice = createSlice({
    name: "blogs",
    initialState,
});

export default blogsSlice;