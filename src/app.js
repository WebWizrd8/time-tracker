var React = require('react');
//import ReactDOM from 'react-dom';
var ReactDOM = require('react-dom');

class Main extends React.Component{
    render(){
       return(
         <div>Welcome!</div>
       );
    }
}

ReactDOM.render(
    <Main/>,
    document.getElementById('main')
);
