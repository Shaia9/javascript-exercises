const array = [2, 5, 9];

console.log(array);

const index = array.indexOf(3);
if (index > -1) { // only splice array when item is found
  array.splice(index, 1); // 2nd parameter means remove one item only
}

// array = [2, 9]
console.log(array); 
function removeFromArray(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
  
  function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  }
  // Usage
  console.log(removeFromArray([2,5,9,1,5,8,5], 3));
  console.log(removeItemAll([2,5,9,1,5,8,5], 3));

// Do not edit below this line
module.exports = removeFromArray;
