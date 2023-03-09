const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    sort: "",
    filter: ""
};

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        sidebarSort: (state, action) => {
            state.sort = action.payload;
        },
        sidebarFilter: (state, action) => {
            state.filter = action.payload;
        }
    }
});

export default sidebarSlice.reducer;
export const { sidebarFilter, sidebarSort } = sidebarSlice.actions;