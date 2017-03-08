import React from 'react';
import ReactDOM from 'react-dom';
import AddTask from './components/AddTask.js'
import TaskTable from './components/TaskTable.js'

class Main extends React.Component{
    render(){
       return(
         <div>
            <AddTask/>
            <TaskTable/>
         </div>
       );
    }
}

ReactDOM.render(
    <Main/>,
    document.getElementById('main')
);
