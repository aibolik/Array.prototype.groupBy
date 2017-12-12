module.exports = function groupBy(f = val => val) {
    var result = {};
    for (var val of this) {
      if (result[f(val)]) {
        result[f(val)].push(val);
      } else {
        result[f(val)] = [val];
      }
    }
    return result;
}

// console.log([1,2,3,2,4,1,5,1,6].groupBy(val => val % 3));
// console.log([1,2,3,2,4,1,5,1,6].groupBy());
