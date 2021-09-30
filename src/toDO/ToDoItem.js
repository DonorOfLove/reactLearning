import React,{useContext} from 'react'
import PropTypes from 'prop-types'
import Context from "../context";

function ToDoItem({todo, index, onChange}) {
    const {removeTodo} = useContext(Context)
    const classes = []
    if (todo.completed) {
        classes.push('done')
    }
    return (
        <span className={classes.join(' ')}>
            <li className='todo'>
                <input
                    type='checkbox'
                    onChange={() => onChange(todo.id)}
                    checked={todo.completed}/>
                {index + 1}. {todo.title}
                <button onClick={removeTodo.bind(null, todo.id)}>&times;</button>
            </li>
        </span>
    )
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func
}

export default ToDoItem