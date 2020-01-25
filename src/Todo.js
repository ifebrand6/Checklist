import React from 'react';

const Todo = ({todo})=> {
    const todos = todo.length ? (
        todo.map((task) => {
            return task.id
        })
    ) : 'you have no todo list';

    return(
        <div className="container center">{todos}</div>
    )
  
  

}

export default Todo;