import {findMaxValue} from "../codewars/findMaxValue.js"

function sumArrayAlt(array) {
  let result = 0;

  for(let i = 0; i <= array.length-1; i++) { //1
    result += array[i];
  }
  result -= findMinValue(array)+findMaxValue(array);
  return result;
}

console.log(sumArrayAlt([1,1,2,3]));

function findMinValue(arr) {
  let minValue = Infinity;
  for (let a = 0; a<=arr.length-1; a++) {
    if (arr[a] < minValue)
      minValue = arr[a];
  }
  return minValue;
}

console.log(findMinValue([50, 60, 20, 10, 40]));


