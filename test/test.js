let mongojs = require('mongojs');


let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let server = require('../webapp');

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
        done();
      });

    });
  });
});
