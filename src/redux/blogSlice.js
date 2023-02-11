import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
  name: "blog-content",
  initialState: {
    blogs: [],
  },
  reducers: {
    setBlog(state, action) {
      state.blogs.push(action.payload);
    },
    resetData: (state) => {
      state.blogs = [];
    },
  },
});

export const { setBlog, resetData } = blogSlice.actions;
export const selectBlog = (state) => state.blog.blogs;

export default blogSlice.reducer;
