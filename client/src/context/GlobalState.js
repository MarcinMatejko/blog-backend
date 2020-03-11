import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

//Initial state
const initialState = {
  posts: [],
  error: null,
  loading: true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getPosts() {
    try {
      const res = await axios.get('/api/v1/posts');
      
      dispatch({
        type: 'GET_POSTS',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'POST_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function deletePost(id) {
    try {
      await axios.delete(`/api/v1/posts/${id}`);

      dispatch({
        type: 'DELETE_POST',
        payload: id
      });
    } catch (err) {
      dispatch({
        type: 'POST_ERROR',
        payload: err.response.data.error
      });
    }
    
  }

  async function addPost(post) {
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    }
    try {
      const res = await axios.post('/api/v1/posts', post, config);

      dispatch({
        type: 'ADD_POST',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'POST_ERROR',
        payload: err.response.data.error
      });
    }
  }

  return (<GlobalContext.Provider value={{
    posts: state.posts,
    error: state.error,
    loading: state.loading,
    getPosts,
    deletePost,
    addPost
  }}>
    {children}
  </GlobalContext.Provider>);
}