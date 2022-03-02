import React from "react";

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';



function AppUI({completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodos,
    deleteTodos}){
    return  (
    <React.Fragment>
        <TodoCounter 
          completedTodos={completedTodos}
          totalTodos={totalTodos}
        />
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
  
        <TodoList>
        {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodos(todo.text)}
              onDetele={() => deleteTodos(todo.text)}
            />
          ))}
        </TodoList>
  
        <CreateTodoButton />
      </React.Fragment>
    );
    
}

export {AppUI}