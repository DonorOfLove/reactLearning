import React,{useEffect} from 'react'
import './App.css';
import ToDoList from "./toDO/ToDoList";
import Context from "./context";
import AddTodo from "./toDO/TodoAdd";

let flag=true
function App() {

    let [todos, setTodos] = React.useState(
        [{id:1,completed:false,title:'Воспитать детей'},
            {id:2,completed:false,title:'Посадить дерево'},
            {id:3,completed:false,title:'Построить дом'}])




useEffect(()=>{const copy = JSON.parse(localStorage.getItem('todos'))
    setTodos(copy)},[])

    function setToLocalStore() {
        setTimeout(()=>{const json=JSON.stringify(todos)
        localStorage.setItem('todos',json)},10  )
        }

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
                <h1 className='title'>Чем бы заняться сегодня?..</h1>
                <AddTodo onCreate={addTodo}>
                </AddTodo>
                <ToDoList
                    todos={todos}
                    onToggle={toggleTodo}
                    onChange={setToLocalStore(flag)}>
                </ToDoList>
            </div>
        </Context.Provider>
    );
}

export default App;
