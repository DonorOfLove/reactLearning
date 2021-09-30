import ToDoBtn from "./toDO/TodoAdd";
import React from 'react'
import './App.css';
import ToDoList from "./toDO/ToDoList";
import Context from "./context";
import AddTodo from "./toDO/TodoAdd";


function App() {
    const [todos, setTodos] = React.useState(
        [{id: 1, completed: false, title: 'прыгнуть с жопы'},
            {id: 2, completed: true, title: 'купить Никиту'},
            {id: 3, completed: false, title: 'поесть наггетсы'}])


    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))

    }

    function addTodo(title) {
        setTodos(todos.concat([
            {
                title,
                id: Date.now(),
                completed: false
            }]))
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className="App">
                <h1>Список дел</h1>
                <AddTodo onCreate={addTodo}></AddTodo>
                <ToDoList
                    todos={todos}
                    onToggle={toggleTodo}>
                </ToDoList>
            </div>
        </Context.Provider>
    );
}

export default App;
