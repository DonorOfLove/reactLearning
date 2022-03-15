import React, {useEffect} from 'react'
import ToDoList from "./toDO/ToDoList";
import Context from "./context";
import AddTodo from "./toDO/TodoAdd";

function App() {

    let [todos, setTodos] = React.useState(
        [{id: 1, completed: false, title: 'Воспитать детей'},
            {id: 2, completed: false, title: 'Посадить дерево'},
            {id: 3, completed: false, title: 'Построить дом'}])

    useEffect(() => {
        if (localStorage.getItem('todos') !== null) {
            setTodos(JSON.parse(localStorage.getItem('todos')))  }
    }, [])

    useEffect(() => {
        window.addEventListener("unload", function() {
            localStorage.setItem('todos', JSON.stringify(todos))
        });
    })
    
    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            }))
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(todos.concat([{
            title,
            id: Date.now(),
            completed: false
        }]))
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className="App">
                <h1 className='main__title'>Чем бы заняться сегодня?..</h1>
                <AddTodo onCreate={addTodo}>
                </AddTodo>
                <ToDoList
                    todos={todos}
                    onToggle={toggleTodo}>
                </ToDoList>
            </div>
        </Context.Provider>
    );
}

export default App;
