let array = [];

let nbA = 0;
let nbB = 1;
let nbC = nbA + nbB;

array.push(nbA);
array.push(nbB);
array.push(nbC);

while (array[array.length-1] <= 100) {
  array.push(array[array.length-2] + array[array.length-1]);
  
}


console.log(array);
