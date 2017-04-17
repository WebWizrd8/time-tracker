let mongojs = require('mongojs');


let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let server = require('../webapp');
let id;
chai.use(chaiHttp);
describe('Tasks', ()=> {
  describe('/GET task', ()=> {
    it('should GET all the tasks', (done) => {
      chai.request(server)
      .get('/api/tasks')
      .end((err, res) => {
        (err === null).should.be.true;
        should.exist(res);
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
    });
  });
  describe('/POST task', () => {
    it('should POST new task', (done) => {
      let task = {
        name : "new task"
      };
      chai.request(server)
      .post('/api/tasks')
      .send(task)
      .end((err, res) => {
        let p1 = new Promise((resolve, reject) => {
          if(err !== null){
            resolve(err);
          }
        });
        p1.then((err) => {
            console.log(err);
        });
        (err === null).should.be.true;
        should.exist(res);
        res.should.have.status(200);
        id = res.body._id;
        console.log(id);
        done();
      });

    });
    it('should not POST task without name', (done) => {
      let task = {
        name : ""
      };
      chai.request(server)
      .post('/api/tasks')
      .send(task)
      .end((err, res) => {
        (err === null).should.be.true;
        should.exist(res);
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        res.body.errors.should.be.a('string');
        done();
      });

    });
    it('should not POST task without group', (done) => {
      let task = {
        name : "bla",
        group : ""
      };
      chai.request(server)
      .post('/api/tasks')
      .send(task)
      .end((err, res) => {
        (err === null).should.be.true;
        should.exist(res);
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        res.body.errors.should.be.a('string');
        done();
      });

    });
    it('should not POST task with same name', (done) => {
      let task = {
        name : "new task"
      };
      chai.request(server)
      .post('/api/tasks')
      .send(task)
      .end((err, res) => {
        (err === null).should.be.true;
        should.exist(res);
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        res.body.errors.should.be.a('string');
        done();
      });
    });
  });
  describe('/DELETE task', () => {
    it('should DELETE added task', (done) => {
      chai.request(server)
      .delete('/api/tasks/'+id)
      .end((err, res) => {
        (err === null).should.be.true;
        should.exist(res);
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
    });
  });
});
