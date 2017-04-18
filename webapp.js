var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//mlab
var mongojs = require('mongojs');
var db = mongojs('mongodb://aleksa:aleksa@ds123410.mlab.com:23410/task-tracker-db');

app.use(express.static('static'));
app.use(bodyParser.json());

//get json file from mlab
app.get('/api/tasks',function(req, res, err){
  db.tasks.find({}, function(err, doc){
    if(err){
      res.send(err);
    }
    res.json(doc);
  });
});

//add task api
app.post('/api/tasks', function(req, res, err){
  var newTask = req.body;
  if(newTask.name === "") return res.send({errors: "task doesn't have name"});
  else if(newTask.group === "") return res.send({errors: "task doesn't have group"});
  else{
    db.tasks.find({name: newTask.name}, function(err, doc){
      if(err){
        res.send(err);
      }
      else if(doc.length === 0){
        db.tasks.insert({name: newTask.name, done: "false"}, function(err, doc){
          if(err){
            res.send(err);
          }
          res.json(doc);
        });
      }
      else{
        res.send({errors: "this task already exists"});
      }
    });
  }
});

//delete task
app.delete('/api/tasks/:id', function(req, res, err){
  db.tasks.remove({_id: db.ObjectId(req.params.id)}, function(err, doc){
    if(err){
      res.send(err);
    }
    res.json(doc);
  });
});

//start server
app.listen(3000, function(){
    console.log('server is running on port 3000');
});

module.exports = app;
