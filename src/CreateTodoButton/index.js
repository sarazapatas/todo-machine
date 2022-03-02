import React from 'react';
import './CreateTodoButton.css';



function CreateTodoButton(props) {
  const onClickFunction  = (msg) => {
    alert(msg);
  }

  return (
    <button className="CreateTodoButton" 
      onClick={() =>onClickFunction("Prueba de envio")}
    >
      +
    </button>
  );

  
}


export { CreateTodoButton };
