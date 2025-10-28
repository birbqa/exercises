
function sumArray(array) {
  let result = 0;
  let minNum = Infinity;
  let maxNum = 0;
  for(let i = 0; i <= array.length-1; i++) { //1
    result += array[i];
    if (array[i] <= minNum) {
      minNum = array[i];
    }
    if (array[i] >= maxNum) {
      maxNum = array[i];
    }
  }
  result -= minNum+maxNum;
 return result;
}

console.log(sumArray([1]));

