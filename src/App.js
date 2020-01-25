import React, { Component } from 'react';
import Task from "./Task";
import Addtask from './addTask';

class App extends Component {
  state = {
    tasks: [
      {id: 1, title: 'finish react course'},
      {id:2, title: 'check for upwork.'}
    ]
  }
  addTask = (task) => {
    task.id = Math.floor(Math.random() * 100);
    let tasks = [...this.state.tasks, task]
    this.setState({
      tasks
    })
   console.log(task)
   
  }
  deleteTask = (id) =>{
    console.log(id)
    let tasks = this.state.tasks.filter(task => {
       return task.id !== id;
    })
    this.setState({
      // tasks: tasks
      tasks
    }
    )
  }
 render(){
   return(
      <div className="task-app container">
        <h1 className="center blue-text"> Check List</h1>
        <Task className="container" tasks={this.state.tasks} deleteTask={this.deleteTask} />
        <Addtask addTask={this.addTask}/>
      </div>
   );
 }
}
  

export default App;