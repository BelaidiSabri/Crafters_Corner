import React, { useState } from "react";
import './signup.css';
import { useDispatch, useSelector } from 'react-redux';
import { register } from "../../slice/authSlice";





const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.error);

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(register({ email, name, lastname, password, role }));
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            //type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="name">First Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
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

        <div className="input-group">
          <label htmlFor="role">Sign up as:</label>
          <select
            id="role"
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">--Please select an option--</option>
            <option value="artisan">Artisan</option>
            <option value="customer">Customer</option>
          </select>
        </div>

        <button type="submit" disabled={isLoading}>{isLoading? 'Signing Up...': 'Sign Up'}</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
