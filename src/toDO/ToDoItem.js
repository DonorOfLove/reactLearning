import React from 'react'

function ToDoItem({todo,index}) {
    return (
        <li>{index+1}. {todo.title}</li>
    )
}

export  default ToDoItem