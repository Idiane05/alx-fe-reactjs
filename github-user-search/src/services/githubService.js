import axios from "axios";

const BASE_URL = "https://api.github.com";

// Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`, // optional but recommended
  },
});

// Fetch single GitHub user
export const fetchUserData = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};

// Advanced search: username + location + minimum repos
export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  let query = "";

  if (username) query += `${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>${minRepos}`;

  try {
    // GitHub search API
    const response = await api.get(`/search/users?q=${query}`);
    const users = response.data.items;

    // Get full user details for each result
    const detailedUsers = await Promise.all(
      users.map(async (user) => {
        const details = await api.get(`/users/${user.login}`);
        return details.data;
      })
    );

    return detailedUsers;
  } catch (error) {
    throw new Error("Search failed");
  }
};
