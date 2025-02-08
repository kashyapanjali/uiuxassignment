/** @format */

import React, { useState } from "react";
import TaskManager from "./TaskManager";
import MembersDashboard from "./MembersDashboard";
import "./Dashboard.css";

const Dashboard = () => {
	const [view, setView] = useState("taskManager");

	return (
		<div className="dashboard-container">
			<div className="dashboard-nav">
				<button
					onClick={() => setView("taskManager")}
					className={view === "taskManager" ? "active" : ""}>
					Task Manager
				</button>
				<button
					onClick={() => setView("membersDashboard")}
					className={view === "membersDashboard" ? "active" : ""}>
					Members Dashboard
				</button>
			</div>

			<div className="dashboard-content">
				{view === "taskManager" ? <TaskManager /> : <MembersDashboard />}
			</div>
		</div>
	);
};

export default Dashboard;
