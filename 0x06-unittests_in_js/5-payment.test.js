const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
  let consoleSpy;

  beforeEach(function() {
    // Set up console spy before each test
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore console spy after each test
    consoleSpy.restore();
  });

  it('should log the correct message when totalAmount is 100 and totalShipping is 20', function() {
    sendPaymentRequestToApi(100, 20);
    // Verify that the console is logging the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should log the correct message when totalAmount is 10 and totalShipping is 10', function() {
    sendPaymentRequestToApi(10, 10);
    // Verify that the console is logging the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
