import { getRelatedBlogs } from "./relatedBlogsAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    isLoading: false,
    relatedBlogs: [],
    error: ''
};

//Thunk function to fetch blogs
export const fetchRelatedBlogs = createAsyncThunk("relatedBlogs/fetchRelatedBlogs",
    async ({ tags, id }) => {
        const relatedBlogs = await getRelatedBlogs({ tags, id });
        return relatedBlogs;
    }
);

const relatedBlogsSlice = createSlice({
    name: "relatedBlogs",
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(fetchRelatedBlogs.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.relatedBlogs = action.payload;
            })
            .addCase(fetchRelatedBlogs.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
});

export default relatedBlogsSlice.reducer;