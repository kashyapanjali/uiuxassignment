import React, { useState } from "react";
import "./MembersDashboard.css";


const initialTasks = [
	{ id: "1", title: "Review", assignees: "Karen", status: "In Progress", startDate: "2024-06-11", endDate: "2024-06-12", color: "#FDE68A" },
	{ id: "2", title: "New feature QA", assignees: "Jake", status: "In Progress", startDate: "2024-06-12", endDate: "2024-06-13", color: "#BBF7D0" },
	{ id: "3", title: "Optimization", assignees: "Brad", status: "Completed", startDate: "2024-06-14", endDate: "2024-06-15", color: "#BFDBFE" },
	{ id: "4", title: "Refactoring", assignees: "Molly", status: "Completed", startDate: "2024-06-15", endDate: "2024-06-16", color: "#BFDBFE" },
	{ id: "5", title: "Profile", assignees: "Karen", status: "Planned", startDate: "2024-06-18", endDate: "2024-06-20", color: "#D6EAF8" },
	{ id: "6", title: "Analytics", assignees: "Jake", status: "Pending", startDate: "2024-06-14", endDate: "2024-06-16", color: "#FAD7A0" },
	{ id: "7", title: "Images", assignees: "Molly", status: "Completed", startDate: "2024-06-19", endDate: "2024-06-21", color: "#D4EFDF" }
];

const MembersDashboard = () => {
	const [tasks, setTasks] = useState(initialTasks);
	const [searchTerm, setSearchTerm] = useState("");

	const filteredTasks = tasks.filter((task) =>
		task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
		task.assignees.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="members-dashboard">
			<h1 className="title">Members Dashboard</h1>
			<div className="header">
			<div className="leftpart">
					<button className="menu-button">☰</button>
					<span>Timeline</span>
				</div>
				<div className="middlepart">
					<label htmlFor="groupBy">Group By:</label>
					<select id="groupBy">
						<option value="member">Member</option>
						<option value="project">Project</option>
						<option value="local">Local</option>
					</select>
				</div>
				<div className="rightpart">
				   <button className="zoom-button">
				   <img src="/window.png" alt="Zoom Icon" width="24" height="24" />
				   </button>				
				</div>
			</div>
			<input
				type="text"
				placeholder="Search tasks..."
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<div className="members-board">
				{filteredTasks.map((task) => (
					<div key={task.id} className="members-card" style={{ backgroundColor: task.color }}>
						<strong>{task.title}</strong>
						<p>{task.assignees}</p>
						<small>{task.startDate} - {task.endDate}</small>
					</div>
				))}
			</div>
		</div>
	);
};

export default MembersDashboard;