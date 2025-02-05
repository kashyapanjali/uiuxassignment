/** @format */

import React, { useState } from "react";
import "./MembersDashboard.css";

const MembersDashboard = () => {
	const [members] = useState([
		{
			id: "1",
			name: "Karen",
			avatar: "https://via.placeholder.com/40",
			tasks: [
				{
					id: "t1",
					title: "Main page",
					type: "Review",
					startDate: "Mon 11",
					duration: 2,
					category: "review",
				},
			],
		},
		{
			id: "2",
			name: "Jake",
			avatar: "https://via.placeholder.com/40",
			tasks: [
				{
					id: "t2",
					title: "New feature QA",
					type: "Feature",
					startDate: "Mon 11",
					duration: 3,
					category: "feature",
				},
				{
					id: "t3",
					title: "Analytics",
					type: "Analytics",
					startDate: "Thu 14",
					duration: 4,
					category: "feature",
				},
			],
		},
		{
			id: "3",
			name: "Brad",
			avatar: "https://via.placeholder.com/40",
			tasks: [
				{
					id: "t4",
					title: "Workspaces",
					type: "Specs",
					startDate: "Wed 13",
					duration: 5,
					category: "specs",
				},
			],
		},
		{
			id: "4",
			name: "Molly",
			avatar: "https://via.placeholder.com/40",
			tasks: [
				{
					id: "t5",
					title: "Blog post",
					type: "Images",
					startDate: "Fri 15",
					duration: 4,
					category: "images",
				},
			],
		},
	]);

	const dates = [
		"Mon 11",
		"Tue 12",
		"Wed 13",
		"Thu 14",
		"Fri 15",
		"Mon 18",
		"Tue 19",
		"Wed 20",
		"Thu 21",
		"Fri 22",
	];

	const handleGroupChange = (e) => {
		console.log("Group changed to:", e.target.value);
	};

	const handleMaximize = () => {
		console.log("Maximize clicked");
	};

	const handleClose = () => {
		console.log("Close clicked");
	};

	return (
		<div className="dashboard-container">
			<div className="dashboard-header">
				<h1>Members Dashboard</h1>
				<div className="header-controls">
					<div className="group-selector">
						<span>Group by:</span>
						<select onChange={handleGroupChange}>
							<option value="member">Member</option>
							<option value="project">Project</option>
							<option value="status">Status</option>
						</select>
					</div>
					<div className="header-buttons">
						<button onClick={handleMaximize} className="icon-button">
							<i className="maximize-icon">⤢</i>
						</button>
						<button onClick={handleClose} className="icon-button">
							<i className="close-icon">×</i>
						</button>
					</div>
				</div>
			</div>

			<div className="timeline-grid">
				<div className="timeline-header">
					<div className="empty-cell"></div>
					{dates.map((date) => (
						<div key={date} className="date-cell">
							{date}
						</div>
					))}
				</div>

				{members.map((member) => (
					<div key={member.id} className="member-row">
						<div className="member-info">
							<img
								src={member.avatar || "/placeholder.svg"}
								alt={member.name}
								className="member-avatar"
							/>
							<span className="member-name">{member.name}</span>
						</div>
						<div className="task-cells">
							{dates.map((date) => (
								<div key={`${member.id}-${date}`} className="task-cell">
									{member.tasks.map((task) => {
										if (task.startDate === date) {
											return (
												<div
													key={task.id}
													className={`task-block ${task.category}`}
													style={{
														width: `calc(${task.duration * 100}% - 8px)`,
													}}>
													<div className="task-content">
														{task.type} • {task.title}
													</div>
												</div>
											);
										}
										return null;
									})}
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MembersDashboard;
