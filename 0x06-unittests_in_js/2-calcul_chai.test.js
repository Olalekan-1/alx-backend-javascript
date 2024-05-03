const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  it('should return the correct sum when type is SUM', function() {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });

  it('should return the correct difference when type is SUBTRACT', function() {
    expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
    expect(calculateNumber('SUBTRACT', 5, 3.7)).to.equal(1);
  });

  it('should return the correct division result when type is DIVIDE', function() {
    expect(calculateNumber('DIVIDE', 10, 5)).to.equal(2);
    expect(calculateNumber('DIVIDE', 10, 3)).to.be.closeTo(3.3333333333333335, 0.000000000000001);
  });

  it('should return "Error" when trying to divide by 0', function() {
    expect(calculateNumber('DIVIDE', 10, 0)).to.equal('Error');
  });
});
