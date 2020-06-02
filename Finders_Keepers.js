function findElement(arr, func) {
  let num = 0;
  while(arr[num] % 2 !== 0){
    num ++;
  }
  return arr[num];
}


findElement([1, 3, 5, , 9, ], num => num % 2 === 0);


