import React from 'react';
import ReactDOM from 'react-dom';
import {Table, Panel} from 'react-bootstrap';

class TaskTable extends React.Component{
    render(){
       return(
         <Panel>
            <Table striped condensed bordered>
              <thead>
                <tr>
                  <th>heder1</th>
                  <th>heder2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Data1
                  </td>
                  <td>
                    DAta2
                  </td>
                </tr>
              </tbody>
            </Table>
          </Panel>
       );
    }
}

module.exports = TaskTable;
