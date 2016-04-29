var PascalTriangleRecursive = (function() {

  function PascalTriangleRecursive() {}

  PascalTriangleRecursive.prototype.calculate = function(n) {
    var currRow = [];
    var prevRow = [];

    if( n === 0 ) {
      return [1];
    }
    else if( n === 1 ) {
      return [1, 1];
    }
    currRow.push(1);
    prevRow = this.calculate(n - 1);
    for(var i = 1; i < prevRow.length; i++) {
      currRow[i] = prevRow[i-1] + prevRow[i];
    }
    currRow.push(1);

    return currRow;
  };

  return PascalTriangleRecursive;
})();

module.exports = PascalTriangleRecursive;