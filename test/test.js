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
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.lenght.should.be.eql(0);
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
      .post('api/tasks')
      .send(task)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });

    });
  });
});
