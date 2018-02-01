var chai = require('chai');
var expect = require('chai').expect;
var fs = require('fs');

chai.use(require('chai-http'));

var app = require('./server.js');

describe('API endpoint /', () => {

  // GET - root
  it('root should return status 200', () => {
    return chai.request(app)
      .get('/')
      .then((res) => {
        expect(res).to.have.status(200);
        });
  });
});

describe('API endpoint /api/phonenumbers/parse/text', () => {

// GET - number
it('should return [\'+1 416-491-5050\']', () => {
    return chai.request(app)
      .get('/api/phonenumbers/parse/text/Seneca%20Phone%20Number%3A%20416-491-5050')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array').that.include('+1 416-491-5050');
      });
  });



});


describe('API endpoint /api/phonenumbers/parse/file', () => {

  // POST - file
  it('should return [\'+1 647-550-8230\', \'+1 647-550-8231\', \'+1 647-550-8232\']', () => {
      return chai.request(app)
        .post('/api/phonenumbers/parse/file')
        .set('Content-Type', 'text/plain')
        .attach('file', fs.readFileSync('./phonenumbers.txt'), 'phonenumbers.txt')
        .then((res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array').that.include('+1 647-550-8233', '+1 647-550-8234', '+1 647-550-8235');
       });
     })
});