
exports.min = function min (array) {
  if (!Array.isArray(array) || array.length === 0) {
    return 0;
  }
  let result = array.sort((a, b) => a - b);
  return result[0];
}

exports.max = function max (array) {
  if (!Array.isArray(array) || array.length === 0) {
    return 0;
  }
  let result = array.sort((a, b) => a - b);
  return result[array.length - 1];
}

exports.avg = function avg (array) {
  if (!Array.isArray(array) || array.length === 0) {
    return 0;
  }
  let sum = 0;
  let sortedArr = array.sort((a, b) => a - b);
  for(let i = 0; i < sortedArr.length; i++){
    sum +=  sortedArr[i];
  }
  return sum/sortedArr.length;
}
