import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from "../context";

function ToDoItem({todo, index, onChange}) {
    const {removeTodo} = useContext(Context)
    const classes = []
    if (todo.completed) {
        classes.push('done')
    }
    return (

        <li className='todo'>
                  <span className={classes.join(' ')}>
                <input
                    type='checkbox'
                    onChange={() => onChange(todo.id)}
                    checked={todo.completed}
                    className='check_box'/>
                      {index + 1}. {todo.title}
                </span>
            <button
                onClick={removeTodo.bind(null, todo.id)}
                className='remove_btn'>&times;
            </button>
        </li>

    )
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func
}

export default ToDoItem