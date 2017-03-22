import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Panel, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import $ from 'jquery';

class AddTask extends React.Component{
  constructor(){
    super();
    this.state = {
      name : ""
    };
    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    console.log("handle submit");
    this.addTask({name: this.state.name});
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
        console.log("task added");
      },
      error : function(xhr, status, error){
        console.log("Error adding task:", err);
      }
    });

  }
  handleChange(e){
    let target = e.target;
    console.log(target.value);
    this.setState({name: target.value});
  }
    render(){
       return(
         <Panel header="Add Task">
            <Form inline>
              <FormGroup>
                <ControlLabel>Task Name</ControlLabel>
                {' '}
                <FormControl name="taks-name" type="text" placeholder="Name your next task!" value={this.state.name} onChange={this.handleChange}/>
              </FormGroup>
              <Button bsStyle="primary" bsSize="small" onClick={this.handleSubmit}>Add</Button>
            </Form>

         </Panel>
       );
    }
}

module.exports = AddTask;
