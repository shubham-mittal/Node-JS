const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
describe('#add', () => {
  it('Should add two numbers', ()=>{
    var res = utils.add(33,11);
    expect(res).toBe(44).toBeA('number');
  });

  it('should asynadd two nos', (done) => {
    utils.asyncAdd(4,3,(sum) => {
      expect(sum).toBe(7).toBeA('number')
      done();
    });
  });
});

describe('#square', () => {

  it('should async square no', (done) => {
    utils.asyncSquare(4,(square) => {
      expect(square).toBe(16).toBeA('number')
      done();
    });
  });

  it('Should square the number', () =>{
    var val = utils.square(4);
    expect(val).toBe(16).toBeA('number');
  });
});
});


it('Should set names', ()=>{
  var user = {
      location:"Delhi",
      age: 19
  };
  var fullName = "Shubham Mittal";
  var result = utils.setName(user, fullName);
  expect(result).toBeA('object').toInclude({
    firstName: "Shubham",
    lastName: "Mittal"
  })
});
