const request = require('supertest');
const expect= require('expect');
var app = require('./server').app;

describe('Server' , () => {

describe('#root' , () => {
it('should return hello world response', (done) =>{
  request(app)
   .get('/')
   .expect(404)
   .expect('Hello World!')
   .end(done);
});
});

describe('#user' , () => {
it('shold return array of users',(done) => {
  request(app)
  .get('/users')
  .expect(200)
  .expect((res) => {
    expect(res.body).toInclude({name:"Shubham",age:19});
  })
  .end(done);
});
});
});
