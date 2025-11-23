// // src/services/githubService.js
// import axios from 'axios';

// const BASE_URL = 'https://api.github.com/users';

// export const fetchUserData = async (username) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/${username}`);
//     return response.data;
//   } catch (error) {
//     if (error.response && error.response.status === 404) {
//       throw new Error('User not found');
//     } else if (error.response && error.response.status === 403) {
//       throw new Error('API rate limit exceeded. Please try again later.');
//     } else {
//       throw new Error('Failed to fetch user data');
//     }
//   }
// };
// src/services/githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com';

// Simple user search
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error('User not found');
    } else if (error.response?.status === 403) {
      throw new Error('API rate limit exceeded');
    } else {
      throw new Error('Failed to fetch user data');
    }
  }
};

// Advanced search (if you want to keep both)
export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  try {
    let query = '';
    if (username) query += `user:${username}`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>${minRepos}`;
    
    const response = await axios.get(`${BASE_URL}/search/users?q=${encodeURIComponent(query)}&per_page=10`);
    
    // Get detailed info for each user
    const userDetails = await Promise.all(
      response.data.items.map(user => 
        axios.get(`${BASE_URL}/users/${user.login}`).then(res => res.data)
      )
    );
    
    return userDetails;
  } catch (error) {
    if (error.response?.status === 403) {
      throw new Error('API rate limit exceeded');
    } else {
      throw new Error('Failed to search users');
    }
  }
};