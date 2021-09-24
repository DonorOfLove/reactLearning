import React from 'react'
import ToDoItem from "./ToDoItem";
import ToDoList from "./ToDoList";


const styles = {
    width: '100px',
    height: '50px'
}
export default function ToDoBtn() {
return (<button style={styles} onClick={addToDo}>add</button>)
}

function addToDo() {
    <ToDoList><ToDoItem/></ToDoList>        
}