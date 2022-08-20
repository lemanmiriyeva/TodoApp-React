import { useState } from 'react';
import './App.css';
import Input from './components/Input/Input';
import Lists from './components/Lists/Lists';

function App() {
  const[todos,setTodos]=useState([])
  function deleteTodo(id){
    const filteredTodos=todos.filter(todo=>todo.id!=id);
    setTodos(filteredTodos)
  }
  return (
    <div className='App'>
      <div className='todo-container py-4 px-4'>
        <h3>TO DO LIST</h3>
      <Input todos={todos} setTodos={setTodos} />
      <Lists todos={todos} onDelete={deleteTodo}/>
      </div>
    </div>
  );
}

export default App;
