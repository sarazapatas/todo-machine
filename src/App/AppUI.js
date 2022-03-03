import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import './AppUI.css'

function AppUI() {
  const {error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal}=React.useContext(TodoContext);
  return (
    <React.Fragment>
    <div className="container">
   
    <center><h1>To-do APP</h1></center>
    <TodoCounter />
      <TodoSearch />
      </div>
      
           <TodoList>
            {error && <p>Desespérate, hubo un error...</p>}
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
            
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
          {!!openModal && (
            <Modal>
            <TodoForm/>
          </Modal>
          )}
          
      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
      
    </React.Fragment>
  );
}

export { AppUI };
