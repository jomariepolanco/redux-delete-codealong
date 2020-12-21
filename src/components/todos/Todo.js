import React from 'react'

const Todo = props => { 

    const handleOnClick = () => {
        props.deleteTodo(props.todo.id)
    }
    return (
        <div>
        <li>{props.todo.text}</li>
        <button onClick={handleOnClick}>Delete</button>
        </div>
    )}

export default Todo;
