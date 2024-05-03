const request = require('request');
const expect = require('chai').expect;
const server = require('./api');

describe('Index Page', function() {
  after(function() {
    server.close();
  });

  it('should return status code 200', function(done) {
    request.get('http://localhost:7865/', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct result', function(done) {
    request.get('http://localhost:7865/', function(error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart Page', function() {
  after(function() {
    server.close();
  });

  it('should return status code 200 when :id is a number', function(done) {
    request.get('http://localhost:7865/cart/123', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return status code 404 when :id is NOT a number', function(done) {
    request.get('http://localhost:7865/cart/abc', function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

