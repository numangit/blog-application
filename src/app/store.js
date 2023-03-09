import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../features/blogs/blogsSlice';
import sidebarReducer from '../features/sort&filter/sort&filterSlice';
import blogDetailsReducer from '../features/blogDetails/blogDetailsSlice';
import relatedBlogsReducer from '../features/relatedBlogs/relatedBlogsSlice';

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    sidebar: sidebarReducer,
    blogDetails: blogDetailsReducer,
    relatedBlogs: relatedBlogsReducer
  },
});
