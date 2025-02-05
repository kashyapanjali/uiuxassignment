/** @format */

import React, { useState } from "react";
import "./TaskManager.css";

const initialTasks = {
	GeneralInformation: [
		{ id: "3", title: "How to use this board", assignees: ["Alice"] },
		{ id: "4", title: "Project Overview", assignees: ["Bob"] },
	],
	Backlog: [
		{ id: "1", title: "All the bugs", assignees: ["John"] },
		{ id: "2", title: "Testimonials", assignees: ["Doe"] },
	],
	InProgress: [
		{ id: "3", title: "Notifications", assignees: ["Alice"] },
		{ id: "4", title: "Timer", assignees: ["Bob"] },
	],
	Paused: [{ id: "3", title: "Analytics", assignees: ["Alice"] }],
	readyForLaunch: [
		{ id: "5", title: "Custom emoji", assignees: ["Eve"] },
		{ id: "5", title: "Reactions", assignees: ["Bob"] },
	],
};

const TaskManager = () => {
	const [tasks, setTasks] = useState(initialTasks);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [newTask, setNewTask] = useState({
		title: "",
		assignees: [],
		status: "",
		startDate: "",
		endDate: "",
	});
	const [selectedColumn, setSelectedColumn] = useState(null);

	const openModal = (status) => {
		setSelectedColumn(status);
		setNewTask({
			title: "",
			assignees: [],
			status,
			startDate: "",
			endDate: "",
		});
		setIsModalOpen(true);
	};

	const addTask = () => {
		if (!selectedColumn) return;
		setTasks((prev) => {
			const updatedColumn = [
				...prev[selectedColumn],
				{ ...newTask, id: Date.now().toString() },
			];
			return { ...prev, [selectedColumn]: updatedColumn };
		});
		setIsModalOpen(false);
	};

	return (
		<div className="task-manager">
			<h1 className="title">Task Manager</h1>
			<div className="task-board">
				{Object.keys(tasks).map((status) => (
					<div key={status} className="task-column">
						<h2 className="column-title">
							{status.replace(/([A-Z])/g, " $1")}
						</h2>
						<div className="task-list">
							{tasks[status].map((task) => (
								<div key={task.id} className="task-card">
									{task.title} - {task.assignees.join(", ")}
								</div>
							))}
						</div>
						<button className="add-button" onClick={() => openModal(status)}>
							+ Add Task
						</button>
					</div>
				))}
			</div>

			{isModalOpen && (
				<div className="modal">
					<div className="modal-content">
						<h2>Add Task</h2>
						<input
							type="text"
							placeholder="Title"
							value={newTask.title}
							onChange={(e) =>
								setNewTask({ ...newTask, title: e.target.value })
							}
						/>
						<input
							type="text"
							placeholder="Assignees"
							value={newTask.assignees}
							onChange={(e) =>
								setNewTask({ ...newTask, assignees: e.target.value.split(",") })
							}
						/>
						<input
							type="date"
							placeholder="Start Date"
							onChange={(e) =>
								setNewTask({ ...newTask, startDate: e.target.value })
							}
						/>
						<input
							type="date"
							placeholder="End Date"
							onChange={(e) =>
								setNewTask({ ...newTask, endDate: e.target.value })
							}
						/>
						<button onClick={addTask}>Add</button>
						<button onClick={() => setIsModalOpen(false)}>Cancel</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default TaskManager;
