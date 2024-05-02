const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return the sum of rounded numbers', function() {
      assert.equal(calculateNumber('SUM', 1, 3), 4);
      assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    });
  });

  describe('SUBTRACT', function() {
    it('should return the difference of rounded numbers', function() {
      assert.equal(calculateNumber('SUBTRACT', 5, 3), 2);
      assert.equal(calculateNumber('SUBTRACT', 5, 3.7), 1);
    });
  });

  describe('DIVIDE', function() {
    it('should return the division of rounded numbers', function() {
      assert.equal(calculateNumber('DIVIDE', 10, 5), 2);
      assert.equal(calculateNumber('DIVIDE', 10, 3), 3.3333333333333335);
    });

    it('should return "Error" when trying to divide by 0', function() {
      assert.equal(calculateNumber('DIVIDE', 10, 0), 'Error');
    });
  });
});

