import React, {useState} from 'react'
import PropTypes from 'prop-types'

const styles = {
    width: '100px',
    height: '50px'
}

function AddTodo(onCreate) {
    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault()
        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)}/>
            <button type='submit'>Add</button>
        </form>
    )

}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}
export default AddTodo


