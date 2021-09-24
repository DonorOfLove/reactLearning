import ToDoBtn from "./toDO/btn";
import './App.css';
import ToDoList from "./toDO/ToDoList";

;

function App() {
    const todos = [
        {id: 1, completed: false, title: 'купить ламборгини'},
        {id: 3, completed: false, title: 'купить Обаму'},
        {id: 2, completed: false, title: 'купить небоскреб'}
        ]
    return (
        <div className="App">
            <ToDoBtn></ToDoBtn>
            <ToDoList todos={todos}></ToDoList>
        </div>

    );
}

export default App;
