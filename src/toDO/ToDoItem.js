import React from 'react'
import PropTypes from 'prop-types'

function ToDoItem({todo, index, onChange}) {
    const classes = []
    if (todo.completed) {
        classes.push('done')
    }
    return (
        <li className='todo'>
            <span className={classes.join(' ')}>
                <input type='checkbox'
                       onChange={() => onChange(todo.id)}/>
                {index + 1}. {todo.title}
            </span>
            <button>&times;</button>
        </li>
    )
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func
}

export default ToDoItem