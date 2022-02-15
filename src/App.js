import { useState, useEffect } from "react";
import "./App.css";

const getGithubUser = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  return data;
};

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (username) {
      getGithubUser(username).then((data) => setUser(data));
    } else {
      setUser(null);
    }
  }, [username]);

  return (
    <div className="App">
      <h1>Github User Search</h1>
      <form>
        <input
          type="text"
          value={username}
          placeholder="Enter Github Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </form>
      {username.length === 0 ? (
        <p>Please enter a username</p>
      ) : user ? (
        <a className="user" target="_blank" href={user.html_link}>
          <img className="avatar" src={user.avatar_url} alt="avatar" />
          <h1 className="username">{user.username}</h1>
        </a>
      ) : (
        <p>Please enter valid username</p>
      )}
    </div>
  );
}

export default App;
