function factorialize(num) {
  let arrayIntInfOrEqual = [];
  let i = 0;
  while (i <= num){
    arrayIntInfOrEqual[i] = i;
    i ++;
  }
  arrayIntInfOrEqual.splice(0,2) ;
  let sum = 1;
  for(let i=0; i<= arrayIntInfOrEqual.length; i++){
    if (arrayIntInfOrEqual[i] != null){
      sum *= (arrayIntInfOrEqual[i]);
    }
  }
 return console.log(sum);
}


factorialize(5);
