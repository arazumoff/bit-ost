import axios from 'axios'
import { configureStore } from '@reduxjs/toolkit'
import { addPost, fetchPosts } from './thunks'
import postsReducer from './slice'

const getStore = () => {
  return configureStore({
    reducer: {
      posts: postsReducer,
    }
  })
}

describe('test thunks', () => {
  it('fetch posts', async() => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({data: [{id:1, title: 'text', body: 'text'}]})
    const store = getStore()
    await store.dispatch(fetchPosts())
    const state = store.getState()
    expect(state.posts.posts.length).toEqual(1)
  })

  it ('add post', async () => {
    const store = getStore()
    await store.dispatch(addPost({id:2, title: 'text', body: 'text'}))
    const state = store.getState()
    expect(state.posts.posts.length).toEqual(1)
  })

  it('delete post', () => {
    
  })
})
