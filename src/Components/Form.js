import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './Form.css'

export default function Form(props) {

    const updateTodo = (title, id, completed) => {
        const newTodo = props.todos.map((todo) =>
            todo.id === id ? { title, id, completed } : todo
        )
        props.setTodos(newTodo);
        props.setEditTodo()
    }

    useEffect(() => {
        if (props.editTodo) {
            props.setInput(props.editTodo.title);
        }
        else {
            props.setInput('');
        }
    }, [props.setInput, props.editTodo]);

    const onInputChange = (e) => {
        props.setInput(e.target.value);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (!props.editTodo) {
        props.setTodos([...props.todos, { id: uuidv4(), title: props.input, completed: false }])
        props.setInput('')
        }
        else {
            updateTodo(props.input, props.editTodo.id, props.editTodo.completed)
        }
    }

    return (
        <div className='mainbox'>
            <form id='formbox' className='form' onSubmit={onFormSubmit}>
                <input onChange={onInputChange} size={40} className='task-input' type='text' placeholder='Enter a task' value={props.input} />
                <button className='button-add' type='submit' onClick={props.closePopup}>
                    {props.editTodo ? 'Okay' : 'Add'}
                </button>
            </form>
            <button className='mainbtn' onClick={props.openPopup}>Add Task</button>
        </div>
    )
}