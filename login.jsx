import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleLogin() {
    if (!username) {
      setMessage("Enter the username");
      return;
    }
    if (!password) {
      setMessage("Enter the password");
      return;
    }
    setMessage("Login Successful!"); 
  }

  return (
    <div className="container">
      <div className="login-box">
        <center>
        <h2>Login</h2>  
        </center>  
        <input class="user"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <input class="user"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <div className="options">
          <label class="check">
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">&nbsp; Forgot password?</a>
        </div>
        {message && <p style={{ color: "black" }}>{message}</p>}
        <center>
        <button className="btn" onClick={handleLogin}>
          Login
        </button>
        </center>
        <p>
          Don't have an account? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
}
export default Login;
