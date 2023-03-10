import { getBlogDetails, incrementLike, updateSaved } from "./blogDetailsAPI";


const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    isLoading: false,
    blogDetails: {},
    isError: false,
    error: ''
};

//Thunk function to fetch blog details
export const fetchBlogDetails = createAsyncThunk("blogDetails/fetchBlogDetails",
    async (id) => {
        const blogDetails = await getBlogDetails(id);
        return blogDetails;
    }
);

//thunk function to like blogs
export const likeBlog = createAsyncThunk("blogDetails/likeBlog",
    async ({ id, likes }) => {
        const blogDetails = await incrementLike({ id, likes });
        return blogDetails;
    }
);

//thunk function to save blogs
export const saveBlog = createAsyncThunk("blogDetails/saveBlog",
    async ({ id, isSaved }) => {
        console.log(id, isSaved);
        const blogDetails = await updateSaved({ id, isSaved });
        return blogDetails;
    }
);

const blogDetailsSlice = createSlice({
    name: "blogDetails",
    initialState,
    reducers: {
        likeCount: (state, action) => {
            if (state.blogDetails.id === action.payload) { state.blogDetails.likes += 1 };
        },
        saveToggle: (state, action) => {
            if (state.blogDetails.id === action.payload) { state.blogDetails.isSaved = !state.blogDetails.isSaved };
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchBlogDetails.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchBlogDetails.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.blogDetails = action.payload;
            })
            .addCase(fetchBlogDetails.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            })
});

export default blogDetailsSlice.reducer;
export const { likeCount, saveToggle } = blogDetailsSlice.actions;