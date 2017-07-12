import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Panel, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import $ from 'jquery';

class AddTask extends React.Component{
  constructor(){
    super();
    this.state = {
      name : "",
      group: "",
      selected: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    if(this.state.selected !== "selected" && this.state.selected !== ""){
      this.props.addTask({name: this.state.name, group: this.state.selected});
    }else{
      this.props.addTask({name: this.state.name, group: this.state.group});
    }
    this.setState({name: "", group: ""});
  }

  handleChange(e){
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({[name]: value});
  }
  handleSelect(e){
    let target = e.target;
    let value = target.value;
    this.setState({selected: value});
  }
    render(){
      var groupElements = this.props.groups.map((group) => {
        return <option value={group.name}>{group.name}</option>
      });
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
                <FormControl componentClass="select" placeholder="select" onChange={this.handleSelect}>
                  <option value="select">select</option>
                  {groupElements}
                </FormControl>
              </FormGroup>
              <Button bsStyle="primary" bsSize="small" onClick={this.handleSubmit}>Add</Button>
            </Form>

         </Panel>
       );
    }
}

module.exports = AddTask;
