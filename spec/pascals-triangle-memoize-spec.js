var Memoize = require('../lib/pascals-triangle/pascals-triangle-memoize');

describe('Pascals Triangle Memoize', function () {

  beforeEach(function() {
    this.memoize = new Memoize;
  });

  describe('when n = 0', function() {

    it('should return an array containing 1', function() {
      var expectedResult = [1];
      var result = this.memoize.calculate(0);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('when n = 1', function() {

    it('should return an array containing 1', function() {
      var expectedResult = [1, 1];
      var result = this.memoize.calculate(1);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('with arbitrary values', function() {

    it('should return the correct array when n=5', function() {
      var expectedResult = [1, 5, 10, 10, 5, 1];
      var result = this.memoize.calculate(5);
      expect(result).toEqual(expectedResult);
    });

    it('should return the correct array when n=7', function() {
      var expectedResult = [1, 7, 21, 35, 35, 21 , 7, 1 ];
      var result = this.memoize.calculate(7);
      expect(result).toEqual(expectedResult);
    });

    it('should be able to calculate large numbers', function() {
      var result = this.memoize.calculate(56);
      expect(result instanceof Array).toBe(true);
      expect(result.length).toBe(57);
    });
  });

  describe('getValue', function() {

    it('should return a value at that key is there is one', function() {
      var result = this.memoize.calculate(3);
      expect(this.memoize.getValue(3)).toEqual(result);
    });

    it('should return false if that key/value pair does not exist', function() {
      expect(this.memoize.getValue(4)).toEqual(false);
    });
  });

  describe('setValue', function() {

    it('should set a key/value pair', function() {
      var rowValue = [1, 3, 3, 1];
      this.memoize.setValue(3, rowValue);
      expect(this.memoize.getValue(3)).toEqual(rowValue);
    });
  });

  describe('memoization', function() {

    it('should return the cached value if there is one', function() {
      this.memoize.setValue(3, [1, 3, 3, 1]);
      spyOn(this.memoize, 'setValue');
      this.memoize.calculate(3);
      expect(this.memoize.setValue).not.toHaveBeenCalled();
    });

    it('should add known values to the object', function() {
      spyOn(this.memoize, 'setValue');
      this.memoize.calculate(2);
      expect(this.memoize.setValue).toHaveBeenCalledWith(2, [1, 2, 1]);
    });
  });
});