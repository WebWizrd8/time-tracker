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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.addTask({name: this.state.name});
    this.setState({name: ""});
  }

  handleChange(e){
    let target = e.target;
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
