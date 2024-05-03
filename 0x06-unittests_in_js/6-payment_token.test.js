const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should return a successful response from the API when success is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done to indicate that the async operation has completed
      })
      .catch(error => {
        done(error); // Call done with error if the promise is rejected
      });
  });

  it('should throw an error when success is false', function(done) {
    getPaymentTokenFromAPI(false)
      .then(() => {
        done(new Error('Expected promise to be rejected')); // Indicate that the test should fail
      })
      .catch(error => {
        expect(error.message).to.equal('Failed to get payment token from API');
        done(); // Call done to indicate that the async operation has completed
      });
  });
});

