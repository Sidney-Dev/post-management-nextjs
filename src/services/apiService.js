// services/apiService.js

const API_BASE_URL = 'http://127.0.0.1:8001/api'

// API response data
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Something went wrong')
  }
  return response.json()
}

// GET: fetch all posts
const fetchPosts = async () => {
  const response = await fetch(`${API_BASE_URL}/posts`, {
    headers: {
      'Cache-Control': 'no-cache',
    },
  })
  return handleResponse(response)
}

// GET: fetch post by ID
const fetchPostById = async (postId) => {
  const response = await fetch(`${API_BASE_URL}/post/${postId}`, {
    headers: {
      'Cache-Control': 'no-cache',
    },
  })
  return handleResponse(response)
}

// POST: create new post
const createPost = async (postData) => {
  const response = await fetch(`${API_BASE_URL}/post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  })
  return handleResponse(response)
}

// update a post
const updatePost = async (postId, postData) => {
  const response = await fetch(`${API_BASE_URL}/post/${postId}/update`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  })
  return handleResponse(response)
}

// deleted a post
const deletePost = async (postId) => {
  const response = await fetch(`${API_BASE_URL}/post/${postId}/delete`, {
    method: 'DELETE',
  })
  return handleResponse(response)
}

export default {
  fetchPosts,
  fetchPostById,
  createPost,
  updatePost,
  deletePost,
}