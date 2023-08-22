import React from 'react'
import './TodoList.css'

export default function TodoList(props) {

    const handleComplete = (todo) =>{
        props.setTodos(
            props.todos.map((item) =>{
                if(item.id === todo.id){
                    return {...item, completed: !item.completed}
                }
                return item;
            })
        )
    }

    const handleEdit = ({id}) =>{
        props.openPopup()
        const findTodo = props.todos.find((todo)=> todo.id === id);
        props.setEditTodo(findTodo);
    }

    const handleDelete = ({id}) =>{
        props.setTodos(props.todos.filter((todo) => todo.id !== id))
    }

    return (
        <div className='bg1'>
            {props.todos.map((todo) => (
                <li className='list-item' key={todo.id}>
                    <input type='text' size={40} value={todo.title} className={`list ${todo.completed ? 'complete' : ''}`} onChange={(e) => {
                        e.preventDefault();
                    }} />
                <button className='button-complete task-button' onClick={()=> handleComplete(todo)}>
                    <i className='fa fa-check' />
                </button>
                <button className='button-edit task-button' onClick={()=> handleEdit(todo)}>
                    <i className='fa fa-edit' />
                </button>
                <button className='button-delete task-button' onClick={()=> handleDelete(todo)}>
                    <i className='fa fa-trash' />
                </button>

                </li>
            ))}
        </div>
    )
}
