import React from 'react';
import { AppUI } from './AppUI';

const defaultTodos = [
  { text: 'Tarea 1', completed: true },
  { text: 'Tarea 2 ', completed: false },
  { text: 'Tarea 3', completed: true },
  { text: 'Tarea 4', completed: false },
];

function App() {
  const [todos,setTodos]=React.useState(defaultTodos);
  const [searchValue,setSearchValue] = React.useState('');

  const completedTodos= todos.filter(todo => !!todo.completed).length;
  const totalTodos= todos.length;

  let searchedTodos  =[];

  if(!searchValue.length>=1){
    searchedTodos  =todos;
  }else {
    searchedTodos  = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodos = (textTodo) => {
    const position=todos.findIndex(todo=> todo.text==textTodo);
    const newTodos= [...todos];
    newTodos[position].completed=true;
    setTodos(newTodos);
  }

  const deleteTodos = (textTodo) => {
    const position=todos.findIndex(todo=> todo.text==textTodo);
    const newTodos= [...todos];
    newTodos.splice(textTodo,1);
    setTodos(newTodos);
  }

  return (

    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodos={completeTodos}
      deleteTodos={deleteTodos}
    ></AppUI>
  );

    
}

export default App;
