import React, { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [status, setStatus] = useState('Not Completed');
  const [filter, setFilter] = useState('All');

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleTaskDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleAddTodo = () => {
    if (taskName.trim() === '') return;

    const newTodo = {
      id: todos.length + 1,
      taskName,
      taskDescription,
      status,
    };

    setTodos([...todos, newTodo]);
    setTaskName('');
    setTaskDescription('');
    setStatus('Not Completed');
  };



  const filterTodos = () => {
    if (filter === 'Completed') {
      return todos.filter((todo) => todo.status === 'Completed');
    } else if (filter === 'Not Completed') {
      return todos.filter((todo) => todo.status === 'Not Completed');
    } else {
      return todos;
    }
  };
  const padd = {
    padding: 5

  }

  return (
    <div>
      <div className='center'>
        <h1>My todo</h1>

        <div className='flexInput'>
          <div className='margin inputBorder'>
            <input className='border-success'
              type="text"
              placeholder="Todo Name"
              value={taskName}
              onChange={handleTaskNameChange}
            />
          </div>
          <div className='margin inputBorder'>
            <input className='border-success'
              type="text"
              placeholder="Todo Description"
              value={taskDescription}
              onChange={handleTaskDescriptionChange}
            />
          </div>
          <div className='margin'>
            <button className="btn btn-success" onClick={handleAddTodo}>Add Todo</button>
          </div>
        </div>
      </div>

      <div className='right'>
        <label><strong>Status Filter: </strong></label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
      </div>

      <div className='flex'>
        {filterTodos().map((todo) => (
          <div className="myTodos" key={todo.id}>
            <div >
              <p>Name : {todo.taskName}</p>
              <p>Description :{todo.taskDescription}</p>
              <p>Status: {todo.status}</p>
              <select value={status} onChange={handleStatusChange}>
                <option value="Not Completed">Not Completed</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <button style={padd} className="btn btn-success" onClick={() => handleEditTodo(todo.id)}>Edit</button>
            <button style={padd} className="btn btn-danger" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );


}

export default App