import React, { useState } from "react";
import Search from "./components/Search";
import { fetchUserData } from "./services/githubService";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />

      {loading && <div className="message loading">Loading...</div>}
      
      {error && (
        <div className="message error">
          {error}
        </div>
      )}
      
      {user && (
        <div className="user-card">
          <img 
            src={user.avatar_url} 
            alt={user.login}
            className="user-avatar"
          />
          <div className="user-info">
            <h2 className="user-name">{user.name || user.login}</h2>
            <p className="user-bio">{user.bio || "No bio available"}</p>
            <div className="user-stats">
              <span>Followers: {user.followers}</span>
              <span>Following: {user.following}</span>
              <span>Repos: {user.public_repos}</span>
            </div>
            <a 
              href={user.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="profile-link"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;