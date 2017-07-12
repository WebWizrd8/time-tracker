# Time-Tracker
MERN Tutorial

## 1.0 Setting up
Create Time-Tracker folder for the application we are making.
I assume you have installed node.js.
Run command: `init npm`
Initialize npm in that folder. Set starting point to webapp.js. You can left other settings default.
Install Express framework, React,  with npm localy.
Create webapp.js file, and folder static with index.html page
Add some simple html to index.html.
In webapp.js set static folder as static.
Run server with command `node webapp.js` and open [localhost:3000](http://localhost:3000) in your browser.

## 1.1 Setting up React
Add div with id main to index.html. Create folder src with app.js.
Here will be our react code.
Install react-dom localy `npm install --save react-dom`
Use ReactDom.render to render some sample html code to main div.
Use gulp to create bundle task which will make static/bundle.js

##1.2 Making starting layout
Modularise React components. Make button add bug. Make table which loads from mongo. Use bootstrap-react.

##2.1
Install localy mongojs with npm. Make db on mlab. Use mongojs to connect to db.
Create get api with express.
