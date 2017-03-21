import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Panel, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

class AddTask extends React.Component{
    render(){
       return(
         <Panel header="Add Task">
            <Form inline>
              <FormGroup>
                <ControlLabel>Task Name</ControlLabel>
                {' '}
                <FormControl type="text" placeholder="Name your next task!"/>
              </FormGroup>
              <Button bsStyle="primary" bsSize="small">Add</Button>
            </Form>

         </Panel>
       );
    }
}

module.exports = AddTask;
