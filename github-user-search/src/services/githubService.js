// src/services/githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('User not found');
    } else if (error.response && error.response.status === 403) {
      throw new Error('API rate limit exceeded. Please try again later.');
    } else {
      throw new Error('Failed to fetch user data');
    }
  }
};