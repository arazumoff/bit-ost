import { createSlice } from '@reduxjs/toolkit'
import { addPost, fetchPosts, deletePost} from './thunks'

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'loading',
  },
  reducers : {},
  extraReducers : (builder) => {
    builder
    .addCase(addPost.fulfilled, (state, action) => {
      state.posts.push(action.payload);
    })
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.status = 'loading'
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = 'complete'
      state.posts = action.payload;
    })
    .addCase(deletePost.fulfilled, (state, action) => {
      const { id } = action.payload;
      state.posts = state.posts.filter(post => post.id !== id);
    })
  }
})

export default postsSlice.reducer
