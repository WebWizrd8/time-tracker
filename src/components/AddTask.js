import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Panel, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import $ from 'jquery';

class AddTask extends React.Component{
  constructor(){
    super();
    this.state = {
      name : "",
      group: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.addTask({name: this.state.name, group: this.state.group});
    this.setState({name: "", group: ""});
  }

  handleChange(e){
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({[name]: value});
  }
    render(){
       return(
         <Panel header="Add Task">
            <Form inline>
              <FormGroup>
                <ControlLabel>Task Name</ControlLabel>
                {' '}
                <FormControl name="name" type="text" placeholder="Name your next task!" value={this.state.name} onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                {' '}
                <ControlLabel>Group Name</ControlLabel>
                {' '}
                <FormControl name="group" type="text" placeholder="Create new group or " value={this.state.group} onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Select Group</ControlLabel>
                {' '}
                <FormControl componentClass="select" placeholder="select">
                  <option value="select">select</option>
                  <option value="other">...</option>
                </FormControl>
              </FormGroup>
              <Button bsStyle="primary" bsSize="small" onClick={this.handleSubmit}>Add</Button>
            </Form>

         </Panel>
       );
    }
}

module.exports = AddTask;
