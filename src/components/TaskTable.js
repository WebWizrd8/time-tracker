import React from 'react';
import ReactDOM from 'react-dom';
import {Table, Panel} from 'react-bootstrap';
import $ from 'jquery';

class TaskRow extends React.Component{
  render(){
    return(
      <tr>
        <td>{this.props.task._id}</td>
        <td>{this.props.task.name}</td>
        <td>{this.props.task.done}</td>
      </tr>
    );
  }
}

class TaskTable extends React.Component{
    constructor(){
      super();
      this.state = {tasks: []};
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
      var taskRows = this.state.tasks.map((task) => {
        return <TaskRow key={task._id} task={task} />
      });
       return(
         <Panel>
            <Table striped condensed bordered>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Task Name</th>
                  <th>Finished</th>
                </tr>
              </thead>
              <tbody>
                {taskRows}
              </tbody>
            </Table>
          </Panel>
       );
    }
}

module.exports = TaskTable;
