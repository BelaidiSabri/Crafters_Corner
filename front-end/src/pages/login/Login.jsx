import React, { useEffect, useState } from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../slice/loginSlice";
import fetchUserProfile from "../../utils/fetchUserProfile";
import { fetchProfileData } from "../../slice/profileSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.error);

  const profile = useSelector((state) => state.profile.profile);
  const isLoadingProfile = useSelector((state) => state.profile.isLoading);
  const errorProfile = useSelector((state) => state.profile.error);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await dispatch(login({ email, password }));
      const token = res.payload.token;
      localStorage.setItem("token", token);
      const username = res.payload.username;
      console.log(username);
      await dispatch(fetchProfileData(username));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (profile) {
      navigate(`/profile/${profile.artisan.username}`);
    }
  }, [profile, navigate]);
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Logging In..." : "Login"}
        </button>
        {error && <p>{error}</p>}
      </form>

      <p>
        Not registered yet? <Link to="/signup">Go to Signup</Link>
      </p>
    </div>
  );
};

export default Login;
