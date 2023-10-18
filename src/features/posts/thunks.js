import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const addPost = createAsyncThunk(
  'posts/add',
  async (post) => {
    return new Promise(resolve => {
      setTimeout(() => resolve(post), 1000);
    });
  }
)

export const fetchPosts = createAsyncThunk(
  'posts/fetch',
  async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return response?.data
  }
)

export const deletePost = createAsyncThunk(
  'posts/delete',
  async(postId) => {
    return new Promise(resolve => {
      setTimeout(() => resolve(postId), 1000);
    });
  }
)