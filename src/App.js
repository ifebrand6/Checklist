import React, { Component } from 'react';
import Todo from "./Todo";

class App extends Component {
  state = {
    todos: [
      {id: 1, title: 'finish react course'},
      {id:2, title: 'check for upwork.'}
    ]
  }
 render(){
   return(
      <div className="todo">
        <h1> Check List</h1>
        <Todo className="container" todo={this.state.todos} />
      </div>
   );
 }
}
  

export default App;
