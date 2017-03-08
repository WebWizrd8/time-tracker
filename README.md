# Time-Tracker
MERN - MEAN Tutorial

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
