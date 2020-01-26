import React from 'react';

const Tasks = ({tasks,deleteTask})=> {
    let task = tasks.length ? (
        tasks.map((task) => {
            return (
                <div className= "collection-item" key={task.id}>
                <span onClick={()=>{deleteTask(task.id)}}>{task.title}</span>
                </div>
                )
        })
    ) : (<p className="center ">'you have no task list'</p>);

    return(
        <div className="tasks collection">{task}</div>
    )
  
  

}

export default Tasks;