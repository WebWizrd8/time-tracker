import React from 'react';
import ReactDOM from 'react-dom';
import AddTask from './components/AddTask.js';
import TaskTable from './components/TaskTable.js';
import $ from 'jquery';

class Main extends React.Component{
  constructor(){
    super();
    this.state =  {
      tasks : []
    };
    this.loadData = this.loadData.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  //ajax call
  addTask(task){
    console.log("adding new task");
    $.ajax({
      type: "POST",
      url: "/api/tasks",
      contentType: "application/json",
      data : JSON.stringify(task),
      success : function(data){
        var task = data;
        var tasksModified = this.state.tasks.concat(task);
        this.setState({tasks: tasksModified});
      }.bind(this),
      error : function(xhr, status, error){
        console.log("Error adding task:", err);
      }
    });

  }

  componentDidMount(){
    this.loadData();
  }
  loadData(){
    $.ajax('/api/tasks').done((data) => {
      this.setState({tasks: data});
    });
  }
  render(){
     return(
        <div>
        <AddTask tasks = {this.state.tasks} addTask = {this.addTask}/>
        <TaskTable tasks = {this.state.tasks}/>
        </div>
    );
  }
}

ReactDOM.render(
    <Main/>,
    document.getElementById('main')
);
