import React, { Component } from 'react';

 class AddTask extends Component {

state = {
    title: ''
}
handleSubmit = (e) =>{
    e.preventDefault();
    this.props.addTask(this.state);
    this.setState({
        title: ''
    })
}
handleOnChange = (e) =>{
    this.setState({
        title: e.target.value
    })
}
render()
  
   { return(
        <div className="task-app container">
            <form onSubmit={this.handleSubmit}>
            <span className="container">
                <label >Add task</label>
                <input type="text"  onChange={this.handleOnChange} value={this.state.title}/>
                </span>
            </form>
        </div>
    );
}
 }
 export default AddTask;