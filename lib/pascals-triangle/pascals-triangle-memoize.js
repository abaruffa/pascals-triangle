var PascalTriangleMemoize = (function() {

  function PascalTriangleMemoize() {
    this.memoizeObject = {};
  }

  PascalTriangleMemoize.prototype.getValue = function(key) {
    return this.memoizeObject[key] || false;
  };

  PascalTriangleMemoize.prototype.setValue= function(key, value) {
    this.memoizeObject[key] = value;
  };

  PascalTriangleMemoize.prototype.calculate = function(n) {
    var currRow = [];
    var prevRow = [];

    var previouslyCalculatedValue = this.getValue(n);
    if (previouslyCalculatedValue) {
      return previouslyCalculatedValue;
    }

    if( n === 0 ) {
      return [1];
    }
    if( n === 1 ) {
      return [1, 1];
    }
    currRow.push(1);
    prevRow = this.calculate(n - 1);
    for(var i = 1; i < prevRow.length; i++) {
      currRow[i] = prevRow[i-1] + prevRow[i];
    }
    currRow.push(1);
    this.setValue(n, currRow);
    return currRow;
  };

  return PascalTriangleMemoize;
})();

module.exports = PascalTriangleMemoize;