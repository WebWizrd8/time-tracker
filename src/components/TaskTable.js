import React from 'react';
import ReactDOM from 'react-dom';
import {Table, Panel, Checkbox} from 'react-bootstrap';
import $ from 'jquery';

class TaskRow extends React.Component{
  render(){
    const id = this.props.task._id;
    return(
      <tr>
        <td>{id}</td>
        <td>{this.props.task.name}</td>
        <td>{this.props.task.done == 'true' ?
           <Checkbox defaultChecked></Checkbox> : <Checkbox id={id} onChange={(e) => {
             e.preventDefault();
             this.props.deleteTask(id);}}></Checkbox>}</td>
      </tr>
    );
  }
}

class TaskTable extends React.Component{
    constructor(){
      super();
      this.state = {};
    }

    render(){
      var taskRows = this.props.tasks.map((task) => {
        return <TaskRow key={task._id} task={task} deleteTask={this.props.deleteTask}/>
      });
       return(
         <Panel header="Your Tasks">
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
