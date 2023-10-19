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
      const ids = state.posts.map(object => {
        return object.id;
      });
      const max = Math.max(...ids);
      state.posts.push({id: max+1, ...action.payload});
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = 'complete'
      state.posts = action.payload;
    })
    .addCase(deletePost.fulfilled, (state, action) => {
      const id = action.payload;
      state.posts = state.posts.filter(post => post.id !== id);
    })
  }
})

export default postsSlice.reducer
