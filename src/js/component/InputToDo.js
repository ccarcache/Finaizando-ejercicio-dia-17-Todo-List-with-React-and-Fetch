import React, { useState, useEffect } from "react";

export const InputToDo = () => {
	const [task, setTask] = useState("");
	const [list, setList] = useState([{ label: "", done: false }]);

	const handleChange = event => {
		setTask(event.target.value);
	};

	const getList = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/carcache", {
			method: "GET",
			headers: {
				"content-type": "application/json"
			}
		})
			.then(res => res.json())
			.then(response => {
				setList(
					response.map((item, index) => {
						return item;
					})
				);
			});
	};

	const createList = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/carcache", {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: []
		})
			.then(response => {
				console.log(response);
			})
			.catch(err => {
				console.log(err);
			});
	};

	const updateList = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/carcache", {
			method: "PUT",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify(list)
		})
			.then(response => {
				console.log(response);
			})
			.catch(err => {
				console.log(err);
			});
	};

	const deleteList = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/carcache", {
			method: "DELETE",
			headers: {
				"content-type": "application/json"
			}
		})
			.then(response => {
				console.log(response);
			})
			.catch(err => {
				console.log(err);
			});
	};

	const handleSubmit = event => {
		if (task.trim() && task.length !== 0) {
			setList(list.concat({ label: task, done: false }));
		} else {
			alert("Task can not be empty");
		}
		console.log(list);
		setTask("");
		event.preventDefault();
	};

	const removeTodo = index => {
		const newTodos = [...list];
		newTodos.splice(index, 1);
		setList(newTodos);
	};
	updateList();

	useEffect(() => {
		getList();
	}, []);

	return (
		<div className="container">
			<h1 className="title">
				Todo List
				<i className="fas fa-tasks" />
			</h1>
			<form onSubmit={handleSubmit}>
				<input
					className="d-inline-block align-middle divInput"
					type="text"
					value={task}
					onChange={handleChange}
					placeholder="What´s next to be done?"
				/>
				<button className="btn btn-primary addTask" type="submit">
					Add Task
				</button>
			</form>
			<ul className="list-group">
				{list.map((item, index) => (
					<li className="list-group-item d-flex" key={index}>
						{item.label}
						<i onClick={removeTodo} className="far fa-trash-alt ml-auto" />
					</li>
				))}
				<div className="taskCounter">
					You have <strong className="length">{list.length} tasks to do </strong>
				</div>
			</ul>
		</div>
	);
};
export default InputToDo;
