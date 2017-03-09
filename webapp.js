var express = require('express');
var app = express();
//mlab
var mongojs = require('mongojs');
var db = mongojs('mongodb://aleksa:aleksa@ds123410.mlab.com:23410/task-tracker-db');

app.use(express.static('static'));

//get json file from mlab
app.get('/api/tasks',function(req, res, err){
  db.tasks.find({}, function(err, doc){
    if(err){
      res.send(err);
    }
    res.json(doc);
  });
});

app.listen(3000, function(){
    console.log('server is running');
});
