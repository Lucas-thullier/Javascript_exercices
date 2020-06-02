function getIndexToIns(arr, num) {
  arr.sort(function(a,b){return a - b;});
  console.log(arr);
  return num;
}

getIndexToIns([1, 10, 5, 3, 20, 3], 5);