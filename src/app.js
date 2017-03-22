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
        <AddTask tasks = {this.state.tasks}/>
        <TaskTable tasks = {this.state.tasks}/>
        </div>
    );
  }
}

ReactDOM.render(
    <Main/>,
    document.getElementById('main')
);
