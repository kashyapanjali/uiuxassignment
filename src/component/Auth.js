/** @format */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Auth = ()=>{
	const [isSignUp, setIsSignUp] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const toggleAuthMode = () => {
		setIsSignUp(!isSignUp);
		setError(""); // Clear error on toggle
	};

	const storeUserData = (email, username, password) => {
		const users = JSON.parse(localStorage.getItem("users")) || [];
		users.push({ email, username, password });
		localStorage.setItem("users", JSON.stringify(users));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Basic validation
		if (!email.includes("@")) {
			setError("Please enter a valid email.");
			return;
		}
		if (password.length < 6) {
			setError("Password must be at least 6 characters long.");
			return;
		}
		if (isSignUp && !username) {
			setError("Username is required for sign up.");
			return;
		}

		const users = JSON.parse(localStorage.getItem("users")) || [];
		const existingUser = users.find((user) => user.email === email);

		if (isSignUp) {
			if (existingUser) {
				setError("Email already exists. Please log in.");
				return;
			}
			// Store the username and profileImage in localStorage
			localStorage.setItem("username", username);
			storeUserData(email, username, password); // Store user data
			navigate("/dashboard");
		} else {
			// Login logic
			if (existingUser && existingUser.password === password) {
				// Store the username and profileImage in localStorage
				localStorage.setItem("username", existingUser.username);
				navigate("/dashboard");
			} else {
				setError("Authentication failed. Please try again.");
			}
		}
	};
	return (
		<div className="auth-container">
			<div className="auth-content">
				<div className="heading">
					<p>Management System</p>
				</div>
				<div className="actionshow">
					<h2>{isSignUp ? "Sign Up" : "Login"}</h2>
				</div>
				{error && <div className="error-message">{error}</div>}{" "}
				{/* Error message display */}
				<form className="auth-form" onSubmit={handleSubmit}>
					{isSignUp && (
						<div className="form-group">
							<label>Username</label>
							<input
								type="text"
								placeholder="Enter your username"
								required
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>
					)}
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							placeholder="Enter your email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Password</label>
						<input
							type="password"
							placeholder="Enter your password"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="auth-btn-container">
						<button type="submit" className="auth-btn">
							{isSignUp ? "Sign Up" : "Login"}
						</button>
					</div>
				</form>
				<button className="toggle-btn" onClick={toggleAuthMode}>
					{isSignUp
						? "Already have an account? Login"
						: "Don't have an account? Sign Up"}
				</button>
			</div>
			<div className="auth-background"></div>
		</div>
	);
}

export default Auth;
